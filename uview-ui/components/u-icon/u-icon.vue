<template>
	<view :style="[customStyle]" class="u-icon" @tap="click" :class="[labelPos == 'bottom' ? 'u-flex-col u-row-center' : 'u-flex u-col-center']">
		<image class="u-icon__img" v-if="isImg" :src="name" :mode="imgMode" :style="[imgStyle]"></image>
		<text v-else class="u-icon__icon" :class="customClass" :style="[iconStyle]" :hover-class="hoverClass" @touchstart="touchstart"></text>
		<text v-if="label" class="u-icon__label" :style="{
			color: labelColor,
			fontSize: labelSize + 'rpx',
			marginLeft: labelPos == 'right' ? marginLeft + 'rpx' : 0,
			marginTop: labelPos == 'bottom' ? marginTop + 'rpx' : 0,
		}">{{label}}</text>
	</view>
</template>

<script>
/**
 * icon 图标
 * @description 基于字体的图标集，包含了大多数常见场景的图标。
 * @tutorial https://www.uviewui.com/components/icon.html
 * @property {String} name 图标名称，见示例图标集
 * @property {String} color 图标颜色（默认inherit）
 * @property {String | Number} size 图标字体大小，单位rpx（默认32）
 * @property {String | Number} label-size label字体大小，单位rpx（默认28）
 * @property {String} label 图标右侧的label文字（默认28）
 * @property {String} label-pos label文字相对于图标的位置，只能right或bottom（默认right）
 * @property {String} label-color label字体颜色（默认#606266）
 * @property {String | Number} margin-left label在右侧时与图标的距离，单位rpx（默认6）
 * @property {String | Number} margin-top label在下方时与图标的距离，单位rpx（默认6）
 * @property {String} label-pos label相对于图标的位置，只能right或bottom（默认right）
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
		},
		// 图标右边或者下面的文字
		label: {
			type: String,
			default: ''
		},
		// label的位置，只能右边或者下边
		labelPos: {
			type: String,
			default: 'right'
		},
		// label的大小
		labelSize: {
			type: [String, Number],
			default: '28'
		},
		// label的颜色
		labelColor: {
			type: String,
			default: '#606266'
		},
		// label与图标的距离(横向排列)
		marginLeft: {
			type: [String, Number],
			default: '6'
		},
		// label与图标的距离(竖向排列)
		marginTop: {
			type: [String, Number],
			default: '6'
		},
		// 图片的mode
		imgMode: {
			type: String,
			default: 'widthFix'
		},
		// 自定义样式
		customStyle: {
			type: Object,
			default() {
				return {}
			}
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
			// 阿里，头条，百度小程序通过数组绑定类名时，无法直接使用[a, b, c]的形式，否则无法识别
			// 故需将其拆成一个字符串的形式，通过空格隔开各个类名
			//#ifdef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU
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
		},
		// 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
		isImg() {
			return this.name.indexOf('/') !== -1;
		},
		imgStyle() {
			let style = {};
			style.width = this.size + 'rpx';
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

.u-icon {
	display: inline-flex;
	align-items: center;
}

.u-icon__img {
	height: auto;
	will-change: transform;
}
</style>
