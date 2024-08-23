import React, { Suspense } from "react";
import { Icon, List, Page, useNavigate } from "zmp-ui";

const HomePage: React.FunctionComponent = () => {
    const navigate = useNavigate();
    return (
        <Page className="page">
            <Suspense>
                <div className="section-container">Hi, Nguyen Huu Hoang Kiet</div>
            </Suspense>
            <div className="section-container">
                <List>
                    <List.Item onClick={() => navigate("/about")} suffix={<Icon icon="zi-arrow-right" />}>
                        <div>About</div>
                    </List.Item>
                    <List.Item onClick={() => navigate("/user")} suffix={<Icon icon="zi-arrow-right" />}>
                        <div>User</div>
                    </List.Item>
                </List>
            </div>
        </Page>
    );
};

export default HomePage;
