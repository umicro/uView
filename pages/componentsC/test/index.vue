<template>
	<u-upload :before-upload="beforeUpload"></u-upload>
</template>

<script>
	export default {
		methods: {
			beforeUpload(index, list) {
				// 返回一个promise
				return new Promise((resolve, reject) => {
					this.$u.post('http://www.tp5.com/index.php/index/index/hello').then(res => {
						// resolve()之后，将会进入promise的组件内部的then回调，相当于返回true
						resolve();
					}).catch(err => {
						// reject()之后，将会进入promise的组件内部的catch回调，相当于返回false
						reject();
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 40rpx;
	}
</style>