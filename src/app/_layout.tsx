import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";
import CustomHeader from "../components/CustomHeader";
import React from "react";
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";



export const unstable_settings = {
  initialRouteName: 'index'
}


export default function RootLayoutNav() {
 
  return (
    <GestureHandlerRootView>
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{header: () => <CustomHeader/>}}/>
      </Stack>
      </BottomSheetModalProvider>
      </GestureHandlerRootView>
  );
}
