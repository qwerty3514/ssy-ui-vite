import type { ExtractPropTypes, PropType } from 'vue';
export declare const avatarProps: {
    readonly shape: {
        readonly type: PropType<"circle" | "square">;
        readonly default: "circle";
    };
    readonly size: {
        readonly type: PropType<"small" | "medium" | "large">;
        readonly default: "medium";
    };
    readonly src: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
