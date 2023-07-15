import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Project from './pages/projects/Project';
import { Box } from '@mui/material';


function App() {

    // const [bodyHasExplodedClass, setbodyHasExplodedClass] = useState(false);
    const [ActiveProject, setActiveProject] = useState(false);

    console.log(ActiveProject);

    function toggleProject(projectName) {
        console.log('toggggii');

        setActiveProject(projectName)
        console.log(ActiveProject);
    }


    return (
        <>
            <Box id="root-layout" className={ActiveProject !== false ? 'project-open' : ''}>
                <Home toggleProject={toggleProject} />
                <Project projectName={ActiveProject} />
            </Box>
        </>
    )
}

export default App;
