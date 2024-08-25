import { SelectedOptions } from "types/cart";
import { Option, Product } from "types/product";

/**
 * Tạo URL cho hình ảnh giả từ tên tệp.
 *
 * @param {string} filename
 * @returns {string}
 */
export function getDummyImage(filename: string): string {
    return `https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/${filename}`;
}

export function calcFinalPrice(product: Product, options?: SelectedOptions) {
    let finalPrice = product.price;
    if (product.sale) {
        if (product.sale.type === "fixed") {
            finalPrice = product.price - product.sale.amount;
        } else {
            finalPrice = product.price * (1 - product.sale.percent);
        }
    }

    if (options && product.variants) {
        const selectedOptions: Option[] = [];
        for (const variantKey in options) {
            const variant = product.variants.find(v => v.id === variantKey);
            if (variant) {
                const currentOption = options[variantKey];
                if (typeof currentOption === "string") {
                    const selected = variant.options.find(o => o.id === currentOption);
                    if (selected) {
                        selectedOptions.push(selected);
                    }
                } else {
                    const selecteds = variant.options.filter(o => currentOption.includes(o.id));
                    selectedOptions.push(...selecteds);
                }
            }
        }
        finalPrice = selectedOptions.reduce((price, option) => {
            if (option.priceChange) {
                if (option.priceChange.type == "fixed") {
                    return price + option.priceChange.amount;
                } else {
                    return price + product.price * option.priceChange.percent;
                }
            }
            return price;
        }, finalPrice);
    }
    return finalPrice;
}
