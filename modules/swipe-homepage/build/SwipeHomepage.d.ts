/// <reference types="react" />
export declare type SwipeItem = {
    image: string;
    description: string;
    title: string;
    /**
     * if given,href for the title and description (when clicking on one of those)
     */
    href?: string;
};
/**
 * This homepage component assumes you provide it some CTA's (ideally 2 or 3) and some items.
 *
 * - The items will be swipable
 * - The logo should be available in `public/logo.png`
 *
 * ![Example](../assets/SwipeHomepage.mov)
 */
export declare const SwipeHomepage: (props: {
    ctas: {
        text: string;
        href: string;
    }[];
    items: SwipeItem[];
}) => JSX.Element;
//# sourceMappingURL=SwipeHomepage.d.ts.map