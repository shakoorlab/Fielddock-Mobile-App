import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
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
                marginTop: 20, //?!maybe remove
                marginVertical: 15,
                alignItems: "center",
                paddingHorizontal: 15,
                paddingVertical: 26,
              }}
            >
              {/* Directly use the SVG component */}
              <item.image width="150" height="65" />
              <Text
                style={{
                  marginTop: 20,
                  marginBottom: -10,
                  color: "#797979",
                  fontWeight: "bold",
                }}
              >
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
