import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import chertNodesImage from '../../../assets/images/projectImages/chertNodes.jpg'
import chertNodesImage2x from '../../../assets/images/projectImages/chertNodes@2x.jpg'
import chertNodesImage3x from '../../../assets/images/projectImages/chertNodes@3x.jpg'
import projectXImage from '../../../assets/images/projectImages/protectX.jpg'
import projectXImage2x from '../../../assets/images/projectImages/protectX@2x.jpg'
import projectXImage3x from '../../../assets/images/projectImages/protectX@3x.jpg'
import kahootImage from '../../../assets/images/projectImages/kahoot.jpg'
import kahootImage2x from '../../../assets/images/projectImages/kahoot@2x.jpg'
import kahootImage3x from '../../../assets/images/projectImages/kahoot@3x.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

const projectsData = [
    {
        image: {
            default: chertNodesImage,
            image2x: chertNodesImage2x,
            image3x: chertNodesImage3x
        },
        technologies: 'HTML SCSS Python Flask',
        projectName: 'ChertNodes',
        projectDescription: 'Minecraft servers hosting '
    },
    {
        image: {
            default: projectXImage,
            image2x: projectXImage2x,
            image3x: projectXImage3x
        },
        technologies: 'React Express Discord.js Node.js HTML SCSS Python Flask',
        projectName: 'ProtectX',
        projectDescription: 'Discord anti-crash bot'
    },
    {
        image: {
            default: kahootImage,
            image2x: kahootImage2x,
            image3x: kahootImage3x
        },
        technologies: 'CSS Express Node.js',
        projectName: 'Kahoot Answers Viewer',
        projectDescription: 'Get answers to your kahoot quiz'
    }
]
export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle text='projects'/>
            <span>View all</span>
            <FlexWrapper justify='space-between' wrap='wrap'>
                <Project data={projectsData[0]}/>
                <Project data={projectsData[1]}/>
                <Project data={projectsData[2]}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`

`
