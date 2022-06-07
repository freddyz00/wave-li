import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { allEventsState } from "../atoms/allEventsStateAtom";
import { matchedEventsState } from "../atoms/matchedEventsStateAtom";
import { Event } from "../typings";

const TextInput = () => {
  const [input, setInput] = useState<string>("");
  const allEvents = useRecoilValue(allEventsState);
  const [_, setMatchedEvents] = useRecoilState(matchedEventsState);

  const handleChangeText = (value: string) => {
    setInput(value);
    if (!value) {
      setMatchedEvents(allEvents);
    } else {
      const matchedEvents: { category: string; data: Event[] }[] =
        allEvents.map((eventGroup: { category: string; data: Event[] }) => ({
          ...eventGroup,
          data: eventGroup.data.filter((event: Event) =>
            event.title.toLowerCase().includes(value.toLowerCase())
          ),
        }));
      setMatchedEvents(matchedEvents);
    }
  };

  return (
    <Container>
      <Ionicons name="search" size={20} color="black" />
      <Input
        placeholder="Search"
        value={input}
        onChangeText={handleChangeText}
      />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  margin: 5px 0;
  border: 1px solid lightgray;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
`;

const Input = styled.TextInput`
  padding: 10px;
  flex: 1;
`;

export default TextInput;
