
import "./AboutMe.css"

import { Box, Typography } from "@mui/material";
import React from "react";


const AboutMe = (props) => {

    return (
        <React.Fragment>

            {/* <Box component="section" className="aboutme-section" sx={{ paddingBlock: 20, paddingInline: 10, }}>

                <div className="container">
                    <h1 className="scroll-text">Just me</h1>
                </div>

            </Box> */}


            <Box component="section" className="aboutme-section" sx={{ _paddingBlock: 20, _paddingInline: 10, }}>

                <div className="container headContainer">
                    <div className="head">HEAD</div>
                </div>

                <div className="container container01"></div>

                <div className="container container02">
                    <div className="sign">

                    </div>
                    <Typography>
                        Quisque et justo sed nisi vehicula auctor. Praesent porttitor, leo pulvinar volutpat rhoncus, sapien orci blandit lectus, eget semper tortor risus at arcu. Morbi sit amet ex at sem laoreet condimentum. Pellentesque non mattis turpis. Quisque ultricies aliquam elit eget interdum. Maecenas ut aliquam enim. Praesent semper justo mauris, sit amet fermentum urna tempor sit amet. Suspendisse placerat, sem nec congue ultrices, velit tortor feugiat felis, non fermentum lacus urna vel eros. Aliquam erat volutpat. Sed fermentum ultricies aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean pulvinar rhoncus metus, vel aliquet sapien porta in. Phasellus suscipit placerat orci sit amet pellentesque. Nunc fermentum malesuada pulvinar.
                    </Typography>
                </div>

            </Box>

        </React.Fragment>

    )
}

export default AboutMe;


