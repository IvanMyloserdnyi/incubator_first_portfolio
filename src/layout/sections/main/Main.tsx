import React from 'react';
import mainPhoto from '../../../assets/images/main_photo.png'
import mainPhoto2x from '../../../assets/images/main_photo@2x.png'
import mainPhoto3x from '../../../assets/images/main_photo@3x.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction='column'>
                <TopSection>
                    <div>
                        <MainTitle>
                            Elias is a <span>web designer</span> and <h1>front-end developer</h1>
                        </MainTitle>
                        <h2>
                            He crafts responsive websites where technologies meet creativity
                        </h2>
                        <button>Contact me!!</button>
                    </div>
                    <div>
                        <Photo src={mainPhoto} srcSet={`${mainPhoto2x} 2x, ${mainPhoto3x} 3x`} alt="someone hacker"/>
                        <h3>
                            Currently working on Portfolio
                        </h3>
                    </div>
                </TopSection>
                <BottomSection>
                    <dt>
                        With great power comes great electricity bill
                    </dt>
                    <dd>
                        - Dr. Who
                    </dd>
                </BottomSection>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    //відступи між блоками задам
`
const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
`
const MainTitle = styled.p`

`
const BottomSection = styled.dl`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Photo = styled.img`
    width: 469px;
    height: 386px;
    object-fit: cover;
`
const Button = styled.button`
    background-color: ;
`

