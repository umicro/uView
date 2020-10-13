<template>
	<view class="u-image" @tap="onClick" :style="[wrapStyle, backgroundStyle]">
		<image
			v-if="!isError"
			:src="src"
			:mode="mode"
			@error="onErrorHandler"
			@load="onLoadHandler"
			:lazy-load="lazyLoad"
			class="u-image__image"
			:style="{
				borderRadius: shape == 'circle' ? '50%' : $u.addUnit(borderRadius)
			}"
		></image>
		<view
			v-if="showLoading && loading"
			class="u-image__loading"
			:style="{
				borderRadius: shape == 'circle' ? '50%' : $u.addUnit(borderRadius),
				backgroundColor: this.bgColor
			}"
		>
			<slot v-if="$slots.loading" name="loading" />
			<u-icon v-else :name="loadingIcon" :width="width" :height="height"></u-icon>
		</view>
		<view
			v-if="showError && isError && !loading"
			class="u-image__error"
			:style="{
				borderRadius: shape == 'circle' ? '50%' : $u.addUnit(borderRadius)
			}"
		>
			<slot v-if="$slots.error" name="error" />
			<u-icon v-else :name="errorIcon" :width="width" :height="height"></u-icon>
		</view>
	</view>
</template>

<script>
/**
 * Image 图片
 * @description 此组件为uni-app的image组件的加强版，在继承了原有功能外，还支持淡入动画、加载中、加载失败提示、圆角值和形状等。
 * @tutorial https://uviewui.com/components/image.html
 * @property {String} src 图片地址
 * @property {String} mode 裁剪模式，见官网说明
 * @property {String | Number} width 宽度，单位任意，如果为数值，则为rpx单位（默认100%）
 * @property {String | Number} height 高度，单位任意，如果为数值，则为rpx单位（默认 auto）
 * @property {String} shape 图片形状，circle-圆形，square-方形（默认square）
 * @property {String | Number} border-radius 圆角值，单位任意，如果为数值，则为rpx单位（默认 0）
 * @property {Boolean} lazy-load 是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效（默认 true）
 * @property {Boolean} show-menu-by-longpress 是否开启长按图片显示识别小程序码菜单，仅微信小程序有效（默认 false）
 * @property {String} loading-icon 加载中的图标，或者小图片（默认 photo）
 * @property {String} error-icon 加载失败的图标，或者小图片（默认 error-circle）
 * @property {Boolean} show-loading 是否显示加载中的图标或者自定义的slot（默认 true）
 * @property {Boolean} show-error 是否显示加载错误的图标或者自定义的slot（默认 true）
 * @property {Boolean} fade 是否需要淡入效果（默认 true）
 * @property {String Number} width 传入图片路径时图片的宽度
 * @property {String Number} height 传入图片路径时图片的高度
 * @property {Boolean} webp 只支持网络资源，只对微信小程序有效（默认 false）
 * @property {String | Number} duration 搭配fade参数的过渡时间，单位ms（默认 500）
 * @event {Function} click 点击图片时触发
 * @event {Function} error 图片加载失败时触发
 * @event {Function} load 图片加载成功时触发
 * @example <u-image width="100%" height="300rpx" :src="src"></u-image>
 */
