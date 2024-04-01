import React, { useState, useEffect } from 'react';
import { Slider } from '@mui/material';

const ScrollSlider = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('target-section');
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionPosition < windowHeight * 0.75) {
          setShowSlider(true);
        } else {
          setShowSlider(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showSlider && (
        <div style={{ width: '80%', margin: '20px auto' }}>
          <Slider
            defaultValue={30}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
      )}
      <div id="target-section" style={{ height: '1000px' }}>
        {/* This is the section where the slider will appear when scrolled */}
      </div>
    </div>
  );
};

export default ScrollSlider;
