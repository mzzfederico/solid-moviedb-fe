import { mergeProps } from "solid-js";

export function Heading(props: { lvl?: number, children?: any, style?: Object, class?: string }) {
    const extendedProps = mergeProps({ lvl: 4, style: {}, children: null, class: "" }, props);

    return (
        <span style={{...extendedProps.style}} class={`${levels[extendedProps.lvl] || levels[4]} ${extendedProps.class}`}>{extendedProps.children}</span>
    )
}

const levels = {
    1: "text-2xl",
    2: "text-xl",
    3: "text-lg",
    4: "text-base",
    5: "text-sm",
};