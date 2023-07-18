import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Chip, Grid, Typography } from "@mui/material";
import projectimage from '../../assets/placeholder.png'


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
                        Pinterest
                    </Typography>
                    <Typography variant="h2" className="project-title">
                        Developing Pinterest for fun
                    </Typography>

                    <Box className="chip-collection" sx={{ display: 'flex', flexDirection: 'row', gap: 1, my: 3 }}>
                        <Chip label="PHP" variant="outlined" />
                        <Chip label="SCSS" variant="outlined" />
                        <Chip label="MySQL" variant="outlined" />
                    </Box>

                    <Typography className="project-text" variant="body1" sx={{ my: 3 }}>
                        I recreated the well-known picture-sharing website, Pinterest, with PHP and MySQL. To get the most out of this project I decided to split the interfaces to practise both the procedural- and the object-oriented programming paradigms.

                        The application is using password hashing and sessions, and protected against SQL injection and XSS.
                        <br></br>
                        The users can sign up, log in, upload an image, upload an image and edit their profiles.
                    </Typography>

                    <Typography className="project-text" variant="body1" sx={{ my: 1, fontStyle: 'italic', fontSize: '.8rem' }}>
                        There is also an admin part of the project where the admin can see and delete any users.

                    </Typography>

                    <Grid container sx={{ gap: 3 }}>
                        <Grid className="project-details-1" item xs={6} md={4} lg={3}>
                            <Typography>
                                Page created
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: .5 }}>
                                2021
                            </Typography>
                        </Grid>
                        <Grid className="project-details-2" item xs={6} md={4} lg={3}>
                            <Typography sx={{ mb: .5 }}>
                                Github:
                            </Typography>
                            <a target="_blank" href="https://github.com/szangyi/pinterest" className="chip-look" sx={{ mt: .5, px: 1.5, py: .2 }}>
                                Repo
                            </a>
                        </Grid>
                        <Grid className="project-details-3" item xs={6} md={4} lg={3}>
                            <Typography sx={{ mb: .5 }}>
                                Live site:
                            </Typography>
                            <a target="_blank" href="http://pinterest.infinityfreeapp.com" className="chip-look" sx={{ mt: .5, px: 1.5, py: .2 }}>
                                Link
                            </a>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Box className="image-container-project" sx={{ paddingInline: { xs: 0, md: 10 }, mt: 3 }}>
                <img className="project-image" src={projectimage}></img>
            </Box>

        </section>

    );
}

export default Project;