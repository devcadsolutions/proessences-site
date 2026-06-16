import React, { useState, useEffect } from 'react';

interface VideoThumbnailImageProps {
  src: string;
  videoUrl?: string;
  alt: string;
  className?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  loading?: 'lazy' | 'eager';
}

export default function VideoThumbnailImage({ 
  src, 
  videoUrl, 
  alt, 
  className, 
  referrerPolicy, 
  loading 
}: VideoThumbnailImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    if (!videoUrl) {
      setImgSrc(src);
      return;
    }

    // Try to get cached thumbnail from localStorage to prevent duplicate heavy processing
    const cacheKey = `v_thumb_${videoUrl}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      setImgSrc(cached);
      return;
    }

    // Setup an off-screen video to extract a high-quality team photo/snapshot frame
    const video = document.createElement('video');
    video.src = videoUrl;
    video.crossOrigin = 'anonymous';
    // Let's preload fully for drawing capabilities
    video.preload = 'auto';
    // Seek to 0.5s or 1.0s to skip any black startup frame and capture the starting group team photo/logo
    video.currentTime = 0.5;

    const handleCanPlay = () => {
      try {
        const canvas = document.createElement('canvas');
        // Good resolution for clear team view thumbnails
        canvas.width = 960;
        canvas.height = 540;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
          setImgSrc(dataUrl);
          localStorage.setItem(cacheKey, dataUrl);
        }
      } catch (err) {
        console.warn('Silent live video snapshot extraction skipped:', err);
      } finally {
        video.removeEventListener('canplay', handleCanPlay);
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [src, videoUrl]);

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className} 
      referrerPolicy={referrerPolicy}
      loading={loading}
    />
  );
}
