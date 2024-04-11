import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";


function App() {
    return (
        <StyledMain>
            <Header/>
            <Main/>
            <Skills/>
        </StyledMain>
    );
}

export default App;

const StyledMain = styled.main`
    margin: 0 auto;
    background-color: #282C33;
    height: 100%;
    box-sizing: border-box;
`