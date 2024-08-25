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

/**
 * Tính toán giá cuối cùng của một sản phẩm dựa trên giá gốc, giảm giá và các tùy chọn đã chọn.
 *
 * Hàm này thực hiện việc tính toán giá cuối cùng của một sản phẩm bằng cách:
 *   1. Lấy giá gốc của sản phẩm.
 *   2. Áp dụng giảm giá (nếu có) theo loại giảm giá (cố định hoặc phần trăm).
 *   3. Tính toán thêm giá cho các tùy chọn đã chọn (nếu có).
 *
 * @param {Product} product - Đối tượng sản phẩm, bao gồm các thông tin về giá, giảm giá và các biến thể.
 * @param {SelectedOptions} options - Đối tượng chứa các tùy chọn đã chọn cho sản phẩm.
 * @returns {number} Giá cuối cùng của sản phẩm sau khi tính toán.
 */
export function calcFinalPrice(product: Product, options?: SelectedOptions): number {
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
