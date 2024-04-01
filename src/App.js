import { ThemeProvider,createTheme } from '@mui/material';

import { deepPurple } from '@mui/material/colors';

import Layout from './pages/Layout';
import React, { useContext, useEffect } from 'react';
import { Context } from './context/ContextApi';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PageProgress from './components/PageProgress';
import ProjectPage from './pages/ProjectPage';
import CustomCursor from './components/CustomCursor';
import ModalComp from "./components/ModalComp"

function App() {
  const { setApidata,setError,setLoading } = useContext(Context);
  const theme=createTheme({
    typography: {
      fontFamily: [
        'Outfit, sans-serif',
        'neue-regular',
        'sans-serif', 
      ].join(','),
      
    },
palette:{
  text: {
    primary: '#rgba(255,255,255,0.8)',
 // Set your desired text color here
  },
  mode:"dark",
  primary:deepPurple
}
  });

  useEffect(() => {
    const fetchData = async () => {
      let storedData = getDataFromLocalStorage();
      if (!storedData) {
        storedData = await fetchDataFromApi();
        console.log("first time fetched")
      }
      setApidata(storedData);
      setLoading(false);
    };
  fetchData();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      
      const result = await response.json();
      localStorage.setItem('myData', JSON.stringify(result.user));
      return result.user
    } catch (error) {
      setError(error);
    } 
  };
  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}></Route>
        <Route path='/projects' element={<ProjectPage></ProjectPage>}></Route>
        
      </Routes>
      <PageProgress></PageProgress>
      <CustomCursor></CustomCursor>
      <ModalComp></ModalComp>
</BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
