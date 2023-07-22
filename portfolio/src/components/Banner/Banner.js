import "./Banner.css"

import { gsap, Power4, TweenLite } from "gsap";
import { React, useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
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
                ease: Power4.easeOut,
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
            console.log('intro')
            const tl = gsap.timeline({
                defaults: { duration: 1.5, translateX: 0, ease: Power4.easeOut, opacity: 1 }
            });

            tl.to(('#text-box-1-1'), {});
            tl.to(('#text-box-1-2'), {}, "=-1.4");
            tl.to(('#text-box-1-3'), {}, "=-1.4");
            tl.to(('#text-box-1-4'), { onComplete: function () { document.querySelector('.shine-container').classList.add('active') } }, "=-1.4");

            tl.to(('#text-box-1-4'), { delay: 2.5, translateX: '-100vw', duration: 2 });
            tl.to(('#text-box-1-3'), { translateX: '-100vw', duration: 2 }, "=-1.95");
            tl.to(('#text-box-1-2'), { translateX: '-100vw', duration: 2 }, "=-1.95");
            tl.to(('#text-box-1-1'), { translateX: '-100vw', duration: 2 }, "=-1.95");

            return tl;
        };


        const middle = () => {
            const tl = gsap.timeline(
                {
                    defaults: {
                        duration: .7, y: 160, ease: "power4.out", delay: 0, skewY: 8, stagger: {
                            amount: 0.3
                        }
                    }
                });

            tl.from(('#text-box-2-1'), {}, "-1");
            tl.from(('#text-box-2-2'), {}, "");
            tl.from(('#text-box-2-3'), {}, "");

            return tl;
        };


        const conclusion = () => {
            const tl = gsap.timeline(
                { defaults: { duration: .5, opacity: 0 } }
            );
            tl.from(('.triggerButton'), { onComplete: function () { document.querySelector('.mycustombutton').classList.add('clickable') } }, "");
            return tl;
        };

        // stitch them together in a master timeline...
        const master = gsap.timeline();
        master
            .add(intro())
            .add(middle(), "=-1.5") //with a gap of 2 seconds
            .add(conclusion(), '=-.5'); //overlap by 1 second

        return () => {
            master.kill();
        };
    }, []);


    return (
        <>
            <Box component="section" className="banner" sx={{ display: 'flex', alignItems: 'center' }}>

                {/* <BokehBackground numSpans={9} variant="light" /> */}

                <Box className="text-container" sx={{ px: { xs: 2, lg: 10 }, py: { xs: 2, lg: 10 }, }}>

                    <Box id="text-box-1" _sx={{ width: { xs: '100%', lg: '60%' } }}>
                        <Typography id="text-box-1-1" variant="h1" className="font-thin">Welcome to my</Typography>
                        <Typography id="text-box-1-2" variant="h1" className="font-thin">tech playground</Typography>
                        <Typography id="text-box-1-3" variant="h1">where creativity</Typography>
                        <Box id="text-box-1-4" className="shine-container" >
                            <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                                    fill="#000"
                                />
                            </svg>
                            <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                                    fill="#000"
                                />
                            </svg>
                            <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                                    fill="#000"
                                />
                            </svg>
                            <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                                    fill="#000"
                                />
                            </svg>
                            <Typography variant="h1" id="shine-text">shines!</Typography>
                        </Box>
                    </Box>

                    <Box id="text-box-2" sx={{ mt: 'auto' }}>
                        <span className="line">
                            <Typography id="text-box-2-1" variant="h1" className="line-element font-thin">Alexandra Meszaros</Typography>
                        </span>
                        <span className="line">
                            <Typography id="text-box-2-2" variant="h1">Portfolio</Typography>
                        </span>
                        <span className="line">
                            {/* <Typography id="text-box-2-3" variant="body">Full-Stack Developer</Typography> */}
                            <p id="text-box-2-3">Full-Stack Developer</p>
                        </span>
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

                <MyCustomButton component="button" customClass="triggerButton" circleHasFullScreenclassName={circleHasFullScreenClass}
                />


            </Box >
        </>
    )
}

export default Banner;


