import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/ContextApi';
import './customCursor.css'; // Import CSS file for styling

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { hovering } = useContext(Context);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);


    return (
        <div className="custom-cursor" style={{ left: position.x, top: position.y}}>
           <div className={`cursor-circle ${hovering ? 'hover' : ''}`}></div>
        </div>
    );
};

export default CustomCursor;
