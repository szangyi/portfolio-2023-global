import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Project1 from "./Project1-Henkel";
import Project2 from "./Project2-Twitter";

function Project(props) {
    console.log('proprppssss')
    console.log(props.projectName)

    return (
        <>
            <section className="project-container">
                {props.projectName === 'pass' ? (
                    <Project1 />
                ) : props.projectName === 'passs' ? (
                    <Project2 />
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
