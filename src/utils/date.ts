/**
 * Hiển thị phạm vi thời gian nửa giờ bắt đầu từ ngày nhất định.
 *
 * @param {Date} date - Ngày bắt đầu.
 * @returns {string} Phạm vi thời gian được định dạng theo định dạng "thời gian bắt đầu - thời gian kết thúc".
 */
export function displayHalfAnHourTimeRange(date: Date) {
    const endTime = new Date(date);
    endTime.setMinutes(endTime.getMinutes() + 30);
    return `${displayTime(date)} - ${displayTime(endTime)}`;
}

/**
 * Hiển thị chuỗi ngày tháng được định dạng.
 *
 * Nếu ngày là hôm nay và `hint` là đúng, chuỗi sẽ bao gồm "Hôm nay -".
 *
 * @param {Date} date - Ngày cần được định dạng.
 * @param {boolean} hint - Cờ tùy chọn cho biết có bao gồm "Hôm nay -" hay không.
 * @returns {string} Chuỗi ngày tháng đã được định dạng.
 */
export function displayDate(date: Date, hint?: boolean) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    if (hint && isToday(date)) {
        return `Hôm nay - ${day}/${month}/${year}`;
    }
    return `${day}/${month}/${year}`;
}

/**
 * Kiểm tra xem một ngày cho trước có phải là hôm nay không.
 *
 * @param {Date} date - Ngày cần kiểm tra.
 * @returns {boolean} True nếu ngày đó là hôm nay, false nếu không phải.
 */
export function isToday(date: Date) {
    const today = new Date();
    return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
    );
}

/**
 * Hiển thị chuỗi thời gian đã định dạng.
 *
 * @param {Date} date - Ngày tháng cần được định dạng.
 * @returns {string} Chuỗi thời gian đã định dạng theo định dạng "giờ:phút".
 */
export function displayTime(date: Date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}h${minutes}`;
}
