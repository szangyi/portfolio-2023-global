import { Box, Typography } from "@mui/material";
import "./MyCustomButton.css"

import React from "react";
import AboutMe from "../../pages/AboutMe";


const MyCustomButton = (props) => {


    return (
        <React.Fragment>
            <Box component="button" className={`mycustombutton ${props.customClass}`} onClick={props.action}>
                <span className="circle" aria-hidden="true">

                    {!props.circleHasFullScreenClass ? <span className="icon arrow"></span> : null}


                    {props.circleHasFullScreenClass ? <AboutMe /> : null}

                </span>

                {!props.circleHasFullScreenClass ?  <span className="button-text">Take me there</span> : null}

               

            </Box>
        </React.Fragment>
    )
}

export default MyCustomButton;


