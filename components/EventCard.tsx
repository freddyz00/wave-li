import React from "react";
import styled from "styled-components/native";

import { Event } from "../typings";
import { COLORS } from "../theme/colors";

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
          <GoingAndInterested>
            {props.attending[0]?.picture && (
              <Avatar source={{ uri: props.attending[0]?.picture }} />
            )}
            <TextPrimary>
              {props.attending[0]?.first_name} and {props.num_attending - 1}{" "}
              others are going.
            </TextPrimary>
          </GoingAndInterested>
        )}
        {props.num_interested > 0 && (
          <GoingAndInterested>
            {props.interested[0]?.picture && (
              <Avatar source={{ uri: props.interested[0]?.picture }} />
            )}
            <TextPrimary>
              {props.interested[0]?.first_name} and {props.num_interested - 1}{" "}
              others are interested.
            </TextPrimary>
          </GoingAndInterested>
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
  margin-bottom: 15px;
  background-color: white;
  border: 1px solid #d1d1d1;
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
  color: ${COLORS.dark};
`;

const Avatar = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  margin-right: 10px;
`;

const GoingAndInterested = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const TextPrimary = styled.Text`
  margin: 5px 0;
  color: ${COLORS.text};
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
  background-color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};
`;

const ButtonSecondary = styled.TouchableOpacity`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #fff;
  border: 2px solid ${COLORS.primary}
  margin-left: 10px;
`;

const ButtonTextPrimary = styled.Text`
  color: white;
  font-weight: bold;
`;
const ButtonTextSecondary = styled.Text`
  color: ${COLORS.primary};
  font-weight: bold;
`;

export default EventCard;
