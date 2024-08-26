/**
 * Hiển thị khoảng cách dưới dạng chuỗi định dạng.
 *
 * @param {number} d - Khoảng cách tính bằng km.
 * @returns {string} - Chuỗi định dạng khoảng cách với 1 chữ số thập phân và đơn vị km.
 */
export function displayDistance(d) {
    return `${d.toFixed(2)} km`;
}

/**
 * Tính toán khoảng cách Haversine giữa hai tọa độ địa lý.
 *
 * Sử dụng công thức Haversine để tính toán khoảng cách giữa hai điểm trên bề mặt Trái Đất, dựa trên kinh độ và vĩ độ của chúng.
 *
 * @param {number} lat1 - Vĩ độ của điểm đầu tiên (độ).
 * @param {number} lon1 - Kinh độ của điểm đầu tiên (độ).
 * @param {number} lat2 - Vĩ độ của điểm thứ hai (độ).
 * @param {number} lon2 - Kinh độ của điểm thứ hai (độ).
 * @returns {number} - Khoảng cách giữa hai điểm tính bằng km.
 */
export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

/**
 * Chuyển đổi độ sang radian.
 *
 * @param {number} deg - Giá trị độ.
 * @returns {number} - Giá trị radian tương ứng.
 */
export function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
