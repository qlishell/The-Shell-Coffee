import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { getSystemInfo } from "zmp-sdk";
import { Box } from "zmp-ui";

import CartPage from "screens/cart";
import HomePage from "screens/index";
import { Navigation } from "./bottom-tab";

if (getSystemInfo().platform === "android") {
    const androidSafeTop = Math.round(
        (window as any).ZaloJavaScriptInterface.getStatusBarHeight() / window.devicePixelRatio,
    );
    document.body.style.setProperty("--zaui-safe-area-inset-top", `${androidSafeTop}px`);
}

export const NativeStack: FC = () => {
    return (
        <Box flex flexDirection="column" className="h-screen">
            <Box className="flex-1 flex flex-col overflow-hidden">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Box>
            <Navigation />
        </Box>
    );
};
