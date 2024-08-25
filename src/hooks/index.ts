import { useEffect, useRef } from "react";

import { matchStatusBarColor } from "utils/device";

export function useMatchStatusTextColor(visible?: boolean) {
    const changedRef = useRef(false);
    useEffect(() => {
        if (changedRef.current) {
            matchStatusBarColor(visible ?? false);
        } else {
            changedRef.current = true;
        }
    }, [visible]);
}
