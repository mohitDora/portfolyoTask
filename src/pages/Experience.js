import React, { useContext, useState, useEffect,useRef } from 'react';
import { Context } from '../context/ContextApi';
import { Stepper, Step, StepLabel, Typography, Box } from '@mui/material';
import Title from '../components/Title';
import {motion} from "framer-motion"


const Experience = () => {
    const { apiData } = useContext(Context);
    
    let timeline;
    if(apiData){
      timeline = apiData.timeline;
  }
  const forEduc= !(timeline===undefined) ?timeline?.map((item,index)=>{
    if(item.forEducation)
    return(
      <motion.div
                initial={{ x: 100,opacity:0 }}
                whileInView={{ x: 0,opacity:1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay:index/100,type:"spring"  }}
                
                >
        <Step key={index}>
                <StepLabel>
                  <Typography gutterBottom variant="h3">{item.company_name}</Typography>
                  <Box sx={{display:"flex",justifyContent:"space-between"}}>
                  <Typography gutterBottom variant="h5">{item.jobTitle}</Typography>
                  <Typography gutterBottom variant="h5">{item.startDate.slice(0, 10)} - {item.endDate.slice(0, 10)}</Typography>
    
                  </Box>
                  
                  {item.bulletPoints.map((item,index)=>{
                    return(
                        <Typography gutterBottom key={index} variant='h6' sx={{fontWeight:"200"}}>{item}</Typography>
                    )
                  })}
                 
                </StepLabel>
              </Step></motion.div>
    )
        }):<Typography>Server Error</Typography>

    const displayExperience= !(timeline===undefined) ?timeline?.map((item,index)=>{
      if(!item.forEducation)
return(
  <motion.div
            initial={{ x: 100,opacity:0 }}
            whileInView={{ x: 0,opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay:index/100,type:"spring"  }}
            key={index}
            >
    <Step >
            <StepLabel>
              <Typography gutterBottom variant="h3">{item.company_name}</Typography>
              <Box sx={{display:"flex",justifyContent:"space-between"}}>
              <Typography gutterBottom variant="h5">{item.jobTitle}</Typography>
              <Typography gutterBottom variant="h5">{item.startDate.slice(0, 10)} - {item.endDate.slice(0, 10)}</Typography>

              </Box>
              
              {item.bulletPoints.map((item,index)=>{
                return(
                    <Typography gutterBottom key={index} variant='h6' sx={{fontWeight:"200"}}>{item}</Typography>
                )
              })}
             
            </StepLabel>
          </Step></motion.div>
)
    }):<Typography>Server Error</Typography>

  return (
    <>
    <Title title="Timeline" name="experience"></Title>
    <Box sx={{padding:"0 6.4rem ",display:"flex",flexDirection:{xs:'column',md:'row'},justifyContent:"space-between"}}>
    <Stepper orientation="vertical" >
    <motion.div
            initial={{ x: 100,opacity:0 }}
            whileInView={{ x: 0,opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, type:"spring"  }}
            
            >
      <Typography  sx={{fontSize:"4rem",letterSpacing:'1rem',fontWeight:"200",marginTop:"2rem"}} gutterBottom>Experience</Typography>
      </motion.div>
    {displayExperience}
    </Stepper>
    <Stepper orientation="vertical" >
    <motion.div
            initial={{ x: 100,opacity:0 }}
            whileInView={{ x: 0,opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, type:"spring"  }}
            
            >
      <Typography  sx={{fontSize:"4rem",letterSpacing:'1rem',fontWeight:"200",marginTop:"2rem"}} gutterBottom>Education</Typography>
      </motion.div>
    {forEduc}
    </Stepper>
    </Box>
    </>
  );
};

export default Experience;
