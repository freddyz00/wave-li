import React, { useState } from 'react'
import styled from 'styled-components/native'

import { Ionicons } from '@expo/vector-icons'; 
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback,  Text, View } from 'react-native';

const BottomTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Search")

  return (
    <BottomTabsContainer>
      <TouchableWithoutFeedback onPress={()=>setSelectedTab("Discover")}>
        <View style={styles.icon}>
          <Ionicons name="compass-outline" size={28} color={selectedTab === "Discover" ? "blue" : "black"} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=>setSelectedTab("Search")}>
        <View style={styles.icon}>
          <Ionicons name="search" size={28} color={selectedTab === "Search" ? "blue" : "black"} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=>setSelectedTab("New")}>
        <View style={styles.icon}>
          <Ionicons name="ios-duplicate-outline" size={28} color={selectedTab === "New" ? "blue" : "black"} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=>setSelectedTab("Bookmarks")}>
        <View style={styles.icon}>
        <Ionicons name="md-bookmarks-outline" size={28} color={selectedTab === "Bookmarks" ? "blue" : "black"} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=>setSelectedTab("Profile")}>
        <View style={styles.icon}>
          <Ionicons name="person-outline" size={28} color={selectedTab === "Profile" ? "blue" : "black"} />
        </View>
      </TouchableWithoutFeedback>
      
    </BottomTabsContainer>
  )
}

const BottomTabsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: lightgray;
  
`

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  }
})

export default BottomTabs