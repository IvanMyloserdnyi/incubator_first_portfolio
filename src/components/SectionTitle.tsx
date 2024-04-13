import React from 'react';
import styled from "styled-components";
export const SectionTitle: React.FC<PropsType> = ({text}) => {
    return (
        <StyledSectionTitle>
            <span>#</span>{text}
        </StyledSectionTitle>
    );
};

export const StyledSectionTitle = styled.h2`
    color: #FFFFFF;
    span{
        color: #C778DD;
    }
`
type PropsType = {
    text: string
}