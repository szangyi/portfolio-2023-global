import { Box, Card, CardContent, CardActions, Divider, Grid, Typography } from "@mui/material";
import "./Projects.css"
import "../components/Card/MyCustomCard.css"

import CardMedia from '@mui/material/CardMedia';

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'


const Projects = (props) => {



    return (

        <Box component="section" className="sectionPadding projects-section" sx={{ mt: 5 }}>

            <Typography variant="h2" sx={{ mb: 3 }}>Some of my projects</Typography>

            <Box className="image-container">
                <img src={img1} alt="projectimage"></img>
                <img src={img2} alt="projectimage"></img>
                <img src={img3} alt="projectimage"></img>
            </Box>

            <Divider sx={{ my: 10, bgcolor: 'black' }} />

            <Grid className="cards-collection" container sx={{ gap: '20px' }}>

                {/* HENKEL */}
                <Grid item className="card-container">
                    <Card className="mycustomcard glassmorphism" >

                        <CardContent className='card-content' sx={{ p: {xs: 2, md: 4}  }}>

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
                                    image={project1}
                                />
                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            <Typography onClick={() => props.toggleProject('1')}>

                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>


                {/* INFLUENCR */}
                <Grid item className="card-container">
                    <Card className="mycustomcard glassmorphism" >

                        <CardContent className='card-content' sx={{ p: {xs: 2, md: 4}  }}>

                            <Box className="card-content-container" >
                                <Box>

                                    <Typography gutterBottom variant="h5" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        React.js & Python & MUI & MySQL
                                    </Typography>

                                    <Typography gutterBottom variant="h4" sx={{ mt: 3 }}>
                                        An influencer collection page
                                    </Typography>

                                </Box>
                            </Box>

                            <Box className="card-image-container" sx={{ mt: 6 }}>
                                <CardMedia
                                    component="img"
                                    alt="profile image"
                                    sx={{}}
                                    image={project2}
                                />
                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            <Typography onClick={() => props.toggleProject('2')}>

                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>

                {/* TWITTER */}
                <Grid item className="card-container">
                    <Card className="mycustomcard glassmorphism" >

                        <CardContent className='card-content'sx={{ p: {xs: 2, md: 4}  }}>

                            <Box className="card-content-container" >
                                <Box>

                                    <Typography gutterBottom variant="h5" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        Python & TailwindCSS & MySQL
                                    </Typography>

                                    <Typography gutterBottom variant="h4" sx={{ mt: 3 }}>
                                        My kind of Twitter as my first Python playground
                                    </Typography>

                                </Box>
                            </Box>

                            <Box className="card-image-container" sx={{ mt: 6 }}>
                                <CardMedia
                                    component="img"
                                    alt="profile image"
                                    sx={{}}
                                    image={project3}
                                />
                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            {/* <Box component={Link} to={`/profile/${array[2]}`}></Box> */}

                            <Typography onClick={() => props.toggleProject('3')}>

                            </Typography>

                        </CardActions>
                    </Card>
                </Grid>

                {/* OPENLOOP */}
                <Grid item className="card-container">
                    <Card className="mycustomcard glassmorphism" >

                        <CardContent className='card-content' sx={{ p: {xs: 2, md: 4}  }}>

                            <Box className="card-content-container" >
                                <Box>

                                    <Typography gutterBottom variant="h5" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        PHP & Wordpress & GSAP
                                    </Typography>

                                    <Typography gutterBottom variant="h4" sx={{ mt: 3 }}>
                                        Manipulating core code of Wordpress
                                    </Typography>

                                </Box>
                            </Box>

                            <Box className="card-image-container" sx={{ mt: 6 }}>
                                <CardMedia
                                    component="img"
                                    alt="profile image"
                                    sx={{}}
                                    image={project4}
                                />
                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            <Typography onClick={() => props.toggleProject('4')}>
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>

                {/* INDIVIDUALS */}
                <Grid item className="card-container">
                    <Card className="mycustomcard glassmorphism" >

                        <CardContent className='card-content'sx={{ p: {xs: 2, md: 4}  }}>

                            <Box className="card-content-container" >
                                <Box>

                                    <Typography gutterBottom variant="h5" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        Javascript & Wordpress & SCSS & Design
                                    </Typography>

                                    <Typography gutterBottom variant="h4" sx={{ mt: 3 }}>
                                        Rebranding of a consultancy website
                                    </Typography>

                                </Box>
                            </Box>

                            <Box className="card-image-container" sx={{ mt: 6 }}>
                                <CardMedia
                                    component="img"
                                    alt="profile image"
                                    sx={{}}
                                    image={project5}
                                />
                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            <Typography onClick={() => props.toggleProject('5')}>
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>

                {/* PINTEREST */}
                <Grid item className="card-container">
                    <Card className="mycustomcard glassmorphism" >

                        <CardContent className='card-content' sx={{ p: {xs: 2, md: 4}  }}>

                            <Box className="card-content-container" >
                                <Box>

                                    <Typography gutterBottom variant="h5" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        PHP & MySQL & SCSS
                                    </Typography>

                                    <Typography gutterBottom variant="h4" sx={{ mt: 3 }}>
                                    Developing Pinterest for fun
                                    </Typography>

                                </Box>
                            </Box>

                            <Box className="card-image-container" sx={{ mt: 6 }}>
                                <CardMedia
                                    component="img"
                                    alt="profile image"
                                    sx={{}}
                                    image={project6}
                                />
                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            <Typography onClick={() => props.toggleProject('6')}>
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>


            </Grid>

        </Box>
    )
}

export default Projects;


