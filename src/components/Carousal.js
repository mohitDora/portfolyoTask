import React, { useContext, useState, useEffect,useRef } from 'react';
import { Context } from '../context/ContextApi';
import { Carousel } from 'antd';
import { Avatar, Box, Typography } from '@mui/material';
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
    <Avatar sx={{width: "5rem", height: "5rem",margin:"2rem 0"}} src={item.image.url}></Avatar>
    <Typography  variant='h4' gutterBottom sx={{fontWeight:"200"}}>{msg}</Typography>
   
    <Typography variant='subtitle' sx={{fontSize:"2.4rem",marginTop:"2rem"}} gutterBottom>{item.name} </Typography>
    <Typography variant="h6" sx={{fontWeight:"200",fontSize:"1.6rem"}}>{item.position}</Typography>
    
    
  </div>
)
  }):<Typography>Server Error</Typography>
  return(

  <>
  <Title title="Testimonials"></Title>
  <Box sx={{padding:"0 6.4rem",width:{xs:"100vw",md:"60vw",margin:"auto"}}}>
  <Carousel autoplay sx={{width:"100%",margin:"auto"}}>
    {displaytestimonials}
  </Carousel>
  </Box>
  
  </>
)};
export default Carousal;