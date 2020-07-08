<template>
	<view v-if="show" class="u-tabbar" @touchmove.stop.prevent>
		<view class="u-tabbar__content safe-area-inset-bottom" :style="{
			height: $u.addUnit(height),
			backgroundColor: bgColor,
		}" :class="{
			'u-border-top': borderTop
		}">
			<view class="u-tabbar__content__item" v-for="(item, index) in list" :key="index" :class="{
				'u-tabbar__content__circle': midButton &&item.midButton
			}" @tap.stop="clickHandler(index)" :style="{
				backgroundColor: bgColor
			}">
				<view :class="[
					midButton && item.midButton ? 'u-tabbar__content__circle__button' : 'u-tabbar__content__item__button'
				]">
					<u-icon 
						:size="midButton && item.midButton ? midButtonSize : iconSize" 
						:name="index == value ? item.selectedIconPath : item.iconPath"
						:color="index == value ? activeColor : inactiveColor"
						:custom-prefix="item.customIcon ? 'custom-icon' : 'uicon'"
					></u-icon>
					<u-badge :count="item.count" :is-dot="item.isDot" 
						v-if="item.count > 0"
						:offset="[-2, getOffsetRight(item.count, item.isDot)]"
					></u-badge>
				</view>
				<view class="u-tabbar__content__item__text" :style="{
					color: index == value ? activeColor : inactiveColor
				}">
					<text class="u-line-1">{{item.text}}</text>
				</view>
			</view>
			<view v-if="midButton" class="u-tabbar__content__circle__border" :class="{
				'u-border': borderTop,
			}" :style="{
				backgroundColor: bgColor
			}">
			</view>
		</view>
		<!-- 这里加上一个48rpx的高度,是为了增高有凸起按钮时的防塌陷高度(也即按钮凸出来部分的高度) -->
		<view class="u-fixed-placeholder safe-area-inset-bottom" :style="{ 
				height: `calc(${$u.addUnit(height)} + ${midButton ? 48 : 0}rpx)`,
			}"></view>
	</view>
</template>

<script>
	export default {
		props: {
			// 显示与否
			show: {
				type: Boolean,
				default: true
			},
			// 通过v-model绑定current值
			value: {
				type: [String, Number],
				default: 0
			},
			// 整个tabbar的背景颜色
			bgColor: {
				type: String,
				default: '#ffffff'
			},
			// tabbar的高度，默认50px，单位任意，如果为数值，则为rpx单位
			height: {
				type: [String, Number],
				default: '50px'
			},
			// 非凸起图标的大小，单位任意，数值默认rpx
			iconSize: {
				type: [String, Number],
				default: 40
			},
			// 凸起的图标的大小，单位任意，数值默认rpx
			midButtonSize: {
				type: [String, Number],
				default: 90
			},
			// 激活时的演示，包括字体图标，提示文字等的演示
			activeColor: {
				type: String,
				default: '#303133'
			},
			// 未激活时的颜色
			inactiveColor: {
				type: String,
				default: '#606266'
			},
			// 是否显示中部的凸起按钮
			midButton: {
				type: Boolean,
				default: false
			},
			// 配置参数
			list: {
				type: Array,
				default () {
					return []
				}
			},
			// 切换前的回调
			beforeSwitch: {
				type: Function,
				default: null
			},
			// 是否显示顶部的横线
			borderTop: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {

			}
		},
		methods: {
			async clickHandler(index) {
				if(this.beforeSwitch && typeof(this.beforeSwitch) === 'function') {
					// 执行回调，同时传入索引当作参数
					let beforeSwitch = this.beforeSwitch(index);
					// 判断是否返回了promise
					if (!!beforeSwitch && typeof beforeSwitch.then === 'function') {
						await beforeSwitch.then(res => {
							// promise返回成功，
							this.switchTab(index);
						}).catch(err => {
							
						})
					} else if(beforeSwitch === true) {
						// 如果返回true
						this.switchTab(index);
					}
				} else {
					this.switchTab(index);
				}
			},
			// 切换tab
			switchTab(index) {
				// 发出事件和修改v-model绑定的值
				this.$emit('change', index);
				this.$emit('input', index);
			},
			// 计算角标的right值
			getOffsetRight(count, isDot) {
				// 点类型，count大于9(两位数)，分别设置不同的right值，避免位置太挤
				if(isDot) {
					return -20;
				} else if(count > 9) {
					return -40;
				} else {
					return -30;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-fixed-placeholder {
		box-sizing: content-box;
	}

	.u-tabbar {

		&__content {
			display: flex;
			align-items: center;
			position: relative;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			z-index: 998;
			box-sizing: content-box;

			&__circle__border {
				border-radius: 100%;
				width: 110rpx;
				height: 110rpx;
				top: -48rpx;
				left: 50%;
				transform: translateX(-50%);
				position: absolute;
				z-index: 4;
				background-color: #ffffff;

				&:after {
					border-radius: 100px;
				}
			}

			&__item {
				flex: 1;
				justify-content: center;
				height: 100%;
				padding: 12rpx 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				position: relative;

				&__button {
					position: absolute;
					top: 10rpx;
				}

				&__text {
					color: $u-content-color;
					font-size: 26rpx;
					line-height: 28rpx;
					position: absolute;
					bottom: 12rpx;
					left: 50%;
					transform: translateX(-50%);
				}
			}

			&__circle {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				z-index: 10;
				height: calc(100% - 1px);

				&__button {
					width: 90rpx;
					height: 90rpx;
					border-radius: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					background-color: #ffffff;
					top: -40rpx;
					left: 50%;
					z-index: 6;
					transform: translateX(-50%);
				}
			}
		}
	}
</style>
