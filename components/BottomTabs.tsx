import React, { useState } from "react";
import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { COLORS } from "../theme/colors";

const BottomTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Search");

  return (
    <BottomTabsContainer>
      <TouchableWithoutFeedback onPress={() => setSelectedTab("Discover")}>
        <View style={styles.icon}>
          <Ionicons
            name={selectedTab === "Discover" ? "compass" : "compass-outline"}
            size={28}
            color={
              selectedTab === "Discover"
                ? `${COLORS.primary}`
                : `${COLORS.dark}`
            }
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedTab("Search")}>
        <View style={styles.icon}>
          <Ionicons
            name={selectedTab === "Search" ? "search" : "search-outline"}
            size={28}
            color={
              selectedTab === "Search" ? `${COLORS.primary}` : `${COLORS.dark}`
            }
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedTab("New")}>
        <View style={styles.icon}>
          <Ionicons
            name={
              selectedTab === "New" ? "ios-duplicate" : "ios-duplicate-outline"
            }
            size={28}
            color={
              selectedTab === "New" ? `${COLORS.primary}` : `${COLORS.dark}`
            }
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedTab("Bookmarks")}>
        <View style={styles.icon}>
          <Ionicons
            name={
              selectedTab === "Bookmarks"
                ? "md-bookmarks"
                : "md-bookmarks-outline"
            }
            size={28}
            color={
              selectedTab === "Bookmarks"
                ? `${COLORS.primary}`
                : `${COLORS.dark}`
            }
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedTab("Profile")}>
        <View style={styles.icon}>
          <Ionicons
            name={selectedTab === "Profile" ? "person" : "person-outline"}
            size={28}
            color={
              selectedTab === "Profile" ? `${COLORS.primary}` : `${COLORS.dark}`
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </BottomTabsContainer>
  );
};

const BottomTabsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: lightgray;
  background-color: #ffffff;
`;

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
});

export default BottomTabs;
