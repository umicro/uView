<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-no-demo-here">滚动页面即可在右下角看到返回顶部的按钮</view>
			</view>
			<u-back-top :scrollTop="scrollTop" :mode="mode"
			:bottom="bottom" :right="right" :top="top" :icon="icon" :custom-style="customStyle"
			:icon-style="iconStyle" :tips="tips"
			>
			</u-back-top>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式</view>
				<u-subsection :list="['圆形', '方形']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">组件位置</view>
				<u-subsection :list="['默认', '自定义']" @change="positionChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">显示组件的滚动条距离</view>
				<u-subsection current="1" :list="['200', '400', '600']" @change="scrollTopChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义样式</view>
				<u-subsection current="1" :list="['是', '否']" @change="styleChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				mode: 'circle',
				bottom: 200,
				right: 40,
				top: 400,
				icon: 'arrow-upward',
				iconStyle: {
					color: '#909399',
					fontSize: '38rpx'
				},
				customStyle: {},
				tips: ''
			}
		},
		methods: {
			modeChange(index) {
				this.mode = !index ? 'circle' : 'square';
			},
			positionChange(index) {
				if(index == 0) {
					this.bottom = 200;
					this.right = 40;
				} else {
					this.bottom = 400;
					this.right = 80;
				}
			},
			scrollTopChange(index) {
				this.top = [200, 400, 600][index];
			},
			styleChange(index) {
				if(index == 0) {
					this.icon = 'arrow-up';
					this.iconStyle = {
						color: '#2979ff',
						fontSize: '34rpx'
					};
					this.customStyle = {
						backgroundColor: '#a0cfff',
						color: '#2979ff'
					};
					this.tips = '顶部';
				} else {
					this.icon = 'arrow-upward';
					this.iconStyle = {
						color: '#909399',
						fontSize: '38rpx'
					};
					this.customStyle = {};
					this.tips = '';
				}
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {
		height: 200vh;
	}
</style>
