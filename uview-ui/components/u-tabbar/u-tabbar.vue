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
						:name="elIconPath(index)"
						img-mode="scaleToFill"
						:color="elColor(index)"
						:custom-prefix="item.customIcon ? 'custom-icon' : 'uicon'"
					></u-icon>
					<u-badge :count="item.count" :is-dot="item.isDot" 
						v-if="item.count > 0"
						:offset="[-2, getOffsetRight(item.count, item.isDot)]"
					></u-badge>
				</view>
				<view class="u-tabbar__content__item__text" :style="{
					color: elColor(index)
				}">
					<text class="u-line-1">{{item.text}}</text>
				</view>
			</view>
			<view v-if="midButton" class="u-tabbar__content__circle__border" :class="{
				'u-border': borderTop,
			}" :style="{
				backgroundColor: bgColor,
				left: midButtonLeft
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
			// 是否隐藏原生tabbar
			hideTabBar: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				// 由于安卓太菜了，通过css居中凸起按钮的外层元素有误差，故通过js计算将其其中
				midButtonLeft: '50%', 
				pageUrl: '', // 当前
			}
		},
		created() {
			// 是否隐藏原生tabbar
			if(this.borderTop) uni.hideTabBar();
			// 获取引入了u-tabbar页面的路由地址，该地址没有路径前面的"/"
			let pages = getCurrentPages();
			// 页面栈中的最后一个即为项为当前页面，route属性为页面路径
			this.pageUrl = pages[pages.length - 1].route;
		},
		computed: {
			elIconPath() {
				return (index) => {
					// 历遍u-tabbar的每一项item时，判断是否传入了pagePath参数，如果传入了
					// 和data中的pageUrl参数对比，如果相等，即可判断当前的item对应当前的tabbar页面，设置高亮图标
					// 采用这个方法，可以无需使用v-model绑定的value值
					let pagePath = this.list[index].pagePath;
					// 如果定义了pagePath属性，意味着使用系统自带tabbar方案，否则使用一个页面用几个组件模拟tabbar页面的方案
					// 这两个方案对处理tabbar item的激活与否方式不一样
					if(pagePath) {
						if(pagePath == this.pageUrl || pagePath == '/' + this.pageUrl) {
							return this.list[index].selectedIconPath;
						} else {
							return this.list[index].iconPath;
						}
					} else {
						// 普通方案中，索引等于v-model值时，即为激活项
						return index == this.value ? this.list[index].selectedIconPath : this.list[index].iconPath
					}
				}
			},
			elColor() {
				return (index) => {
					// 判断方法同理于elIconPath
					let pagePath = this.list[index].pagePath;
					if(pagePath) {
						if(pagePath == this.pageUrl || pagePath == '/' + this.pageUrl) return this.activeColor;
						else return this.inactiveColor;
					} else {
						return index == this.value ? this.activeColor : this.inactiveColor;
					}
				}
			}
		},
		mounted() {
			this.midButton && this.getMidButtonLeft();
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
				// 如果有配置pagePath属性，使用uni.switchTab进行跳转
				if(this.list[index].pagePath) {
					uni.switchTab({
						url: this.list[index].pagePath
					})
				} else {
					// 如果配置了papgePath属性，将不会双向绑定v-model传入的value值
					// 因为这个模式下，不再需要v-model绑定的value值了，而是通过getCurrentPages()适配
					this.$emit('input', index);
				}
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
			},
			// 获取凸起按钮外层元素的left值，让其水平居中
			getMidButtonLeft() {
				let windowWidth = this.$u.sys.windowWidth;
				// 由于安卓中css计算left: 50%的结果不准确，故用js计算
				this.midButtonLeft = (windowWidth / 2) + 'px';
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
				position: absolute;
				z-index: 4;
				background-color: #ffffff;
				// 由于安卓的无能，导致只有3个tabbar item时，此css计算方式有误差
				// 故使用js计算的形式来定位，此处不注释，是因为js计算有延后，避免出现位置闪动
				left: 50%;
				transform: translateX(-50%);
				
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
