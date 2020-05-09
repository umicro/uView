<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-steps :current="current" :list="steps" :mode="mode" :type="type"></u-steps>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式</view>
				<u-subsection vibrateShort :list="['number', 'dot']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">主题选择</view>
				<u-subsection vibrateShort :list="['primary', 'success', 'error', 'warning', 'info']" @change="typeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">当前步值</view>
				<u-subsection vibrateShort :list="['1', '2', '3', '4']" @change="stepChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				steps: [{
					name: '下单'
				}, {
					name: '出库'
				}, {
					name: '运输'
				}, {
					name: '签收'
				}, ],
				current: 0,
				type: 'primary',
				mode: 'number'
			}
		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'number' : 'dot';
			},
			typeChange(index) {
				this.type = index == 0 ? 'primary' : index == 1 ? 'success' : index == 2 ? 'error' : index == 3 ? 'warning'  : 'info';
			},
			stepChange(index) {
				this.current = index == 0 ? 0 : index == 1 ? 1 : index == 2 ? 2 : 3;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.box {
		margin: 50rpx 0;
	}
</style>
