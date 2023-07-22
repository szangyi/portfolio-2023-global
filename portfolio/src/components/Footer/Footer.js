import { Box, Typography } from "@mui/material";
import "./Footer.css"

import React from "react";

const Footer = (props) => {

    const currentYear =  new Date().getFullYear()

    return (
        <React.Fragment>
            <Box component="footer" className="">
                <Typography sx={{color: 'white'}}>
                    {currentYear} © Alexandra Meszaros
                </Typography>
            </Box>
        </React.Fragment>
    )
}

export default Footer;


