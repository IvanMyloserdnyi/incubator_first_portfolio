import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>

            </SectionTitle>
            <FlexWrapper>
                <img src="" alt=""/>
                <SkillsList>
                    <Skill>
                        <SkillTitle>
                            Languages
                        </SkillTitle>
                        <SkillDescription>
                            TypeScript Lua Python JavaScript
                        </SkillDescription>
                    </Skill>
                </SkillsList>
            </FlexWrapper>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
    
`
const SectionTitle = styled.h1`
    
`
const SkillsList = styled.div`
    
`
const Skill = styled.div`
    border: 1px solid #ABB2BF;
`
const SkillTitle = styled.h2`
    
`
const SkillDescription = styled.div`
    border: 1px solid #ABB2BF;
`

