import { atom } from "recoil";

import { Cart } from "types/cart";

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
