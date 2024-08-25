import { atom, selector } from "recoil";

import { Category } from "types/category";
import categories from "../../mock/categories.json";

/**
 * Recoil selector lưu trữ danh sách các danh mục sản phẩm.
 *
 * Selector này lấy danh sách các danh mục sản phẩm từ file `categories.json`.
 *
 * @returns {Category[]} - Mảng các đối tượng Category chứa thông tin về các danh mục sản phẩm.
 */
export const categoriesState = selector<Category[]>({
    key: "categories",
    get: () => categories,
});

/**
 * Recoil atom lưu trữ ID của danh mục sản phẩm được chọn.
 *
 * Atom này được sử dụng để quản lý và lưu trữ ID của danh mục sản phẩm đang được chọn.
 * Giá trị mặc định là "coffee".
 *
 * @type {string} - ID của danh mục sản phẩm được chọn.
 */
export const selectedCategoryIdState = atom({
    key: "selectedCategoryId",
    default: "coffee",
});
