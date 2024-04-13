import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle text='skills'/>
            <FlexWrapper>
                <img src="" alt="image"/>
                <SkillsList>
                    <Skill title='Languages' description='TypeScript Lua Python JavaScript'/>
                    <Skill title='Databases' description='SQlite PostgreSQL Mongo'/>
                    <Skill title='Tools' description='VSCode Neovim Linux Figma XFCE Arch Git Font Awesome'/>
                    <Skill title='Other' description='HTML CSS EJS SCSS REST Jinja'/>
                    <Skill title='Frameworks' description='React Vue Disnake Discord.js Flask Express.js'/>
                </SkillsList>
            </FlexWrapper>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
    
`

const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`


