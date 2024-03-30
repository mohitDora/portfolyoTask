import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/ContextApi';
import { CircularProgress } from '@mui/material';
 // Import CSS file for styling

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { loading } = useContext(Context);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout as needed

    // Clean up timer on unmount or when isLoading becomes false
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loading || isLoading ? 'show' : 'hide'}`}>
      <CircularProgress />
    </div>
  );
};

export default Preloader;
