import * as React from 'react';
import { useState } from 'react';
import './Home.css';

import { Box } from '@mui/material/';
import { motion } from "framer-motion";

import BokehBackground from '../components/BokehBackground/BokehBackground';
import Banner from '../components/Banner/Banner';
import Skills from './Skills';
import Projects from './Projects';
import Project from './projects/Project';

function Home(props) {


    return (
        <>
            <Box component="main" sx={{ flexGrow: 1 }}  >
                <BokehBackground numSpans={3} variant="light" />
                <Banner component="header" />
                {/* <Nav /> */}

                <Box component="section" className='core' sx={{ flexGrow: 1 }}  >
                    <Skills />
                    <Projects toggleProject={props.toggleProject} />
                </Box>
                {/* <Project projectName={ActiveProject} /> */}
            </Box>
        </>
    );
}

export default Home;
