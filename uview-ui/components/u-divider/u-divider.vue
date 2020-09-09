<template>
	<view class="u-divider" :style="{
		height: height == 'auto' ? 'auto' : height + 'rpx',
		backgroundColor: bgColor,
		marginBottom: marginBottom + 'rpx',
		marginTop: marginTop + 'rpx'
	}" @tap="click">
		<view class="u-divider-line" :class="[type ? 'u-divider-line--bordercolor--' + type : '']" :style="[lineStyle]"></view>
		<view v-if="useSlot" class="u-divider-text" :style="{
			color: color,
			fontSize: fontSize + 'rpx'
		}"><slot /></view>
		<view class="u-divider-line" :class="[type ? 'u-divider-line--bordercolor--' + type : '']" :style="[lineStyle]"></view>
	</view>
</template>

<script>
/**
 * divider 分割线
 * @description 区隔内容的分割线，一般用于页面底部"没有更多"的提示。
 * @tutorial https://www.uviewui.com/components/divider.html
 * @property {String Number} half-width 文字左或右边线条宽度，数值或百分比，数值时单位为rpx
 * @property {String} border-color 线条颜色，优先级高于type（默认#dcdfe6）
 * @property {String} color 文字颜色（默认#909399）
 * @property {String Number} fontSize 字体大小，单位rpx（默认26）
 * @property {String} bg-color 整个divider的背景颜色（默认呢#ffffff）
 * @property {String Number} height 整个divider的高度，单位rpx（默认40）
 * @property {String} type 将线条设置主题色（默认primary）
 * @property {Boolean} useSlot 是否使用slot传入内容，如果不传入，中间不会有空隙（默认true）
 * @property {String Number} margin-top 与前一个组件的距离，单位rpx（默认0）
 * @property {String Number} margin-bottom 与后一个组件的距离，单位rpx（0）
 * @event {Function} click divider组件被点击时触发
 * @example <u-divider color="#fa3534">长河落日圆</u-divider>
 */
export default {
	name: 'u-divider',
	props: {
		// 单一边divider横线的宽度(数值)，单位rpx。或者百分比
		halfWidth: {
			type: [Number, String],
			default: 150
		},
		// divider横线的颜色，如设置，
		borderColor: {
			type: String,
			default: '#dcdfe6'
		},
		// 主题色，可以是primary|info|success|warning|error之一值
		type: {
			type: String,
			default: 'primary'
		},
		// 文字颜色
		color: {
			type: String,
			default: '#909399'
		},
		// 文字大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 26
		},
		// 整个divider的背景颜色
		bgColor: {
			type: String,
			default: '#ffffff'
		},
		// 整个divider的高度单位rpx
		height: {
			type: [Number, String],
			default: 'auto'
		},
		// 上边距
		marginTop: {
			type: [String, Number],
			default: 0
		},
		// 下边距
		marginBottom: {
			type: [String, Number],
			default: 0
		},
		// 是否使用slot传入内容，如果不用slot传入内容，先的中间就不会有空隙
		useSlot: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		lineStyle() {
			let style = {};
			if(String(this.halfWidth).indexOf('%') != -1) style.width = this.halfWidth;
			else style.width = this.halfWidth + 'rpx';
			// borderColor优先级高于type值
			if(this.borderColor) style.borderColor = this.borderColor;
			return style;
		}
	},
	methods: {
		click() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../libs/css/style.components.scss";
.u-divider {
	width: 100%;
	position: relative;
	text-align: center;
	@include vue-flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	flex-direction: row;
}

.u-divider-line {
	border-bottom: 1px solid $u-border-color;
	transform: scale(1, 0.5);
	transform-origin: center;
	
	&--bordercolor--primary {
		border-color: $u-type-primary;
	}
	
	&--bordercolor--success {
		border-color: $u-type-success;
	}
	
	&--bordercolor--error {
		border-color: $u-type-primary;
	}
	
	&--bordercolor--info {
		border-color: $u-type-info;
	}
	
	&--bordercolor--warning {
		border-color: $u-type-warning;
	}
}

.u-divider-text {
	white-space: nowrap;
	padding: 0 16rpx;
	/* #ifndef APP-NVUE */
	display: inline-flex;		
	/* #endif */
}
</style>
