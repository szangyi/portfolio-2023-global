
import "./AboutMe.css"

import { Box, Grid, Typography } from "@mui/material";
import React from "react";


const AboutMe = (props) => {

    return (
        <React.Fragment>

            <Box component="section" className="aboutme-section" sx={{ _paddingBlock: 20, _paddingInline: 10, }}>
                <Typography variant="h4">I'm a secret child</Typography>


                {/* 
                <Grid>
                    <Grid item >
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid> */}
            </Box>

        </React.Fragment>

    )
}

export default AboutMe;


