import React, { useContext } from 'react';
import { Context } from '../context/ContextApi';
import Title from '../components/Title'
import {motion} from "framer-motion"
import { Box, Chip, Typography } from '@mui/material';

function Skills() {
    const { apiData } = useContext(Context);
    let skills;
    if(apiData){
        skills = apiData.skills;
    }
    

    const displaySkills = !(skills===undefined) ? skills?.map((item, index) => {
        return (
            <motion.div
            initial={{ x: 100,opacity:0 }}
            whileInView={{ x: 0,opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay:index/100,type:"spring"  }}
            
            >
            <Chip key={index} label={item.name} sx={{ fontSize: "1.6rem", padding: "1rem 2rem", color: "#93919A", ":hover": { backgroundColor: "white", color: "black" } }}></Chip>
            </motion.div>
        )
    }) : <Typography>Server Error</Typography>
    return (
        <motion.div>
            <Title title="Skills" name="skills"></Title>
            
            <Box sx={{ padding: "0 6.4rem", display: "flex", gap: "1rem", flexWrap: "wrap",width:"100vw" }}>
                {displaySkills}
            </Box>
          
        </motion.div>
    )
}

export default Skills