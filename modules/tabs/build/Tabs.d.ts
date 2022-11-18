/// <reference types="react" />
export declare type TabType = {
    title: string;
    emoji: string;
    renderTab: () => React.ReactNode;
};
/** Container for tabs */
export declare const Tabs: (props: {
    title?: string | undefined;
    tabs: TabType[];
}) => JSX.Element;
//# sourceMappingURL=Tabs.d.ts.map