<template>
	<view class="u-content">
		<u-parse :html="content" show-with-animation></u-parse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: `
					<p>露从今夜白，月是故乡明</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
				`
			}
		},
	}
</script>

<style lang="scss" scoped>
	.u-content {
		margin-top: 100rpx;
		color: $u-content-color;
		font-size: 32rpx;
		line-height: 1.8;
		
		// 标签形式无效
		p {
			color: $u-tips-color;
		}
	}
</style>
