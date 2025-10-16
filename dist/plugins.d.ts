import type { App } from 'vue';
export interface UIPlugin {
    install: (app: App) => void;
}
declare const _default: UIPlugin[];
export default _default;
