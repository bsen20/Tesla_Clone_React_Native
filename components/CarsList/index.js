import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";

import styles from "./style";
import cars from "./cars";
const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default CarsList;
