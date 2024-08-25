import { atom, selector } from "recoil";

import { Cart } from "types/cart";
import { calcFinalPrice } from "utils/product";

/**
 * Recoil atom lưu trữ trạng thái giỏ hàng.
 *
 * Atom này được sử dụng để quản lý và lưu trữ danh sách các sản phẩm trong giỏ hàng.
 * Giá trị mặc định của atom là một mảng rỗng, biểu thị giỏ hàng trống.
 *
 * @type {Cart} - Đối tượng Cart chứa danh sách các sản phẩm trong giỏ hàng.
 */
export const cartState = atom<Cart>({
    key: "cart",
    default: [],
});

/**
 * Tính toán tổng giá của các mặt hàng trong giỏ hàng.
 *
 * @returns {number} - Tổng giá các mặt hàng trong giỏ hàng.
 */
export const totalPriceState = selector({
    key: "totalPrice",
    get: ({ get }) => {
        const cart = get(cartState);
        return cart.reduce((total, item) => total + item.quantity * calcFinalPrice(item.product, item.options), 0);
    },
});

/**
 * Tính toán tổng số lượng mặt hàng trong giỏ hàng.
 *
 * @returns {number} - Tổng số lượng mặt hàng trong giỏ hàng.
 */
export const totalQuantityState = selector({
    key: "totalQuantity",
    get: ({ get }) => {
        const cart = get(cartState);
        return cart.reduce((total, item) => total + item.quantity, 0);
    },
});
