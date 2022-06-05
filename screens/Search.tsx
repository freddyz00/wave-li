import styled from "styled-components/native";
import BottomTabs from "../components/BottomTabs";
import SearchResults from "../components/SearchResults";
import Title from "../components/Title";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { eventsState } from "../atoms/eventsStateAtom";
import groupBy from "../utils/groupBy";
import { sortByCategories } from "../utils/categories";

const Search = () => {
  const setEvents = useSetRecoilState(eventsState);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://waveli-coding-challenge.herokuapp.com/events`
        );
        const events = await res.json();
        const groupedEventsObj = groupBy(events, "category");
        const groupedEvents: any = [];
        for (const category in groupedEventsObj) {
          groupedEvents.push({
            category,
            data: groupedEventsObj[category],
          });
        }
        setEvents(sortByCategories(groupedEvents));
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
        {/* Search Results */}
        <SearchResults />
      </Wrapper>

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
  flex: 1;
`;

export default Search;
