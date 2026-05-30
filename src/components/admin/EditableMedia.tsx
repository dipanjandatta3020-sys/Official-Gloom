import React, { useRef, useEffect } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

interface EditableMediaProps {
  path: string[];
  type: 'image' | 'video';
  className?: string;
  style?: React.CSSProperties;
}

export default function EditableMedia({ path, type, className, style }: EditableMediaProps) {
  const { data, isAdmin, updateData } = useSiteData();
  
  // Resolve value from path
  const url = path.reduce((acc, curr) => (acc as any)?.[curr], data) as string || '';

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newUrl = prompt(`Enter new ${type} URL (e.g., Cloudinary URL):`, url);
    if (newUrl && newUrl !== url) {
      updateData(path, newUrl);
    }
  };

  const MediaComponent = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      if (type === 'video' && videoRef.current) {
        videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
      }
    }, [url, type]);

    if (type === 'video') {
      return (
        <video
          ref={videoRef}
          src={url}
          autoPlay
          muted
          loop
          playsInline
          className={className}
          style={style}
        />
      );
    }
    return <img src={url} alt="" className={className} style={style} />;
  };

  if (isAdmin) {
    return (
      <div style={{ position: 'relative', display: 'inline-block', width: style?.width || '100%', height: style?.height || '100%' }}>
        <MediaComponent />
        
        <div style={{
          position: 'absolute',
          top: '12px', left: '12px',
          backgroundColor: 'rgba(255,255,255,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          borderRadius: '8px',
          padding: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <button
            onClick={handleEditClick}
            style={{
              padding: '8px 16px',
              backgroundColor: '#7B5CE5',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 600,
              fontSize: '12px'
            }}
          >
            ✏️ Edit {type === 'image' ? 'Image' : 'Video'}
          </button>
        </div>
      </div>
    );
  }

  return <MediaComponent />;
}
