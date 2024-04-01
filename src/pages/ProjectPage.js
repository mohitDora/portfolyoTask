import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/ContextApi';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Footer from '../components/Footer';
import {motion} from "framer-motion"

function Project2({ slice }) {
    const { apiData, setHovering, setCurrentProject, setModalOpen } = useContext(Context);
    const [value, setValue] = React.useState('All');
    let projects;
    const [filterData,setFilterData]=useState([]);
    const navigate=useNavigate();
useEffect(()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: adds smooth scrolling behavior
      });
},[])
    useEffect(()=>{
setFilterData(projects)
    },[projects])
 
    if (apiData) {
        projects = apiData.projects;
      
      
    }
    function clicked(id) {
        setCurrentProject(id);
        setModalOpen(true);
    }
    const uniqueNames=["All","Nextjs","Reactjs","Mern","CSS","TailwindCSS"]
     const unique=uniqueNames?.map((item,index)=>{
return(
    <Tab key={index} value={item} label={item} sx={{fontSize:"1.2rem",cursor:"none"}}/>
)
     }) 
useEffect(()=>{
    if(projects){
        const data=projects?.filter(obj =>
            obj.techStack.some(techStack => techStack.trim() === value.trim()));
        setFilterData(data.reverse());
    }
    
},[value])
  

    const displayProjects = !(projects === undefined) ? (value==="All"?projects:filterData)?.map((item, index) => {
        return (
            <Box sx={{width:{xs:"100%",md:"30%"}}} key={index} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
<motion.div
                initial={{ x: 100,opacity:0 }}
                whileInView={{ x: 0,opacity:1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay:index/100,type:"spring"  }}
                
                >
            <Box className="glass-3" key={index} onClick={() => clicked(item)}>
                <Box sx={{ backgroundImage: `url(${item.image.url})`, aspectRatio: '1.77', width: "100%", backgroundSize: "cover" }}></Box>
                <Typography sx={{ padding: "2rem" }} variant='h6'>{item.title}</Typography></Box></motion.div></Box>
        )
    }) : <Typography>Server Error</Typography>
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };console.log("proje",projects);
      console.log("p",filterData);
      console.log("p",value)
    return (
        <>
        <IconButton onClick={()=>navigate(-1)} sx={{position:"absolute",top:"10rem",left:"5rem"}}>
            <ArrowBackIosIcon></ArrowBackIosIcon>
        </IconButton>
            <Title title="Projects" name="projects"></Title>
      <Box sx={{display:"flex",justifyContent:"center",padding:'4rem'}}>
  
      <Tabs
        value={value}
        onChange={handleChange}
        onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
        aria-label="secondary tabs example"   variant="scrollable"
        scrollButtons="auto" sx={{marginBottom:"4rem"}}
      >
       
        {unique}
 
      </Tabs>

      </Box>
           
           
            
            <Box sx={{ display: "flex", rowGap: "4rem", flexWrap: "wrap", padding: "0 6.4rem" ,justifyContent:"space-between"}}>
                {displayProjects}
                
            </Box>
            <Footer></Footer>
           
        </>
    )
}

export default Project2