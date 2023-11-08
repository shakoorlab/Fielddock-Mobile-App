import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />

      {/* background */}
      <View className="h-full w-full absolute bg-background-custom"></View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.View entering={FadeInUp.duration(1000).springify()}>
            <Image
              source={require("../../assets/images/FieldDock-Logo.png")}
              style={{
                width: wp("80%"), // 50% of screen width
                height: wp("50%"), // 50% of screen width, for a square logo
                resizeMode: "contain",
              }}
            />
          </Animated.View>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            className="border border-fd-custom bg-black/5 p-5 rounded-md w-full"
            entering={FadeInDown.duration(1000).springify()}
          >
            <TextInput placeholder="Username" placeholderTextColor={"white"} />
          </Animated.View>
          <Animated.View
            className="border border-fd-custom bg-black/5 p-5 rounded-md w-full"
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <TextInput placeholder="Email" placeholderTextColor={"white"} />
          </Animated.View>
          <Animated.View
            className="border border-fd-custom bg-black/5 p-5 rounded-md w-full mb-3"
            entering={FadeInDown.delay(400).duration(1000).springify()}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"white"}
              secureTextEntry
            />
          </Animated.View>

          {/* SignUp button */}
          <Animated.View className="w-full">
            <TouchableOpacity
              className="border border-orange-custom w-full bg-transparent p-3 rounded-md mb-3"
              entering={FadeInDown.delay(600).duration(1000).springify()}
            >
              <Text className="text-xl font-bold text-white text-center">
                Sign Up
              </Text>
            </TouchableOpacity>
          </Animated.View>

          {/* directing to signing up */}
          <Animated.View
            className="flex-row justify-center "
            entering={FadeInDown.delay(800).duration(1000).springify()}
          >
            <Text className="text-gray-500"> Already have an account? </Text>
            {/* link to sign up page */}
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
