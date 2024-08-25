import { useEffect, useRef, useState } from "react";

import { matchStatusBarColor } from "utils/device";

const originalScreenHeight = window.innerHeight;

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

export function useVirtualKeyboardVisible() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const detectKeyboardOpen = () => {
            setVisible(window.innerHeight + 160 < originalScreenHeight);
        };
        window.addEventListener("resize", detectKeyboardOpen);
        return () => {
            window.removeEventListener("resize", detectKeyboardOpen);
        };
    }, []);

    return visible;
}
