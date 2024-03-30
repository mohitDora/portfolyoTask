import React, { useContext} from 'react';
import { Context } from '../context/ContextApi';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Link } from 'react-scroll';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';




function ResponsiveDrawer(props) {

  const { setOpen, open,setHovering } = useContext(Context);


  const drawer = (
    <div>
      <Toolbar />

      <List>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-150} // Adjust offset as needed
          duration={500} // Duration of the scroll animation
        >
          <Typography onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={()=>setOpen(false)} variant='h3' sx={{ fontFamily: "neue-regular", padding: "1.2rem 4rem" }}>About</Typography>
        </Link>
        
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-150} // Adjust offset as needed
          duration={500} // Duration of the scroll animation
        >
          <Typography onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={()=>setOpen(false)} variant='h3' sx={{ fontFamily: "neue-regular", padding: "1.2rem 4rem" }}>Skills</Typography>
        </Link>
        <Link
          activeClass="active"
          to="experiences"
          spy={true}
          smooth={true}
          offset={-150} // Adjust offset as needed
          duration={500} // Duration of the scroll animation
        >
          <Typography onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={()=>setOpen(false)} variant='h3' sx={{ fontFamily: "neue-regular", padding: "1.2rem 4rem" }}>Experiences</Typography>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-150} // Adjust offset as needed
          duration={500} // Duration of the scroll animation
        >
          <Typography onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={()=>setOpen(false)} variant='h3' sx={{ fontFamily: "neue-regular", padding: "1.2rem 4rem" }}>Projects</Typography>
        </Link>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-150} // Adjust offset as needed
          duration={500} // Duration of the scroll animation
        >
          <Typography onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={()=>setOpen(false)} variant='h3' sx={{ fontFamily: "neue-regular", padding: "1.2rem 4rem" }}>Services</Typography>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-150} // Adjust offset as needed
          duration={500} // Duration of the scroll animation
        >
          <Typography onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={()=>setOpen(false)} variant='h3' sx={{ fontFamily: "neue-regular", padding: "1.2rem 4rem" }}>Contact</Typography>
        </Link>
      </List>

    </div>
  );

  return (
    <>
      <div>
        <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
        <div className='div-2' style={{ background: '#2C293A', width: '100%',height:"100%" }}> {/* Change the background color here */}
        {drawer}
      </div>
          
        </Drawer>
      </div>

    </>
  );
}

export default ResponsiveDrawer;