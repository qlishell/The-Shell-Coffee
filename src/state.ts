import { atom, selector } from "recoil";
import { Cart } from "types/cart";
import { Category } from "types/category";
import { Product, Variant } from "types/product";
import { wait } from "utils/async";
import { getUserInfo } from "zmp-sdk";
import categories from "../mock/categories.json";

export const userState = selector({
    key: "user",
    get: async () => {
        try {
            const { userInfo } = await getUserInfo({ autoRequestPermission: true });
            return userInfo;
        } catch (error) {
            return {
                id: "",
                avatar: "",
                name: "Người dùng Zalo",
            };
        }
    },
});

export const categoriesState = selector<Category[]>({
    key: "categories",
    get: () => categories,
});

export const selectedCategoryIdState = atom({
    key: "selectedCategoryId",
    default: "coffee",
});

export const productsState = selector<Product[]>({
    key: "products",
    get: async () => {
        await wait(2000);
        const products = (await import("../mock/products.json")).default;
        const variants = (await import("../mock/variants.json")).default as Variant[];
        return products.map(
            product =>
                ({
                    ...product,
                    variants: variants.filter(variant => product.variantId.includes(variant.id)),
                }) as Product,
        );
    },
});

export const cartState = atom<Cart>({
    key: "cart",
    default: [],
});

export const recommendProductsState = selector<Product[]>({
    key: "recommendProducts",
    get: ({ get }) => {
        const products = get(productsState);
        return products.filter(p => p.sale);
    },
});
