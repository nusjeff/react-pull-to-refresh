"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullDownContent = void 0;
var React = __importStar(require("react"));
var PullDownContent = function (_a) {
    var _b = _a.height, height = _b === void 0 ? "200px" : _b, _c = _a.background, background = _c === void 0 ? "none" : _c, _d = _a.label, label = _d === void 0 ? "Pull down to refresh" : _d;
    return (React.createElement("div", { id: "container2" },
        React.createElement("div", { id: "arrow" }),
        React.createElement("span", null, label),
        React.createElement("style", null, "\n                #container2 {\n                    background: ".concat(background, ";\n                    height: ").concat(height, ";\n                    text-align: center;\n                }\n                #arrow {\n                    margin: 10px auto;\n                    border-left: 15px solid transparent;\n                    border-right: 15px solid transparent;\n                    border-top: 15px solid #666666;\n                    height: 0;\n                    width: 0;\n                    -webkit-animation: fadein 1.5s infinite;\n                    animation: fadein 1.5s infinite;\n                }\n                @keyframes fadein {\n                    0%, 100% {\n                        opacity: 0;\n                    }\n                    45%, 55% {\n                        opacity: 1;\n                    }\n                }\n            "))));
};
exports.PullDownContent = PullDownContent;
//# sourceMappingURL=PullDownContent.js.map