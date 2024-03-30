import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Typography variant='h5' sx={{zIndex:"9"}}>
      {displayedText}
    </Typography>
  );
};

export default TypingText;
