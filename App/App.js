import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login/LoginScreen";
import SignupScreen from "./screens/signup/SignupScreen";
import Test from "./Test";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* below sets what page app opens on, and removes the header */}
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
