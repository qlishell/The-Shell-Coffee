import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { Box } from "zmp-ui";

import { ProductItem } from "components/product/item";
import { Section } from "components/UI/section";
import { ProductItemSkeleton } from "components/UI/skeletons";
import { productsState } from "states/products.state";

const ProductListContent: FC = () => {
    const products = useRecoilValue(productsState);

    return (
        <Section title="Danh sách sản phẩm">
            <Box className="grid grid-cols-2 gap-4">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </Box>
        </Section>
    );
};

const ProductListFallback: FC = () => {
    const products = [...new Array(12)];

    return (
        <Section title="Danh sách sản phẩm">
            <Box className="grid grid-cols-2 gap-4">
                {products.map((_, i) => (
                    <ProductItemSkeleton key={i} />
                ))}
            </Box>
        </Section>
    );
};

export const ProductList: FC = () => {
    return (
        <Suspense fallback={<ProductListFallback />}>
            <ProductListContent />
        </Suspense>
    );
};
