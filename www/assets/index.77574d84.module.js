var Ae = Object.defineProperty,
    Te = Object.defineProperties;
var Me = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty,
    J = Object.prototype.propertyIsEnumerable;
var Y = (e, t, s) => (t in e ? Ae(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s)),
    x = (e, t) => {
        for (var s in t || (t = {})) W.call(t, s) && Y(e, s, t[s]);
        if (O) for (var s of O(t)) J.call(t, s) && Y(e, s, t[s]);
        return e;
    },
    C = (e, t) => Te(e, Me(t));
var z = (e, t) => {
    var s = {};
    for (var i in e) W.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
    if (e != null && O) for (var i of O(e)) t.indexOf(i) < 0 && J.call(e, i) && (s[i] = e[i]);
    return s;
};
var A = (e, t, s) =>
    new Promise((i, a) => {
        var r = d => {
                try {
                    l(s.next(d));
                } catch (g) {
                    a(g);
                }
            },
            o = d => {
                try {
                    l(s.throw(d));
                } catch (g) {
                    a(g);
                }
            },
            l = d => (d.done ? i(d.value) : Promise.resolve(d.value).then(r, o));
        l((s = s.apply(e, t)).next());
    });
import {
    r as m,
    j as n,
    F as D,
    B as u,
    u as X,
    a as Be,
    b as c,
    T as h,
    c as P,
    I as b,
    O as U,
    R as w,
    d as v,
    C as He,
    e as Ie,
    f as T,
    g as ee,
    h as k,
    s as $e,
    i as Oe,
    k as Le,
    l as te,
    m as ne,
    P as Fe,
    n as se,
    H as ae,
    S as V,
    o as _e,
    p as j,
    q as re,
    t as qe,
    v as Re,
    w as Ve,
    x as ie,
    y as je,
    z as Ge,
    A as oe,
    D as Ke,
    E as Ze,
    G as Qe,
    Z as We,
    J as Je,
    K as Ye,
} from "./vendor.5a9f623d.module.js";
const Xe = function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const r of a)
            if (r.type === "childList")
                for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(a) {
        const r = {};
        return (
            a.integrity && (r.integrity = a.integrity),
            a.referrerpolicy && (r.referrerPolicy = a.referrerpolicy),
            a.crossorigin === "use-credentials"
                ? (r.credentials = "include")
                : a.crossorigin === "anonymous"
                  ? (r.credentials = "omit")
                  : (r.credentials = "same-origin"),
            r
        );
    }
    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const r = s(a);
        fetch(a.href, r);
    }
};
Xe();
const Ue = {
        title: "Hoang Kiet Nguyen Huu",
        headerTitle: "zmp-blank-templates",
        headerColor: "",
        textColor: "black",
        statusBarColor: "#ffffff",
        leftButton: "none",
        statusBar: "transparent",
        selfControlLoading: !1,
        hideAndroidBottomNavigationBar: !1,
        hideIOSSafeAreaBottom: !1,
        actionBarHidden: !0,
    },
    et = !1,
    tt = [],
    nt = [],
    st = [],
    at = [],
    rt = { primaryColor: "#006af5", prefixCurrencySymbol: !1, currencySymbol: "\u0111", headerLogo: "" };
var G = { app: Ue, debug: et, pages: tt, listCSS: nt, listSyncJS: st, listAsyncJS: at, template: rt };
const it = ({ children: e, cssVariables: t }) => (
        m.exports.useEffect(
            () => (
                Object.keys(t)
                    .filter(s => t[s])
                    .forEach(s => {
                        document.documentElement.style.setProperty(`${s}`, t[s]);
                    }),
                () => {
                    Object.keys(t).forEach(s => {
                        document.documentElement.style.removeProperty(`${s}`);
                    });
                }
            ),
            [t],
        ),
        n(D, { children: e })
    ),
    M = s => {
        var i = s,
            { size: e = 8 } = i,
            t = z(i, ["size"]);
        return n(u, x({ style: { minHeight: e, backgroundColor: "var(--zmp-background-color)" } }, t));
    };
function le(e) {
    e
        ? X({ statusBarType: "transparent", headerTextColor: "white" })
        : X({ statusBarType: "transparent", headerTextColor: "black" });
}
const ot = window.innerHeight;
function ce(e) {
    const t = m.exports.useRef(!1);
    m.exports.useEffect(() => {
        t.current ? le(e != null ? e : !1) : (t.current = !0);
    }, [e]);
}
function ue() {
    const [e, t] = m.exports.useState(!1);
    return (
        m.exports.useEffect(() => {
            const s = () => {
                t(window.innerHeight + 160 < ot);
            };
            return (
                window.addEventListener("resize", s),
                () => {
                    window.removeEventListener("resize", s);
                }
            );
        }, []),
        e
    );
}
function B(e) {
    return e(G);
}
function lt(e) {
    return `https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/${e}`;
}
function de(e, t) {
    let s = e.price;
    if (
        (e.sale && (e.sale.type === "fixed" ? (s = e.price - e.sale.amount) : (s = e.price * (1 - e.sale.percent))),
        t && e.variants)
    ) {
        const i = [];
        for (const a in t) {
            const r = e.variants.find(o => o.id === a);
            if (r) {
                const o = t[a];
                if (typeof o == "string") {
                    const l = r.options.find(d => d.id === o);
                    l && i.push(l);
                } else {
                    const l = r.options.filter(d => o.includes(d.id));
                    i.push(...l);
                }
            }
        }
        s = i.reduce(
            (a, r) =>
                r.priceChange
                    ? r.priceChange.type == "fixed"
                        ? a + r.priceChange.amount
                        : a + e.price * r.priceChange.percent
                    : a,
            s,
        );
    }
    return s;
}
function K(e, t) {
    const s = Object.keys(e),
        i = Object.keys(t);
    if (s.length !== i.length) return !1;
    for (const a of s) {
        const r = e[a],
            o = t[a],
            l = Array.isArray(r) && Array.isArray(o) && [...r].sort().toString() === [...o].sort().toString();
        if (r !== o && !l) return !1;
    }
    return !0;
}
const ct = (e, t) =>
        Be({
            desc: t != null ? t : `Thanh to\xE1n cho ${B(s => s.app.title)}`,
            item: [],
            amount: e,
            success: s => {
                console.log("Payment success: ", s);
            },
            fail: s => {
                console.log("Payment error: ", s);
            },
        }),
    H = ({ children: e }) => {
        const t = B(s => s.template.currencySymbol);
        return B(s => s.template.prefixCurrencySymbol)
            ? c(D, { children: [t, e.toLocaleString()] })
            : c(D, { children: [e.toLocaleString(), t] });
    },
    L = ({ children: e, options: t }) => {
        const s = m.exports.useMemo(() => de(e, t), [e, t]);
        return n(H, { children: s });
    },
    ut = ({ children: e, options: t }) => {
        const s = m.exports.useMemo(() => {
            let i = [];
            if (e.variants) {
                const a = Object.keys(t);
                e.variants
                    .filter(r => a.includes(r.id))
                    .forEach(r => {
                        if (r.type === "single") {
                            const o = r.options.find(l => l.id === t[r.id]);
                            o && i.push(`${r.label || r.id}: ${o.label || o.id}`);
                        } else {
                            const o = r.options.filter(l => t[r.id].includes(l.id));
                            i.push(`${r.label || r.id}: ${o.map(l => l.label || l.id).join(", ")}`);
                        }
                    });
            }
            return i.join(". ");
        }, [e]);
        return n(D, { children: s });
    };
