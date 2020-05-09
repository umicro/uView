<template>
	<view class="u-gap" :style="[gapStyle]"></view>
</template>

<script>
/**
 * gap 间隔槽
 * @description 该组件一般用于内容块之间的用一个灰色块隔开的场景，方便用户风格统一，减少工作量
 * @tutorial https://www.uviewui.com/components/gap.html
 * @property {String} bg-color 背景颜色（默认#f3f4f6）
 * @property {String Number} height 分割槽高度，单位rpx（默认30）
 * @property {String Number} margin-top 与前一个组件的距离，单位rpx（默认0）
 * @property {String Number} margin-bottom 与后一个组件的距离，单位rpx（0）
 * @example <u-gap height="80" bg-color="#bbb"></u-gap>
 */
export default {
	name: "u-gap",
	props: {
		bgColor: {
			type: String,
			default: 'transparent ' // 背景透明
		},
		// 高度
		height: {
			type: [String, Number],
			default: 30
		},
		// 与上一个组件的距离
		marginTop: {
			type: [String, Number],
			default: 0
		},
		// 与下一个组件的距离
		marginBottom: {
			type: [String, Number],
			default: 0
		},
	},
	computed: {
		gapStyle() {
			return {
				backgroundColor: this.bgColor,
				height: this.height + 'rpx',
				marginTop: this.marginTop + 'rpx',
				marginBottom: this.marginBottom + 'rpx'
			};
		}
	}
};
</script>

<style></style>
