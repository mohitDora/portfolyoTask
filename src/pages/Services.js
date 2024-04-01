import React, { useContext } from 'react';
import { Context } from '../context/ContextApi';
import { Divider, Typography,Box, IconButton } from '@mui/material';
import Title from '../components/Title';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import img1 from "../sources/0-14.png"
import img2 from "../sources/0-15.png"
import img3 from "../sources/0-18.png"
import {motion} from "framer-motion"

function Services() {
    const { apiData } = useContext(Context);
    let services;
    const images = [img1, img2, img3];
    if(apiData){
        services = apiData.services;
  }
    const displayServices=!(services===undefined)?services?.map((item,index)=>{
        
        const randomIndex = Math.floor(Math.random() * images.length);
        return(
<Box sx={{width:{xs:"100%",md:"48%"}}}>
<motion.div key={index}
initial={{x: 100,opacity:0}}
 whileInView={{ x: 0,opacity:1 }}
 viewport={{ once: true }}
 transition={{ duration: 2, delay:index/100,type:"spring"  }}
>


<Box sx={{padding:"4rem 0",backgroundPosition:"10vw",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage: `linear-gradient(to right, rgba(0,0,0,1),rgba(0,0,0,0.1), rgba(0,0,0,0)), url(${item.image.url})`}}>
<Typography variant='h4'gutterBottom >{item.name} <IconButton>
   <ArrowOutwardIcon sx={{fontSize:"2rem"}}></ArrowOutwardIcon>
</IconButton></Typography>
<Typography variant='h6' >Charge : {item.charge}</Typography>
<Typography variant='h6' sx={{fontWeight:"200"}} >{item.desc}</Typography>
</Box>


</motion.div>
</Box>
        )
    }):<Typography>Server Error</Typography>

    console.log(apiData)
  return (
    <>

    <Title title="Services" name="services"></Title>
    <Box sx={{margin:"0 6.4rem ",display:'flex',gap:"2rem",flexWrap:"wrap",justifyContent:"space-between"}}>
    {displayServices}
    </Box>
    </>
  )
}

export default Services