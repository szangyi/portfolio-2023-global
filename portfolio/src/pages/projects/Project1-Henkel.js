import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Chip, Grid, Typography } from "@mui/material";
import projectimage from '../../assets/project1app.png'


function Project(props) {
    return (

        <section className="project-page sectionPadding">
            <Grid container sx={{ gap: 0 }}>

                <Grid item xs={12} sm={2} md={5} sx={{ paddingRight: { xs: 0, sm: 2.5 }, paddingBottom: { xs: 4, sm: 0 } }}>
                    {/* <Typography variant="body1">
                        Back
                    </Typography> */}

                    <Box className="back-arrow" onClick={() => props.toggleProject(false)}>
                        <svg x="0px" y="0px" viewBox="0 0 95.7 95.8">
                            <circle cx="47.8" cy="47.9" r="47.1"></circle>
                            <polygon points="48.5,55.4 42.3,49.2 58.4,49.2 58.4,46.6 42.3,46.6 48.5,40.4 46.6,38.5 37.3,47.9 46.6,57.2 "></polygon>
                        </svg>
                    </Box>

                </Grid>

                <Grid item xs={12} sm={10} md={7}>
                    <Typography className="project-subtitle" gutterBottom variant="subtitle1" sx={{ color: 'white' }}>
                        Henkel
                    </Typography>
                    <Typography variant="h2" className="project-title">
                        Massive amount of Javascript on a gamified e-learning platform
                    </Typography>

                    <Box className="chip-collection" sx={{ display: 'flex', flexDirection: 'row', gap: 1, my: 3 }}>
                        <Chip label="Javascript" variant="outlined" />
                        <Chip label="SCSS" variant="outlined" />
                        <Chip label="Vue.js" variant="outlined" />
                        <Chip label="Lottie" variant="outlined" />
                    </Box>

                    <Typography className="project-text" variant="body1" sx={{ my: 3 }}>
                        We built a scaleable web application with the help of Vue.js Javascript framework, consisting of 80 learning chapters (average 24 pages each module).

                        I've been part of creating templates for the pages as well as building interactivity for the elements with vanilla Javascript. The animations were made interactive with the Lottie library.
                    </Typography>

                    <Grid container sx={{ gap: 3 }}>
                        <Grid className="project-details-1" item xs={6} md={4} lg={2}>
                            <Typography>
                                Users
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: .5 }}>
                                27.000+
                            </Typography>
                        </Grid>
                        <Grid className="project-details-2" item xs={6} md={4} lg={2}>
                            <Typography>
                                Pages created
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: .5 }}>
                                800+
                            </Typography>
                        </Grid>
                        <Grid className="project-details-3" item xs={6} md={4} lg={3}>
                            <Typography sx={{mb: .5}}>
                                Demo:
                            </Typography>
                            <a target="_blank" href="./project1video.mp4" className="chip-look" sx={{ mt: .5, px: 1.5, py: .2 }}>
                                Watch demo
                            </a>
                        </Grid>
                        <Grid className="project-details-3" item xs={6} md={4} lg={3}>
                            <Typography sx={{mb: .5}}>
                                Live site:
                            </Typography>
                            <a target="_blank" href="https://www.loctitex.com/" className="chip-look" sx={{ mt: .5, px: 1.5, py: .2 }}>
                                Link
                            </a>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Box className="image-container-project">
                <img className="project-image" src={projectimage}></img>
            </Box>

        </section>



    );
}

export default Project;