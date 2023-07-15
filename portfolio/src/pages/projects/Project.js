import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Project1 from "./Project1-Henkel";
import Project2 from "./Project2-Twitter";

function Project(props) {

    return (
        <>
            <section className="project-container">
                {props.projectName === '1' ? (
                    <Project1 toggleProject={props.toggleProject} />
                ) : props.projectName === '2' ? (
                    <Project2 toggleProject={props.toggleProject} />
                ) : (
                    <section className="default-container">
                        <h1>Default Section</h1>
                    </section>
                )}
            </section>
        </>
    );
}

export default Project;
