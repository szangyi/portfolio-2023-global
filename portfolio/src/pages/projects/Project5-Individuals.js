import React from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import projectimage from '../../assets/project5app.png'


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
                        INDIVIDUALS
                    </Typography>
                    <Typography variant="h2" className="project-title">
                        Rebranding of a consultancy website
                    </Typography>

                    <Box className="chip-collection" sx={{ display: 'flex', flexDirection: 'row', gap: 1, my: 3 }}>
                        <Chip label="Javascript" variant="outlined" />
                        <Chip label="Wordpress" variant="outlined" />
                        <Chip label="Design" variant="outlined" />
                        <Chip label="SCSS" variant="outlined" />
                    </Box>

                    <Typography className="project-text" variant="body1" sx={{ my: 3 }}>
                        A freelance project of mine where I created a new identity for INDIVIDUALS.
                        <br></br>
                        They wanted to have control over the content of the site, hence the use of Wordpress. I built a new tailor-made custom-theme for my client and spiced it up with some interactivity with the help of Javascript. The design, and the video and picture assets presented on the site are also produced by me. 
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
                                Live site:
                            </Typography>
                            <a target="_blank" rel="noreferrer" href="https://individuals.dk/" className="chip-look" sx={{ mt: .5, px: 1.5, py: .2 }}>
                                Link
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box className="image-container-project" sx={{ pl: { xs: 0, md: 0 }, mt: 0 }}>
                <img className="project-image" alt="projectimage" src={projectimage}></img>
            </Box>

        </section>

    );
}

export default Project;