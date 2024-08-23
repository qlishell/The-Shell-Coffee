import React from "react";
import { RecoilRoot } from "recoil";
import { getConfig } from "utils/config";
import { App, SnackbarProvider, ZMPRouter } from "zmp-ui";
import { ConfigProvider } from "./config-provider";
import { Layout } from "./layout";

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
                            <Layout />
                        </ZMPRouter>
                    </SnackbarProvider>
                </App>
            </ConfigProvider>
        </RecoilRoot>
    );
};
export default MyApp;
