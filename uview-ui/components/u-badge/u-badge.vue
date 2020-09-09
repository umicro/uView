<template>
	<view v-if="show" class="u-badge" :class="[
			isDot ? 'u-badge-dot' : '', 
			size == 'mini' ? 'u-badge-mini' : '',
			type ? 'u-badge--bg--' + type : ''
		]" :style="[{
			top: offset[0] + 'rpx',
			right: offset[1] + 'rpx',
			fontSize: fontSize + 'rpx',
			position: absolute ? 'absolute' : 'static',
			color: color,
			backgroundColor: bgColor
		}, boxStyle]"
	>
		{{showText}}
	</view>
</template>

<script>
	/**
	 * badge 角标
	 * @description 本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。
	 * @tutorial https://www.uviewui.com/components/badge.html
	 * @property {String Number} count 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为0且show-zero为false时隐藏
	 * @property {Boolean} is-dot 不展示数字，只有一个小点（默认false）
	 * @property {Boolean} absolute 组件是否绝对定位，为true时，offset参数才有效（默认true）
	 * @property {String Number} overflow-count 展示封顶的数字值（默认99）
	 * @property {String} type 使用预设的背景颜色（默认error）
	 * @property {Boolean} show-zero 当数值为 0 时，是否展示 Badge（默认false）
	 * @property {String} size Badge的尺寸，设为mini会得到小一号的Badge（默认default）
	 * @property {Array} offset 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，单位rpx。absolute为true时有效（默认[20, 20]）
	 * @property {String} color 字体颜色（默认#ffffff）
	 * @property {String} bgColor 背景颜色，优先级比type高，如设置，type参数会失效
	 * @property {Boolean} is-center 组件中心点是否和父组件右上角重合，优先级比offset高，如设置，offset参数会失效（默认false）
	 * @example <u-badge type="error" count="7"></u-badge>
	 */
	export default {
		name: 'u-badge',
		props: {
			// primary,warning,success,error,info
			type: {
				type: String,
				default: 'error'
			},
			// default, mini
			size: {
				type: String,
				default: 'default'
			},
			//是否是圆点
			isDot: {
				type: Boolean,
				default: false
			},
			// 显示的数值内容
			count: {
				type: [Number, String],
			},
			// 展示封顶的数字值
			overflowCount: {
				type: Number,
				default: 99
			},
			// 当数值为 0 时，是否展示 Badge
			showZero: {
				type: Boolean,
				default: false
			},
			// 位置偏移
			offset: {
				type: Array,
				default: () => {
					return [20, 20]
				}
			},
			// 是否开启绝对定位，开启了offset才会起作用
			absolute: {
				type: Boolean,
				default: true
			},
			// 字体大小
			fontSize: {
				type: [String, Number],
				default: '24'
			},
			// 字体演示
			color: {
				type: String,
				default: '#ffffff'
			},
			// badge的背景颜色
			bgColor: {
				type: String,
				default: ''
			},
			// 是否让badge组件的中心点和父组件右上角重合，配置的话，offset将会失效
			isCenter: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			// 是否将badge中心与父组件右上角重合
			boxStyle() {
				let style = {};
				if(this.isCenter) {
					style.top = 0;
					style.right = 0;
					// Y轴-50%，意味着badge向上移动了badge自身高度一半，X轴50%，意味着向右移动了自身宽度一半
					style.transform = "translateY(-50%) translateX(50%)";
				} else {
					style.top = this.offset[0] + 'rpx';
					style.right = this.offset[1] + 'rpx';
					style.transform = "translateY(0) translateX(0)";
				}
				// 如果尺寸为mini，后接上scal()
				if(this.size == 'mini') {
					style.transform = style.transform + " scale(0.8)";
				}
				return style;
			},
			// isDot类型时，不显示文字
			showText() {
				if(this.isDot) return '';
				else {
					if(this.count > this.overflowCount) return `${this.overflowCount}+`;
					else return this.count;
				}
			},
			// 是否显示组件
			show() {
				// 如果count的值为0，并且showZero设置为false，不显示组件
				if(this.count == 0 && this.showZero == false) return false;
				else return true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-badge {
		/* #ifndef APP-NVUE */
		display: inline-flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		line-height: 24rpx;
		padding: 4rpx 8rpx;
		border-radius: 100rpx;
		z-index: 9;
		
		&--bg--primary {
			background-color: $u-type-primary;
		}
		
		&--bg--error {
			background-color: $u-type-error;
		}
		
		&--bg--success {
			background-color: $u-type-success;
		}
		
		&--bg--info {
			background-color: $u-type-info;
		}
		
		&--bg--warning {
			background-color: $u-type-warning;
		}
	}
	
	.u-badge-dot {
		height: 16rpx;
		width: 16rpx;
		border-radius: 100rpx;
		line-height: 1;
	}
	
	.u-badge-mini {
		transform: scale(0.8);
		transform-origin: center center;
	}
	
	// .u-primary {
	// 	background: $u-type-primary;
	// 	color: #fff;
	// }
	
	// .u-error {
	// 	background: $u-type-error;
	// 	color: #fff;
	// }
	
	// .u-warning {
	// 	background: $u-type-warning;
	// 	color: #fff;
	// }
	
	// .u-success {
	// 	background: $u-type-success;
	// 	color: #fff;
	// }
	
	// .u-black {
	// 	background: #585858;
	// 	color: #fff;
	// }
	
	.u-info {
		background-color: $u-type-info;
		color: #fff;
	}
</style>