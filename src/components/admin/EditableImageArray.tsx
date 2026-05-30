import React from 'react';
import { useSiteData } from '../../context/SiteDataContext';

interface EditableImageArrayProps {
  path: string[];
  images: string[];
  children: React.ReactNode;
}

export default function EditableImageArray({ path, images, children }: EditableImageArrayProps) {
  const { isAdmin, updateData } = useSiteData();

  const handleEditClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const currentUrl = images[index] || '';
    const newUrl = prompt(`Enter new URL for Image ${index + 1}:`, currentUrl);
    if (newUrl !== null && newUrl !== currentUrl) {
      const newImages = [...images];
      newImages[index] = newUrl;
      updateData(path, newImages);
    }
  };

  if (isAdmin) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {children}
        
        <div style={{
          position: 'absolute',
          top: '12px', left: '12px',
          backgroundColor: 'rgba(255,255,255,0.95)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          zIndex: 20,
          borderRadius: '8px',
          padding: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }} onClick={e => e.stopPropagation()}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px', color: '#333' }}>
            ✏️ Edit Slideshow (3 images)
          </div>
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={(e) => handleEditClick(i, e)}
              style={{
                padding: '4px 8px',
                backgroundColor: '#7B5CE5',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                textAlign: 'left'
              }}
            >
              Set Image {i + 1} URL
            </button>
          ))}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
