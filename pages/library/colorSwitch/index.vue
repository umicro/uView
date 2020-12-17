<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-demo-result-line">
					{{result}}
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">GRB转HEX</view>
				<u-subsection :list="['rgb(12,57,231)', 'rgb(15,148,32)', 'rgb(91,52,210)']" @change="rgbToHexChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">HEX转GRB</view>
				<u-subsection :list="['#0edc8a', '#d0a73c', '#3308dd']" @change="hexToRgbChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">颜色渐变(rgb(21,21,21)-rgb(56,56,56)，分10份)</view>
				<u-button @click="colorGradientChange">执行</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: null
			}
		},
		onLoad() {
			this.result = this.$u.rgbToHex('rgb(12,57,231)')
		},
		methods: {
			rgbToHexChange(index) {
				let color = index == 0 ? 'rgb(12,57,231)' : index == 1 ? 'rgb(15,148,32)' : 'rgb(91,52,210)';
				this.result = this.$u.rgbToHex(color)
			},
			hexToRgbChange(index) {
				let color = index == 0 ? '#0edc8a' : index == 1 ? '#d0a73c' : '#3308dd';
				this.result = this.$u.hexToRgb(color)
			},
			colorGradientChange(index) { 
				this.result = JSON.stringify(this.$u.colorGradient('rgb(21,21,21)', 'rgb(56,56,56)', 10))
			},
			getResult() {
				this.result = this.$u.guid(this.length, this.firstU, this.radix);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
