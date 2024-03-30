import React, { useContext, useState, useEffect, useRef } from 'react';
import { Context } from '../context/ContextApi';
import { Typography } from '@mui/material';

function FloatingText() {
    const { apiData, setHovering } = useContext(Context);
    let about;
    if (apiData) {
        about = apiData.about;
    }

    
    const [opacity, setOpacity] = useState(1);
    const [translateY, setTranslateY] = useState(0);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const { top } = profileRef.current.getBoundingClientRect();
            const newTranslateY = Math.max(0, -top+window.innerHeight/5);
            setTranslateY(newTranslateY);
            const newOpacity = 1 - (newTranslateY / profileRef.current.clientHeight);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} ref={profileRef} style={{padding:"0 6.4rem" ,marginTop:"16rem"}}>
                
                    <Typography sx={{ fontFamily: "neue-regular", fontSize: "10vw", transform: `translateY(-${translateY}px)`, opacity: opacity }}>{about?.quote} "</Typography>
                
            </div>
  )
}

export default FloatingText