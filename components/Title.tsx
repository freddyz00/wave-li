import React from "react";
import styled from "styled-components/native";
import { COLORS } from "../theme/colors";

const Title = () => {
  return (
    <Wrapper>
      <Heading>Find Something</Heading>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin: 5px 0;
`;

const Heading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${COLORS.dark};
`;

export default Title;
