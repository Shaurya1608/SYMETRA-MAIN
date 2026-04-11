import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function TypewriterText({ words = ["EXCELLENCE", "PRECISION", "PERFORMANCE"], typingSpeed = 100, erasingSpeed = 50, pauseTime = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const word = words[currentWordIndex];

    if (isDeleting) {
      // Erasing logic
      timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
      }, erasingSpeed);
    } else {
      // Typing logic
      timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Handle state transitions
    if (!isDeleting && currentText === word) {
      // Finished typing, wait then start deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, erasingSpeed, pauseTime]);

  return (
    <div className="relative inline-flex items-center">
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block w-[4px] h-[0.8em] bg-current"
        aria-hidden="true"
      />
    </div>
  );
}
