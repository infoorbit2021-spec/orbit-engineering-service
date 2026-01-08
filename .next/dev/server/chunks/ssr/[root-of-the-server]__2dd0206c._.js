module.exports = [
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"403b0062715340a2a1adb6b9a0058963d0cc0799ff":"getSheetData"},"",""] */ __turbopack_context__.s([
    "getSheetData",
    ()=>getSheetData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/googleapis/build/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getSheetData(sheetName) {
    const apiKey = process.env.GOOGLE_API_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!apiKey || !spreadsheetId) {
        console.warn('Missing GOOGLE_API_KEY or GOOGLE_SHEET_ID');
        return [];
    }
    const sheets = __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["google"].sheets({
        version: 'v4',
        auth: apiKey
    });
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: sheetName
    });
    const rows = res.data.values;
    if (!rows || rows.length === 0) return [];
    const headers = rows[0];
    return rows.slice(1).map((row)=>{
        const obj = {};
        headers.forEach((h, i)=>{
            obj[h] = row[i] ?? '';
        });
        return obj;
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getSheetData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSheetData, "403b0062715340a2a1adb6b9a0058963d0cc0799ff", null);
}),
"[project]/orbit-engineering-service-1/.next-internal/server/app/services/page/actions.js { ACTIONS_MODULE0 => \"[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$lib$2f$fetchGoogleSheet$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-rsc] (ecmascript)");
;
}),
"[project]/orbit-engineering-service-1/.next-internal/server/app/services/page/actions.js { ACTIONS_MODULE0 => \"[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "403b0062715340a2a1adb6b9a0058963d0cc0799ff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$lib$2f$fetchGoogleSheet$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSheetData"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f2e$next$2d$internal$2f$server$2f$app$2f$services$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$lib$2f$fetchGoogleSheet$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/orbit-engineering-service-1/.next-internal/server/app/services/page/actions.js { ACTIONS_MODULE0 => "[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$lib$2f$fetchGoogleSheet$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2dd0206c._.js.map