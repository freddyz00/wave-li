import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const EventCard = () => {
  return (
    <Card>
      {/* Image */}
      <EventImage source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} />
      
      <EventDetails>
        {/* Event time and location */}
        <TextSecondary>TODAY 10am 2pm</TextSecondary>
        {/* Event title */}
        <EventHeading>Bottomless misosas brunch</EventHeading>

        {/* Event description */}
        <TextPrimary>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius architecto ad eos porro cupiditate similique illum dolorum quam facere accusantium incidunt numquam, tempore ut temporibus pariatur.</TextPrimary>
        {/* People interested and attending */}
        <TextPrimary>Me and 122 others are going.</TextPrimary>
        <TextPrimary>Me and 111 others are interested.</TextPrimary>
        
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
  )
}

const Card = styled.View`
  border-radius: 10px;
  border: 1px solid lightgray;
  margin-bottom: 15px;
`

const EventImage = styled.Image`
  height: 200px;
  resize-mode: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const EventDetails = styled.View`
  padding: 0 8px;
`

const EventHeading = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`

const TextPrimary = styled.Text`
  margin-top: 5px;
`

const TextSecondary = styled.Text`
  margin-top: 10px;
  color: gray
`

const ButtonsContainer = styled.View`
  flex-direction: row;
  margin: 10px 0
`

const ButtonPrimary = styled.TouchableOpacity`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #333;
  border: 1px solid #333;
`

const ButtonSecondary = styled.TouchableOpacity`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid gray
  margin-left: 10px;
`

const ButtonTextPrimary = styled.Text`
  color: white;
`
const ButtonTextSecondary = styled.Text``

export default EventCard