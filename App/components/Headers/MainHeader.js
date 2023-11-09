import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { assets } from "../../constants/assets";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInUp,
  FadeInRight,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MainHeader = () => {
  return (
    <View
      style={{
        backgroundColor: "#181818",
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Animated.View entering={FadeInLeft.duration(1000).springify()}>
          <Image
            source={assets.logo} //logo on top right of screen
            resizeMode="contain"
            style={{ width: 150, height: 25 }}
          />
        </Animated.View>
        <View>
          <Animated.View entering={FadeInRight.duration(1000).springify()}>
            <FontAwesomeIcon
              icon={faCircleUser}
              size={29}
              color={"#797979"}
              style={{
                width: "100%", // These styles may not be necessary for FontAwesomeIcon
                height: "100%", // You can adjust the size with the size prop
              }}
            />
          </Animated.View>
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Animated.View entering={FadeInUp.duration(1000).springify()}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.white,
            }}
          >
            Hello User!
          </Text>

          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              color: COLORS.white,
              marginTop: SIZES.base / 2,
            }}
          >
            Welcome to FieldDock
          </Text>
        </Animated.View>
      </View>
      {/* diagram */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/drone.png")}
          style={{
            width: wp("80%"),
            height: wp("60%"),
            resizeMode: "contain",
          }}
        />
      </View>
    </View>
  );
};

export default MainHeader;
