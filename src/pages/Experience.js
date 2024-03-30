import React, { useContext, useState, useEffect,useRef } from 'react';
import { Context } from '../context/ContextApi';
import { Stepper, Step, StepLabel, Typography, Box } from '@mui/material';
import Title from '../components/Title';
import {motion} from "framer-motion"


const Experience = () => {
    const { apiData } = useContext(Context);
    
    const [activeStep, setActiveStep] = useState(0);
    const stepperRef = useRef(null);
    let timeline;
    if(apiData){
      timeline = apiData.timeline;
  }
  
    

  
     useEffect(() => {
  if(timeline){
    const handleScroll = () => {
        
        const scrollPosition = window.scrollY + window.innerHeight;
        const stepperPosition = stepperRef.current.offsetTop+600;
  
        // Determine the active step based on the scroll position
        const newActiveStep = Math.floor((scrollPosition - stepperPosition) / (window.innerHeight / timeline.length));
  
        setActiveStep(newActiveStep);
      };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
  }
    
   
        
    }, [timeline])
console.log(activeStep)
    

    const displayExperience= !(timeline===undefined) ?timeline?.map((item,index)=>{
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

  return (
    <>
    <Title title="Experiences" name="experiences"></Title>
    <Box sx={{padding:"0 6.4rem "}}>
    <Stepper activeStep={activeStep} orientation="vertical" ref={stepperRef} >
    {displayExperience}
    </Stepper>
    </Box>
    </>
  );
};

export default Experience;
