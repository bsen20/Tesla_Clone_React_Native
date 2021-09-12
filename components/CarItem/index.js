import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./style";
const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.heading}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custon Order"}
          onPress={() => console.warn("Custom order was pressed")}
        />
        <StyledButton
          type="secondary"
          content={"Exixting Inventory"}
          onPress={() => console.warn("Exixting Inventory was pressed")}
        />
      </View>
    </View>
  );
};

export default CarItem;
