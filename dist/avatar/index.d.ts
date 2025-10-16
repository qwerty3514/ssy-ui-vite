import _Avatar from './Avatar.vue';
export { avatarProps } from './avatar';
export type { AvatarProps } from './avatar';
export declare const Avatar: import("vue").DefineComponent<object, object, any>;
export default _Avatar;
declare module 'vue' {
    interface GlobalComponents {
        SAvatar: typeof _Avatar;
    }
}
