import React, { FC } from "react";
import { Header, Page } from "zmp-ui";

import { Divider } from "components/UI/divider";
import { CartItems } from "./cart-items";

const CartPage: FC = () => {
    return (
        <Page className="flex flex-col">
            <Header title="Giỏ hàng" showBackIcon={false} />
            <CartItems />
            <Divider size={12} />
        </Page>
    );
};

export default CartPage;
