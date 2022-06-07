import styled from "styled-components/native";
import BottomTabs from "../components/BottomTabs";
import SearchResults from "../components/SearchResults";
import Title from "../components/Title";
import { useEffect } from "react";
import groupBy from "../utils/groupBy";
import { sortByCategories, sortByDate } from "../utils/sort";
import TextInput from "../components/TextInput";
import SearchTypes from "../components/SearchTypes";
import { useSetRecoilState } from "recoil";
import { allEventsState } from "../atoms/allEventsStateAtom";
import { matchedEventsState } from "../atoms/matchedEventsStateAtom";
import { COLORS } from "../theme/colors";

const Search = () => {
  const setAllEvents = useSetRecoilState(allEventsState);
  const setMatchedEvents = useSetRecoilState(matchedEventsState);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://waveli-coding-challenge.herokuapp.com/events`
        );
        const events = await res.json();
        const groupedEventsByKey = groupBy(events, "category");
        const groupedEvents: any = sortByCategories(
          Object.keys(groupedEventsByKey).map((category) => ({
            category,
            data: sortByDate(groupedEventsByKey[category]),
          }))
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
