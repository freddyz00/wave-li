import styled from "styled-components/native";
import BottomTabs from "../components/BottomTabs";
import SearchResults from "../components/SearchResults";
import Title from "../components/Title";
import { useEffect } from "react";
import groupBy from "../utils/groupBy";
import { sortByCategories } from "../utils/categories";
import TextInput from "../components/TextInput";
import SearchTypes from "../components/SearchTypes";
import { useRecoilState } from "recoil";
import { allEventsState } from "../atoms/allEventsStateAtom";
import { matchedEventsState } from "../atoms/matchedEventsStateAtom";

const Search = () => {
  const [allEvents, setAllEvents] = useRecoilState(allEventsState);
  const [matchedEvents, setMatchedEvents] = useRecoilState(matchedEventsState);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://waveli-coding-challenge.herokuapp.com/events`
        );
        const events = await res.json();
        const groupedEventsByKey = groupBy(events, "category");
        const groupedEvents: any = Object.keys(groupedEventsByKey).map(
          (category) => ({
            category,
            data: groupedEventsByKey[category].sort(
              (a: any, b: any) =>
                Date.parse(a.start_timestamp) - Date.parse(b.start_timestamp)
            ),
          })
        );
        setAllEvents(groupedEvents);
        setMatchedEvents(groupedEvents);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Container>
      <Wrapper>
        {/* Title */}
        <Title />

        {/* Search Box */}
        <TextInput />

        {/* Search Types */}
        <SearchTypes />
      </Wrapper>

      {/* Search Results */}
      <SearchResults />

      {/* Bottom Tabs */}
      <BottomTabs />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Wrapper = styled.View`
  padding: 0 25px;
`;

export default Search;
