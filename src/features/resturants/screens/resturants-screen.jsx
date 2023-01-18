import React, { useState } from 'react'
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";

export const ResturantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <View style={styles.header}>
          <Text>Text</Text>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  innerContainer: {
    backgroundColor: "green",
    width: "100%",
    padding: 16,
  },
  header: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
  search: {
    padding: 16,
  },
});