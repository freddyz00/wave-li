import React from "react";
import styled from "styled-components/native";
import { Event } from "../typings.d";

const EventCard = (props: Event) => {
  return (
    <Card>
      {/* Image */}
      <EventImage source={{ uri: props.picture }} />

      <EventDetails>
        {/* Event time and location */}
        <TextSecondary>
          {props.start_timestamp} {props.location}
        </TextSecondary>
        {/* Event title */}
        <EventHeading>{props.title}</EventHeading>

        {/* Event description */}
        <TextPrimary>{props.description}</TextPrimary>
        {/* People interested and attending */}
        <TextPrimary>{props.num_attending} are going.</TextPrimary>
        <TextPrimary>{props.num_interested} are interested.</TextPrimary>

        {/* Buttons */}
        <ButtonsContainer>
          <ButtonPrimary>
            <ButtonTextPrimary>ATTEND</ButtonTextPrimary>
          </ButtonPrimary>
          <ButtonSecondary>
            <ButtonTextSecondary>I'M INTERESTED</ButtonTextSecondary>
          </ButtonSecondary>
        </ButtonsContainer>
      </EventDetails>
    </Card>
  );
};

const Card = styled.View`
  border-radius: 10px;
  border: 1px solid lightgray;
  margin-bottom: 15px;
`;

const EventImage = styled.Image`
  height: 200px;
  resize-mode: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const EventDetails = styled.View`
  padding: 0 8px;
`;

const EventHeading = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`;

const TextPrimary = styled.Text`
  margin-top: 5px;
`;

const TextSecondary = styled.Text`
  margin-top: 10px;
  color: gray;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

const ButtonPrimary = styled.TouchableOpacity`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #333;
  border: 1px solid #333;
`;

const ButtonSecondary = styled.TouchableOpacity`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid gray
  margin-left: 10px;
`;

const ButtonTextPrimary = styled.Text`
  color: white;
`;
const ButtonTextSecondary = styled.Text``;

export default EventCard;
