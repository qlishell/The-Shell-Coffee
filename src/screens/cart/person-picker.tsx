import React, { FC } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { phoneState, requestPhoneTriesState, userState } from "states/user.state";
import { ListItem } from "components/list/list-item";

export const PersonPicker: FC = () => {
    const user = useRecoilValue(userState);
    const phone = useRecoilValue(phoneState);

    if (!phone) {
        return <RequestPersonPickerPhone />;
    }

    return <ListItem title={`${user.name} - ${phone}`} subtitle="Người nhận" />;
};

export const RequestPersonPickerPhone: FC = () => {
    const retry = useSetRecoilState(requestPhoneTriesState);
    return (
        <ListItem onClick={() => retry(r => r + 1)} title="Chọn người nhận" subtitle="Yêu cầu truy cập số điện thoại" />
    );
};
