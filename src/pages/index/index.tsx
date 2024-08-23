import { Divider } from "components/divider";
import React, { Suspense } from "react";
import { Box, Page, useNavigate } from "zmp-ui";
import { Banner } from "./banner";
import { Categories } from "./categories";
import { Inquiry } from "./inquiry";
import { ProductList } from "./product-list";
import { Recommend } from "./recommend";
import { Welcome } from "./welcome";

const HomePage: React.FunctionComponent = () => {
    const navigate = useNavigate();
    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Welcome />
            <Box className="flex-1 overflow-auto">
                <Inquiry />
                <Banner />
                <Suspense>
                    <Categories />
                </Suspense>
                <Divider />
                <Recommend />
                <Divider />
                <ProductList />
                <Divider />
            </Box>
        </Page>
    );
};

export default HomePage;
