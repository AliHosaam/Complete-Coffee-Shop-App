import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useStore } from "../store/store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { COLORS, SPACING } from "../theme/theme";
import HeaderBar from "../components/HeaderBar";
import EmptyListAnimation from "../components/EmptyListAnimation";
import PaymentFooter from "../components/PaymentFooter";
import CartItem from "../components/CartItem";

const CartScreen = ({ navigation }: any) => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const IncrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity
  );
  const DecrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity
  );
  const CalculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const tabBarHeight = useBottomTabBarHeight();

  const buttonPressHandler = () => {
    navigation.push("Payment", { amount: CartPrice });
  };

  const IncrementCartItemQuantityHandler = (id: string, size: string) => {
    IncrementCartItemQuantity(id, size);
    CalculateCartPrice();
  };

  const DecrementCartItemQuantityHandler = (id: string, size: string) => {
    DecrementCartItemQuantity(id, size);
    CalculateCartPrice();
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View
          style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}
        >
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />

            {CartList.length === 0 ? (
              <EmptyListAnimation title="Cart is Empty" />
            ) : (
              <View style={styles.ListItemContainer}>
                {CartList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push("Details", {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}
                  >
                    <CartItem
                      id={data.id}
                      name={data.name}
                      roasted={data.roasted}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      type={data.type}
                      prices={data.prices}
                      incrementCartItemQuantityHandler={
                        IncrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        DecrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          <View>
            {CartList.length !== 0 ? (
              <PaymentFooter
                buttonTitle="Pay"
                price={{ price: CartPrice, currency: "$" }}
                buttonPressHandler={() => {
                  buttonPressHandler;
                }}
              />
            ) : (
              <></>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: "space-between",
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
