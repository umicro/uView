<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="no-mode-here">
					选择节流或者防抖模式，点击按钮，将会执行回调并显示在下方：
				</view>
				<view class="u-demo-result-line" v-if="result.length">
					<view v-for="(item, index) in result" :key="index">{{(index >= 1) ? '-' : ''}}回调</view>
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-button" hover-class="u-button--hover" hover-stay-time="150" @tap="btnClick">
				点击触发
			</view>
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式</view>
				<u-subsection :list="['节流', '防抖']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">时间间隔</view>
				<u-subsection current="1" :list="['500ms', '1000ms', '2000ms']" @change="timeoutChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">执行时机</view>
				<u-subsection :list="['开始处', '结束处']" @change="immediateChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: [],
				timeout: 1000,
				immediate: true,
				mode: 'throttle'
			}
		},
		methods: {
			modeChange(index) {
				this.mode = index ? 'debouncd' : 'throttle';
			},
			timeoutChange(index) {
				this.timeout = [500, 1000, 2000][index];
			},
			immediateChange(index) {
				this.immediate = !index;
			},
			getResult() {
				if(this.result.length >= 6) this.result = [];
				this.result.push(0);
			},
			btnClick() {
				if(this.mode == 'throttle') {
					this.$u.throttle(this.getResult, this.timeout, this.immediate);
				} else {
					this.$u.debounce(this.getResult, this.timeout, this.immediate);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-button {
		margin-top: 50rpx;
		margin-bottom: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80rpx;
		border-radius: 6rpx;
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
	}
	
	.u-button--hover {
		color: #fff;
		background-color: $u-type-primary;
	}
	
	.u-demo-result-line {
		display: flex;
		justify-content: center;
	}
</style>
