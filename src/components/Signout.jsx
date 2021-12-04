import React from 'react';
import AppBarTab from "./AppBarTab";
import { Pressable } from "react-native";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from '@apollo/client';

const Signout = () => {
    const authStorage = useAuthStorage();
    const client = useApolloClient();

    const signOutclickHandler = async() => {
        await authStorage.removeAccessToken();
        client.resetStore();
    }
  return (
    <Pressable onPress={signOutclickHandler}>
      <AppBarTab>Sign out</AppBarTab>
    </Pressable>
  );
};

export default Signout;
