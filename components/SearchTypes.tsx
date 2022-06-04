import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const SearchTypes = () => {
  return (
    <Container>
      <SearchHeading>Events</SearchHeading>
      <SearchHeading>People</SearchHeading>
      <SearchHeading>Group</SearchHeading>
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`

const SearchHeading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
`

export default SearchTypes