interface UStoreContext<K extends string | number | symbol, V> {
  rootState: Record<K | string, V>;
}

interface UStoreParams<K, V> {
  name: K;
  value: V;
}

/**
 * 暂时不用vuex模块方式实现，将该方法直接放入到/store/index.js中
 */
export default interface module {
  actions: {
    $uStore<K extends string | number | symbol, V>(
      { rootState }: UStoreContext<K, V>,
      params: UStoreParams<K, V>,
    ): void;
  };
}
