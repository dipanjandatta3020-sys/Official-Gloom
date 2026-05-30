import React, { useState, useEffect, useRef } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

interface EditableTextProps {
  path: string[];
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function EditableText({ path, as: Component = 'span', className, style, children }: EditableTextProps) {
  const { data, isAdmin, updateData } = useSiteData();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  // Resolve value from path
  const value = path.reduce((acc, curr) => (acc as any)?.[curr], data) as string || '';

  const [localValue, setLocalValue] = useState(value);

  // Sync localValue if global data changes (e.g. discard changes or load from storage)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    setIsEditing(false);
    if (localValue !== value) {
      updateData(path, localValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === 'Escape') {
      setLocalValue(value);
      setIsEditing(false);
    }
  };

  if (isAdmin) {
    if (isEditing) {
      return (
        <textarea
          ref={inputRef}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className={className}
          style={{
            ...style,
            width: '100%',
            background: 'rgba(123, 92, 229, 0.1)',
            border: '1px dashed #7B5CE5',
            outline: 'none',
            resize: 'vertical',
            padding: '4px',
            borderRadius: '4px',
            color: style?.color || '#000',
            fontFamily: style?.fontFamily,
            fontSize: style?.fontSize,
            fontWeight: style?.fontWeight,
            lineHeight: style?.lineHeight,
            letterSpacing: style?.letterSpacing,
            textAlign: style?.textAlign as any,
          }}
        />
      );
    }

    return (
      <Component
        className={className}
        style={{
          ...style,
          cursor: 'text',
          borderBottom: '1px dashed rgba(123, 92, 229, 0.5)',
          position: 'relative',
          display: style?.display || 'inline-block'
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsEditing(true);
        }}
        title="Click to edit"
      >
        {children || value}
      </Component>
    );
  }

  // Normal mode
  return <Component className={className} style={style}>{children || value}</Component>;
}
