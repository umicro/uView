<template>
	<view class="u-checkbox" :style="[checkboxStyle]">
		<view class="u-checkbox__icon-wrap" @tap="toggle">
			<u-icon :class="iconClass" name="checkbox-mark" :size="checkboxIconSize" :color="iconColor" class="u-checkbox__icon" :style="[iconStyle]" />
		</view>
		<view class="u-label-class u-checkbox__label" @tap="onClickLabel" :style="{
			fontSize: labelSize + 'rpx'
		}">
			<slot />
		</view>
	</view>
</template>

<script>
	/**
	 * checkbox 复选框
	 * @description 该组件需要搭配checkboxGroup组件使用，以便用户进行操作时，获得当前复选框组的选中情况。
	 * @tutorial https://www.uviewui.com/components/checkbox.html
	 * @property {String Number} icon-size 图标大小，单位rpx（默认24）
	 * @property {String Number} label-size label字体大小，单位rpx（默认28）
	 * @property {String Number} name checkbox组件的标示符
	 * @property {String} shape 形状，见官网说明（默认circle）
	 * @property {Boolean} disabled 是否禁用（默认false）
	 * @property {Boolean} label-disabled 点击文本是否可以操作checkbox（默认true）
	 * @property {String} active-color 选中时的颜色，如设置CheckboxGroup的active-color将失效
	 * @event {Function} change 某个checkbox状态发生变化时触发，回调为一个对象
	 * @example <u-checkbox v-model="checked" :disabled="false">天涯</u-checkbox>
	 */
	export default {
		name: "u-checkbox",
		props: {
			// checkbox的名称
			name: {
				type: [String, Number],
				default: ''
			},
			// 形状，square为方形，circle为原型
			shape: {
				type: String,
				default: ''
			},
			// 是否为选中状态
			value: {
				type: Boolean,
				default: false
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
			// 选中状态下的颜色，如设置此值，将会覆盖checkboxGroup的activeColor值
			activeColor: {
				type: String,
				default: ''
			},
			// 图标的大小，单位rpx
			iconSize: {
				type: [String, Number],
				default: ''
			},
			// label的字体大小，rpx单位
			labelSize: {
				type: [String, Number],
				default: ''
			},
			// 组件的整体大小
			size: {
				type: [String, Number],
				default: ''
			},
		},
		data() {
			return {
				parentDisabled: false,
				newParams: {},
			};
		},
		created() {
			// 支付宝小程序不支持provide/inject，所以使用这个方法获取整个父组件，在created定义，避免循环应用
			this.parent = this.$u.$parent.call(this, 'u-checkbox-group');
			// 如果存在u-checkbox-group，将本组件的this塞进父组件的children中
			this.parent && this.parent.children.push(this);
		},
		computed: {
			// 是否禁用，如果父组件u-checkbox-group禁用的话，将会忽略子组件的配置
			isDisabled() {
				return this.parent ? this.parent.disabled || this.disabled : this.disabled;
			},
			// 是否禁用label点击
			isLabelDisabled() {
				return this.parent ? this.parent.labelDisabled || this.labelDisabled : this.labelDisabled;
			},
			// 组件尺寸，对应size的值，默认值为34rpx
			checkboxSize() {
				return this.size ? this.size : (this.parent ? this.parent.size : 34);
			},
			// 组件的勾选图标的尺寸，默认20
			checkboxIconSize() {
				return this.iconSize ? this.iconSize : (this.parent ? this.parent.iconSize : 20);
			},
			// 组件选中激活时的颜色
			elActiveColor() {
				return this.activeColor ? this.activeColor : (this.parent ? this.parent.activeColor : 'primary');
			},
			// 组件的形状
			elShape() {
				return this.shape ? this.shape : (this.parent ? this.parent.shape : 'square');
			},
			iconStyle() {
				let style = {};
				// 既要判断是否手动禁用，还要判断用户v-model绑定的值，如果绑定为false，那么也无法选中
				if (this.elActiveColor && this.value && !this.isDisabled) {
					style.borderColor = this.elActiveColor;
					style.backgroundColor = this.elActiveColor;
				}
				style.width = this.$u.addUnit(this.checkboxSize);
				style.height = this.$u.addUnit(this.checkboxSize);
				return style;
			},
			// checkbox内部的勾选图标，如果选中状态，为白色，否则为透明色即可
			iconColor() {
				return this.value ? '#ffffff' : 'transparent';
			},
			iconClass() {
				let classs = [];
				classs.push('u-checkbox__icon--' + this.elShape);
				if (this.value == true) classs.push('u-checkbox__icon--checked');
				if (this.isDisabled) classs.push('u-checkbox__icon--disabled');
				if (this.value && this.isDisabled) classs.push('u-checkbox__icon--disabled--checked');
				return classs;
			},
			checkboxStyle() {
				let style = {};
				if(this.parent && this.parent.width) {
					style.width = this.parent.width;
					// #ifdef MP
					// 各家小程序因为它们特殊的编译结构，使用float布局
					style.float = 'left';
					// #endif
					// #ifndef MP
					// H5和APP使用flex布局
					style.flex = `0 0 ${this.parent.width}`;
					// #endif
				}
				if(this.parent && this.parent.wrap) {
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
				if (!this.isDisabled) {
					this.setValue();
				}
			},
			toggle() {
				if (!this.isDisabled) {
					this.setValue();
				}
			},
			emitEvent() {
				this.$emit('change', {
					value: this.value,
					name: this.name
				})
				// 执行父组件u-checkbox-group的事件方法
				if(this.parent && this.parent.emitEvent) this.parent.emitEvent();
			},
			// 设置input的值，这里通过input事件，设置通过v-model绑定的组件的值
			setValue() {
				// 判断是否超过了可选的最大数量
				let checkedNum = 0;
				if(this.parent && this.parent.children) {
					// 只要父组件的某一个子元素的value为true，就加1(已有的选中数量)
					this.parent.children.map(val => {
						if (val.value) checkedNum++;
					})
				}
				// 如果原来为选中状态，那么可以取消
				if (this.value == true) {
					this.$emit('input', !this.value);
					// 等待下一个周期再执行，因为this.$emit('input')作用于父组件，再反馈到子组件内部，需要时间
					this.$nextTick(function() {
						this.emitEvent();
					})
				} else if ((this.parent && checkedNum < this.parent.max) || !this.parent) {
					// 如果原来为未选中状态，需要选中的数量少于父组件中设置的max值，才可以选中
					this.$emit('input', !this.value);
					// 等待下一个周期再执行，因为this.$emit('input')作用于父组件，再反馈到子组件内部，需要时间
					this.$nextTick(function() {
						this.emitEvent();
					})
				}

			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";

	.u-checkbox {
		display: inline-flex;
		align-items: center;
		overflow: hidden;
		user-select: none;
		line-height: 1.8;
	}

	.u-checkbox__icon-wrap,
	.u-checkbox__label {
		color: $u-content-color;
	}

	.u-checkbox__icon-wrap {
		flex: none;
	}

	.u-checkbox__icon {
		display: -webkit-flex;
		display: flex;
		align-items: center;
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

	.u-checkbox__icon--circle {
		border-radius: 100%;
	}

	.u-checkbox__icon--square {
		border-radius: 3px;
	}

	.u-checkbox__icon--checked {
		color: #fff;
		background-color: $u-type-primary;
		border-color: $u-type-primary;
	}

	.u-checkbox__icon--disabled {
		background-color: #ebedf0;
		border-color: #c8c9cc;
	}

	.u-checkbox__icon--disabled--checked {
		color: #c8c9cc !important;
	}

	.u-checkbox__label {
		word-wrap: break-word;
		margin-left: 10rpx;
		margin-right: 24rpx;
		color: $u-content-color;
		font-size: 30rpx;
	}

	.u-checkbox__label--disabled {
		color: #c8c9cc;
	}

	.u-checkbox__label:empty {
		margin: 0;
	}
</style>
