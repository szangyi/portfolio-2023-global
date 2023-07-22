import { Box } from "@mui/material";
import "./MyCustomButton.css"

import React from "react";
import AboutMe from "../../pages/AboutMe";


const MyCustomButton = (props) => {


    return (
        <React.Fragment>
            <Box component="button" className={`mycustombutton ${props.customClass}`} onClick={props.action}>
                <span className="circle" aria-hidden="true">

                    {!props.circleHasFullScreenClass ? <span className="icon arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.799 19.799"><path d="M5,17.59,6.41,19,17,8.41V15h2V5H9V7h6.59Z" transform="translate(9.899 -7.071) rotate(45)" fill="#fff" /></svg>
                    </span> : null}


                    {props.circleHasFullScreenClass ? <AboutMe /> : null}

                </span>

                {!props.circleHasFullScreenClass ? <span className="button-text">Take me there</span> : null}



            </Box>
        </React.Fragment>
    )
}

export default MyCustomButton;