export default {
	name: 'u-image',
	props: {
		// 图片地址
		src: {
			type: String,
			default: ''
		},
		// 裁剪模式
		mode: {
			type: String,
			default: 'aspectFill'
		},
		// 宽度，单位任意
		width: {
			type: [String, Number],
			default: '100%'
		},
		// 高度，单位任意
		height: {
			type: [String, Number],
			default: 'auto'
		},
		// 图片形状，circle-圆形，square-方形
		shape: {
			type: String,
			default: 'square'
		},
		// 圆角，单位任意
		borderRadius: {
			type: [String, Number],
			default: 0
		},
		// 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序
		lazyLoad: {
			type: Boolean,
			default: true
		},
		// 开启长按图片显示识别微信小程序码菜单
		showMenuByLongpress: {
			type: Boolean,
			default: true
		},
		// 加载中的图标，或者小图片
		loadingIcon: {
			type: String,
			default: 'photo'
		},
		// 加载失败的图标，或者小图片
		errorIcon: {
			type: String,
			default: 'error-circle'
		},
		// 是否显示加载中的图标或者自定义的slot
		showLoading: {
			type: Boolean,
			default: true
		},
		// 是否显示加载错误的图标或者自定义的slot
		showError: {
			type: Boolean,
			default: true
		},
		// 是否需要淡入效果
		fade: {
			type: Boolean,
			default: true
		},
		// 只支持网络资源，只对微信小程序有效
		webp: {
			type: Boolean,
			default: false
		},
		// 过渡时间，单位ms
		duration: {
			type: [String, Number],
			default: 500
		},
		// 背景颜色，用于深色页面加载图片时，为了和背景色融合
		bgColor: {
			type: String,
			default: '#f3f4f6'
		}
	},
	data() {
		return {
			// 图片是否加载错误，如果是，则显示错误占位图
			isError: false,
			// 初始化组件时，默认为加载中状态
			loading: true,
			// 不透明度，为了实现淡入淡出的效果
			opacity: 1,
			// 过渡时间，因为props的值无法修改，故需要一个中间值
			durationTime: this.duration,
			// 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
			backgroundStyle: {}
		};
	},
	watch: {
		src: {
			immediate: true,
			handler (n) {
				if(!n) {
					// 如果传入null或者''，或者false，或者undefined，标记为错误状态
					this.isError = true;
					this.loading = false;
				} else {
					this.isError = false;
				}
			}
		}
	},
	computed: {
		wrapStyle() {
			let style = {};
			// 通过调用addUnit()方法，如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上rpx单位
			style.width = this.$u.addUnit(this.width);
			style.height = this.$u.addUnit(this.height);
			// 如果是配置了圆形，设置50%的圆角，否则按照默认的配置值
			style.borderRadius = this.shape == 'circle' ? '50%' : this.$u.addUnit(this.borderRadius);
			// 如果设置圆角，必须要有hidden，否则可能圆角无效
			style.overflow = this.borderRadius > 0 ? 'hidden' : 'visible';
			if (this.fade) {
				style.opacity = this.opacity;
				style.transition = `opacity ${Number(this.durationTime) / 1000}s ease-in-out`;
			}
			return style;
		}
	},
	methods: {
		// 点击图片
		onClick() {
			this.$emit('click');
		},
		// 图片加载失败
		onErrorHandler() {
			this.loading = false;
			this.isError = true;
			this.$emit('error');
		},
		// 图片加载完成，标记loading结束
		onLoadHandler() {
			this.loading = false;
			this.isError = false;
			this.$emit('load');
			// 如果不需要动画效果，就不执行下方代码，同时移除加载时的背景颜色
			// 否则无需fade效果时，png图片依然能看到下方的背景色
			if (!this.fade) return this.removeBgColor();
			// 原来opacity为1(不透明，是为了显示占位图)，改成0(透明，意味着该元素显示的是背景颜色，默认的灰色)，再改成1，是为了获得过渡效果
			this.opacity = 0;
			// 这里设置为0，是为了图片展示到背景全透明这个过程时间为0，延时之后延时之后重新设置为duration，是为了获得背景透明(灰色)
			// 到图片展示的过程中的淡入效果
			this.durationTime = 0;
			// 延时50ms，否则在浏览器H5，过渡效果无效
			setTimeout(() => {
				this.durationTime = this.duration;
				this.opacity = 1;
				setTimeout(() => {
					this.removeBgColor();
				}, this.durationTime);
			}, 50);
		},
		// 移除图片的背景色
		removeBgColor() {
			// 淡入动画过渡完成后，将背景设置为透明色，否则png图片会看到灰色的背景
			this.backgroundStyle = {
				backgroundColor: 'transparent'
			};
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../libs/css/style.components.scss';

.u-image {
	position: relative;
	transition: opacity 0.5s ease-in-out;

	&__image {
		width: 100%;
		height: 100%;
	}

	&__loading,
	&__error {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		@include vue-flex;
		align-items: center;
		justify-content: center;
		background-color: $u-bg-color;
		color: $u-tips-color;
		font-size: 46rpx;
	}
}
</style>
