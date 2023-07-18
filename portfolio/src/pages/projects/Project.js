import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Project1 from "./Project1-Henkel";
import Project2 from "./Project2-Influencr";
import Project3 from "./Project3-Twitter";
import Project4 from "./Project4-OpenLoop";
import Project5 from "./Project5-Individuals";
import Project6 from "./Project6-Pinterest";

function Project(props) {

    return (
        <>
            <section className="project-container">
                {props.projectName === '1' ? (
                    <Project1 toggleProject={props.toggleProject} />
                ) : props.projectName === '2' ? (
                    <Project2 toggleProject={props.toggleProject} />
                ) : props.projectName === '3' ? (
                    <Project3 toggleProject={props.toggleProject} />
                ) : props.projectName === '4' ? (
                    <Project4 toggleProject={props.toggleProject} />
                ) : props.projectName === '5' ? (
                    <Project5 toggleProject={props.toggleProject} />
                ) : props.projectName === '6' ? (
                    <Project6 toggleProject={props.toggleProject} />
                ) :
                    (
                        <section className="default-container">
                            <h1>Default Section</h1>
                        </section>
                    )}
            </section>
        </>
    );
}

export default Project;




