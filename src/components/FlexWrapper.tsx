import styled from "styled-components";

export const FlexWrapper = styled.div<PropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || 0}
`

type PropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}