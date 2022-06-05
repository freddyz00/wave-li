import React from "react";
import styled from "styled-components/native";
import { Event } from "../typings";

const EventCard = (props: Event) => {
  return (
    <Card>
      {/* Image */}
      <EventImage source={{ uri: props.picture }} />

      <EventDetails>
        {/* Event time and location */}
        <TextSecondary>
          {new Date(props.start_timestamp).toLocaleDateString()}
          {" • "}
          {new Date(props.start_timestamp).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          {" - "}
          {new Date(props.end_timestamp).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          {" • "}
          {props.location}
        </TextSecondary>
        {/* Event title */}
        <EventHeading>{props.title}</EventHeading>

        {/* Event description */}
        <TextPrimary>{props.description}</TextPrimary>
        {/* People interested and attending */}
        {props.num_attending > 0 && (
          <TextPrimary>
            {props.attending[0]?.first_name} and {props.num_attending - 1}{" "}
            others are going.
          </TextPrimary>
        )}
        {props.num_interested > 0 && (
          <TextPrimary>
            {props.interested[0]?.first_name} and {props.num_interested - 1}{" "}
            others are interested.
          </TextPrimary>
        )}

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
  font-weight: bold;
  font-size: 12.5px;
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
