<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-steps :direction="direction" :current="current" :list="steps" :mode="mode" :icon="icon"></u-steps>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式</view>
				<u-subsection :list="['number', 'dot']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">方向</view>
				<u-subsection :list="['横向', '竖向']" @change="directionChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义图标</view>
				<u-subsection :list="['否', '是']" @change="iconChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">当前步值</view>
				<u-subsection :list="['1', '2', '3', '4']" @change="stepChange"></u-subsection>
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
				icon: 'checkmark',
				mode: 'number',
				direction: 'row'
			}
		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'number' : 'dot';
			},
			stepChange(index) {
				this.current = [0, 1, 2, 3][index];
			},
			iconChange(index) {
				this.icon = index == 0 ? 'checkmark' : 'map-fill';
			},
			directionChange(index) {
				this.direction = index == 0 ? 'row' : 'column';
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
