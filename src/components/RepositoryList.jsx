import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
} from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories, {
  useRepositoriesWithQuery,
} from "../hooks/useRepositories";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  // const { repositories } = useRepositories();
  const { data, loading } = useRepositoriesWithQuery();

  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  if (loading) return <Text>Loading ...</Text>;

  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={repositoryNodes}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default RepositoryList;
