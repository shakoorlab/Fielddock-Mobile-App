import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import { iconList } from "../constants/index";
import { useNavigation } from "@react-navigation/native";

const IconCard = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={iconList}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            {/* onPress={() => navigation.push("Datasheet")} */}
            <View
              style={{
                backgroundColor: "transparent",
                borderColor: "#797979", // Set the color of the border
                borderWidth: 1,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                borderRadius: 5,
                marginVertical: 16,
                alignItems: "center",
                paddingHorizontal: 8,
                paddingVertical: 26,
              }}
            >
              <Image
                source={item.image}
                style={{ width: 150, height: 150, resizeMode: "center" }}
              />
              <Text style={{ marginTop: 8, color: "#00e1b4" }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default IconCard;

//   const styles = StyleSheet.create({});
