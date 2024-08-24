// React core
import React from "react";
import { createRoot } from "react-dom/client";

// ZaUI stylesheet
import "zmp-ui/zaui.css";

// Tailwind stylesheet
import "assets/css/tailwind.scss";
// Your stylesheet
import "assets/css/app.scss";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

// Expose app configuration
import appConfig from "../app-config.json";
if (!window.APP_CONFIG) {
    window.APP_CONFIG = appConfig;
}

// Mount the app
import App from "layout/app";
const root = createRoot(document.getElementById("app")!);
root.render(React.createElement(App));
