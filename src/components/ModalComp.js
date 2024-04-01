import React, { useContext, useState, useEffect, useRef } from 'react';
import { Context } from '../context/ContextApi';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    overflowY:"scroll",
    transform: 'translate(-50%, -50%)',
maxHeight:"90vh",
    padding: "4rem",
    bgcolor: 'background.paper',
border:"none",
    boxShadow: 24,
    p: "2rem",
};

export default function TransitionsModal() {
    const { modalOpen, setModalOpen, currProject } = useContext(Context);


    const handleClose = () => setModalOpen(false);


    return (
        <div>
             <Backdrop sx={{backgroundColor: 'rgba(0, 0, 0, 0.5)',backdropFilter: 'blur(5px)',}}  open={modalOpen} onClick={handleClose} />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={modalOpen}>
                    <Box sx={style}>
                        <Box sx={{width:"100%",display:"flex",alignItems:"flex-end"}}>
                        <IconButton onClick={()=>setModalOpen(false)}>
    <CloseIcon sx={{fontSize:"3rem"}}></CloseIcon>
</IconButton>
                        </Box>

                        <Box sx={{ width: {xs:"80vw",md:"60vw"}, aspectRatio: "1.77", backgroundImage: `url(${currProject?.image.url})`, backgroundSize: "cover", margin: "1rem 0", borderRadius: "0.5rem", transition: 'background-image 0.3s ease-in' }}></Box>
                        <Typography variant='h2' gutterBottom>{currProject?.title}</Typography>
                        <Typography variant='h5' gutterBottom sx={{ fontWeight: "200" }}>{currProject?.description}</Typography>
                        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center", margin: "2rem 0", flexWrap: "wrap" }}><Typography sx={{ fontSize: "1.6rem" }}>Stack used : </Typography>
                            {currProject?.techStack?.map((item, index) => {
                                return (
                                    <Chip key={index} label={item} sx={{ fontSize: "1.6rem", padding: "1rem 2rem", color: "#93919A", ":hover": { backgroundColor: "white", color: "black" } }}></Chip>
                                )
                            })}
                            
                           
                        </Box>
                        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center", margin: "2rem 0", flexWrap: "wrap" }}><Typography sx={{ fontSize: "1.6rem" }}>Links  : </Typography>
                        <IconButton>
                                <GitHubIcon></GitHubIcon>
                            </IconButton>
                            <IconButton>
                                <LinkIcon></LinkIcon>
                            </IconButton>
                           
                        </Box>
                        
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}