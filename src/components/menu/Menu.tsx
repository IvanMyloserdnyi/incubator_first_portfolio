import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><span>#</span>home</li>
                <li><span>#</span>works</li>
                <li><span>#</span>about me</li>
                <li><span>#</span>contacts</li>
                <li>
                    <select name="language" id="">
                        <option value="EN">EN</option>
                        <option value="UA">UA</option>
                    </select></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;

        li {
            list-style: none;
            color: #ABB2BF;
        }

        span {
            color: #C778DD;
        }

        select {
            border: transparent;
            background-color: #282C33;
            color: #ABB2BF;
        }
    }
`