function he({ title: e, items: t, limit: s, renderLeft: i, renderRight: a, renderKey: r, onClick: o, noDivider: l }) {
    const [d, g] = m.exports.useState(!0),
        S = m.exports.useMemo(() => t.slice(0, s), [t]);
    return c(u, {
        className: "bg-background rounded-xl",
        children: [
            e && n(h.Title, { className: "p-4 pb-0", children: e }),
            n(u, {
                children: (d ? S : t).map((f, p, y) =>
                    c(
                        "div",
                        {
                            onClick: () => (o == null ? void 0 : o(f)),
                            className: "flex space-x-4 p-4 last:pb-0",
                            children: [
                                i(f),
                                c(u, {
                                    className: "flex-1 min-w-0 relative",
                                    children: [
                                        a(f),
                                        !l &&
                                            p < y.length - 1 &&
                                            n("hr", {
                                                className:
                                                    "absolute left-0 -right-4 -bottom-4 border-divider border-t-[0.5px]",
                                            }),
                                    ],
                                }),
                            ],
                        },
                        r ? r(f) : p,
                    ),
                ),
            }),
            d && S.length < t.length
                ? n(u, {
                      className: "p-2",
                      children: n(P, {
                          onClick: () => g(!1),
                          fullWidth: !0,
                          suffixIcon: n(b, { icon: "zi-chevron-down" }),
                          variant: "tertiary",
                          type: "neutral",
                          children: "Xem th\xEAm",
                      }),
                  })
                : n(u, { className: "w-full h-4" }),
        ],
    });
}
const dt = e => (ce(e.visible), n(U, x({}, e))),
    ht = e => (ce(e.visible), n(U.Actions, x({}, e))),
    I = w({ key: "cart", default: [] }),
    mt = v({
        key: "totalPrice",
        get: ({ get: e }) => e(I).reduce((s, i) => s + i.quantity * de(i.product, i.options), 0),
    }),
    pt = v({ key: "totalQuantity", get: ({ get: e }) => e(I).reduce((s, i) => s + i.quantity, 0) }),
    gt = ({ children: e, option: t }) => {
        const s = m.exports.useMemo(
            () =>
                t.priceChange
                    ? t.priceChange.type === "fixed"
                        ? t.priceChange.amount
                        : e.price * t.priceChange.percent
                    : 0,
            [e, t],
        );
        return c(D, { children: [s > 0 && "+", n(H, { children: s })] });
    },
    ft = ({ product: e, variant: t, value: s, onChange: i }) =>
        c(u, {
            my: 8,
            className: "space-y-2",
            children: [
                n(h.Title, { size: "small", children: t.label }),
                n(He.Group, {
                    className: "flex flex-col space-y-2",
                    name: t.id,
                    options: t.options.map(a => ({
                        className: "last-of-type:mr-2",
                        value: a.id,
                        label: c("div", {
                            className: "w-full",
                            children: [
                                n("span", { className: "flex-1", children: a.label }),
                                n("span", {
                                    className: "absolute right-0",
                                    children: n(gt, { option: a, children: e }),
                                }),
                            ],
                        }),
                    })),
                    value: s,
                    defaultValue: s,
                    onChange: a => {
                        i(a);
                    },
                }),
            ],
        }),
    xt = ({ value: e, onChange: t }) =>
        c(u, {
            flex: !0,
            className: "border border-[#e9ebed] rounded-full p-[6px]",
            children: [
                n(P, {
                    disabled: e < 1,
                    onClick: () => t(e - 1),
                    variant: "secondary",
                    type: "neutral",
                    icon: n("div", {
                        className: "py-3 px-1",
                        children: n("div", { className: "w-full h-[2px] bg-black" }),
                    }),
                }),
                n(u, {
                    flex: !0,
                    justifyContent: "center",
                    alignItems: "center",
                    className: "flex-1",
                    children: c(h, {
                        size: "large",
                        className: "font-medium",
                        children: ["S\u1ED1 l\u01B0\u1EE3ng: ", e],
                    }),
                }),
                n(P, {
                    onClick: () => t(e + 1),
                    variant: "secondary",
                    type: "neutral",
                    icon: n(b, { icon: "zi-plus" }),
                }),
            ],
        }),
    yt = ({ variant: e, value: t, onChange: s }) =>
        c(u, {
            my: 8,
            className: "space-y-2",
            children: [
                n(h.Title, { size: "small", children: e.label }),
                n(Ie.Group, {
                    className: "flex-1 grid grid-cols-3 justify-between",
                    name: e.id,
                    options: e.options.map(i => ({ value: i.id, label: i.label })),
                    value: t,
                    onChange: i => {
                        s(i);
                    },
                }),
            ],
        });
