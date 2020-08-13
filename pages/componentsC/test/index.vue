<template>
	<view style="margin-top: 200rpx;">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 错误示例，切换语言时，这个intro并不会自动更新到视图
				// intro: this.$t('lang.intro')
			}
		},
		computed: {
			// 正确用法
			
		},
		onShow() {
			
		},
		
	}
</script>