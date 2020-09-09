<template>
	<view :style="[customStyle]" class="u-icon" @tap="click" :class="['u-icon--' + labelPos]">
		<image class="u-icon__img" v-if="isImg" :src="name" :mode="imgMode" :style="[imgStyle]"></image>
		<text v-else class="u-icon__icon" :class="customClass" :style="[iconStyle]" :hover-class="hoverClass" @touchstart="touchstart"></text>
		<!-- 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 -->
		<text v-if="label !== ''" class="u-icon__label" :style="{
			color: labelColor,
			fontSize: $u.addUnit(labelSize),
			marginLeft: labelPos == 'right' ? $u.addUnit(marginLeft) : 0,
			marginTop: labelPos == 'bottom' ? $u.addUnit(marginTop) : 0,
			marginRight: labelPos == 'left' ? $u.addUnit(marginRight) : 0,
			marginBottom: labelPos == 'top' ? $u.addUnit(marginBottom) : 0,
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
 * @property {Object} custom-style icon的样式，对象形式
 * @property {String} custom-prefix 自定义字体图标库时，需要写上此值
 * @property {String | Number} margin-left label在右侧时与图标的距离，单位rpx（默认6）
 * @property {String | Number} margin-top label在下方时与图标的距离，单位rpx（默认6）
 * @property {String | Number} margin-bottom label在上方时与图标的距离，单位rpx（默认6）
 * @property {String | Number} margin-right label在左侧时与图标的距离，单位rpx（默认6）
 * @property {String} label-pos label相对于图标的位置，只能right或bottom（默认right）
 * @property {String} index 一个用于区分多个图标的值，点击图标时通过click事件传出
 * @property {String} hover-class 图标按下去的样式类，用法同uni的view组件的hover-class参数，详情见官网
 * @property {String} width 显示图片小图标时的宽度
 * @property {String} height 显示图片小图标时的高度
 * @property {String} top 图标在垂直方向上的定位
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
		// 图标颜色，可接受主题色
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
			type: [String, Number],
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
		// label与图标的距离(竖向排列)
		marginRight: {
			type: [String, Number],
			default: '6'
		},
		// label与图标的距离(竖向排列)
		marginBottom: {
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
		},
		// 用于显示图片小图标时，图片的宽度
		width: {
			type: [String, Number],
			default: ''
		},
		// 用于显示图片小图标时，图片的高度
		height: {
			type: [String, Number],
			default: ''
		},
		// 用于解决某些情况下，让图标垂直居中的用途
		top: {
			type: [String, Number],
			default: 0
		}
	},
	computed: {
		customClass() {
			let classes = [];
			classes.push(this.customPrefix + '-' + this.name);
			// uView的自定义图标类名为u-iconfont
			if (this.customPrefix == 'uicon') classes.push('u-iconfont');
			else classes.push(this.customPrefix);
			// 主题色，通过类配置
			if (this.color && this.$u.config.type.includes(this.color)) classes.push('u-icon__icon--' + this.color);
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
				fontSize: this.size == 'inherit' ? 'inherit' : this.$u.addUnit(this.size),
				fontWeight: this.bold ? 'bold' : 'normal',
				// 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
				top: this.$u.addUnit(this.top)
			};
			// 非主题色值时，才当作颜色值
			if (this.color && !this.$u.config.type.includes(this.color)) style.color = this.color;
			return style;
		},
		// 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
		isImg() {
			return this.name.indexOf('/') !== -1;
		},
		imgStyle() {
			let style = {};
			// 如果设置width和height属性，则优先使用，否则使用size属性
			style.width = this.width ? this.$u.addUnit(this.width) : this.$u.addUnit(this.size);
			style.height = this.height ? this.$u.addUnit(this.height) : this.$u.addUnit(this.size);
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
@import "../../libs/css/style.components.scss";
/* #ifndef APP-NVUE */
// 目前由于nvue对定义字体时的content属性报错，所以nvue先不引入
@import '../../iconfont.css';
/* #endif */

.u-icon {
	/* #ifndef APP-NVUE */
	display: inline-flex;
	/* #endif */
	flex-direction: row;
	align-items: center;

	&--left {
		flex-direction: row-reverse;
		align-items: center;
	}

	&--right {
		flex-direction: row;
		align-items: center;
	}

	&--top {
		flex-direction: column-reverse;
		justify-content: center;
	}

	&--bottom {
		flex-direction: column;
		justify-content: center;
	}

	&__icon {
		position: relative;
		
		&--primary {
			color: $u-type-primary;
		}

		&--success {
			color: $u-type-success;
		}

		&--error {
			color: $u-type-error;
		}

		&--warning {
			color: $u-type-warning;
		}

		&--info {
			color: $u-type-info;
		}
	}

	&__img {
		/* #ifndef APP-PLUS */
		height: auto;
		will-change: transform;
		/* #endif */
	}

	&__label {
		line-height: 1;
	}
}
</style>
