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
		$uGetRect(selector, all) {
			return new Promise(resolve => {
				let query = null;
				// 支付宝小程序不能加后面的.in(this)，是它自身的限制
				// #ifndef MP-ALIPAY
				query = uni.createSelectorQuery().in(this)
				// #endif
				// #ifdef MP-ALIPAY
				query = uni.createSelectorQuery()
				// #endif
				query[all ? 'selectAll' : 'select'](selector)
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
		}
	},
	onReachBottom() {
		uni.$emit('uOnReachBottom')
	}
}
