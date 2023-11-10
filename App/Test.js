import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import MainHeader from "./components/Headers/MainHeader";
import IconsCard from "./components/IconsCard";
import { SIZES } from "./constants/theme";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInUp,
  FadeInRight,
} from "react-native-reanimated";

const Test = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#181818" }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<MainHeader />}
          />
        </View>

        {/* //! this need to be changed to responsive heights */}
        <View style={{ backgroundColor: "#181818" }} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              paddingHorizontal: SIZES.base * 2,
            }}
          >
            <Animated.View entering={FadeInLeft.duration(1000).springify()}>
              <View
                style={{
                  borderBottomWidth: 1, // Set the border thickness
                  borderBottomColor: "#00e1b4", // Set the border color
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#FFF",
                    paddingBottom: 8, // Space between text and border, adjust as needed
                  }}
                >
                  Dashboard
                </Text>
              </View>
            </Animated.View>
            <IconsCard />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Test;
