import React from "react";
import { RecoilRoot } from "recoil";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";

import { Layout } from "./layout";

const MyApp = () => {
    return (
        <RecoilRoot>
            <App>
                <SnackbarProvider>
                    <ZMPRouter>
                        <Layout />
                    </ZMPRouter>
                </SnackbarProvider>
            </App>
        </RecoilRoot>
    );
};
export default MyApp;
