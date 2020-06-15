<template>
	<view class="">
		<view class="u-navbar" :style="[navbarStyle]" :class="{ 'u-navbar-fixed': isFixed, 'u-border-bottom': borderBottom }">
			<view class="u-status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
			<view class="u-navbar-inner" :style="[navbarInnerStyle]">
				<view class="u-back-wrap" v-if="isBack" @tap="goBack">
					<view class="u-icon-wrap"><u-icon :name="backIconName" :color="backIconColor" :size="backIconSize"></u-icon></view>
					<view class="u-icon-wrap u-back-text u-line-1" v-if="backText" :style="[backTextStyle]">{{ backText }}</view>
				</view>
				<view class="u-navbar-content-title" v-if="title" :style="[titleStyle]">
					<view
						class="u-title u-line-1"
						:style="{
							color: titleColor,
							fontSize: titleSize + 'rpx'
						}"
					>
						{{ title }}
					</view>
				</view>
				<view class="u-slot-content"><slot></slot></view>
				<view class="u-slot-right"><slot name="right"></slot></view>
			</view>
		</view>
		<!-- 解决fixed定位后导航栏塌陷的问题 -->
		<view class="u-navbar-placeholder" v-if="isFixed" :style="{ width: '100%', height: Number(navbarHeight) + statusBarHeight + 'px' }"></view>
	</view>
</template>

<script>
// 获取系统状态栏的高度
let systemInfo = uni.getSystemInfoSync();
let menuButtonInfo = {};
// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)
// #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO || MP-QQ
menuButtonInfo = uni.getMenuButtonBoundingClientRect();
// #endif
/**
 * navbar 自定义导航栏
 * @description 此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uniapp自带的导航栏。
 * @tutorial https://www.uviewui.com/components/navbar.html
 * @property {String Number} height 导航栏高度(不包括状态栏高度在内，内部自动加上)，注意这里的单位是px（默认44）
 * @property {String} back-icon-color 左边返回图标的颜色（默认#606266）
 * @property {String} back-icon-name 左边返回图标的名称，只能为uView自带的图标（默认arrow-left）
 * @property {String Number} back-icon-size 左边返回图标的大小，单位rpx（默认30）
 * @property {String} back-text 返回图标右边的辅助提示文字
 * @property {Object} back-text-style 返回图标右边的辅助提示文字的样式，对象形式（默认{ color: '#606266' }）
 * @property {String} title 导航栏标题，如设置为空字符，将会隐藏标题占位区域
 * @property {String Number} title-width 导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx（默认250）
 * @property {String} title-color 标题的颜色（默认#606266）
 * @property {String Number} title-size 导航栏标题字体大小，单位rpx（默认32）
 * @property {Function} custom-back 自定义返回逻辑方法
 * @property {String Number} z-index 固定在顶部时的z-index值（默认980）
 * @property {Boolean} is-back 是否显示导航栏左边返回图标和辅助文字（默认true）
 * @property {Object} background 导航栏背景设置，见官网说明（默认{ background: '#ffffff' }）
 * @property {Boolean} is-fixed 导航栏是否固定在顶部（默认true）
 * @property {Boolean} border-bottom 导航栏底部是否显示下边框，如定义了较深的背景颜色，可取消此值（默认true）
 * @example <u-navbar back-text="返回" title="剑未配妥，出门已是江湖"></u-navbar>
 */