function Et(e) {
    return e && e.variants ? e.variants.reduce((t, s) => Object.assign(t, { [s.id]: s.default }), {}) : {};
}
const Z = ({ children: e, product: t, selected: s }) => {
        var f;
        const [i, a] = m.exports.useState(!1),
            [r, o] = m.exports.useState(s ? s.options : Et(t)),
            [l, d] = m.exports.useState(1),
            g = T(I);
        m.exports.useEffect(() => {
            s && (o(s.options), d(s.quantity));
        }, [s]);
        const S = () => {
            t &&
                g(p => {
                    let y = [...p];
                    if (s) {
                        const E = p.find(N => N.product.id === t.id && K(N.options, s.options));
                        if (l === 0) y.splice(p.indexOf(E), 1);
                        else {
                            const N = p.find(
                                (Q, Pe) => Pe !== p.indexOf(E) && Q.product.id === t.id && K(Q.options, r),
                            );
                            y.splice(p.indexOf(E), 1, C(x({}, E), { options: r, quantity: N ? N.quantity + l : l })),
                                N && y.splice(p.indexOf(N), 1);
                        }
                    } else {
                        const E = p.find(N => N.product.id === t.id && K(N.options, r));
                        E
                            ? y.splice(p.indexOf(E), 1, C(x({}, E), { quantity: E.quantity + l }))
                            : (y = y.concat({ product: t, options: r, quantity: l }));
                    }
                    return y;
                }),
                a(!1);
        };
        return c(D, {
            children: [
                e({ open: () => a(!0), close: () => a(!1) }),
                ee.exports.createPortal(
                    n(dt, {
                        visible: i,
                        onClose: () => a(!1),
                        autoHeight: !0,
                        children:
                            t &&
                            c(u, {
                                className: "space-y-6 mt-2",
                                p: 4,
                                children: [
                                    c(u, {
                                        className: "space-y-2",
                                        children: [
                                            n(h.Title, { children: t.name }),
                                            n(h, { children: n(L, { options: r, children: t }) }),
                                            n(h, {
                                                children: n("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: (f = t.description) != null ? f : "",
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                    c(u, {
                                        className: "space-y-5",
                                        children: [
                                            t.variants &&
                                                t.variants.map(p =>
                                                    p.type === "single"
                                                        ? n(
                                                              yt,
                                                              {
                                                                  variant: p,
                                                                  value: r[p.id],
                                                                  onChange: y => o(E => C(x({}, E), { [p.id]: y })),
                                                              },
                                                              p.id,
                                                          )
                                                        : n(
                                                              ft,
                                                              {
                                                                  product: t,
                                                                  variant: p,
                                                                  value: r[p.id],
                                                                  onChange: y => o(E => C(x({}, E), { [p.id]: y })),
                                                              },
                                                              p.id,
                                                          ),
                                                ),
                                            n(xt, { value: l, onChange: d }),
                                            s
                                                ? n(P, {
                                                      variant: l > 0 ? "primary" : "secondary",
                                                      type: l > 0 ? "highlight" : "neutral",
                                                      fullWidth: !0,
                                                      onClick: S,
                                                      children:
                                                          l > 0
                                                              ? s
                                                                  ? "C\u1EADp nh\u1EADt gi\u1ECF h\xE0ng"
                                                                  : "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"
                                                              : "Xo\xE1",
                                                  })
                                                : n(P, {
                                                      disabled: !l,
                                                      variant: "primary",
                                                      type: "highlight",
                                                      fullWidth: !0,
                                                      onClick: S,
                                                      children: "Th\xEAm v\xE0o gi\u1ECF h\xE0ng",
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                    }),
                    document.body,
                ),
            ],
        });
    },
    Ct = () => {
        const e = k(I),
            [t, s] = m.exports.useState();
        return n(u, {
            className: "py-3 px-4",
            children:
                e.length > 0
                    ? n(Z, {
                          product: t == null ? void 0 : t.product,
                          selected: t,
                          children: ({ open: i }) =>
                              n(he, {
                                  items: e,
                                  limit: 3,
                                  onClick: a => {
                                      s(a), i();
                                  },
                                  renderKey: ({ product: a, options: r, quantity: o }) =>
                                      JSON.stringify({ product: a.id, options: r, quantity: o }),
                                  renderLeft: a =>
                                      n("img", {
                                          className: "w-10 h-10 rounded-lg",
                                          src: a.product.image,
                                          alt: "cart-item-image",
                                      }),
                                  renderRight: a =>
                                      c(u, {
                                          flex: !0,
                                          className: "space-x-1",
                                          children: [
                                              c(u, {
                                                  className: "space-y-1 flex-1",
                                                  children: [
                                                      n(h, { size: "small", children: a.product.name }),
                                                      n(h, {
                                                          className: "text-gray",
                                                          size: "xSmall",
                                                          children: n(L, { options: a.options, children: a.product }),
                                                      }),
                                                      n(h, {
                                                          className: "text-gray",
                                                          size: "xxxSmall",
                                                          children: n(ut, { options: a.options, children: a.product }),
                                                      }),
                                                  ],
                                              }),
                                              c(h, {
                                                  className: "text-primary font-medium",
                                                  size: "small",
                                                  children: ["x", a.quantity],
                                              }),
                                          ],
                                      }),
                              }),
                      })
                    : n(h, {
                          className: "bg-background rounded-xl py-8 px-4 text-center text-gray",
                          size: "xxSmall",
                          children: "Kh\xF4ng c\xF3 s\u1EA3n ph\u1EA9m trong gi\u1ECF h\xE0ng",
                      }),
        });
    };
function me(e) {
    return Number(e.match(/\d+/));
}
const bt = i => {
    var a = i,
        { onChange: e, maxRows: t } = a,
        s = z(a, ["onChange", "maxRows"]);
    const r = m.exports.useRef(null),
        [o, l] = m.exports.useState(0);
    m.exports.useEffect(() => {
        r.current && S(r.current);
    }, []);
    const d = m.exports.useMemo(() => {
            if (o && r.current) {
                const f = window.getComputedStyle(r.current),
                    p = o / me(f.lineHeight);
                return Math.ceil(p);
            }
            return 1;
        }, [o]),
        g = m.exports.useMemo(() => {
            if (r.current) {
                const f = window.getComputedStyle(r.current);
                return (t != null ? t : d) * me(f.lineHeight);
            }
            return 0;
        }, [d, t]),
        S = f => {
            (f.style.minHeight = "0px"),
                g && g < f.scrollHeight ? (f.style.minHeight = `${g}px`) : (f.style.minHeight = `${f.scrollHeight}px`),
                l(f.scrollHeight);
        };
    return n(
        "textarea",
        C(x({}, s), {
            style: { height: "auto", paddingTop: 0, paddingBottom: 0, maxHeight: g, resize: "none" },
            ref: r,
            onChange: f => {
                e && e(f), S(f.currentTarget);
            },
            rows: 1,
        }),
    );
};
function St(e) {
    return `${e.toFixed(2)} km`;
}
function Nt(e, t, s, i) {
    const a = 6371,
        r = F(s - e),
        o = F(i - t),
        l = Math.sin(r / 2) * Math.sin(r / 2) + Math.cos(F(e)) * Math.cos(F(s)) * Math.sin(o / 2) * Math.sin(o / 2),
        d = 2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l));
    return a * d;
}
function F(e) {
    return e * (Math.PI / 180);
}
var vt = [
    {
        id: 1,
        name: "VNG Campus Store",
        address:
            "Khu ch\u1EBF xu\u1EA5t T\xE2n Thu\u1EADn, Z06, S\u1ED1 13, T\xE2n Thu\u1EADn \u0110\xF4ng, Qu\u1EADn 7, Th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh, Vi\u1EC7t Nam",
        lat: 10.741639,
        long: 106.714632,
    },
    {
        id: 2,
        name: "The Independence Palace",
        address:
            "135 Nam K\u1EF3 Kh\u1EDFi Ngh\u0129a, B\u1EBFn Th\xE0nh, Qu\u1EADn 1, Th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh, Vi\u1EC7t Nam",
        lat: 10.779159,
        long: 106.695271,
    },
    {
        id: 3,
        name: "Saigon Notre-Dame Cathedral Basilica",
        address:
            "1 C\xF4ng x\xE3 Paris, B\u1EBFn Ngh\xE9, Qu\u1EADn 1, Th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh, Vi\u1EC7t Nam",
        lat: 10.779738,
        long: 106.699092,
    },
    {
        id: 4,
        name: "B\xECnh Qu\u1EDBi Tourist Village",
        address:
            "1147 B\xECnh Qu\u1EDBi, ph\u01B0\u1EDDng 28, B\xECnh Th\u1EA1nh, Th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh, Vi\u1EC7t Nam",
        lat: 10.831098,
        long: 106.733128,
    },
    {
        id: 5,
        name: "C\u1EE7 Chi Tunnels",
        address: "Ph\xFA Hi\u1EC7p, C\u1EE7 Chi, Th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh, Vi\u1EC7t Nam",
        lat: 11.051655,
        long: 106.494249,
    },
];
const kt = w({ key: "orderNote", default: "" }),
    Dt = w({ key: "selectedDeliveryTime", default: +new Date() }),
    wt = w({ key: "stores", default: vt }),
    pe = w({ key: "requestLocationTries", default: 0 }),
    ge = w({ key: "selectedStoreIndex", default: 0 }),
    zt = v({
        key: "selectedStore",
        get: ({ get: e }) => {
            const t = e(ge);
            return e(fe)[t];
        },
    }),
    fe = v({
        key: "nearbyStores",
        get: ({ get: e }) => {
            const t = e(Pt),
                s = e(wt);
            return t
                ? s
                      .map(r => C(x({}, r), { distance: Nt(t.latitude, t.longitude, r.lat, r.long) }))
                      .sort((r, o) => r.distance - o.distance)
                : [];
        },
    }),
    Pt = v({
        key: "location",
        get: t =>
            A(void 0, [t], function* ({ get: e }) {
                if (e(pe)) {
                    const { latitude: i, longitude: a, token: r } = yield $e({ fail: console.warn });
                    if (i && a) return { latitude: i, longitude: a };
                    if (r)
                        return (
                            console.warn(
                                "S\u1EED d\u1EE5ng token n\xE0y \u0111\u1EC3 truy xu\u1EA5t v\u1ECB tr\xED ch\xEDnh x\xE1c c\u1EE7a ng\u01B0\u1EDDi d\xF9ng",
                                r,
                            ),
                            console.warn(
                                "Chi ti\u1EBFt tham kh\u1EA3o: ",
                                "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app",
                            ),
                            console.warn("Gi\u1EA3 l\u1EADp v\u1ECB tr\xED m\u1EB7c \u0111\u1ECBnh: VNG Campus"),
                            { latitude: "10.7287", longitude: "106.7317" }
                        );
                }
                return !1;
            }),
    }),
    xe = v({
        key: "user",
        get: () =>
            A(void 0, null, function* () {
                try {
                    const { userInfo: e } = yield Oe({ autoRequestPermission: !0 });
                    return e;
                } catch (e) {
                    return { id: "", avatar: "", name: "Ng\u01B0\u1EDDi d\xF9ng Zalo" };
                }
            }),
    }),
    ye = w({ key: "requestPhoneTries", default: 0 }),
    At = v({
        key: "phone",
        get: t =>
            A(void 0, [t], function* ({ get: e }) {
                if (e(ye)) {
                    const { number: i, token: a } = yield Le({ fail: console.warn });
                    return (
                        i ||
                        (console.warn(
                            "S\u1EED d\u1EE5ng token n\xE0y \u0111\u1EC3 truy xu\u1EA5t s\u1ED1 \u0111i\u1EC7n tho\u1EA1i c\u1EE7a ng\u01B0\u1EDDi d\xF9ng",
                            a,
                        ),
                        console.warn(
                            "Chi ti\u1EBFt tham kh\u1EA3o: ",
                            "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app",
                        ),
                        console.warn(
                            "Gi\u1EA3 l\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i m\u1EB7c \u0111\u1ECBnh: 0337076898",
                        ),
                        "0337076898")
                    );
                }
                return !1;
            }),
    }),
    _ = ({ title: e, subtitle: t, onClick: s }) =>
        c(u, {
            flex: !0,
            className: "space-x-2",
            onClick: s,
            children: [
                c(u, {
                    className: "flex-1 space-y-[2px]",
                    children: [
                        n(h, { size: "small", className: "font-medium text-sm text-primary", children: e }),
                        n(h, { size: "xSmall", className: "text-gray", children: t }),
                    ],
                }),
                n(b, { icon: "zi-chevron-right" }),
            ],
        }),
    Tt = () => {
        const e = k(xe),
            t = k(At);
        return t ? n(_, { title: `${e.name} - ${t}`, subtitle: "Ng\u01B0\u1EDDi nh\u1EADn" }) : n(Ee, {});
    },
    Ee = () => {
        const e = T(ye);
        return n(_, {
            onClick: () => e(t => t + 1),
            title: "Ch\u1ECDn ng\u01B0\u1EDDi nh\u1EADn",
            subtitle: "Y\xEAu c\u1EA7u truy c\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
        });
    },
    Mt = () => {
        const [e, t] = m.exports.useState(!1),
            s = te(fe),
            i = T(ge),
            a = k(zt);
        return a
            ? c(D, {
                  children: [
                      n(_, { onClick: () => t(!0), title: a.name, subtitle: a.address }),
                      s.state === "hasValue" &&
                          ee.exports.createPortal(
                              n(ht, {
                                  title: "C\xE1c c\u1EEDa h\xE0ng \u1EDF g\u1EA7n b\u1EA1n",
                                  visible: e,
                                  onClose: () => t(!1),
                                  actions: [
                                      s.contents.map((r, o) => ({
                                          text: r.distance ? `${r.name} - ${St(r.distance)}` : r.name,
                                          highLight: r.id === (a == null ? void 0 : a.id),
                                          onClick: () => {
                                              i(o);
                                          },
                                      })),
                                      [{ text: "\u0110\xF3ng", close: !0, danger: !0 }],
                                  ],
                              }),
                              document.body,
                          ),
                  ],
              })
            : n(Ce, {});
    },
    Ce = () => {
        const e = T(pe);
        return n(_, {
            onClick: () => e(t => t + 1),
            title: "Ch\u1ECDn c\u1EEDa h\xE0ng",
            subtitle: "Y\xEAu c\u1EA7u truy c\u1EADp v\u1ECB tr\xED",
        });
    };
function be(e) {
    const t = new Date(e);
    return t.setMinutes(t.getMinutes() + 30), `${Ne(e)} - ${Ne(t)}`;
}
function Se(e, t) {
    const s = e.getDate().toString().padStart(2, "0"),
        i = (e.getMonth() + 1).toString().padStart(2, "0"),
        a = e.getFullYear().toString();
    return t && Bt(e) ? `H\xF4m nay - ${s}/${i}/${a}` : `${s}/${i}/${a}`;
}
function Bt(e) {
    const t = new Date();
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Ne(e) {
    const t = e.getHours().toString().padStart(2, "0"),
        s = e.getMinutes().toString().padStart(2, "0");
    return `${t}h${s}`;
}
const Ht = () => {
        const [e, t] = m.exports.useState(+new Date()),
            [s, i] = ne(Dt),
            a = m.exports.useMemo(() => {
                const o = [],
                    l = new Date();
                for (let d = 0; d < 5; d++) {
                    const g = new Date(l);
                    g.setDate(l.getDate() + d), o.push(g);
                }
                return o;
            }, []),
            r = m.exports.useMemo(() => {
                const o = [],
                    l = new Date();
                let d = new Date();
                if (l.getDate() === new Date(e).getDate()) {
                    const S = Math.ceil(l.getMinutes() / 30) * 30;
                    d.setHours(l.getHours()), d.setMinutes(S);
                } else d.setHours(7), d.setMinutes(0);
                d.setSeconds(0), d.setMilliseconds(0);
                const g = new Date();
                for (g.setHours(21), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0); d <= g; )
                    o.push(new Date(d)), d.setMinutes(d.getMinutes() + 30);
                return o;
            }, [e]);
        return n(Fe, {
            mask: !0,
            maskClosable: !0,
            onVisibilityChange: o => le(o),
            inputClass: "border-none bg-transparent text-sm text-primary font-medium text-md m-0 p-0 h-auto",
            placeholder: "Ch\u1ECDn th\u1EDDi gian nh\u1EADn h\xE0ng",
            title: "Th\u1EDDi gian nh\u1EADn h\xE0ng",
            value: { date: e, time: r.find(o => +o === s) ? s : +r[0] },
            formatPickedValueDisplay: ({ date: o, time: l }) =>
                o && l ? `${be(new Date(l.value))}, ${Se(new Date(o.value))}` : "Ch\u1ECDn th\u1EDDi gian",
            onChange: ({ date: o, time: l }) => {
                o && t(+o.value), l && i(+l.value);
            },
            data: [
                { options: r.map((o, l) => ({ displayName: be(o), value: +o })), name: "time" },
                { options: a.map((o, l) => ({ displayName: Se(o, !0), value: +o })), name: "date" },
            ],
        });
    },
    It = () => {
        const [e, t] = ne(kt);
        return c(u, {
            className: "space-y-3 px-4",
            children: [
                n(h.Header, { children: "H\xECnh th\u1EE9c nh\u1EADn h\xE0ng" }),
                n(he, {
                    items: [
                        {
                            left: n(b, { icon: "zi-location", className: "my-auto" }),
                            right: n(m.exports.Suspense, { fallback: n(Ce, {}), children: n(Mt, {}) }),
                        },
                        {
                            left: n(b, { icon: "zi-clock-1", className: "my-auto" }),
                            right: c(u, {
                                flex: !0,
                                className: "space-x-2",
                                children: [
                                    c(u, {
                                        className: "flex-1 space-y-[2px]",
                                        children: [
                                            n(Ht, {}),
                                            n(h, {
                                                size: "xSmall",
                                                className: "text-gray",
                                                children: "Th\u1EDDi gian nh\u1EADn h\xE0ng",
                                            }),
                                        ],
                                    }),
                                    n(b, { icon: "zi-chevron-right" }),
                                ],
                            }),
                        },
                        {
                            left: n(b, { icon: "zi-user", className: "my-auto" }),
                            right: n(m.exports.Suspense, { fallback: n(Ee, {}), children: n(Tt, {}) }),
                        },
                        {
                            left: n(b, { icon: "zi-note", className: "my-auto" }),
                            right: n(u, {
                                flex: !0,
                                children: n(bt, {
                                    placeholder: "Nh\u1EADp ghi ch\xFA...",
                                    className: "border-none px-0 w-full focus:outline-none",
                                    maxRows: 4,
                                    value: e,
                                    onChange: s => t(s.currentTarget.value),
                                }),
                            }),
                        },
                    ],
                    limit: 4,
                    renderLeft: s => s.left,
                    renderRight: s => s.right,
                }),
            ],
        });
    },
    $t = () => {
        const e = k(pt),
            t = k(mt);
        return c(u, {
            flex: !0,
            className: "sticky bottom-0 bg-background p-4 space-x-4",
            children: [
                c(u, {
                    flex: !0,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    className: "min-w-[120px] flex-none",
                    children: [
                        c(h, { className: "text-gray", size: "xSmall", children: [e, " s\u1EA3n ph\u1EA9m"] }),
                        n(h.Title, { size: "large", children: n(H, { children: t }) }),
                    ],
                }),
                n(P, {
                    type: "highlight",
                    disabled: !e,
                    fullWidth: !0,
                    onClick: () => ct(t),
                    children: "\u0110\u1EB7t h\xE0ng",
                }),
            ],
        });
    },
    Ot = () =>
        n(h, {
            className: "text-gray px-4",
            size: "xxSmall",
            children:
                "B\u1EB1ng vi\u1EC7c ti\u1EBFn h\xE0nh thanh to\xE1n, b\u1EA1n \u0111\u1ED3ng \xFD v\u1EDBi \u0111i\u1EC1u ki\u1EC7n v\xE0 \u0111i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng c\u1EE7a Zalo Mini App",
        }),
    Lt = () => {
        const e = ue();
        return c(se, {
            className: "flex flex-col",
            children: [
                n(ae, { title: "Gi\u1ECF h\xE0ng", showBackIcon: !1 }),
                n(Ct, {}),
                n(It, {}),
                n(M, { size: 12 }),
                n(Ot, {}),
                n(M, { size: 32, className: "flex-1" }),
                !e && n($t, {}),
            ],
        });
    },
    Ft = () =>
        n(u, {
            className: "bg-white",
            pb: 4,
            children: n(V, {
                modules: [_e],
                pagination: { clickable: !0 },
                autoplay: !0,
                loop: !0,
                cssMode: !0,
                children: [1, 2, 3, 4, 5]
                    .map(e => lt(`banner-${e}.webp`))
                    .map((e, t) =>
                        n(
                            j,
                            {
                                className: "px-4",
                                children: n(u, {
                                    className: "w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton",
                                    style: { backgroundImage: `url(${e})` },
                                }),
                            },
                            t,
                        ),
                    ),
            }),
        });
var _t = [
    {
        id: "coffee",
        name: "C\xE0 ph\xEA",
        icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-coffee.svg",
    },
    {
        id: "matcha",
        name: "Tr\xE0 xanh",
        icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-matcha.svg",
    },
    {
        id: "food",
        name: "\u0110\u1ED3 \u0103n v\u1EB7t",
        icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-food.svg",
    },
    {
        id: "milktea",
        name: "Tr\xE0 s\u1EEFa",
        icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-milktea.svg",
    },
    {
        id: "drinks",
        name: "Gi\u1EA3i kh\xE1t",
        icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-drinks.svg",
    },
    {
        id: "bread",
        name: "B\xE1nh m\u1EF3",
        icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-bread.svg",
    },
    {
        id: "juice",
        name: "N\u01B0\u1EDBc \xE9p",
        icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-juice.svg",
    },
];
const qt = v({ key: "categories", get: () => _t }),
    Rt = w({ key: "selectedCategoryId", default: "coffee" }),
    Vt = () => {
        const e = k(qt),
            t = re(),
            s = T(Rt),
            i = a => {
                s(a), t("/category");
            };
        return n(u, {
            className: "bg-white grid grid-cols-4 gap-4 p-4",
            children: e.map((a, r) =>
                c(
                    "div",
                    {
                        onClick: () => i(a.id),
                        className: "flex flex-col space-y-2 items-center",
                        children: [
                            n("img", { className: "w-12 h-12", src: a.icon, alt: "banner-image" }),
                            n(h, { size: "xxSmall", className: "text-gray", children: a.name }),
                        ],
                    },
                    r,
                ),
            ),
        });
    },
    jt = () => {
        const e = qe();
        return n(u, {
            p: 4,
            className: "bg-white",
            children: n(Re.Search, {
                onFocus: () => e("/search"),
                placeholder: "T\xECm nhanh \u0111\u1ED3 u\u1ED1ng, m\xF3n m\u1EDBi ...",
            }),
        });
    },
    Gt = ({ product: e }) =>
        n(Z, {
            product: e,
            children: ({ open: t }) =>
                c("div", {
                    className: "space-y-2",
                    onClick: t,
                    children: [
                        n(u, {
                            className: "w-full aspect-square relative",
                            children: n("img", {
                                loading: "lazy",
                                src: e.image,
                                className:
                                    "absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton",
                                alt: "product-item-image",
                            }),
                        }),
                        n(h, { children: e.name }),
                        n(h, { size: "xxSmall", className: "text-gray pb-2", children: n(L, { children: e }) }),
                    ],
                }),
        }),
    q = a => {
        var r = a,
            { children: e, title: t, padding: s = "all" } = r,
            i = z(r, ["children", "title", "padding"]);
        return c(
            u,
            C(
                x(
                    {
                        className: `bg-background ${s === "all" ? "p-4 space-y-4" : ""} ${s === "title-only" ? "py-4 space-y-4" : ""}`,
                    },
                    i,
                ),
                { children: [n(h.Title, { className: `${s === "title-only" ? "px-4" : ""}`, children: t }), e] },
            ),
        );
    },
    $ = s => {
        var i = s,
            { className: e } = i,
            t = z(i, ["className"]);
        return n(
            h,
            C(x({}, t), { className: `bg-skeleton text-transparent w-fit h-fit animate-pulse ${e != null ? e : ""}` }),
        );
    },
    ve = s => {
        var i = s,
            { className: e } = i,
            t = z(i, ["className"]);
        return n("div", C(x({}, t), { className: `bg-skeleton animate-pulse ${e != null ? e : ""}` }));
    },
    Kt = () =>
        c("div", {
            className: "space-y-3",
            children: [
                n(ve, { className: "w-full aspect-video rounded-lg" }),
                c(u, {
                    className: "space-y-1",
                    children: [
                        n($, { size: "small", children: "1234567890" }),
                        n($, { size: "xxSmall", children: "25,000\u0111" }),
                        n($, { size: "large", children: "20,000\u0111" }),
                    ],
                }),
            ],
        }),
    Zt = () =>
        c("div", {
            className: "space-y-2",
            children: [
                n(ve, { className: "w-full aspect-square rounded-lg" }),
                n($, { children: "1234567890" }),
                n($, { size: "xxSmall", children: "20,000\u0111" }),
            ],
        }),
    Qt = "modulepreload",
    ke = {},
    Wt = "//h5.zdn.vn/zapps/2424552472169605658/zdev-ffa5ec27/",
    De = function (t, s) {
        return !s || s.length === 0
            ? t()
            : Promise.all(
                  s.map(i => {
                      if (((i = `${Wt}${i}`), i in ke)) return;
                      ke[i] = !0;
                      const a = i.endsWith(".css"),
                          r = a ? '[rel="stylesheet"]' : "";
                      if (document.querySelector(`link[href="${i}"]${r}`)) return;
                      const o = document.createElement("link");
                      if (
                          ((o.rel = a ? "stylesheet" : Qt),
                          a || ((o.as = "script"), (o.crossOrigin = "")),
                          (o.href = i),
                          document.head.appendChild(o),
                          a)
                      )
                          return new Promise((l, d) => {
                              o.addEventListener("load", l), o.addEventListener("error", d);
                          });
                  }),
              ).then(() => t());
    };
function Jt(e) {
    return new Promise(t => setTimeout(t, e));
}
const we = v({
        key: "products",
        get: () =>
            A(void 0, null, function* () {
                yield Jt(2e3);
                const e = (yield De(() => import("./products.399880b6.module.js"), [])).default,
                    t = (yield De(() => import("./variants.883ba36c.module.js"), [])).default;
                return e.map(s => C(x({}, s), { variants: t.filter(i => s.variantId.includes(i.id)) }));
            }),
    }),
    Yt = v({ key: "recommendProducts", get: ({ get: e }) => e(we).filter(s => s.sale) }),
    Xt = () => {
        const e = k(we);
        return n(q, {
            title: "Danh s\xE1ch s\u1EA3n ph\u1EA9m",
            children: n(u, { className: "grid grid-cols-2 gap-4", children: e.map(t => n(Gt, { product: t }, t.id)) }),
        });
    },
    Ut = () => {
        const e = [...new Array(12)];
        return n(q, {
            title: "Danh s\xE1ch s\u1EA3n ph\u1EA9m",
            children: n(u, { className: "grid grid-cols-2 gap-4", children: e.map((t, s) => n(Zt, {}, s)) }),
        });
    },
    en = () => n(m.exports.Suspense, { fallback: n(Ut, {}), children: n(Xt, {}) }),
    tn = () => {
        const e = k(Yt);
        return n(q, {
            title: "G\u1EE3i \xFD cho b\u1EA1n",
            padding: "title-only",
            children: n(V, {
                slidesPerView: 1.25,
                spaceBetween: 16,
                className: "px-4",
                children: e.map(t =>
                    n(
                        j,
                        {
                            children: n(Z, {
                                product: t,
                                children: ({ open: s }) =>
                                    c("div", {
                                        onClick: s,
                                        className: "space-y-3",
                                        children: [
                                            n(u, {
                                                className:
                                                    "relative aspect-video rounded-lg bg-cover bg-center bg-skeleton",
                                                style: { backgroundImage: `url(${t.image})` },
                                                children:
                                                    t.sale &&
                                                    c(h, {
                                                        size: "xxxxSmall",
                                                        className:
                                                            "absolute right-2 top-2 uppercase bg-green text-white h-4 px-[6px] rounded-full",
                                                        children: [
                                                            "Gi\u1EA3m",
                                                            " ",
                                                            t.sale.type === "percent"
                                                                ? `${t.sale.percent * 100}%`
                                                                : n(H, { children: t.sale.amount }),
                                                        ],
                                                    }),
                                            }),
                                            c(u, {
                                                className: "space-y-1",
                                                children: [
                                                    n(h, { size: "small", children: t.name }),
                                                    n(h, {
                                                        size: "xxSmall",
                                                        className: "line-through text-gray",
                                                        children: n(H, { children: t.price }),
                                                    }),
                                                    n(h, {
                                                        size: "large",
                                                        className: "font-medium text-primary",
                                                        children: n(L, { children: t }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            }),
                        },
                        t.id,
                    ),
                ),
            }),
        });
    },
    nn = () => {
        const e = [...new Array(3)];
        return n(q, {
            title: "G\u1EE3i \xFD cho b\u1EA1n",
            padding: "title-only",
            children: n(V, {
                slidesPerView: 1.25,
                spaceBetween: 16,
                className: "px-4",
                children: e.map((t, s) => n(j, { children: n(Kt, {}) }, s)),
            }),
        });
    },
    sn = () => n(m.exports.Suspense, { fallback: n(nn, {}), children: n(tn, {}) });
var an = "//h5.zdn.vn/zapps/2424552472169605658/zdev-ffa5ec27/assets/shell-high-logo.c5f2ee0d.png";
const rn = () => {
        const e = te(xe);
        return n(ae, {
            className: "app-header no-border pl-4 flex-none pb-[6px]",
            showBackIcon: !1,
            title: c(u, {
                flex: !0,
                alignItems: "center",
                className: "space-x-2",
                children: [
                    n("img", {
                        className: "w-8 h-8 rounded-lg border-inset",
                        src: B(t => t.template.headerLogo) || an,
                        alt: "logo",
                    }),
                    c(u, {
                        children: [
                            n(h.Title, { size: "small", children: G.app.title }),
                            e.state === "hasValue"
                                ? c(h, {
                                      size: "xxSmall",
                                      className: "text-gray",
                                      children: ["Welcome, ", e.contents.name, "!"],
                                  })
                                : n(h, { children: "..." }),
                        ],
                    }),
                ],
            }),
        });
    },
    on = () =>
        c(se, {
            className: "relative flex-1 flex flex-col bg-white",
            children: [
                n(rn, {}),
                c(u, {
                    className: "flex-1 overflow-auto",
                    children: [
                        n(jt, {}),
                        n(Ft, {}),
                        n(m.exports.Suspense, { children: n(Vt, {}) }),
                        n(M, {}),
                        n(sn, {}),
                        n(M, {}),
                        n(en, {}),
                        n(M, {}),
                    ],
                }),
            ],
        }),
    ze = ({ active: e }) => {
        const t = k(I);
        return c(u, {
            className: "relative",
            children: [
                n("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: n("path", {
                        d: "M21.6192 5.36729C21.1957 4.94573 20.6393 4.72291 20.0101 4.72291H6.92238C6.52149 4.72291 6.15038 4.81375 5.82421 4.98839L5.5668 3.32415C5.4706 2.70176 4.91261 2.25 4.24006 2.25H2.4852C2.11154 2.25 1.80859 2.55295 1.80859 2.92661C1.80859 3.30026 2.11154 3.60321 2.4852 3.60321H4.24065L4.76393 6.98633L5.97391 14.8094C6.12691 15.7986 7.0347 16.5167 8.13237 16.5167H18.8001C19.8978 16.5167 20.8056 15.7987 20.9586 14.8094L22.1686 6.98633C22.2612 6.38732 22.0661 5.81237 21.6192 5.36729ZM20.8312 6.77946L19.6213 14.6025C19.5718 14.9223 19.2188 15.1634 18.8001 15.1634H8.13237C7.71367 15.1634 7.36065 14.9223 7.31122 14.6025L6.10124 6.77967V6.7795L6.10115 6.77895C6.08335 6.66316 6.08644 6.50716 6.26819 6.32626C6.43721 6.15795 6.65123 6.07612 6.92243 6.07612H20.0101C20.2814 6.07612 20.4954 6.15795 20.6644 6.32626C20.8464 6.50746 20.8492 6.66367 20.8312 6.77946ZM8.55651 17.6716C7.43208 17.6716 6.51731 18.5864 6.51731 19.7108C6.51731 20.8352 7.43208 21.75 8.55651 21.75C9.68095 21.75 10.5957 20.8352 10.5957 19.7108C10.5958 18.5864 9.68095 17.6716 8.55651 17.6716ZM8.55651 20.3968C8.17825 20.3968 7.87052 20.0891 7.87052 19.7108C7.87052 19.3325 8.17825 19.0248 8.55651 19.0248C8.93478 19.0248 9.24251 19.3325 9.24251 19.7108C9.24251 20.0891 8.93478 20.3968 8.55651 20.3968ZM17.5108 17.6716C16.3864 17.6716 15.4716 18.5864 15.4716 19.7108C15.4716 20.8352 16.3864 21.75 17.5108 21.75C18.6352 21.75 19.55 20.8352 19.55 19.7108C19.55 18.5864 18.6352 17.6716 17.5108 17.6716ZM17.5108 20.3968C17.1325 20.3968 16.8248 20.0891 16.8248 19.7108C16.8248 19.3325 17.1325 19.0248 17.5108 19.0248C17.8891 19.0248 18.1968 19.3325 18.1968 19.7108C18.1968 20.0891 17.8891 20.3968 17.5108 20.3968Z",
                        fill: e ? "var(--zmp-primary-color)" : "#767a7f",
                    }),
                }),
                t.length > 0 &&
                    n(u, {
                        className: "absolute -right-2 -top-[2px] p-[2px] bg-background rounded-full",
                        children: n(h, {
                            className: "w-4 h-4 bg-red-500 rounded-full text-white",
                            size: "xxxxSmall",
                            children: t.length > 9 ? "9+" : t.length,
                        }),
                    }),
            ],
        });
    },
    R = {
        "/": { label: "Trang ch\u1EE7", icon: n(b, { icon: "zi-home" }) },
        "/notification": { label: "Th\xF4ng b\xE1o", icon: n(b, { icon: "zi-notif" }) },
        "/cart": { label: "Gi\u1ECF h\xE0ng", icon: n(ze, {}), activeIcon: n(ze, { active: !0 }) },
        "/profile": { label: "C\xE1 nh\xE2n", icon: n(b, { icon: "zi-user" }) },
    },
    ln = ["/search", "/category", "/result"],
    cn = () => {
        const [e, t] = m.exports.useState("/"),
            s = ue(),
            i = re(),
            a = Ve();
        return m.exports.useMemo(() => ln.includes(a.pathname), [a]) || s
            ? n(D, {})
            : n(ie, {
                  id: "footer",
                  activeKey: e,
                  onChange: o => t(o),
                  className: "z-50",
                  children: Object.keys(R).map(o =>
                      n(
                          ie.Item,
                          { label: R[o].label, icon: R[o].icon, activeIcon: R[o].activeIcon, onClick: () => i(o) },
                          o,
                      ),
                  ),
              });
    };
if (je().platform === "android") {
    const e = Math.round(window.ZaloJavaScriptInterface.getStatusBarHeight() / window.devicePixelRatio);
    document.body.style.setProperty("--zaui-safe-area-inset-top", `${e}px`);
}
const un = () =>
        c(u, {
            flex: !0,
            flexDirection: "column",
            className: "h-screen",
            children: [
                n(u, {
                    className: "flex-1 flex flex-col overflow-hidden",
                    children: c(Ge, {
                        children: [
                            n(oe, { path: "/", element: n(on, {}) }),
                            n(oe, { path: "/cart", element: n(Lt, {}) }),
                        ],
                    }),
                }),
                n(cn, {}),
            ],
        }),
    dn = () =>
        n(Ke, {
            children: n(it, {
                cssVariables: {
                    "--zmp-primary-color": B(e => e.template.primaryColor),
                    "--zmp-background-color": "#f4f5f6",
                },
                children: n(Ze, { children: n(Qe, { children: n(We, { children: n(un, {}) }) }) }),
            }),
        });
window.APP_CONFIG || (window.APP_CONFIG = G);
const hn = Je(document.getElementById("app"));
hn.render(Ye.createElement(dn));
