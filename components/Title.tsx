import React from 'react'
import styled from 'styled-components/native'

const Title = () => {
  return (
    <Wrapper>
      <Heading>Find Something</Heading>
    </Wrapper>
  )
}

const Wrapper = styled.View`
    margin: 10px 0;
`

const Heading = styled.Text`
    font-size: 24px;
    font-weight: bold;
`

export default Title