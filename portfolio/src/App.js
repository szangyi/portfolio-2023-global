import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Project from './pages/projects/Project';
import { Box } from '@mui/material';
import BokehBackground from './components/BokehBackground/BokehBackground';


function App() {

    // const [bodyHasExplodedClass, setbodyHasExplodedClass] = useState(false);
    const [ActiveProject, setActiveProject] = useState(false);

    console.log(ActiveProject);

    function toggleProject(projectName) {

        setActiveProject(projectName)

        console.log('toggggii');
        console.log(ActiveProject);

        if (projectName !== false) {
            document.querySelector('body').classList.add('project-open')
        } else {
            document.querySelector('body').classList.remove('project-open')
        }

    }


    return (
        <>
            <Box id="root-layout" className={ActiveProject !== false ? 'project-open' : ''}>
                <BokehBackground numSpans={3} variant="light" width="200" />
                <Home toggleProject={toggleProject} />
                <Project projectName={ActiveProject} toggleProject={toggleProject} />
            </Box>
        </>
    )
}

export default App;
