// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
export default function getParent(name, keys) {
	let parent = this.$parent;
	// 通过while历遍，这里主要是为了H5需要多层解析的问题
	while (parent) {
		// 父组件
		if (parent.$options.name !== name) {
			// 如果组件的name不相等，继续上一级寻找
			parent = parent.$parent;
		} else {
			let data = {};
			// 历遍传过来的对象参数
			for(let i in keys) {
				// 如果父组件有此值则用，无此值则用默认值
				data[i] = parent[i] ? parent[i] : keys[i];
			}
			return data;
		}
	}

	return {};
}