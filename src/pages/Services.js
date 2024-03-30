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
<>
<motion.div
//  initial={even?{x:100,opacity:0}:{x:-100,opacity:0}}
initial={{x: 100,opacity:0}}
 whileInView={{ x: 0,opacity:1 }}
 viewport={{ once: true }}
 transition={{ duration: 2, delay:index/100,type:"spring"  }}
>
<Divider></Divider>

<Box sx={{padding:"4rem 0",backgroundPosition:"10vw",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:index%2===0? `linear-gradient(to right, rgba(0,0,0,1),rgba(0,0,0,0.1), rgba(0,0,0,0)), url(${images[randomIndex]})`:""}}>
<Typography variant='h4'gutterBottom >{item.name} <IconButton>
   <ArrowOutwardIcon sx={{fontSize:"2rem"}}></ArrowOutwardIcon>
</IconButton></Typography>
<Typography variant='h6' >Charge : {item.charge}</Typography>
<Typography variant='h6' sx={{fontWeight:"200"}} >{item.desc}</Typography>
</Box>


<Divider></Divider>
</motion.div>
</>
        )
    }):<Typography>Server Error</Typography>

    console.log(apiData)
  return (
    <motion.div>

    <Title title="Services" name="services"></Title>
    <Box sx={{margin:"0 6.4rem "}}>
    {displayServices}
    </Box>
    </motion.div>
  )
}

export default Services