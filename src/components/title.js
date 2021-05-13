import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    color: yellow;
`

const TitleH2 = styled.h2`
    color: ${props => props.theme.fourthColor};
`

const ExplanationP = styled.p`
    color: ${props => props.theme.teriaryColor};
`


const title = (props) => {
    // console.log(props)
    return ( 
        <Wrapper>
            <TitleH2>{props.title}</TitleH2>
            <ExplanationP>{props.explanation}</ExplanationP>
        </Wrapper>
    )
}

export default title;