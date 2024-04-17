import { ImageProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";
import ImageBackgroundInfo from "./ImageBackgroundInfo";

interface FavoritesItemCardProps {
  id: string;
  name: string;
  type: string;
  average_rating: number;
  imagelink_square: ImageProps;
  special_ingredient: string;
  ingredients: string;
  rating_count: number;
  roasted: string;
  description: string;
  favorite: boolean;
  ToggleFavoriteItem: any;
}

const FavoritesItemCard: React.FC<FavoritesItemCardProps> = ({
  id,
  name,
  type,
  average_rating,
  imagelink_square,
  ingredients,
  rating_count,
  roasted,
  description,
  favorite,
  ToggleFavoriteItem,
}) => {
  return (
    <View style={styles.CardContainer}>
      <ImageBackgroundInfo
        EnableBackHandler={false}
        imagelink_portrait={imagelink_square}
        type={type}
        id={id}
        favorite={favorite}
        name={name}
        special_ingredient={ingredients}
        ingredients={ingredients}
        average_rating={average_rating}
        rating_count={rating_count}
        roasted={roasted}
        ToggleFavorite={ToggleFavoriteItem}
      />

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.ContainerLinearGradient}
      >
        <Text style={styles.DescriptionTitle}>Description</Text>
        <Text style={styles.DescriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  );
};

export default FavoritesItemCard;

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: "hidden",
  },
  ContainerLinearGradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },
  DescriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  DescriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});
