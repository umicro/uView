import { VNode } from 'vue';

/**
 * 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
 * this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
 * @param name
 * @param keys
 */
declare type getParent = (name: string, keys: string[]) => VNode | Record<string, any>;
export default getParent;
