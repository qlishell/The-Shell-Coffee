import { atom, selector } from "recoil";
import { getPhoneNumber, getUserInfo } from "zmp-sdk";

/**
 * Recoil selector lấy thông tin người dùng từ Zalo SDK.
 * **Note:** selector sẽ tự động yêu cầu quyền nếu cần.
 *
 * @returns {Promise<UserInfo>} - Promise giải quyết đối tượng thông tin người dùng.
 */
export const userState = selector({
    key: "user",
    get: async () => {
        try {
            const { userInfo } = await getUserInfo({ autoRequestPermission: true });
            return userInfo;
        } catch (error) {
            return {
                id: "",
                avatar: "",
                name: "Người dùng Zalo",
            };
        }
    },
});

export const requestPhoneTriesState = atom({
    key: "requestPhoneTries",
    default: 0,
});

export const phoneState = selector<string | boolean>({
    key: "phone",
    get: async ({ get }) => {
        const requested = get(requestPhoneTriesState);
        if (requested) {
            const { number, token } = await getPhoneNumber({ fail: console.warn });
            if (number) {
                return number;
            }
            console.warn("Sử dụng token này để truy xuất số điện thoại của người dùng", token);
            console.warn(
                "Chi tiết tham khảo: ",
                "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app",
            );
            console.warn("Giả lập số điện thoại mặc định: 0337076898");
            return "0337076898";
        }
        return false;
    },
});
