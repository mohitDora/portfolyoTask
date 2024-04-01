import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/ContextApi';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import {motion} from "framer-motion"


function Project2({ slice }) {
    const { apiData, setHovering, setCurrentProject, setModalOpen } = useContext(Context);
    let projects;
    const navigate=useNavigate();
    let slicedData;
    if (apiData) {
        projects = apiData.projects;
        slicedData = projects?.slice(0, slice);
    }
    function clicked(id) {
        setCurrentProject(id);
        setModalOpen(true);
    }


    const displayProjects = !(projects === undefined) ? slicedData?.map((item, index) => {
        return (
            <Box sx={{width:{xs:"100%",md:"30%"}}} key={index} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
<motion.div
                initial={{ x: 100,opacity:0 }}
                whileInView={{ x: 0,opacity:1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay:index/100,type:"spring"  }}
               style={{width:"100%"}} 
                >
            <Box className="glass-3" key={index} onClick={() => clicked(item)}>
                <Box sx={{ backgroundImage: `url(${item.image.url})`, aspectRatio: '1.77', width: "100%", backgroundSize: "cover" }}></Box>
                <Typography sx={{ padding: "2rem" }} variant='h6'>{item.title}</Typography>
                </Box></motion.div></Box>
        )
    }) : <Typography>Server Error</Typography>

    return (
        <>
            <Title title="Projects" name="projects"></Title>
            <Box sx={{ display: "flex", gap: "2rem", flexWrap: "wrap", padding: "0 6.4rem",justifyContent:"space-between" }}>
                {displayProjects}
                <Box sx={{width:{xs:"100%",md:"30%"}}}  onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
<motion.div
                initial={{ x: 100,opacity:0 }}
                whileInView={{ x: 0,opacity:1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay:0.06,type:"spring"  }}
               style={{width:"100%"}} 
                >
            <Box className="glass-3"  onClick={()=>navigate("/projects")}>
                <Box sx={{  aspectRatio: '1.77', width: "100%", backgroundSize: "cover" }}>


                </Box>
                <Typography sx={{ padding: "2rem" }} variant='h6'>View More</Typography>
                </Box></motion.div></Box>
           
            </Box>
            
        </>
    )
}

export default Project2