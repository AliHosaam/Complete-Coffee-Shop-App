import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import OrderItemCard from "./OrderItemCard";

interface OrderHistoryCardProps {
  NavigationHandler: any;
  OrderDate: string;
  CartItems: any;
  CartListPrice: string;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  NavigationHandler,
  OrderDate,
  CartItems,
  CartListPrice,
}) => {
  return (
    <View style={styles.CartContainer}>
      <View style={styles.CardHeader}>
        <View>
          <Text style={styles.HeaderTitle}>Order Time</Text>
          <Text style={styles.HeaderSubTitle}>{OrderDate}</Text>
        </View>

        <View style={styles.PriceContainer}>
          <Text style={styles.HeaderTitle}>Total Amount</Text>
          <Text style={styles.HeaderPrice}>$ {CartListPrice}</Text>
        </View>
      </View>

      <View style={styles.ListContainer}>
        {CartItems.map((data: any) => (
          <TouchableOpacity
            key={indexedDB.toString() + data.id}
            onPress={() => {
              NavigationHandler({
                index: data.index,
                id: data.id,
                type: data.type,
              });
            }}
          >
            <OrderItemCard
              type={data.type}
              name={data.name}
              imagelink_square={data.imagelink_square}
              special_ingredients={data.special_ingredients}
              prices={data.prices}
              ItemPrice={data.ItemPrice}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OrderHistoryCard;

const styles = StyleSheet.create({
  CartContainer: {
    gap: SPACING.space_10,
  },
  CardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: SPACING.space_20,
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  HeaderSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: "flex-end",
  },
  HeaderPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  ListContainer: {
    gap: SPACING.space_20,
  },
});
