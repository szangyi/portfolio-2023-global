
import "./AboutMe.css"

import { Box, Grid, List, ListItem, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";


const AboutMe = (props) => {

    useEffect(() => {

        console.log('aboutmejs')

        ScrollTrigger.create({
            trigger: ".sticky-menu",
            start: "top top", // scroller-start
            endTrigger: "footerrr", // something invalid
            end: "bottom bottom-=75", // scroller-start
            pin: true,
            pinSpacing: false,
            // markers: { startColor: "fuchsia", endColor: "green" }
        });

    }, []);


    useEffect(() => {
        document.querySelector('#link-activator-me').addEventListener('click', function () {
            document.querySelector('.aboutme-section').scrollIntoView();
        })

        document.querySelector('#link-activator-skills').addEventListener('click', function () {
            document.querySelector('.skills-section').scrollIntoView();
        })

        document.querySelector('#link-activator-projects').addEventListener('click', function () {
            document.querySelector('.cards-collection').scrollIntoView();
        })

    }, []);


    return (
        <React.Fragment>

            <Box component="section" className="aboutme-section" sx={{ _paddingBlock: 20, _paddingInline: 10, }}>

                <Box className="sectionPadding">
                    <Typography variant="h2" sx={{ mb: 3 }}>The short story</Typography>

                    <Grid container sx={{ gap: 1 }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="paragraph">
                                Becoming a full-stack developer did not come naturally. My life took a turn in 2020,
                                when I changed my career path
                                from a Marketing Specialists to a Web developer.
                                It's been a challenging journey, and it has just started!
                                I'm not just a techie or just a creative – I'm the blend of both!
                                I effortlessly switch between conceptual and computational thinking,
                                and I speak both design and programming languages with ease.
                            </Typography>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Typography variant="paragraph">
                                Sneak peak to the tech stack:
                                Javascript, PHP, Python, SCSS, Vue.js, React.js, MySQL, MUI, RESTful APIs, npm, Storybook, SPA, CI/CD
                            </Typography>
                        </Grid>

                        <Grid className="aboutme-links-section" item container xs={12} md={5} sx={{ height: 'fit-content' }}>


                            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mb: .8 }}>
                                <Typography variant="h6" sx={{ fontFamily: 'Hanken Grotesk', textTransform: 'uppercase' }}>Name</Typography>
                            </Grid>
                            <Grid item xs={9} sx={{ display: 'flex', gap: 1 }}>
                                <Typography variant="paragraph" >
                                    Alexandra Meszaros
                                </Typography>
                            </Grid>


                            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="h6" sx={{ fontFamily: 'Hanken Grotesk', textTransform: 'uppercase' }}>Email</Typography>
                            </Grid>
                            <Grid item xs={9} >
                                <Link sx={{ display: 'flex', gap: 1 }} href={'mailto:alexandra.mszrs@gmail.com'}>
                                    <Typography variant="paragraph" sx={{ color: 'white', textDecoration: 'none' }}>
                                        alexandra.mszrs@gmail.com
                                    </Typography>
                                    <svg style={{ alignSelf: 'center', minWidth: '12px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M5,17.59,6.41,19,17,8.41V15h2V5H9V7h6.59Z" transform="translate(-5 -5)" fill="#fff" /></svg>

                                </Link>
                            </Grid>

                            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="h6" sx={{ fontFamily: 'Hanken Grotesk', textTransform: 'uppercase' }}>Accounts</Typography>
                            </Grid>
                            <Grid item xs={9} >
                                <Link sx={{ display: 'flex', gap: 1 }} target="_blank" rel="noreferrer" href={'https://www.linkedin.com/in/meszarosalexandra/'}>
                                    <Typography variant="paragraph" sx={{ color: 'white', textDecoration: 'none' }}>
                                        Linkedin
                                    </Typography>
                                    <svg style={{ alignSelf: 'center', minWidth: '12px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M5,17.59,6.41,19,17,8.41V15h2V5H9V7h6.59Z" transform="translate(-5 -5)" fill="#fff" /></svg>
                                </Link>
                            </Grid>

                            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="h6" sx={{ fontFamily: 'Hanken Grotesk', textTransform: 'uppercase' }}></Typography>
                            </Grid>
                            <Grid item xs={9} >
                                <Link sx={{ display: 'flex', gap: 1 }} target="_blank" rel="noreferrer" href={'https://gitlab.com/szangyi'}>
                                    <Typography variant="paragraph" sx={{ color: 'white', textDecoration: 'none' }}>
                                        GitLab
                                    </Typography>
                                    <svg style={{ alignSelf: 'center', minWidth: '12px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M5,17.59,6.41,19,17,8.41V15h2V5H9V7h6.59Z" transform="translate(-5 -5)" fill="#fff" /></svg>
                                </Link>
                            </Grid>

                            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="h6" sx={{ fontFamily: 'Hanken Grotesk', textTransform: 'uppercase' }}></Typography>
                            </Grid>
                            <Grid item xs={9} >
                                <Link sx={{ display: 'flex', gap: 1 }} target="_blank" rel="noreferrer" href={'https://github.com/szangyi?tab=repositories'}>
                                    <Typography variant="paragraph" sx={{ color: 'white', textDecoration: 'none' }}>
                                        Github
                                    </Typography>
                                    <svg style={{ alignSelf: 'center', minWidth: '12px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M5,17.59,6.41,19,17,8.41V15h2V5H9V7h6.59Z" transform="translate(-5 -5)" fill="#fff" /></svg>
                                </Link>
                            </Grid>


                        </Grid>

                    </Grid>
                </Box>

                <Box className="menu sticky-menu" sx={{ position: 'absolute', bottom: '0', width: '100vw' }}>
                    <List>
                        <ListItem>
                            <Typography id="link-activator-me" _sx={{ paddingBlock: '.4rem !important' }}>Me</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography id="link-activator-skills" _sx={{ paddingBlock: '.4rem !important' }}>Skills</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography id="link-activator-projects" _sx={{ paddingBlock: '.4rem !important' }}>Projects</Typography>
                        </ListItem>
                    </List>
                </Box>
            </Box>

        </React.Fragment >

    )
}

export default AboutMe;


