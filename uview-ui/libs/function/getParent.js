// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
export default function getParent(name, keys) {
	let parent = this.$parent;
	// 通过while历遍，这里主要是为了H5需要多层解析的问题
	while (parent) {
		// 父组件
		if (parent.$options.name !== name) {
			parent = parent.$parent;
		} else {
			return keys.reduce((result, key) => {
				result[key] = parent[key];
				return result;
			}, {});
		}
	}

	return null;
}