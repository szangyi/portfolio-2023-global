import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Chip, Grid, Typography } from "@mui/material";

function Project1(props) {
    return (

        <section className="project-page sectionPadding">
            <Grid container sx={{ gap: 0 }}>

                <Grid item xs={12} sm={4} md={6}>
                    <Typography variant="body1" onClick={() => props.toggleProject(false)}>
                        Back
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                    <Typography gutterBottom variant="subtitle1" sx={{ color: 'white' }}>
                        Henkel 
                    </Typography>
                    <Typography variant="h2">
                        Massive amount of Javascript on a gamified e-learning platform
                    </Typography>

                    <Box className="chip-collection" sx={{ display: 'flex', flexDirection: 'row', gap: 1, my: 3 }}>
                        <Chip label="Javascript" variant="outlined" />
                        <Chip label="SCSS" variant="outlined" />
                        <Chip label="Vue.js" variant="outlined" />
                        <Chip label="Lottie" variant="outlined" />
                    </Box>

                    <Typography variant="body1" sx={{my: 3}}>
                        We built a scaleable web application with the help of Vue.js Javascript framework, consisting of 80 learning chapters (average 24 pages each module).

                        I've been part of creating templates for the pages as well as building interactivity for the elements with vanilla Javascript. The animations were made interactive with the Lottie library.
                    </Typography>

                    <Grid container sx={{ gap: 0 }}>
                        <Grid item xs={3}>
                            <Typography>
                               Users
                            </Typography>
                            <Typography sx={{fontWeight: 'bold', mt:.5}}>
                              25.000+
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>
                               Demo:
                            </Typography>
                            <Typography className="chip-look" sx={{mt: .5, px: 1.5, py: .2}}>
                               Watch demo
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Box>
                <p>this will be an image</p>
            </Box>

        </section>

    );
}

export default Project1;