import { selector } from "recoil";

import { Product, Variant } from "types/product";
import { wait } from "utils/async";

/**
 * Recoil selector tìm nạp và xử lý dữ liệu sản phẩm.
 *
 * @returns {Promise<Product[]>} - Tạo một mảng mới với các đối tượng là kiểu `Product`.
 */
export const productsState = selector<Product[]>({
    key: "products",
    get: async () => {
        await wait(2000);
        const products = (await import("../../mock/products.json")).default;
        const variants = (await import("../../mock/variants.json")).default as Variant[];
        return products.map(
            product =>
                ({
                    ...product,
                    variants: variants.filter(variant => product.variantId.includes(variant.id)),
                }) as Product,
        );
    },
});

/**
 * Recoil selector truy xuất và lọc các sản phẩm được đề xuất.
 *
 * @param {object} { get } - get để truy cập vào các selector khác.
 * @returns {Product[]} - Mảng `Product` đại diện cho các sản phẩm được đề xuất.
 */
export const recommendProductsState = selector<Product[]>({
    key: "recommendProducts",
    get: ({ get }) => {
        const products = get(productsState);
        return products.filter(p => p.sale);
    },
});
