import React, { useContext, useState, useEffect,useRef } from 'react';
import { Context } from '../context/ContextApi';
import { Carousel } from 'antd';
import { Box, Typography } from '@mui/material';
import Title from './Title';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carousal = () => {

  const { apiData } = useContext(Context);

  let testimonials;
    if(apiData){
      testimonials = apiData.testimonials;
  }


  const displaytestimonials=!(testimonials===undefined)?testimonials?.map((item,index)=>{
    const msg=`${item.review}`
return(
  <div className="glass-2" key={index} style={{display:"flex",gap:"2rem"}}>
    
    <Typography  variant='h4' gutterBottom sx={{fontWeight:"200",'::first-letter': { fontSize:"4rem" }}}>{msg}</Typography>
   
    <Typography variant='subtitle' sx={{fontSize:"2rem",marginTop:"2rem"}} gutterBottom>{item.name} </Typography>
    <Typography variant="h6" sx={{fontWeight:"200"}}>{item.position}</Typography>
    
    
  </div>
)
  }):<Typography>Server Error</Typography>
  return(

  <>
  <Title title="Testimonials"></Title>
  <Box sx={{padding:"0 6.4rem"}}>
  <Carousel autoplay style={{width:"60vw",margin:"auto"}}>
    {displaytestimonials}
  </Carousel>
  </Box>
  
  </>
)};
export default Carousal;