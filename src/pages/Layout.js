import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import Skills from './Skills'
import Drawer from "../components/Drawer"
import Experience from "./Experience"
import Contact from './Contact'
import Project from './Project'
import Services from './Services'
import { Box } from '@mui/material'
import Profile from './Profile'
import FloatingText from '../components/FloatingText'
import CustomCursor from '../components/CustomCursor'
import Footer from '../components/Footer'
import Preloader from '../components/PreLoading'

function Layout() {
  
  return (

    <Box sx={{width:"100vw",overflowX:"hidden"}}>
     <Navbar></Navbar>
 <Home></Home>
 <FloatingText></FloatingText>
 <Profile></Profile>
 <Skills></Skills>
 <Drawer></Drawer>
 <Experience></Experience>
 <Project></Project>
 <Services></Services>
 <Contact></Contact>
 <CustomCursor></CustomCursor>
 <Footer></Footer>
 <Preloader></Preloader>
    </Box>

  )
}

export default Layout