import { selector } from "recoil";

import { Product, Variant } from "types/product";
import { wait } from "utils/async";

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

export const recommendProductsState = selector<Product[]>({
    key: "recommendProducts",
    get: ({ get }) => {
        const products = get(productsState);
        return products.filter(p => p.sale);
    },
});
