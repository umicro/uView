<template>
	<view class="u-progress" :style="{
		borderRadius: round ? '100rpx' : 0,
		height: height + 'rpx',
		backgroundColor: inactiveColor
	}">
		<view :class="[
			type ? `u-type-${type}-bg` : '',
			striped ? 'u-striped' : '',
			striped && stripedActive ? 'u-striped-active' : ''
		]" class="u-active" :style="[progressStyle]">{{showPercent ? percent + '%' : ''}}
		</view>
	</view>
</template>

<script>
	/**
	 * lineProgress 线型进度条
	 * @description 展示操作或任务的当前进度，比如上传文件，是一个线形的进度条。
	 * @tutorial https://www.uviewui.com/components/lineProgress.html
	 * @property {String Number} percent 进度条百分比值，为数值类型，0-100
	 * @property {Boolean} round 进度条两端是否为半圆（默认true）
	 * @property {String} type 如设置，active-color值将会失效
	 * @property {String} active-color 进度条激活部分的颜色（默认#19be6b）
	 * @property {String} inactive-color 进度条的底色（默认#ececec）
	 * @property {Boolean} show-percent 是否在进度条内部显示当前的百分比值数值（默认true）
	 * @property {String Number} height 进度条的高度，单位rpx（默认28）
	 * @property {Boolean} striped 是否显示进度条激活部分的条纹（默认false）
	 * @property {Boolean} striped-active 条纹是否具有动态效果（默认false）
	 * @example <u-line-progress :percent="70" :show-percent="true"></u-line-progress>
	 */
	export default {
		name: "u-line-progress",
		props: {
			// 两端是否显示半圆形
			round: {
				type: Boolean,
				default: true
			},
			// 主题颜色
			type: {
				type: String,
				default: ''
			},
			// 激活部分的颜色
			activeColor: {
				type: String,
				default: '#19be6b'
			},
			inactiveColor: {
				type: String,
				default: '#ececec'
			},
			// 进度百分比，数值
			percent: {
				type: Number,
				default: 0
			},
			// 是否在进度条内部显示百分比的值
			showPercent: {
				type: Boolean,
				default: true
			},
			// 进度条的高度，单位rpx
			height: {
				type: [Number, String],
				default: 28
			},
			// 是否显示条纹
			striped: {
				type: Boolean,
				default: false
			},
			// 条纹是否显示活动状态
			stripedActive: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			}
		},
		computed: {
			progressStyle() {
				let style = {};
				style.width = this.percent + '%';
				if(this.activeColor) style.backgroundColor = this.activeColor;
				return style;
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-progress {
		overflow: hidden;
		height: 15px;
		display: inline-flex;
		align-items: center;
		width: 100%;
		border-radius: 100rpx;
	}

	.u-active {
		width: 0;
		height: 100%;
		align-items: center;
		display: flex;
		justify-items: flex-end;
		justify-content: space-around;
		font-size: 20rpx;
		color: #ffffff;
		transition: all 0.4s ease;
	}

	.u-striped {
		background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
		background-size: 39px 39px;
	}

	.u-striped-active {
		animation: progress-stripes 2s linear infinite;
	}

	@keyframes progress-stripes {
		0% {
			background-position: 0 0;
		}

		100% {
			background-position: 39px 0;
		}
	}
</style>
