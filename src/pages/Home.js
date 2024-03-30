import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react';
import { Context } from '../context/ContextApi';
import TypingText from '../components/TypingText'
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
import { motion } from "framer-motion"

function Home() {

  const { setHovering } = useContext(Context);
  const variants = {
    up: { y: 0 },
    down: { y: 20 },
  };
  return (

    <div style={{ width: "100vw", height: "100vh", backgroundPosition: "center", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', animation: "anim 10s infinite linear", backgroundAttachment: "fixed" }}>
      <Box onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} sx={{ width: "100vw", height: "100vh", position: "absolute", backgroundImage: "linear-gradient(to top,#040014, rgba(0,0,0,0.1), rgba(0,0,0,0))" }}></Box>

      <Typography variant='h1' sx={{ fontWeight: '600', fontFamily: "neue-regular", margnBottom: '2rem', color: "white",zIndex:"9" }} gutterBottom >John Doe</Typography>
      <Typography variant='h3' sx={{zIndex:"9"}} gutterBottom>Software Developer</Typography>
      <TypingText text="I develop 3D visuals, user interfaces and web applications" speed={150} repeatDelay={2000}></TypingText>
      <motion.div initial="down"
        animate="up"
        variants={variants}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", type: "tween" }} style={{ position: "absolute", bottom: "5rem" }}>
        <KeyboardDoubleArrowDownSharpIcon sx={{ fontSize: "2rem" }}></KeyboardDoubleArrowDownSharpIcon>
      </motion.div>
    </div>


  )
}

export default Home