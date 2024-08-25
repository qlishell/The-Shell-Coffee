import { selector } from "recoil";
import { getUserInfo } from "zmp-sdk";

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
