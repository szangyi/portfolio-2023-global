import * as React from 'react';
import './App.css';

import { Box, Toolbar, Typography } from '@mui/material/';

import BokehBackground from './components/BokehBackground/BokehBackground'
import Banner from './components/Banner/Banner';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Nav from './components/Nav/Nav';
// import MeshGradient from './components/MeshGradient/MeshGradient';



function App() {

    return (
        <>

            <Banner component="header" />

            <Box component="main" sx={{ flexGrow: 1 }} >
                <Nav />
                <Skills />
            </Box>

        </>
    );
}

export default App;
