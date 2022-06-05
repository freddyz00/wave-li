import styled from 'styled-components/native'
import React from 'react'
import TextInput from './TextInput'
import SearchTypes from './SearchTypes'
import EventCard from './EventCard'
import { Event } from '../typings.d'

import { eventsState } from '../atoms/eventsStateAtom'
import { useRecoilValue } from 'recoil'

const SearchResults = () => {
  const events = useRecoilValue(eventsState)
  return (
    <Container>
        {/* Search Input */}
        <TextInput />
        {/* Search Types */}
        <SearchTypes />
        {/* Search Results */}

        <Wrapper>
          {events.map((event: Event) => (
            <EventCard key={event.id} />
          ))}

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