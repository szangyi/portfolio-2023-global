import "./Banner.css"

import { gsap } from "gsap";
import { React, useEffect } from "react";
import Typography from '@mui/material/Typography';
import BokehBackground from "../BokehBackground/BokehBackground";
import { Box } from "@mui/material";
import MyCustomButton from "../Button/MyCustomButton";


const Banner = (props) => {

    useEffect(() => {
        const intro = () => {
            const tl = gsap.timeline();
            tl.to(('#text-box-1'), {
                opacity: 0,
                duration: 2,
                delay: 0,
            });
            //...add animations here...
            return tl;
        };

        const middle = () => {
            const tl = gsap.timeline();
            tl.to(('#text-box-2'), {
                translateX: 0,
                duration: 2,
                delay: 0,
            });
            return tl;
        };

        const conclusion = () => {
            const tl = gsap.timeline();
            //...add animations here...
            return tl;
        };

        // stitch them together in a master timeline...
        const master = gsap.timeline();
        master
            .add(intro())
            .add(middle(), '-=1') //with a gap of 2 seconds
            .add(conclusion(), '-=1'); //overlap by 1 second

        return () => {
            master.kill();
        };
    }, []);


    return (
        <>
        <Box component="section" className="banner" sx={{ display: 'flex', alignItems: 'center' }}>

            <BokehBackground variant="light" />



            <Box className="text-container" sx={{ px: { xs: 2, lg: 10 }, py: { xs: 2, lg: 10 }, }}>

                <Box id="text-box-1" sx={{ width: { xs: '100%', lg: '60%' } }}>
                    <Typography variant="h1" className="font-thin">  Welcome to my world where</Typography>
                    <Typography variant="h1"> design meets code</Typography>

                </Box>

                <Box id="text-box-2" sx={{ width: { xs: '100%', lg: '60%' } }}>
                    <Typography variant="h1">web developer, nyunyi</Typography>

                    <Typography variant="h1" className="font-thin">call me whatever</Typography>

                    <MyCustomButton component="button" style="position: absolute; right: 0;" />

                </Box>


            </Box>

        </Box>
        </>
        )
}

export default Banner;


