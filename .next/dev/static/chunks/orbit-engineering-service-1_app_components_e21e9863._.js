(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/orbit-engineering-service-1/app/components/Stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Stats({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: data.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-white to-[#f1f5f9] p-5 rounded-xl shadow text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3 text-2xl font-bold text-blue-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 w-9 h-9",
                                        dangerouslySetInnerHTML: {
                                            __html: stat.Icons
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                                            value: stat.Count
                                        }, void 0, false, {
                                            fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
                                            lineNumber: 31,
                                            columnNumber: 5
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-xs text-slate-600",
                                children: stat.Label
                            }, void 0, false, {
                                fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Stats;
function AnimatedNumber({ value, duration = 1500 }) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const numericValue = Number(String(value).replace(/\D/g, "")) || 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedNumber.useEffect": ()=>{
            let start = 0;
            const step = Math.max(numericValue / (duration / 16), 1);
            const interval = setInterval({
                "AnimatedNumber.useEffect.interval": ()=>{
                    start += step;
                    if (start >= numericValue) {
                        setCount(numericValue);
                        clearInterval(interval);
                    } else {
                        setCount(Math.floor(start));
                    }
                }
            }["AnimatedNumber.useEffect.interval"], 16);
            return ({
                "AnimatedNumber.useEffect": ()=>clearInterval(interval)
            })["AnimatedNumber.useEffect"];
        }
    }["AnimatedNumber.useEffect"], [
        numericValue,
        duration
    ]);
    const suffix = String(value).replace(/[0-9,]/g, "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: [
            count.toLocaleString(),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/orbit-engineering-service-1/app/components/Stats.tsx",
        lineNumber: 74,
        columnNumber: 10
    }, this);
}
_s(AnimatedNumber, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
_c1 = AnimatedNumber;
var _c, _c1;
__turbopack_context__.k.register(_c, "Stats");
__turbopack_context__.k.register(_c1, "AnimatedNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/orbit-engineering-service-1/app/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>"); // hamburger icons
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Services',
            href: '/services'
        },
        {
            name: 'Sample Projects',
            href: '/sample-projects'
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        {
            name: 'Contact Us',
            href: '/contact'
        },
        {
            name: 'Careers',
            href: '/careers'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " mx-auto px-4 flex items-center justify-between h-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/img/logo.PNG",
                            alt: "Orbit Logo",
                            width: 190,
                            height: 190,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex gap-8 text-slate-700 font-medium",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `relative transition ${pathname === item.href ? 'text-[#8cccd4] font-semibold' : 'hover:text-[#8cccd4]'}`,
                                children: [
                                    item.name,
                                    pathname === item.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-[-6px] left-0 w-full h-[2px] bg-[#8cccd4] rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen(!open),
                        className: "md:hidden text-slate-700",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                            lineNumber: 66,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                            lineNumber: 66,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "md:hidden flex flex-col gap-5 px-6 pb-6 text-slate-700 bg-white border-t shadow-lg animate-slideDown",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        onClick: ()=>setOpen(false),
                        className: `block py-2 border-b last:border-none ${pathname === item.href ? 'text-[#8cccd4] font-semibold' : 'hover:text-[#8cccd4]'}`,
                        children: item.name
                    }, item.href, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/orbit-engineering-service-1/app/components/Header.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Header, "v3TFSdztexVkGEr5cLhcJl2cWfw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProjectsFilter({ projectRows }) {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    // Extract unique filter values
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectsFilter.useMemo[categories]": ()=>[
                "All",
                ...new Set(projectRows.map({
                    "ProjectsFilter.useMemo[categories]": (p)=>p.Category
                }["ProjectsFilter.useMemo[categories]"]).filter(Boolean))
            ]
    }["ProjectsFilter.useMemo[categories]"], [
        projectRows
    ]);
    const statuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectsFilter.useMemo[statuses]": ()=>[
                "All",
                ...new Set(projectRows.map({
                    "ProjectsFilter.useMemo[statuses]": (p)=>p.Status
                }["ProjectsFilter.useMemo[statuses]"]).filter(Boolean))
            ]
    }["ProjectsFilter.useMemo[statuses]"], [
        projectRows
    ]);
    // Apply filtering
    const filteredProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectsFilter.useMemo[filteredProjects]": ()=>projectRows.filter({
                "ProjectsFilter.useMemo[filteredProjects]": (p)=>{
                    const matchCategory = selectedCategory === "All" || p.Category === selectedCategory;
                    const matchStatus = selectedStatus === "All" || p.Status === selectedStatus;
                    return matchCategory && matchStatus;
                }
            }["ProjectsFilter.useMemo[filteredProjects]"])
    }["ProjectsFilter.useMemo[filteredProjects]"], [
        selectedCategory,
        selectedStatus,
        projectRows
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 py-10 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-6 shadow mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-10 justify-between items-start md:items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                        title: "Category",
                        options: categories,
                        selected: selectedCategory,
                        onSelect: setSelectedCategory
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-600 mb-4",
                children: [
                    "Showing ",
                    filteredProjects.length,
                    " project",
                    filteredProjects.length !== 1 && "s"
                ]
            }, void 0, true, {
                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px] w-full",
                children: [
                    filteredProjects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-full text-center text-slate-500 py-10",
                        children: "🚫 No results found — try adjusting your filters."
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                            project: project
                        }, project.Slug, false, {
                            fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(ProjectsFilter, "9BinSwMsYjmDN1axDqGVHi8KWPc=");
_c = ProjectsFilter;
/* ---------------------- Filter Button Group ---------------------- */ function FilterSection({ title, options, selected, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-slate-700 mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-pressed": selected === option,
                        onClick: ()=>onSelect(option),
                        className: `px-3 py-1 rounded-full border text-sm transition ${selected === option ? "bg-slate-900 text-white border-slate-900" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`,
                        children: option
                    }, option, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c1 = FilterSection;
/* --------------------------- Card Component --------------------------- */ function ProjectCard({ project }) {
    const tags = project.Tags?.split(",").filter(Boolean) || [];
    const statusColor = project.Status?.toLowerCase().includes("complete") ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-44",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `/img/${project.HeroImage}`,
                        alt: project.Title,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    project.Status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-semibold ${statusColor}`,
                        children: project.Status
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    project.Category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-3 left-3 bg-white/80 text-xs px-3 py-1 rounded-full shadow",
                        children: project.Category
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-1",
                        children: project.Title
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-600 mb-3 elipsis",
                        children: project.ShortDescription
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-xs text-slate-500 mb-3",
                        children: [
                            project.Location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "📍 ",
                                    project.Location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                                lineNumber: 157,
                                columnNumber: 32
                            }, this),
                            project.Year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "📅 ",
                                    project.Year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                                lineNumber: 158,
                                columnNumber: 28
                            }, this),
                            project.Size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "📐 ",
                                    project.Size
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                                lineNumber: 159,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-4",
                        children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded",
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/projects/${project.Slug}`,
                        className: "text-slate-900 font-medium hover:underline",
                        children: "View Details →"
                    }, void 0, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/orbit-engineering-service-1/app/components/ProjectsFilter.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c2 = ProjectCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ProjectsFilter");
__turbopack_context__.k.register(_c1, "FilterSection");
__turbopack_context__.k.register(_c2, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=orbit-engineering-service-1_app_components_e21e9863._.js.map