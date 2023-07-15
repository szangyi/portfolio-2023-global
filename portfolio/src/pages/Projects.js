import { Box, Card, CardContent, CardActions, Button, Divider, Grid, Typography } from "@mui/material";
import "./Projects.css"
import React, { useEffect } from "react";
import "../components/Card/MyCustomCard.css"
import { Link } from "react-router-dom";

import CardMedia from '@mui/material/CardMedia';

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'


const Projects = (props) => {



    return (

        <Box component="section" className="projects-section sectionPadding" sx={{ mt: 5 }}>

            <Typography variant="h2" sx={{ mb: 3 }}>Some of my projects</Typography>

            <Box className="image-container">
                <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
            </Box>

            <Divider sx={{ my: 10, bgcolor: 'black' }} />

            <Grid className="cards-collection" container sx={{ gap: '20px' }}>

                <Grid item className="card-container">
                    <Card className="mycustomcard glassmorphism" >

                        <CardContent className='card-content' sx={{ p: 4 }}>

                            <Box className="card-content-container" >
                                <Box>

                                    <Typography gutterBottom variant="h5" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        Javascript & Vue.js & Lottie
                                    </Typography>

                                    <Typography gutterBottom variant="h4" sx={{ mt: 3 }}>
                                        Massive amount of Javascript on a gamified e-learning platform
                                    </Typography>

                                </Box>
                            </Box>

                            <Box className="card-image-container" sx={{ mt: 6 }}>
                                <CardMedia
                                    component="img"
                                    alt="profile image"
                                    sx={{}}
                                    image={'https://i.postimg.cc/sgKmyhJv/influncr.png'}
                                />
                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            <Typography onClick={() => props.toggleProject('1')}>
                                to Project
                            </Typography>                        </CardActions>
                    </Card>
                </Grid>

                <Grid item className="card-container">
                    <Card className="mycustomcard glassmorphism" >

                        <CardContent className='card-content' sx={{ p: 4 }}>

                            <Box className="card-content-container" >
                                <Box>

                                    <Typography gutterBottom variant="h5" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        Javascript & Vue.js & Lottie
                                    </Typography>

                                    <Typography gutterBottom variant="h4" sx={{ mt: 3 }}>
                                        Massive amount of Javascript on a gamified e-learning platform
                                    </Typography>

                                </Box>
                            </Box>

                            <Box className="card-image-container" sx={{ mt: 6 }}>
                                <CardMedia
                                    component="img"
                                    alt="profile image"
                                    sx={{}}
                                    image={'https://i.postimg.cc/sgKmyhJv/influncr.png'}
                                />
                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            <Typography onClick={() => props.toggleProject('2')}>
                                to Project
                            </Typography>                        </CardActions>
                    </Card>
                </Grid>


                <Grid item className="card-container">
                    <Card className="mycustomcard glassmorphism" >

                        <CardContent className='card-content' sx={{ p: 4 }}>

                            <Box className="card-content-container" >
                                <Box>

                                    <Typography gutterBottom variant="h5" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        Javascript & Vue.js & Lottie
                                    </Typography>

                                    <Typography gutterBottom variant="h4" sx={{ mt: 3 }}>
                                        Massive amount of Javascript on a gamified e-learning platform
                                    </Typography>

                                </Box>
                            </Box>

                            <Box className="card-image-container" sx={{ mt: 6 }}>
                                <CardMedia
                                    component="img"
                                    alt="profile image"
                                    sx={{}}
                                    image={'https://i.postimg.cc/sgKmyhJv/influncr.png'}
                                />
                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            {/* <Box component={Link} to={`/profile/${array[2]}`}></Box> */}

                            <Typography onClick={() => props.toggleProject('3')}>
                                to Project
                            </Typography>

                        </CardActions>
                    </Card>
                </Grid>


            </Grid>

        </Box>
    )
}

export default Projects;


