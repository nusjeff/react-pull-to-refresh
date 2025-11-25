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
/* tslint:disable:no-implicit-dependencies */
var React = __importStar(require("react"));
var client_1 = require("react-dom/client");
var react_hot_loader_1 = require("react-hot-loader");
var Basic_1 = require("../examples/Basic");
var rootElement = null;
var root = null;
var renderExample = function () {
    var container = document.getElementById("sample");
    if (!container)
        return;
    if (!root) {
        root = (0, client_1.createRoot)(container);
        rootElement = container;
    }
    root.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(Basic_1.Basic, null)));
};
renderExample();
if (module.hot) {
    module.hot.accept("./components/PullToRefresh", function () {
        renderExample();
    });
}
//# sourceMappingURL=dev.js.map