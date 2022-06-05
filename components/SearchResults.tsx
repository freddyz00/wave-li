import styled from "styled-components/native";
import React from "react";
import TextInput from "./TextInput";
import SearchTypes from "./SearchTypes";
import EventCard from "./EventCard";
import { Event } from "../typings.d";

import { eventsState } from "../atoms/eventsStateAtom";
import { useRecoilValue } from "recoil";
import { Text, View } from "react-native";

import { categories } from "../utils/categories";

const SearchResults = () => {
  const events = useRecoilValue(eventsState);
  return (
    <Container>
      {/* Search Input */}
      <TextInput />
      {/* Search Types */}
      <SearchTypes />
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
  margin-top: 5px;
`;

const SectionHeader = styled.View`
  background-color: #fff;
  padding: 10px 0;
`;

const SectionHeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export default SearchResults;
