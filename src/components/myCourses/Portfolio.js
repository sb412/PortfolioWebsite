import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.courses.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live = {project.live} text1={project.text1} title={project.title}/>
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};