// React core
import React from "react";
import { createRoot } from "react-dom/client";

// ZaUI stylesheet
import "zmp-ui/zaui.css";

// Tailwind stylesheet
import "css/tailwind.scss";
// Your stylesheet
import "css/app.scss";

// Style Swiper
import "swiper/css";
import "swiper/css/pagination";

// Expose app configuration
import appConfig from "../app-config.json";
if (!window.APP_CONFIG) {
    window.APP_CONFIG = appConfig;
}

// Mount the app
import App from "components/app";
const root = createRoot(document.getElementById("app")!);
root.render(React.createElement(App));
