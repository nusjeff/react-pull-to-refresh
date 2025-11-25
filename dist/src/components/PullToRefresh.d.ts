import * as React from "react";
export interface PullToRefreshProps {
    pullDownContent: React.ReactElement;
    releaseContent: React.ReactElement;
    refreshContent: React.ReactElement;
    pullDownThreshold: number;
    onRefresh: () => Promise<any>;
    triggerHeight?: number | "auto";
    backgroundColor?: string;
    containerStyle?: React.CSSProperties;
    startInvisible?: boolean;
    children?: React.ReactNode;
}
export interface PullToRefreshState {
    pullToRefreshThresholdBreached: boolean;
    maxPullDownDistance: number;
    onRefreshing: boolean;
}
export declare class PullToRefresh extends React.Component<PullToRefreshProps, PullToRefreshState> {
    private container;
    private containerRef;
    private pullDown;
    private pullDownRef;
    private dragging;
    private startY;
    private currentY;
    constructor(props: Readonly<PullToRefreshProps>);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onTouchStart;
    private onTouchMove;
    private onEnd;
    private initContainer;
    private renderPullDownContent;
    render(): React.JSX.Element;
}
