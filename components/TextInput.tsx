import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const TextInput = () => {
  const [input, setInput] = useState<string>("");

  const handleChangeText = (value: string): void => {
    setInput(value);
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
