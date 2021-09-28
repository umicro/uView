module.exports = {
	data() {
		return {}
	},
	onLoad() {
		// getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
		this.$u.getRect = this.$uGetRect
	},
	methods: {
		// 查询节点信息
		// 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
		// 解决办法为在组件根部再套一个没有任何作用的view元素
		$uGetRect(selector, all) {
			return new Promise(resolve => {
				uni.createSelectorQuery().
				in(this)[all ? 'selectAll' : 'select'](selector)
					.boundingClientRect(rect => {
						if (all && Array.isArray(rect) && rect.length) {
							resolve(rect)
						}
						if (!all && rect) {
							resolve(rect)
						}
					})
					.exec()
			})
		},
		getParentData(parentName = '') {
			// 避免在created中去定义parent变量
			if(!this.parent) this.parent = false;
			// 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
			// 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
			// 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
			this.parent = this.$u.$parent.call(this, parentName);
			if(this.parent) {
				// 历遍parentData中的属性，将parent中的同名属性赋值给parentData
				Object.keys(this.parentData).map(key => {
					this.parentData[key] = this.parent[key];
				});
			}
		},
		// 阻止事件冒泡
		preventEvent(e) {
			e && e.stopPropagation && e.stopPropagation()
		}
	},
	onReachBottom() {
		uni.$emit('uOnReachBottom')
	},
	beforeDestroy() {
		// 判断当前页面是否存在parent和children，一般在checkbox和checkbox-group父子联动的场景会有此情况
		// 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
		if(this.parent && uni.$u.test.array(this.parent.children)) {
			// 组件销毁时，移除父组件中的children数组中对应的实例
			const childrenList = this.parent.children
			childrenList.map((child, index) => {
				// 如果相等，则移除
				if(child === this) {
					childrenList.splice(index, 1)
				}
			})
		}
	}
}
