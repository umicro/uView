<template>
	<view class="wrap">
		<text>滑动页面，返回顶部按钮将出现在右下角</text>
		<u-back-top :scrollTop="scrollTop" :mode="mode" :icon-style="iconStyle"></u-back-top>
	</view>
</template>

<script>
export default {
	data() {
		return {
			scrollTop: 0,
			mode: 'square',
			iconStyle: {
				fontSize: '32rpx',
				color: '#2979ff'
			}
		}
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	}
};
</script>

<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}
</style>
