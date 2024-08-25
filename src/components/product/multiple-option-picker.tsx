import React, { FC } from "react";
import { Box, Checkbox, Text } from "zmp-ui";

import { DisplayPriceChange } from "components/display/price-change";
import { MultipleOptionVariant, Product } from "types/product";

export const MultipleOptionPicker: FC<{
    product: Product;
    variant: MultipleOptionVariant;
    value: string[];
    onChange: (value: string[]) => void;
}> = ({ product, variant, value, onChange }) => {
    return (
        <Box my={8} className="space-y-2">
            <Text.Title size="small">{variant.label}</Text.Title>
            <Checkbox.Group
                className="flex flex-col space-y-2"
                name={variant.id}
                options={variant.options.map(option => ({
                    className: "last-of-type:mr-2",
                    value: option.id,
                    label: (
                        <div className="w-full">
                            <span className="flex-1">{option.label}</span>
                            <span className="absolute right-0">
                                <DisplayPriceChange option={option}>{product}</DisplayPriceChange>
                            </span>
                        </div>
                    ) as any,
                }))}
                value={value}
                defaultValue={value}
                onChange={(selectedOptions: string[]) => {
                    onChange(selectedOptions);
                }}
            />
        </Box>
    );
};
