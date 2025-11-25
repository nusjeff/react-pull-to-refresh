"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Basic = void 0;
var React = __importStar(require("react"));
var src_1 = require("../src");
var Basic = /** @class */ (function (_super) {
    __extends(Basic, _super);
    function Basic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Basic.prototype.onRefresh = function () {
        return new Promise(function (resolve) {
            setTimeout(resolve, 2000);
        });
    };
    Basic.prototype.render = function () {
        return (React.createElement("div", { style: { overflow: "scroll" } },
            React.createElement(src_1.PullToRefresh, { pullDownContent: React.createElement(src_1.PullDownContent, null), releaseContent: React.createElement(src_1.ReleaseContent, null), refreshContent: React.createElement(src_1.RefreshContent, null), pullDownThreshold: 200, onRefresh: this.onRefresh, triggerHeight: 100, backgroundColor: "white" },
                React.createElement("div", { id: "basic-container" },
                    React.createElement("div", { id: "basic-label" }, "PullToRefresh")),
                React.createElement("style", null, "\n                        #basic-container {\n                            height: 100vh;\n                            display: flex;\n                            flex-direction: column;\n                            align-items: center;\n                            background: darkslategray;\n                        }\n                        #basic-label {\n                            user-select: none;\n                            margin-top: 20px;\n                            color: aliceblue;\n                            border: 1px solid aliceblue;\n                            border-radius: 6px;\n                            padding: 5px 2px;\n                        }\n                        #basic-label:hover {\n                            cursor: pointer;\n                        }\n                    "))));
    };
    return Basic;
}(React.Component));
exports.Basic = Basic;
//# sourceMappingURL=Basic.js.map