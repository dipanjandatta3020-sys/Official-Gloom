import React, { useRef, useEffect, useCallback } from 'react';

interface ChromaKeyVideoProps {
  src: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function ChromaKeyVideo({ src, style, className }: ChromaKeyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  const processFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.paused || video.ended) {
      rafRef.current = requestAnimationFrame(processFrame);
      return;
    }

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Match canvas size to video
    if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Chroma key: remove green screen pixels
      if (g > 80 && g > r * 1.3 && g > b * 1.3) {
        data[i + 3] = 0; // Set alpha to 0 (transparent)
      }
    }

    ctx.putImageData(imageData, 0, 0);
    rafRef.current = requestAnimationFrame(processFrame);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      rafRef.current = requestAnimationFrame(processFrame);
    };

    video.addEventListener('play', handlePlay);
    // Try to autoplay
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('play', handlePlay);
      cancelAnimationFrame(rafRef.current);
    };
  }, [src, processFrame]);

  return (
    <div style={{ position: 'relative', ...style }} className={className}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        crossOrigin="anonymous"
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
}
