import { useHandlePayment } from "hooks";
import CartPage from "pages/cart";
import HomePage from "pages/index";
import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { getSystemInfo } from "zmp-sdk";
import { Box } from "zmp-ui";
import { Navigation } from "./navigation";
import { ScrollRestoration } from "./scroll-restoration";

if (getSystemInfo().platform === "android") {
    const androidSafeTop = Math.round(
        (window as any).ZaloJavaScriptInterface.getStatusBarHeight() / window.devicePixelRatio,
    );
    document.body.style.setProperty("--zaui-safe-area-inset-top", `${androidSafeTop}px`);
}

export const Layout: FC = () => {
    useHandlePayment();
    return (
        <Box flex flexDirection="column" className="h-screen">
            <ScrollRestoration />
            <Box className="flex-1 flex flex-col overflow-hidden">
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/cart" element={<CartPage />}></Route>
                </Routes>
            </Box>
            <Navigation />
        </Box>
    );
};
