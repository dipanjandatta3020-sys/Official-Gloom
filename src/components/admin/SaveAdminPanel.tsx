import React from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function SaveAdminPanel() {
  const { isAdmin, saveData, data, updateData, setIsAdmin } = useSiteData();

  const exitAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('gloom_admin_mode');
    document.body.classList.remove('admin-mode');
  };

  if (!isAdmin) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '40px',
      right: '40px',
      zIndex: 9999,
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      backgroundColor: '#1A1124',
      padding: '16px 24px',
      borderRadius: '100px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '16px' }}>
        <div style={{
          width: '8px', height: '8px', borderRadius: '50%',
          backgroundColor: data.isDraft ? '#F5A623' : '#4CD964'
        }} />
        <span style={{ color: 'white', fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 500 }}>
          {data.isDraft ? 'Draft Mode' : 'Live Mode'}
        </span>
      </div>

      <button
        onClick={() => updateData(['isDraft'], !data.isDraft)}
        style={{
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500
        }}
      >
        {data.isDraft ? 'Set to Live' : 'Set to Draft'}
      </button>

      <button
        onClick={saveData}
        style={{
          background: '#7B5CE5',
          border: 'none',
          color: 'white',
          padding: '8px 24px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(123, 92, 229, 0.4)'
        }}
      >
        Save Changes
      </button>

      <button
        onClick={exitAdmin}
        style={{
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#FF6B6B',
          padding: '8px 16px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500
        }}
      >
        Exit Admin
      </button>
    </div>
  );
}
