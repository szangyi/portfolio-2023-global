import * as React from 'react';
import './Home.css';

import { Box } from '@mui/material/';

import Banner from '../components/Banner/Banner';
import Skills from './Skills';
import Projects from './Projects';
import Footer from '../components/Footer/Footer';

function Home(props) {


    return (
        <>
            <Box component="main" sx={{ flexGrow: 1 }}  >
                <Banner component="header" />
                <Box component="section" className='core' sx={{ flexGrow: 1 }}  >
                    <Skills />
                    <Projects toggleProject={props.toggleProject} />
                    <Footer />
                </Box>
            </Box>
        </>
    );
}

export default Home;
