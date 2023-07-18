import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Chip, Grid, Typography } from "@mui/material";
import projectimage from '../../assets/project2app.png'


function Project(props) {
    return (

        <section className="project-page sectionPadding">
            <Grid container sx={{ gap: 0 }}>

                <Grid item xs={12} sm={2} md={6} sx={{ paddingRight: { xs: 0, sm: 2.5 }, paddingBottom: { xs: 4, sm: 0 } }}>

                    <Box className="back-arrow" onClick={() => props.toggleProject(false)}>
                        <svg x="0px" y="0px" viewBox="0 0 95.7 95.8">
                            <circle cx="47.8" cy="47.9" r="47.1"></circle>
                            <polygon points="48.5,55.4 42.3,49.2 58.4,49.2 58.4,46.6 42.3,46.6 48.5,40.4 46.6,38.5 37.3,47.9 46.6,57.2 "></polygon>
                        </svg>
                    </Box>

                </Grid>

                <Grid item xs={12} sm={10} md={6}>
                    <Typography className="project-subtitle" gutterBottom variant="subtitle1" sx={{ color: 'white' }}>
                        Influencr
                    </Typography>
                    <Typography variant="h2" className="project-title">
                        An influencer collection page
                    </Typography>

                    <Box className="chip-collection" sx={{ display: 'flex', flexDirection: 'row', gap: 1, my: 3 }}>
                        <Chip label="React.js" variant="outlined" />
                        <Chip label="Python" variant="outlined" />
                        <Chip label="MUI" variant="outlined" />
                        <Chip label="MySQL" variant="outlined" />
                    </Box>

                    <Typography className="project-text" variant="body1" sx={{ my: 3 }}>
                        The inspiration for this project arose from my personal frustration, as a website for browsing influencers for personal use does not exists.
                        I aimed to solve this issue by creating this application. The tech stack includes Python with Bottle framework and RESTful APIs, 
                        React.js as frontend library with the help of axios, MUI as UI library, MySQL Workbench for database management, and Pythonanywhere for hosting.
                        I implemented security measures on different layers, such as form validation, authentication with JWT token, HTTPOnly cookie, password hashing as well as protection against SQL injection and XSS attack. 
                    <br></br>
                    <br></br>
                      The user can sign up, log in, save influencers into their collection, edit their profiles as well as become an influencer. 
                    </Typography>
                    <Grid container sx={{ gap: 3 }}>
                        <Grid className="project-details-1" item xs={6} md={4} lg={3}>
                            <Typography>
                                Page created
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: .5 }}>
                                2022
                            </Typography>
                        </Grid>
                        <Grid className="project-details-2" item xs={6} md={4} lg={3}>
                            <Typography sx={{ mb: .5 }}>
                                Gitlab:
                            </Typography>
                            <a target="_blank" href="https://gitlab.com/alaniskea/final-project-kea" className="chip-look" sx={{ mt: .5, px: 1.5, py: .2 }}>
                                Repo
                            </a>
                        </Grid>
                        <Grid className="project-details-3" item xs={6} md={4} lg={3}>
                            <Typography sx={{ mb: .5 }}>
                                Live site:
                            </Typography>
                            <a target="_blank" href="http://influncr.pythonanywhere.com/" className="chip-look" sx={{ mt: .5, px: 1.5, py: .2 }}>
                                Link
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box className="image-container-project" sx={{ pl: { xs: 0, md: 20 }, mt: 10 }}>
                <img className="project-image" src={projectimage}></img>
            </Box>

        </section>

    );
}

export default Project;