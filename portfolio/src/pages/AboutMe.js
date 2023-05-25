
import "./AboutMe.css"

import { Box, Grid, Typography } from "@mui/material";
import React from "react";


const AboutMe = (props) => {

    return (
        <React.Fragment>

            <Box component="section" className="aboutme-section sectionPadding" sx={{ _paddingBlock: 20, _paddingInline: 10, }}>

                <Typography variant="h2" sx={{mb: 3}}>The short story</Typography>

                <Grid container sx={{ gap: 1 }}>
                    <Grid item xs={5}>
                        <Typography variant="paragraph">
                            Quisque et justo sed nisi vehicula auctor. Praesent porttitor, leo pulvinar volutpat rhoncus, sapien orci blandit lectus, eget semper tortor risus at arcu. Morbi sit amet ex at sem laoreet condimentum. Pellentesque non mattis turpis. Quisque ultricies aliquam elit eget interdum. Maecenas ut aliquam enim. Praesent semper justo mauris, sit amet fermentum urna tempor sit amet. Suspendisse placerat, sem nec congue ultrices, velit tortor feugiat felis, non fermentum lacus urna vel eros. Aliquam erat. 

                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="paragraph">
                           mperdiet faucibus. Etiam vulputate porttitor arcu et vulputate. Vivamus libero enim, placerat vel mi vel, congue hendrerit mi. Cras leo turpis, faucibus vitae posuere eu, ultricies quis nunc. Duis odio tellus, commodo et commodo non, bibendum ac nunc. In at massa dictum, sollicitudin metus id, rhoncus massa. Quisque dignissim lacus a elit tempus, et aliquam ligula aliquam. Pellentesque finibus risus massa, sed tincidunt ante pretium nec. Nullam ornare bibendum nibh non facilisis.
                        </Typography>
                    </Grid>

                </Grid>
            </Box>

        </React.Fragment >

    )
}

export default AboutMe;


