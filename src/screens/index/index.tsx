import React, { FC } from "react";
import { Box, Page } from "zmp-ui";

import { Welcome } from "./welcome";

const HomePage: FC = () => {
    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Welcome />
            <Box className="flex-1 overflow-auto">Index</Box>
        </Page>
    );
};

export default HomePage;
