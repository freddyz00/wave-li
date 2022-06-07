import styled from "styled-components/native";
import React from "react";
import EventCard from "./EventCard";

import { useRecoilValue } from "recoil";

import { categories } from "../utils/categories";
import { Text, View } from "react-native";
import { matchedEventsState } from "../atoms/matchedEventsStateAtom";

const SearchResults = () => {
  const matchedEvents = useRecoilValue(matchedEventsState);
  return (
    <Container>
      {/* Search Results */}
      {matchedEvents.length > 0 ? (
        <ResultsList
          sections={matchedEvents}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => <EventCard {...item} />}
          renderSectionHeader={({ section: { category } }: any) => (
            <SectionHeader>
              <SectionHeaderText>{categories[category]}</SectionHeaderText>
            </SectionHeader>
          )}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No events match your search.</Text>
        </View>
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
