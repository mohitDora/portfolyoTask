import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/ContextApi';
import Title from '../components/Title'
import { Box, Chip, Divider, Typography } from '@mui/material'
import "../components/project.css"
import {motion} from "framer-motion"

function Project() {
    const { apiData, setHovering } = useContext(Context);
    let projects;
    if (apiData) {
        projects = apiData.projects;
    }

    const [currProjectID, setCurrentProjectID] = useState(null);
    const [currProject, setCurrentProject] = useState(null);
    useEffect(() => {
        if (projects) {
            setCurrentProjectID(projects[0]._id)
        }
    },[projects])
    useEffect(() => {
        if (projects) {
            
        
        setCurrentProject(projects?.filter((item) => {
            if (item._id === currProjectID) {
                return item;
            }
        }))}
    }, [currProjectID])

  

    const displayProjects = !(projects === undefined) ? projects?.map((item, index) => {
        return (
            <motion.div
    initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration: 2,type:"spring"  }} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
    >
            <Box className="div-2" key={index} onClick={() => setCurrentProjectID(item._id)}><Typography variant='h6'>{item.title}</Typography></Box></motion.div>
        )
    }) : <Typography>Server Error</Typography>
    const singleProject = !(currProject === undefined) ? currProject?.map((item) => {
        return (
            <>
            <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration: 2,type:"spring"  }}
            >
                <Box sx={{with:"100%",aspectRatio:"1.77",backgroundImage:`url(${currProject[0].image.url})`,backgroundSize:"cover",margin:"1rem 0",borderRadius:"0.5rem",transition:'background-image 0.3s ease-in'}}></Box>
                <Typography variant='h2' gutterBottom>{currProject[0].title}</Typography>
                <Typography variant='h5' gutterBottom sx={{fontWeight:"200"}}>{currProject[0].description}</Typography>
                <Box sx={{display:"flex",gap:"1rem",alignItems:"center",margin:"2rem 0",flexWrap:"wrap"}}><Typography sx={{fontSize:"1.6rem"}}>Stack used : </Typography>
                {currProject[0].techStack?.map((item,index)=>{
                    return(
                        <Chip key={index} label={item} sx={{ fontSize: "1.6rem", padding: "1rem 2rem", color: "#93919A", ":hover": { backgroundColor: "white", color: "black" } }}></Chip>
                    )
                })}
                </Box>
                </motion.div>
            </>
        )
    }) : <Typography>Server Error</Typography>


    return (
        <>
            <Title title="Projects" name="projects"></Title>
            <Box sx={{ width: "100%", padding: "0 6.4rem", display: "flex", gap: "1rem", flxWrap: "wrap", flexDirection: { xs: "column", md: "row",height:"auto" } }}>
                <div classame='div-2' style={{ width: { xs: "100%", md: "50%" }, backgoundColor: "red",flexrow:"1", }}>
                    {singleProject}
                </div>
                <Divider ></Divider>
                <Box sx={{ width: { xs: "100%", md: "50vw" }, display: "flex", gap: "1rem", flexWrap: "wrap",height:{xs:"20rem",md:"auto"},overflowY:"scroll" }}>
                    {displayProjects}
                </Box>
            </Box>
        </>
    )
}

export default Project