/**
 * Chờ trong một khoảng thời gian nhất định (đơn vị mili giây).
 *
 * @param {number} ms - Số mili giây cần chờ.
 * @returns {Promise<void>} - Một Promise được giải quyết khi thời gian chờ kết thúc.
 */
export function wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
