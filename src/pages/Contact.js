import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import Title from '../components/Title';
import img from "../sources/0-18.png"
import {motion} from "framer-motion"

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   setFormData({
    name: '',
    email: '',
    message: '',
   })
    // Here you can send the form data to your backend or perform any other actions
  };

  return (
    <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once: true }}
            transition={{ duration: 2,type:"spring"  }}
            >
    <form  onSubmit={handleSubmit}>
        <Title title="Contact" name="contact"></Title>
        <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row",padding:"0 6.4rem",gap:"2rem"}}}>
            <Box sx={{flexGrow:2,backgroundImage:`url(${img})`,backgroundPosition:"center",backgroundSize:"cover",height:{xs:"25rem",md:"auto"}}}></Box>
            <Box sx={{flexGrow:1,display:"flex",flexDirection:"column",gap:"2rem"}}>
      
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Message"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </Box>
        </Box>

    </form>
    </motion.div>
  );
};

export default ContactForm;
