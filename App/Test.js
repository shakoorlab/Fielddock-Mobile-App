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
// import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
// import { FocusedStatusBar } from "./components/FocusedStatusBar";
import { COLORS } from "./constants/theme";
import MainHeader from "./components/Headers/MainHeader";

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";

const Test = () => {
  const navigation = useNavigation();
  return (
    // <View className="bg-white h-full w-full">
    //   <StatusBar style="light" />

    //   {/* background */}
    //   <View className="h-full w-full absolute bg-background-custom"></View>

    //   {/* title and form */}
    //   <View className="h-full w-full flex justify-around pt-40 pb-10">
    //     {/* title */}
    //     <View className="flex items-center">
    //       <Animated.View entering={FadeInUp.duration(1000).springify()}>
    //         <Image
    //           source={require("../assets/images/hanger.png")}
    //           style={{
    //             width: wp("80%"), // 50% of screen width
    //             height: wp("60%"), // 50% of screen width, for a square logo
    //             resizeMode: "contain",
    //           }}
    //         />
    //       </Animated.View>
    //     </View>
    //   </View>
    // </View>
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FocusedStatusBar background={COLORS.primary} /> */}
      <StatusBar style="dark" />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<MainHeader />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          {/* //! this need to be changed to responsive heights */}
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ height: 800, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Test;
