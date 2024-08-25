import React from "react";
import { RecoilRoot } from "recoil";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";

import { NativeStack } from "navigator/native-stack";

const MyApp = () => {
    return (
        <RecoilRoot>
            <App>
                <SnackbarProvider>
                    <ZMPRouter>
                        <NativeStack />
                    </ZMPRouter>
                </SnackbarProvider>
            </App>
        </RecoilRoot>
    );
};
export default MyApp;
