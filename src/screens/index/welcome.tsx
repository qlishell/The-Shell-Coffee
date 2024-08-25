import React, { FC } from "react";
import { useRecoilValueLoadable } from "recoil";
import { Box, Header, Text } from "zmp-ui";

import logo from "assets/images/shell-high-logo.png";
import { userState } from "states/user.state";
import { getConfig } from "utils/config";
import appConfig from "../../../app-config.json";

export const Welcome: FC = () => {
    const user = useRecoilValueLoadable(userState);

    return (
        <Header
            className="app-header no-border pl-4 flex-none pb-[6px]"
            showBackIcon={false}
            title={
                (
                    <Box flex alignItems="center" className="space-x-2">
                        <img
                            className="w-8 h-8 rounded-lg border-inset"
                            src={getConfig(c => c.template.headerLogo) || logo}
                            alt="logo"
                        />
                        <Box>
                            <Text.Title size="small">{appConfig.app.title}</Text.Title>
                            {user.state === "hasValue" ? (
                                <Text size="xxSmall" className="text-gray">
                                    Welcome, {user.contents.name}!
                                </Text>
                            ) : (
                                <Text>...</Text>
                            )}
                        </Box>
                    </Box>
                ) as unknown as string
            }
        />
    );
};
