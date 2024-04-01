import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';
import { Context } from '../context/ContextApi';

import { Typography, Box } from '@mui/material';
import Title from '../components/Title';
import {motion} from "framer-motion"
const { Meta } = Card;
const Services2 = () => {
    const { apiData } = useContext(Context);
    let services;

    if (apiData) {
        services = apiData.services;
    }
    const displayServices = !(services === undefined) ? services?.map((item,index) => {
        return (
           
<Box sx={{width:{xs:"100%",md:"40%"}}}>
<motion.div
className='div-2'
initial={{x: 100,opacity:0}}
 whileInView={{ x: 0,opacity:1 }}
 viewport={{ once: true }}
 transition={{ duration: 2, delay:index/100,type:"spring"  }}
>

<Box sx={{display:"flex",columnGap:'2rem',justifyContent:"space-between"}}>
    <Box sx={{width:'20rem',aspectRatio:"1",backgroundImage:`url(${item.image.url})`,backgroundSize:"cover",backgroundPosition:'center'}}></Box>
    <Box sx={{display:"flex",flexDirection:'column',widh:'80vw'}}>
    <Typography variant='h3' gutterBottom>{item.name}</Typography>
    <Typography variant='h6'>{item.charge}</Typography>
    <Typography variant='h6'sx={{fontWeight:'200'}}>{item.desc}</Typography>
    </Box>
    
</Box>

</motion.div>
            </Box>
           
        )
    }) : <Typography>Server Error</Typography>
    return (
        <>
        <Title title="Services" name="services"></Title>
        <Box sx={{ margin: "0 6.4rem ", display: 'flex', gap: "2rem", flexWrap: "wrap",justifyContent:"space-between" }}>
            {displayServices}
        </Box>
        </>
    )
};
export default Services2;