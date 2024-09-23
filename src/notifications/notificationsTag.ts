import { OneSignal } from "react-native-onesignal";

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag("cart_items_count", itemsCount);
}
