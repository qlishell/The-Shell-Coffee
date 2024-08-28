import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Box, Button, Header, Page, Text } from "zmp-ui";

import { FinalPrice } from "components/display/final-price";
import { MultipleOptionPicker } from "components/product/multiple-option-picker";
import { getDefaultOptions } from "components/product/picker";
import { QuantityPicker } from "components/product/quantity-picker";
import { SingleOptionPicker } from "components/product/single-option-picker";
import { cartState } from "states/cart.state";
import { productDetailState } from "states/products.state";
import { SelectedOptions } from "types/cart";
import { isIdentical } from "utils/product";

const Detail: FC<{ selected: { options: SelectedOptions; quantity: number } }> = ({ selected }) => {
    const { productId } = useParams();
    const product = useRecoilValue(productDetailState(Number(productId)));

    const [options, setOptions] = useState<SelectedOptions>(selected ? selected.options : getDefaultOptions(product));
    const [quantity, setQuantity] = useState(1);
    const setCart = useSetRecoilState(cartState);

    const addToCart = () => {
        if (product) {
            setCart(cart => {
                let res = [...cart];
                if (selected) {
                    // updating an existing cart item, including quantity and size, or remove it if new quantity is 0
                    const editing = cart.find(
                        item => item.product.id === product.id && isIdentical(item.options, selected.options),
                    )!;
                    if (quantity === 0) {
                        res.splice(cart.indexOf(editing), 1);
                    } else {
                        const existed = cart.find(
                            (item, i) =>
                                i !== cart.indexOf(editing) &&
                                item.product.id === product.id &&
                                isIdentical(item.options, options),
                        )!;
                        res.splice(cart.indexOf(editing), 1, {
                            ...editing,
                            options,
                            quantity: existed ? existed.quantity + quantity : quantity,
                        });
                        if (existed) {
                            res.splice(cart.indexOf(existed), 1);
                        }
                    }
                } else {
                    // adding new item to cart, or merging if it already existed before
                    const existed = cart.find(
                        item => item.product.id === product.id && isIdentical(item.options, options),
                    );
                    if (existed) {
                        res.splice(cart.indexOf(existed), 1, {
                            ...existed,
                            quantity: existed.quantity + quantity,
                        });
                    } else {
                        res = res.concat({
                            product: product,
                            options,
                            quantity,
                        });
                    }
                }
                return res;
            });
        }
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <Page className="flex flex-col">
            <Header title="Xem chi tiết" />
            <Box className="py-3 px-4 overflow-auto">
                {/* Hiển thị thêm các thông tin khác */}
                <img className="h-auto w-full " src={product.image} alt="cart-item-image" />
                <Box className="space-y-5 mt-2">
                    <Box className="flex justify-between">
                        <Text.Title>{product.name}</Text.Title>
                        <Text.Title size="xLarge" className="">
                            <FinalPrice options={options}>{product}</FinalPrice>
                        </Text.Title>
                    </Box>
                    <Box className="flex gap-2">
                        {product.categoryId.map((item, index) => (
                            <Text key={index} className="text-sky-500 rounded-md">
                                #{item}
                            </Text>
                        ))}
                    </Box>
                    <Text>{product.description}</Text>
                    {product.variants &&
                        product.variants.map(variant =>
                            variant.type === "single" ? (
                                <SingleOptionPicker
                                    key={variant.id}
                                    variant={variant}
                                    value={options[variant.id] as string}
                                    onChange={selectedOption =>
                                        setOptions(prevOptions => ({
                                            ...prevOptions,
                                            [variant.id]: selectedOption,
                                        }))
                                    }
                                />
                            ) : (
                                <MultipleOptionPicker
                                    key={variant.id}
                                    product={product}
                                    variant={variant}
                                    value={options[variant.id] as string[]}
                                    onChange={selectedOption =>
                                        setOptions(prevOptions => ({
                                            ...prevOptions,
                                            [variant.id]: selectedOption,
                                        }))
                                    }
                                />
                            ),
                        )}
                    <QuantityPicker value={quantity} onChange={setQuantity} />
                    {selected ? (
                        <Button
                            variant={quantity > 0 ? "primary" : "secondary"}
                            type={quantity > 0 ? "highlight" : "neutral"}
                            fullWidth
                            onClick={addToCart}
                        >
                            {quantity > 0 ? (selected ? "Cập nhật giỏ hàng" : "Thêm vào giỏ hàng") : "Xoá"}
                        </Button>
                    ) : (
                        <Button disabled={!quantity} variant="primary" type="highlight" fullWidth onClick={addToCart}>
                            Thêm vào giỏ hàng
                        </Button>
                    )}
                </Box>
            </Box>
        </Page>
    );
};

export default Detail;
