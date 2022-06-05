import styled from "styled-components/native";
import React from "react";
import EventCard from "./EventCard";

import { eventsState } from "../atoms/eventsStateAtom";
import { useRecoilValue } from "recoil";

import { categories } from "../utils/categories";

const SearchResults = () => {
  const events = useRecoilValue(eventsState);
  return (
    <Container>
      {/* Search Results */}
      {events.length > 0 && (
        <ResultsList
          sections={events}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => <EventCard {...item} />}
          renderSectionHeader={({ section: { category } }: any) => (
            <SectionHeader>
              <SectionHeaderText>{categories[category]}</SectionHeaderText>
            </SectionHeader>
          )}
        />
      )}
    </Container>
  );
};

const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

const ResultsList = styled.SectionList`
  margin-top: 10px;
  padding: 0 25px;
`;

const SectionHeader = styled.View`
  background-color: #fff;
  padding-bottom: 10px;
`;

const SectionHeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export default SearchResults;
