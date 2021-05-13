import React from 'react'
import styled from 'styled-components'

const TitleH1 = styled.h1`
    color: ${props => props.theme.primaryColor};

`

const test = () => {
    return <TitleH1>
        NASA Photo of the Day!
    </TitleH1>
}

export default test;