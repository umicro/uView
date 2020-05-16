<template>
	<view class="u-empty" v-if="show" :style="{
		marginTop: marginTop + 'rpx'
	}">
		<image class="u-image" :src="src ? src : icons[mode].image" mode="widthFix" :style="{
			width: imgWidth + 'rpx',
			height: imgHeight == 'auto' ? 'auto' : imgHeight + 'rpx'
		}"></image>
		<text :style="{
			color: color,
			fontSize: fontSize + 'rpx',
		}">
			{{text ? text : icons[mode].text}}
		</text>
		<view class="u-slot-wrap">
			<slot name="bottom"></slot>
		</view>
	</view>
</template>

<script>
	import icon from "./icon.js";
	/**
	 * empty 内容为空
	 * @description 该组件用于需要加载内容，但是加载的第一页数据就为空，提示一个"没有内容"的场景， 我们精心挑选了十几个场景的图标，方便您使用。
	 * @tutorial https://www.uviewui.com/components/empty.html
	 * @property {String} color 文字颜色（默认#c0c4cc）
	 * @property {String} text 文字提示（默认“无内容”）
	 * @property {String} src 自定义图标路径，如定义，mode参数会失效
	 * @property {String Number} font-size 提示文字的大小，单位rpx（默认28）
	 * @property {String} mode 内置的图标，见官网说明（默认data）
	 * @property {String Number} img-width 图标的宽度，单位rpx（默认240）
	 * @property {String} img-height 图标的高度，单位rpx（默认auto）
	 * @property {String Number} margin-top 组件距离上一个元素之间的距离（默认0）
	 * @property {Boolean} show 是否显示组件（默认true）
	 * @event {Function} click 点击组件时触发
	 * @event {Function} close 点击关闭按钮时触发
	 * @example <u-empty text="所谓伊人，在水一方" mode="list"></u-empty>
	 */
	export default {
		name: "u-empty",
		props: {
			// 图标路径
			src: {
				type: String,
				default: ''
			},
			// 提示文字
			text: {
				type: String,
				default: ''
			},
			// 文字颜色
			color: {
				type: String,
				default: '#c0c4cc'
			},
			// 文字大小，单位rpx
			fontSize: {
				type: [String, Number],
				default: 26
			},
			// 选择预置的图标类型
			mode: {
				type: String,
				default: 'data'
			},
			//  图标宽度，单位rpx
			imgWidth: {
				type: [String, Number],
				default: 240
			},
			// 图标高度，单位rpx
			imgHeight: {
				type: [String, Number],
				default: 'auto'
			},
			// 是否显示组件
			show: {
				type: Boolean,
				default: true
			},
			// 组件距离上一个元素之间的距离
			marginTop: {
				type: [String, Number],
				default: 0
			}
		},
		data() {
			return {
				icons: icon
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-empty {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.u-image {
		margin-bottom: 20rpx;
	}

	.u-slot-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20rpx;
	}
</style>
