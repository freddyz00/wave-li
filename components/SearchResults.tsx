import styled from 'styled-components/native'
import React from 'react'
import TextInput from './TextInput'
import SearchTypes from './SearchTypes'
import EventCard from './EventCard'


const SearchResults = () => {
  return (
    <Container>
        {/* Search Input */}
        <TextInput />
        {/* Search Types */}
        <SearchTypes />
        {/* Search Results */}

        <Wrapper>
          <EventCard />
          <EventCard />
          <EventCard />
        </Wrapper>
    </Container>
  )
}

const Container = styled.View`
    background-color: #fff;
    flex: 1;
`

const Wrapper = styled.ScrollView`
  margin-top: 5px;
  padding: 5px 0;
`

export default SearchResults