import React, { useContext,useState,useEffect } from 'react';
import { Context } from '../context/ContextApi';
import Title from '../components/Title'
import {motion} from "framer-motion"
import { Avatar, Box, Chip, Slider, Typography } from '@mui/material';

function Skills() {
    const { apiData } = useContext(Context);
    let skills;
    if(apiData){
        skills = apiData.skills;
    }

 
    const sliderDisplay=!(skills===undefined)?skills?.map((item,index)=>{
       
       
      
        return(
            <motion.div
            initial={{ x: 100,opacity:0 }}
            whileInView={{ x: 0,opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay:index/100,type:"spring"  }}
            
            >
            <Box sx={{width:{xs:"35vw",md:"30rem"}}}>
                <Box sx={{display:'flex',alignContent:"center",gap:"2rem"}}>
                
                
            <Chip label={item.name} sx={{ fontSize: "1.6rem", padding: "1rem 2rem", color: "#93919A", ":hover": { backgroundColor: "white", color: "black" } }}></Chip>
            <Avatar src={item.image.url}></Avatar>
                </Box>
            
            <Box sx={{display:'flex',gap:"1rem",alignItems:"center",justifyContent:"space-between"}}>
                
            <Slider value={item.percentage} sx={{cursor:"none"}}></Slider>
            <Typography variant='subtitle' >{item.percentage}%</Typography>
            </Box>
            
            </Box></motion.div>
        )
    }): <Typography>Server Error</Typography>
    return (
        <>
        
        <motion.div>
            <Title title="Skills" name="skills"></Title>
            
            {/* <Box sx={{ padding: "0 6.4rem", display: "flex", gap: "1rem", flexWrap: "wrap",width:"100vw" }}>
                {displaySkills}
            </Box> */}
          
        </motion.div>
        <Box sx={{marginTop:"4rem", padding: "0 6.4rem",display:"flex",flexWrap:"wrap",gap:"2rem",justifyContent:"space-between"}}>
        {sliderDisplay}
        </Box>
        </>
    )
}

export default Skills