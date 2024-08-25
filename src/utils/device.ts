import { configAppView } from "zmp-sdk";

/**
 * Khớp màu thanh trạng thái với khả năng hiển thị của một phần tử.
 *
 * @param {boolean} visible - Phần tử có hiển thị hay không.
 */
export function matchStatusBarColor(visible: boolean) {
    if (visible) {
        configAppView({
            statusBarType: "transparent",
            headerTextColor: "white",
        });
    } else {
        configAppView({
            statusBarType: "transparent",
            headerTextColor: "black",
        });
    }
}
