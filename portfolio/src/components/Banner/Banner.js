import "./Banner.css"

import { gsap } from "gsap";
import { React, useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import BokehBackground from "../BokehBackground/BokehBackground";
import { Box } from "@mui/material";
import MyCustomButton from "../Button/MyCustomButton";


const Banner = (props) => {

    const [circleHasFullScreenClass, setCircleHasFullScreenClass] = useState(false);


    const buttonExplode = (e) => {

        //Setup
        var $fsm = document.querySelector('.fsm');
        $fsm.style.position = "absolute";

        var position = {};
        var size = {};

        //modal action stuffs
        var openFSM = function (event) {

            setCircleHasFullScreenClass(!circleHasFullScreenClass);


            var $this = event.currentTarget;
            position = $this.getBoundingClientRect();
            size = {
                width: window.getComputedStyle($this).width,
                height: window.getComputedStyle($this).height
            }

            $fsm.style.position = "absolute";
            $fsm.style.top = position.top + 'px';
            $fsm.style.left = position.left + 'px';
            $fsm.querySelector('.circle').style.height = size.height;
            $fsm.querySelector('.circle').style.width = size.width;
            $fsm.style.margin = $this.style.margin;

            setTimeout(function () {
                $fsm.innerHTML = $this.innerHTML;
                var classes = $this.classList.value.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    $fsm.classList.add(classes[i]);
                }
                $fsm.classList.add('growing');
                $fsm.querySelector('.circle').style.height = '100vh';
                $fsm.querySelector('.circle').style.width = '100vw';
                $fsm.style.top = '0';
                $fsm.style.left = '0';
                $fsm.style.margin = '0';
            }, 1);

            setTimeout(function () {
                $fsm.classList.remove('growing');
                $fsm.classList.add('full-screen');
            }, 1000);
        };

        $fsm.addEventListener("click", openFSM);

    };


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

                <BokehBackground numSpans={9} variant="light" />

                <Box className="text-container" sx={{ px: { xs: 2, lg: 10 }, py: { xs: 2, lg: 10 }, }}>

                    {/* <Box id="text-box-1" sx={{ width: { xs: '100%', lg: '60%' } }}>
                        <Typography variant="h1" className="font-thin">  Welcome to my world where</Typography>
                        <Typography variant="h1"> design meets code</Typography>
                    </Box> */}

                    <Box id="text-box-2">
                        <Box sx={{ width: { xs: '100%', lg: '80%' } }}>
                            <Typography variant="h1">web developer, nyunyi</Typography>
                            <Typography variant="h1" className="font-thin">call me whatever</Typography>
                        </Box>
                    </Box>


                </Box>

                <MyCustomButton component="button" customClass={'fsm'} action={buttonExplode} circleHasFullScreenClass={circleHasFullScreenClass}
                />


            </Box>
        </>
    )
}

export default Banner;


