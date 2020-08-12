<template>
	<view class="u-tips" :class="['u-' + type, isShow ? 'u-tip-show' : '']" :style="{
		top: navbarHeight + 'px',
		zIndex: uZIndex
	}">{{ title }}</view>
</template>

<script>
	/**
	 * topTips 顶部提示
	 * @description 该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。
	 * @tutorial https://www.uviewui.com/components/topTips.html
	 * @property {String Number} navbar-height 导航栏高度(包含状态栏高度在内)，单位PX
	 * @property {String Number} z-index z-index值（默认975）
	 * @example <u-top-tips ref="uTips"></u-top-tips>
	 */
	export default {
		name: "u-top-tips",
		props: {
			// 导航栏高度，用于提示的初始化
			navbarHeight: {
				type: [Number, String],
				// #ifndef H5
				default: 0,
				// #endif
				// #ifdef H5
				default: 44,
				// #endif
			},
			// z-index值
			zIndex: {
				type: [Number, String],
				default: ''
			}
		},
		data() {
			return {
				timer: null, // 定时器
				isShow: false, // 是否显示消息组件
				title: '', // 组件中显示的消息内容
				type: 'primary', // 消息的类型（颜色不同），primary，success，error，warning，info
				duration: 2000, // 组件显示的时间，单位为毫秒
			};
		},
		computed: {
			uZIndex() {
				return this.zIndex ? this.zIndex : this.$u.zIndex.topTips;
			}
		},
		methods: {
			show(config = {}) {
				// 先清除定时器（可能是上一次定义的，需要清除了再开始新的）
				clearTimeout(this.timer);
				// 时间，内容，类型主题(type)等参数
				if (config.duration) this.duration = config.duration;
				if (config.type) this.type = config.type;
				this.title = config.title;
				this.isShow = true;
				// 倒计时
				this.timer = setTimeout(() => {
					this.isShow = false;
					clearTimeout(this.timer);
					this.timer = null;
				}, this.duration);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	view {
		box-sizing: border-box;
	}

	// 顶部弹出类型样式
	.u-tips {
		width: 100%;
		position: fixed;
		z-index: 1;
		padding: 20rpx 30rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		// 此处为最核心点，translateY(-100%)意味着将其从Y轴隐藏（隐藏到顶部(h5)或者说导航栏(app)下面）
		transform: translateY(-100%);
		transition: all 0.35s linear;
	}

	.u-tip-show {
		transform: translateY(0);
		opacity: 1;
		z-index: 99;
	}

	.u-primary {
		background: $u-type-primary;
	}

	.u-success {
		background: $u-type-success;
	}

	.u-warning {
		background: $u-type-warning;
	}

	.u-error {
		background: $u-type-error;
	}

	.u-info {
		background: $u-type-info;
	}
</style>
