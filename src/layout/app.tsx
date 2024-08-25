import React from "react";
import { RecoilRoot } from "recoil";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";

import { ConfigProvider } from "components/config-provider";
import { NativeStack } from "navigator/native-stack";
import { getConfig } from "utils/config";

const MyApp = () => {
    return (
        <RecoilRoot>
            <ConfigProvider
                cssVariables={{
                    "--zmp-primary-color": getConfig(c => c.template.primaryColor),
                    "--zmp-background-color": "#f4f5f6",
                }}
            >
                <App>
                    <SnackbarProvider>
                        <ZMPRouter>
                            <NativeStack />
                        </ZMPRouter>
                    </SnackbarProvider>
                </App>
            </ConfigProvider>
        </RecoilRoot>
    );
};
export default MyApp;
