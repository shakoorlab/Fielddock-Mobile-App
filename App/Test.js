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
              height: 800,
              backgroundColor: "#181818", //originall COLORS.white
              paddingHorizontal: SIZES.base * 2,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 22,
                color: "#FFF",
              }}
            >
              Dashboard
            </Text>
            <IconsCard />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Test;
