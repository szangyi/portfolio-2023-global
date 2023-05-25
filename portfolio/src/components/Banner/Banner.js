import "./Banner.css"

import { gsap, Power1, TweenLite } from "gsap";
import { React, useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import BokehBackground from "../BokehBackground/BokehBackground";
import { Box } from "@mui/material";
import MyCustomButton from "../Button/MyCustomButton";
import AboutMe from "../../pages/AboutMe";


const Banner = (props) => {

    const [circleHasFullScreenClass, setCircleHasFullScreenClass] = useState(false);

    useEffect(() => {
        // console.clear();

        // setCircleHasFullScreenClass(circleHasFullScreenClass);

        var root = document.documentElement;
        var body = document.body;
        var page = document.querySelector(".page");
        var tile = document.querySelector(".tile");
        var triggerButton = document.querySelector(".triggerButton");

        triggerButton.addEventListener("click", function () {
            animateHero(tile, page);
            setCircleHasFullScreenClass(!circleHasFullScreenClass);
            body.classList.add('exploded')
        });


        function animateHero(fromHero, toHero) {

            var clone = fromHero.cloneNode(true);

            var from = calculatePosition(fromHero);
            var to = calculatePosition(toHero);

            TweenLite.set([fromHero, toHero], { visibility: "hidden" });
            TweenLite.set(clone, { position: "absolute", margin: 0 });

            body.appendChild(clone);

            var style = {
                x: to.left - from.left,
                y: to.top - from.top,
                width: to.width,
                height: to.height,
                autoRound: false,
                ease: Power1.easeOut,
                onComplete: onComplete
            };

            TweenLite.set(clone, from);
            TweenLite.to(clone, 0.3, style)

            function onComplete() {

                TweenLite.set(toHero, { visibility: "visible" });
                body.removeChild(clone);
            }
        }

        function calculatePosition(element) {

            var rect = element.getBoundingClientRect();

            var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
            var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

            var clientTop = root.clientTop || body.clientTop || 0;
            var clientLeft = root.clientLeft || body.clientLeft || 0;

            return {
                top: Math.round(rect.top + scrollTop - clientTop),
                left: Math.round(rect.left + scrollLeft - clientLeft),
                height: rect.height,
                width: rect.width,
            };
        }
    }, [])


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

                <div className="tile-container">
                    <div className="tile hero-1"></div>
                </div>

                <div className="page-container">
                    <div className="page hero-1">

                        {circleHasFullScreenClass ? <AboutMe /> : null}

                    </div>
                </div>

                <MyCustomButton component="button"customClass="triggerButton" circleHasFullScreenclassName={circleHasFullScreenClass}
                />


            </Box >
        </>
    )
}

export default Banner;


