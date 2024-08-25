/**
 * Tạo URL cho hình ảnh giả từ tên tệp.
 *
 * @param {string} filename
 * @returns {string}
 */
export function getDummyImage(filename: string): string {
    return `https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/${filename}`;
}
