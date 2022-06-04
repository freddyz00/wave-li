import React from 'react'
import styled from 'styled-components/native'

import { Ionicons } from '@expo/vector-icons'; 

const BottomTabs = () => {
  return (
    <BottomTabsContainer>
      <Ionicons name="compass-outline" size={28} color="black" />
      <Ionicons name="search" size={28} color="black" />
      <Ionicons name="ios-duplicate-outline" size={28} color="black" />
      <Ionicons name="md-bookmarks-outline" size={28} color="black" />
      <Ionicons name="person-outline" size={28} color="black" />
    </BottomTabsContainer>
  )
}

const BottomTabsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: gray;
  padding-top: 15px;
`

export default BottomTabs