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
		}
	},
	onReachBottom() {
		uni.$emit('uOnReachBottom')
	}
}
