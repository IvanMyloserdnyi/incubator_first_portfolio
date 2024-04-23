import React from 'react';
import styled from "styled-components";

export const Project:React.FC<PropsType> = ({data}) => {
    return (
        <StyledProject>
            <Image src={data.image.default} srcSet={`${data.image.image2x} 2x, ${data.image.image3x} 3x`}/>
            <Technologies>
                {data.technologies}
            </Technologies>
            <div>
                <ProjectName>
                    {data.projectName}
                </ProjectName>
                <ProjectDescription>
                    {data.projectDescription}
                </ProjectDescription>
                <Button>Live &lt;~&gt;</Button>
            </div>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    max-width: 330px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
`
const Technologies = styled.h2`
    overflow-wrap: break-word;
`
const ProjectName = styled.h3`
    
`
const ProjectDescription = styled.p`
    
`
const Button = styled.button`
    background-color: transparent;
    border: 1px solid rgb(199, 120, 221);
`

type PropsType = {
    data: {
        image: {
            default: string
            image2x: string
            image3x: string
        }
        technologies: string
        projectName: string
        projectDescription: string
    }

}
