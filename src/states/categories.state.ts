import { atom, selector } from "recoil";

import { Category } from "types/category";
import categories from "../../mock/categories.json";

export const categoriesState = selector<Category[]>({
    key: "categories",
    get: () => categories,
});

export const selectedCategoryIdState = atom({
    key: "selectedCategoryId",
    default: "coffee",
});
