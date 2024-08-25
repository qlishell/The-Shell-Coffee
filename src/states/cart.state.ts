import { atom } from "recoil";

import { Cart } from "types/cart";

export const cartState = atom<Cart>({
    key: "cart",
    default: [],
});
