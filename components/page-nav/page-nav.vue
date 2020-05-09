<template>
	<view class="nav-wrap">
		<view class="nav-title">
			<image class="logo" src="https://cdn.uviewui.com/uview/common/logo.png" mode="widthFix"></image>
			<view class="nav-info">
				<view class="nav-title__text">
					uView UI
				</view>
				<view class="nav-slogan">
					 多平台快速开发的UI框架
				</view>
			</view>
		</view>
		<view class="nav-desc">
			{{desc}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			desc: String
		}
	}
</script>

<style lang="scss" scoped>
	.nav-wrap {
		padding: 30rpx;
	}
	
	.nav-title {
		display: flex;
		align-items: center;
	}
	
	.nav-info {
		margin-left: 30rpx;
	}
	
	.nav-title__text {
		display: flex;
		color: $u-main-color;
		font-size: 50rpx;
		font-weight: bold;
	}
	
	.logo {
		width: 140rpx;
		height: auto;
	}
	
	.nav-slogan {
		color: $u-tips-color;
		font-size: 28rpx;
	}
	
	.nav-desc {
		margin-top: 20rpx;
		font-size: 28rpx;
		color: $u-content-color;
	}
</style>
