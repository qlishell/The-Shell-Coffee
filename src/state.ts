import { selector } from "recoil";
import { getUserInfo } from "zmp-sdk";

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
