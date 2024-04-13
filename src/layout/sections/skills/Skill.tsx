import React from 'react';
import styled from "styled-components";

export const Skill:React.FC<PropsType> = ({title, description}) => {
    return (
        <StyledSkill>
            <SkillTitle>
                {title}
            </SkillTitle>
            <SkillDescription>
                {description}
            </SkillDescription>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    border: 1px solid #ABB2BF;
    width: 30%;
`
const SkillTitle = styled.h3`
    
`
const SkillDescription = styled.div`
    border: 1px solid #ABB2BF;
`

type PropsType = {
    title: string
    description: string
}
