import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contacts";


function App() {
    return (
        <StyledMain>
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Contacts/>
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