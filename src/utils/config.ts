import appConfig from "../../app-config.json";

/**
 * Lấy một phần cấu hình từ đối tượng `appConfig`.
 *
 * @template T - Kiểu dữ liệu của giá trị được trả về.
 * @param {((config: typeof appConfig) => T)} getter - Một hàm nhận đối tượng cấu hình và trả về giá trị mong muốn.
 * @returns {T} - Giá trị cấu hình được trích xuất.
 */
export function getConfig<T>(getter: (config: typeof appConfig) => T): T {
    return getter(appConfig);
}
