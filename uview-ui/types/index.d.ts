import U from './u';

declare module 'vue/types/vue' {
  interface Vue {
    $u: U;
  }
}

import _Vue from 'vue';

export * from './components';

interface UView {
  install(Vue: typeof _Vue): void;
}

declare const uView: UView;
export default uView;
