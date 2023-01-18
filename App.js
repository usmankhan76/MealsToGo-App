import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ResturantsScreen } from "./src/features/resturants/screens/resturants-screen";

// const isAndorid = Platform.OS === "android";
// const isIOS = Platform.OS === "ios";

export default function App() {
  return (
    <>
      <ResturantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
