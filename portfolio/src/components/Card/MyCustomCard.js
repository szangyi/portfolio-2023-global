import { Box, Typography } from "@mui/material";
import "./MyCustomCard.css"

import React from "react";
import AboutMe from "../../pages/AboutMe";


const MyCustomCard = (props) => {


    return (
        <React.Fragment>
            <Box component="button" className={`mycustomCard ${props.customClass}`} onClick={props.action}>
                <span className="circle" aria-hidden="true">

                    {!props.circleHasFullScreenClass ? <span className="icon arrow"></span> : null}


                    {props.circleHasFullScreenClass ? <AboutMe /> : null}

                </span>

                {!props.circleHasFullScreenClass ?  <span className="button-text">Take me there</span> : null}

               

            </Box>
        </React.Fragment>
    )
}

export default MyCustomCard;


