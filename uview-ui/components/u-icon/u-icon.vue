<template>
	<text class="uicon" :class="customClass" :style="[iconStyle]" @tap="click" :hover-class="hoverClass" @touchstart="touchstart"></text>
</template>

<script>
/**
 * icon 图标
 * @description 基于字体的图标集，包含了大多数常见场景的图标。
 * @tutorial https://www.uviewui.com/components/icon.html
 * @property {String} name 图标名称，见示例图标集
 * @property {String} color 图标颜色（默认inherit）
 * @property {String Number} size 图标字体大小，单位rpx（默认32）
 * @property {String} index 一个用于区分多个图标的值，点击图标时通过click事件传出
 * @property {String} hover-class 图标按下去的样式类，用法同uni的view组件的hover-class参数，详情见官网
 * @event {Function} click 点击图标时触发
 * @example <u-icon name="photo" color="#2979ff" size="28"></u-icon>
 */
export default {
	name: 'u-icon',
	props: {
		// 图标类名
		name: {
			type: String,
			default: ''
		},
		// 图标颜色
		color: {
			type: String,
			default: ''
		},
		// 字体大小，单位rpx
		size: {
			type: [Number, String],
			default: 'inherit'
		},
		// 是否显示粗体
		bold: {
			type: Boolean,
			default: false
		},
		// 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
		index: {
			type: [Number, String],
			default: ''
		},
		// 触摸图标时的类名
		hoverClass: {
			type: String,
			default: ''
		},
		// 自定义扩展前缀，方便用户扩展自己的图标库
		customPrefix: {
			type: String,
			default: 'uicon'
		}
	},
	data() {
		return {};
	},
	computed: {
		customClass() {
			let classes = [];
			classes.push(this.customPrefix + '-' + this.name);
			// uView的自定义图标类名为u-iconfont
			if (this.customPrefix == 'uicon') classes.push('u-iconfont');
			else classes.push(this.customPrefix);
			//#ifdef MP-ALIPAY
			classes = classes.join(' ');
			//#endif
			return classes;
		},
		iconStyle() {
			let style = {};
			style = {
				fontSize: this.size == 'inherit' ? 'inherit' : this.size + 'rpx',
				fontWeight: this.bold ? 'bold' : 'normal'
			};
			if (this.color) style.color = this.color;
			return style;
		}
	},
	methods: {
		click() {
			this.$emit('click', this.index);
		},
		touchstart() {
			this.$emit('touchstart', this.index);
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../iconfont.css';

.uicon {
	display: inline-flex;
	align-items: center;
}
</style>
