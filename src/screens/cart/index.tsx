import React, { FC } from "react";
import { Header, Page } from "zmp-ui";

import { Divider } from "components/UI/divider";
import { useVirtualKeyboardVisible } from "hooks";
import { CartItems } from "./cart-items";
import { Delivery } from "./delivery";
import { CartPreview } from "./preview";
import { TermsAndPolicies } from "./term-and-policies";

const CartPage: FC = () => {
    const keyboardVisible = useVirtualKeyboardVisible();

    return (
        <Page className="flex flex-col">
            <Header title="Giỏ hàng" showBackIcon={false} />
            <CartItems />
            <Delivery />
            <Divider size={12} />
            <TermsAndPolicies />
            <Divider size={32} className="flex-1" />
            {!keyboardVisible && <CartPreview />}
        </Page>
    );
};

export default CartPage;
