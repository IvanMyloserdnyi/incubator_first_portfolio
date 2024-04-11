import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
export const Logo = () => {
    return (
        <StyledLogo href='#'>
            <Icon iconId={'logo'}/>
            <span>Elias</span>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #FFFFFF;
    gap: 10px;
`