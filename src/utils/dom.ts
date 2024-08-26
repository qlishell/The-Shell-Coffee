/**
 * Lấy giá trị số từ một chuỗi.
 *
 * Hàm này sử dụng biểu thức chính quy để tìm một hoặc nhiều chữ số trong chuỗi đã cho.
 * Giá trị tìm được sau đó được chuyển đổi thành số và trả về.
 *
 * @param {string} value - Chuỗi đầu vào.
 * @returns {number} Giá trị số đã được lấy ra, hoặc `NaN` nếu không tìm thấy chữ số nào.
 */
export function tripUnit(value: string): number {
    return Number(value.match(/\d+/));
}
