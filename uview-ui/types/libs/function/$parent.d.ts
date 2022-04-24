import { VNode } from 'vue';

/**
 * 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
 * this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
 * 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
 * 值(默认为undefined)，就是查找最顶层的$parent
 * @param name 名称，默认值 undefined
 */
declare type $parent = (name?: string) => VNode | false;

export default $parent;
