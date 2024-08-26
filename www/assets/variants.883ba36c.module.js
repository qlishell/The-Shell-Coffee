var e = [
    {
        id: "size",
        label: "K\xEDch c\u1EE1",
        type: "single",
        default: "m",
        options: [
            { id: "s", label: "Nh\u1ECF", priceChange: { type: "percent", percent: -0.2 } },
            { id: "m", label: "V\u1EEBa" },
            { id: "l", label: "To", priceChange: { type: "percent", percent: 0.2 } },
        ],
    },
    {
        id: "topping",
        label: "Topping",
        type: "multiple",
        default: ["t1", "t4"],
        options: [
            { id: "t1", label: "Tr\xE2n ch\xE2u", priceChange: { type: "fixed", amount: 5e3 } },
            { id: "t2", label: "B\xE1nh flan", priceChange: { type: "fixed", amount: 1e4 } },
            { id: "t3", label: "Trang tr\xED", priceChange: { type: "percent", percent: 0.15 } },
            { id: "t4", label: "Kh\xF4ng l\u1EA5y \u0111\xE1", priceChange: { type: "fixed", amount: -5e3 } },
        ],
    },
];
export { e as default };
