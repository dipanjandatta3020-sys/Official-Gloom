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
  const lastFrameRef = useRef<number>(0);

  const processFrame = useCallback((timestamp: number) => {
    if (timestamp - lastFrameRef.current < 33) {
      rafRef.current = requestAnimationFrame(processFrame);
      return;
    }
    lastFrameRef.current = timestamp;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    // If we don't have video/canvas or video is paused/ended, just loop and wait
    if (!video || !canvas || video.paused || video.ended) {
      rafRef.current = requestAnimationFrame(processFrame);
      return;
    }

    // Wait until video has actual dimensions
    if (video.videoWidth === 0 || video.videoHeight === 0) {
      rafRef.current = requestAnimationFrame(processFrame);
      return;
    }

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Match canvas size to video
    const w = Math.floor(video.videoWidth / 2);
    const h = Math.floor(video.videoHeight / 2);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    ctx.drawImage(video, 0, 0, w, h);
    const imageData = ctx.getImageData(0, 0, w, h);
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
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(processFrame);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('playing', handlePlay);
    
    // Try to autoplay
    video.play().catch(() => {});

    // If it's already playing somehow, start the loop
    if (!video.paused) {
      handlePlay();
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('playing', handlePlay);
      cancelAnimationFrame(rafRef.current);
    };
  }, [src, processFrame]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }} className={className}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        style={{ 
          position: 'absolute', 
          opacity: 0, 
          pointerEvents: 'none', 
          width: '10px', 
          height: '10px',
          zIndex: -1
        }}
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
