/* tslint:disable:no-implicit-dependencies */
import * as React from "react";
import {createRoot} from "react-dom/client";
import {AppContainer} from "react-hot-loader";
import {Basic} from "../examples/Basic";

let rootElement: HTMLElement | null = null;
let root: ReturnType<typeof createRoot> | null = null;

const renderExample = () => {
    const container = document.getElementById("sample");
    if (!container) return;

    if (!root) {
        root = createRoot(container);
        rootElement = container;
    }

    root.render(
        <AppContainer>
            <Basic />
        </AppContainer>
    );
};

renderExample();

// Hot Module Replacement API
declare const module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/PullToRefresh", () => {
        renderExample();
    });
}