export default {
	name: "u-navbar",
	props: {
		// 导航栏高度，单位px，非rpx
		height: {
			type: [String, Number],
			default: ''
		},
		// 返回箭头的颜色
		backIconColor: {
			type: String,
			default: '#606266'
		},
		// 左边返回的图标
		backIconName: {
			type: String,
			default: 'arrow-left'
		},
		// 左边返回图标的大小，rpx
		backIconSize: {
			type: [String, Number],
			default: '30'
		},
		// 返回的文字提示
		backText: {
			type: String,
			default: ''
		},
		// 返回的文字的 样式
		backTextStyle: {
			type: Object,
			default() {
				return {
					color: '#606266'
				}
			}
		},
		// 导航栏标题
		title: {
			type: String,
			default: ''
		},
		// 标题的宽度，如果需要自定义右侧内容，且右侧内容很多时，可能需要减少这个宽度，单位rpx
		titleWidth: {
			type: [String, Number],
			default: '250'
		},
		// 标题的颜色
		titleColor: {
			type: String,
			default: '#606266'
		},
		// 标题的字体大小
		titleSize: {
			type: [String, Number],
			default: 32
		},
		isBack: {
			type: [Boolean, String],
			default: true
		},
		// 对象形式，因为用户可能定义一个纯色，或者线性渐变的颜色
		background: {
			type: Object,
			default() {
				return {
					background: '#ffffff'
				}
			}
		},
		// 导航栏是否固定在顶部
		isFixed: {
			type: Boolean,
			default: true
		},
		// 是否显示导航栏的下边框
		borderBottom: {
			type: Boolean,
			default: true
		},
		zIndex: {
			type: [String, Number],
			default: ''
		},
		// 自定义返回逻辑
		customBack: {
			type: Function,
			default: null
		}
	},
	data() {
		return {
			menuButtonInfo: menuButtonInfo,
			statusBarHeight: systemInfo.statusBarHeight
		};
	},
	computed: {
		// 导航栏内部盒子的样式
		navbarInnerStyle() {
			let style = {};
			// 导航栏宽度，如果在小程序下，导航栏宽度为胶囊的左边到屏幕左边的距离
			style.height = this.navbarHeight + 'px';
			// // 如果是各家小程序，导航栏内部的宽度需要减少右边胶囊的宽度
			// #ifdef MP
			let rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left;
			style.marginRight = rightButtonWidth + 'px';
			// #endif
			return style;
		},
		// 整个导航栏的样式
		navbarStyle() {
			let style = {};
			style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.navbar;
			// 合并用户传递的背景色对象
			Object.assign(style, this.background);
			return style;
		},
		// 导航中间的标题的样式
		titleStyle() {
			let style = {};
			// #ifndef MP
			style.left = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
			style.right = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
			// #endif
			// #ifdef MP
			// 此处是为了让标题显示区域即使在小程序有右侧胶囊的情况下也能处于屏幕的中间，是通过绝对定位实现的
			let rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left;
			style.left = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
			style.right = rightButtonWidth - (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + rightButtonWidth + 'px';
			// #endif
			style.width = uni.upx2px(this.titleWidth) + 'px';
			return style;
		},
		// 转换字符数值为真正的数值
		navbarHeight() {
			// #ifdef APP-PLUS || H5
			return this.height ? this.height : 44;
			// #endif
			// #ifdef MP
			// 小程序特别处理，让导航栏高度 = 胶囊高度 + 两倍胶囊顶部与状态栏底部的距离之差(相当于同时获得了导航栏底部与胶囊底部的距离)
			// 此方法有缺陷，暂不用(会导致少了几个px)，采用直接固定值的方式
			// return menuButtonInfo.height + (menuButtonInfo.top - this.statusBarHeight) * 2;//导航高度
			let height = systemInfo.platform == 'ios' ? 44 : 48;
			return this.height ? this.height : height;
			// #endif
		}
	},
	created() {},
	methods: {
		goBack() {
			// 如果自定义了点击返回按钮的函数，则执行，否则执行返回逻辑
			if(typeof this.customBack === 'function') {
				this.customBack();
			} {
				uni.navigateBack();
			}
		}
	}
};
</script>

<style scoped lang="scss">
.u-navbar {
	width: 100%;
}

.u-navbar-fixed {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 991;
}

.u-status-bar {
	width: 100%;
}

.u-navbar-inner {
	display: flex;
	justify-content: space-between;
	position: relative;
	align-items: center;
}

.u-back-wrap {
	display: flex;
	align-items: center;
	flex: 1;
	flex-grow: 0;
	padding: 14rpx 14rpx 14rpx 24rpx;
}

.u-back-text {
	padding-left: 4rpx;
	font-size: 30rpx;
}

.u-navbar-content-title {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	position: absolute;
	left: 0;
	right: 0;
	height: 60rpx;
	text-align: center;
	flex-shrink: 0;
}

.u-navbar-centent-slot {
	flex: 1;
}

.u-title {
	line-height: 1;
	font-size: 32rpx;
	flex: 1;
}

.u-navbar-right {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.u-slot-content {
	flex: 1;
	display: flex;
	align-items: center;
}
</style>
