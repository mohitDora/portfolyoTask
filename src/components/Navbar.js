import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/ContextApi';
import './navbar.css';
import { IconButton, Typography,Box } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';

function Navbar() {

    const { setOpen,setHovering } = useContext(Context);
    const [scrolled, setScrolled] = useState(false);
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Optional: adds smooth scrolling behavior
        });
      };
    useEffect(() => {
        const handleScroll = () => {
            // Check the scroll position
            if (window.scrollY > 200) { // Adjust 200 to your desired scroll position
                setScrolled(true); // Set scrolled state to true when scroll position is greater than 200px
            } else {
                setScrolled(false); // Set scrolled state to false when scroll position is less than or equal to 200px
            }
        };

        window.addEventListener('scroll', handleScroll); // Add scroll event listener

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup by removing scroll event listener
        };
    }, []);
    return (

        <div style={{width: "100vw", display: 'flex', justifyContent: 'center', alignItems: "center",padding:"4rem 4rem", position: "fixed",zIndex:999}}>
            <Box className={`${scrolled ? 'navbar glass' : 'navbar'}`} sx={{width:{xs:"90vw",md:"80vw"}}}>
                
                <Typography onClick={()=>handleScrollToTop()} variant='h4' sx={{ fontFamily: "neue-regular" }} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>John Doe</Typography>
                <IconButton onClick={() => setOpen(true)}>
                    <DragHandleIcon sx={{ fontSize: "3.2rem" }}></DragHandleIcon>
                </IconButton>
            </Box>
        </div>


    );
}

export default Navbar;
