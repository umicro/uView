<template>
	<view class="u-radio" :style="[radioStyle]">
		<view class="u-radio__icon-wrap" @tap="toggle">
			<u-icon :class="iconClass" name="checkbox-mark" :size="iconSize" :color="iconColor" class="u-radio__icon" :style="[iconStyle]" />
		</view>
		<view class="u-label-class u-radio__label" @tap="onClickLabel" :style="{
			fontSize: labelSize + 'rpx'
		}">
			<slot />
		</view>
	</view>
</template>

<script>
	/**
	 * radio 单选框
	 * @description 单选框用于有一个选择，用户只能选择其中一个的场景。搭配u-radio-group使用
	 * @tutorial https://www.uviewui.com/components/radio.html
	 * @property {String Number} icon-size 图标大小，单位rpx（默认24）
	 * @property {String Number} label-size label字体大小，单位rpx（默认28）
	 * @property {String Number} name radio组件的标示符
	 * @property {String} shape 形状，见上方说明（默认circle）
	 * @property {Boolean} disabled 是否禁用（默认false）
	 * @property {Boolean} label-disabled 点击文本是否可以操作radio（默认true）
	 * @property {String} active-color 选中时的颜色，如设置radioGroup的active-color将失效
	 * @event {Function} change 某个radio状态发生变化时触发(选中状态)
	 * @example <u-radio :label-disabled="false">门掩黄昏，无计留春住</u-radio>
	 */
	export default {
		name: "u-radio",
		props: {
			// radio的名称
			name: {
				type: [String, Number],
				default: ''
			},
			// 形状，square为方形，circle为原型
			shape: {
				type: String,
				default: 'square'
			},
			// 是否禁用
			disabled: {
				type: Boolean,
				default: false
			},
			// 是否禁止点击提示语选中复选框
			labelDisabled: {
				type: Boolean,
				default: false
			},
			// 选中状态下的颜色，如设置此值，将会覆盖radioGroup的activeColor值
			activeColor: {
				type: String,
				default: ''
			},
			// 图标的大小，单位rpx
			iconSize: {
				type: [String, Number],
				default: 20
			},
			// label的字体大小，rpx单位
			labelSize: {
				type: [String, Number],
				default: 28
			},
		},
		inject: ['radioGroup'],
		data() {
			return {
				parentDisabled: false
			};
		},
		created() {
			this.parentDisabled = this.radioGroup.disabled;
		},
		computed: {
			// 设置radio的状态，要求radio的name等于radioGroup的value时才为选中状态
			iconStyle() {
				let style = {};
				if (this.radioActiveColor && this.name == this.radioGroup.value && !this.disabled && !this.parentDisabled) {
					style.borderColor = this.radioActiveColor;
					style.backgroundColor = this.radioActiveColor;
				}
				style.width = this.radioGroup.size + 'rpx';
				style.height = this.radioGroup.size + 'rpx';
				return style;
			},
			iconColor() {
				return this.name == this.radioGroup.value ? '#ffffff' : 'transparent';
			},
			iconClass() {
				let classs = [];
				classs.push('u-radio__icon--' + this.shape);
				if (this.name == this.radioGroup.value) classs.push('u-radio__icon--checked');
				if (this.disabled || this.parentDisabled) classs.push('u-radio__icon--disabled');
				if (this.name == this.radioGroup.value && (this.disabled || this.parentDisabled)) classs.push(
					'u-radio__icon--disabled--checked');
				return classs;
			},
			// 激活的颜色，可能受radioGroup和本组件的activeColor影响
			// 本组件的activeColor值优先
			radioActiveColor() {
				return this.activeColor ? this.activeColor : this.radioGroup.activeColor;
			},
			radioStyle() {
				let style = {};
				if(this.radioGroup.width) {
					style.width = this.radioGroup.width;
					// #ifdef MP
					// 各家小程序因为它们特殊的编译结构，使用float布局
					style.float = 'left';
					// #endif
					// #ifndef MP
					// H5和APP使用flex布局
					style.flex = `0 0 ${this.radioGroup.width}`;
					// #endif
				}
				if(this.radioGroup.wrap) {
					style.width = '100%';
					// #ifndef MP
					// H5和APP使用flex布局，将宽度设置100%，即可自动换行
					style.flex = '0 0 100%';
					// #endif
				}
				return style;
			}
		},
		methods: {
			onClickLabel() {
				if (!this.disabled && !this.labelDisabled && !this.parentDisabled) {
					this.radioGroup.setValue(this.name);
					this.emitEvent();
				}
			},
			toggle() {
				if (!this.disabled && !this.parentDisabled) {
					this.radioGroup.setValue(this.name);
					this.emitEvent();
				}
			},
			emitEvent() {
				this.$emit('change', this.name)
			},
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-radio {
		display: -webkit-flex;
		display: flex;
		-webkit-align-items: center;
		align-items: center;
		overflow: hidden;
		-webkit-user-select: none;
		user-select: none;
		line-height: 1.8;
	}

	.u-radio__icon-wrap,
	.u-radio__label {
		color: $u-content-color;
	}

	.u-radio__icon-wrap {
		-webkit-flex: none;
		flex: none;
	}

	.u-radio__icon {
		display: -webkit-flex;
		display: flex;
		-webkit-align-items: center;
		align-items: center;
		-webkit-justify-content: center;
		justify-content: center;
		box-sizing: border-box;
		width: 42rpx;
		height: 42rpx;
		color: transparent;
		text-align: center;
		transition-property: color, border-color, background-color;
		font-size: 20px;
		border: 1px solid #c8c9cc;
		transition-duration: 0.2s;
	}

	.u-radio__icon--circle {
		border-radius: 100%;
	}

	.u-radio__icon--square {
		border-radius: 3px;
	}

	.u-radio__icon--checked {
		color: #fff;
		background-color: #2979ff;
		border-color: #2979ff;
	}

	.u-radio__icon--disabled {
		background-color: #ebedf0;
		border-color: #c8c9cc;
	}

	.u-radio__icon--disabled--checked {
		color: #c8c9cc !important;
	}

	.u-radio__label {
		word-wrap: break-word;
		margin-left: 10rpx;
		margin-right: 24rpx;
		color: $u-content-color;
		font-size: 30rpx;
	}

	.u-radio__label--disabled {
		color: #c8c9cc;
	}

	.u-radio__label:empty {
		margin: 0;
	}
</style>
