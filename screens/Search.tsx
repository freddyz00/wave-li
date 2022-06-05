import styled from "styled-components/native"
import BottomTabs from '../components/BottomTabs';
import SearchResults from '../components/SearchResults';
import Title from '../components/Title';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { eventsState } from '../atoms/eventsStateAtom';

const Search = () => {
    const setEvents = useSetRecoilState(eventsState)

    useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`https://waveli-coding-challenge.herokuapp.com/events`);
        const events = await res.json()
        setEvents(events)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchEvents()
  }, [])
  
  return (
    <Container>

    <Wrapper>
      {/* Title */}
      <Title />
      {/* Search Results */}
      <SearchResults />
    </Wrapper>

    {/* Bottom Tabs */}
    <BottomTabs />
  
  </Container>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
`

const Wrapper = styled.View`
  padding: 0 25px;
  flex: 1
`

export default Search