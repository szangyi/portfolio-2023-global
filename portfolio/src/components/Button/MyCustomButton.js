import { Box, Typography } from "@mui/material";
import "./MyCustomButton.css"

import React from "react";


const MyCustomButton = (props) => {

    return (
        <React.Fragment>
            <Box component="button" className="mycustombutton">
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Take me there</span>

            </Box>
        </React.Fragment>
    )
}

export default MyCustomButton;


