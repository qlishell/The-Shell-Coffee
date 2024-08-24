import { useVirtualKeyboardVisible } from "hooks";
import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { CartItems } from "./cart-items";

const CartPage: FC = () => {
    const keyboardVisible = useVirtualKeyboardVisible();

    return (
        <Page className="flex flex-col">
            <Header title="Giỏ hàng" showBackIcon={false} />
            <CartItems />
        </Page>
    );
};

export default CartPage;
