import { useVirtualKeyboardVisible } from "hooks";
import React, { FC } from "react";
import { Header, Page } from "zmp-ui";

const CartPage: FC = () => {
    const keyboardVisible = useVirtualKeyboardVisible();

    return (
        <Page className="flex flex-col">
            <Header title="Giỏ hàng" showBackIcon={false} />
            Giỏ hàng
        </Page>
    );
};

export default CartPage;
