<template>
	<view class="wrap">
		<view class="item">
			<u-circle-progress type="warning" :percent="percent">
				<view class="u-progress-content">
					<view class="u-progress-dot"></view>
					<text class='u-progress-info'>查找中</text>
				</view>
			</u-circle-progress>
			<u-circle-progress type="warning" :width="150" :percent="percent">
				<view class="u-progress-content">
					<view class="u-progress-dot"></view>
					<text class='u-progress-info'>查找中</text>
				</view>
			</u-circle-progress>
		</view>
		<view class="item">
			<u-line-progress></u-line-progress>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				percent: 33
			}
		},
		onLoad() {
			setTimeout(() => {
				this.percent = 50;
			}, 1500);
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.u-progress-content {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.u-progress-dot {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50%;
		background-color: #fb9126;
	}
	
	.u-progress-info {
		font-size: 28rpx;
		padding-left: 16rpx;
		letter-spacing: 2rpx
	}
</style>
