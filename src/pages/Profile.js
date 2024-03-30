import React, { useContext} from 'react';
import { Context } from '../context/ContextApi';
import Title from '../components/Title';
import { Typography, Box } from '@mui/material';

function Profile() {
    const { apiData } = useContext(Context);
    let about;
    if (apiData) {
        about = apiData.about;
    }
    

    return (
        <>
            <Title title="About" name="about"></Title>
            
            <Box sx={{padding:"0 4rem",display:"flex",flexDirection:{xs:"column",md:"row",rowGap:"1rem",columnGap:"4rem"}}}>
                <Box sx={{backgroundImage:`url(${about?.avatar.url})`,aspectRatio:"0.6",backgroundSize:"cover",flexGrow:1,borderRadius:"0.5rem",marginBottom:"2rem"}}></Box>
                <Box sx={{flexGrow:"2",width:{xs:"100%",md:"20%"}}}>
                    <Typography variant='h2' gutterBottom sx={{fontWeight:"600"}}>{about?.name}</Typography>
                    <Typography variant='h4'>{about?.title}</Typography>
                    <Typography gutterBottom variant='h6' sx={{fontWeight:"200"}}>{about?.description}</Typography>
                    <Typography variant='h6' sx={{fontWeight:"200"}}>{about?.address}</Typography>
                </Box>
            </Box>
         
        </>
    )
}

export default Profile;
