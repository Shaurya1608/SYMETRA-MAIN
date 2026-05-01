import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@react-three/drei';



const VideoBackground = ({ onFinished }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.error("Autoplay blocked or failed", e));
    }
  }, []);

  return (
    <video 
      ref={videoRef}
      muted 
      playsInline
      onEnded={onFinished}
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none transform-gpu"
      style={{ willChange: 'transform, opacity' }}
    >
      <source src="/Riboo LOGO/03.mp4" type="video/mp4" />
    </video>
  );
};

export const LoadingScreen = ({ onFinished }) => {
  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Video - Ref-based to bypass React entirely */}
      <VideoBackground onFinished={onFinished} />

    </div>
  );
};
