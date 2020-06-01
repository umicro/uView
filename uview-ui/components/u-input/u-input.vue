<template>
	<view
		class="u-input"
		:class="{
			'u-input--border': border
		}"
		:style="{
			padding: `0 ${border ? 20 : 0}rpx`
		}"
		@tap.stop="inputClick"
	>
		<textarea
			v-if="type == 'textarea'"
			class="u-input__input u-input__textarea"
			:style="[fieldStyle]"
			:value="value"
			:placeholder="placeholder"
			:placeholderStyle="placeholderStyle"
			:disabled="disabled"
			:maxlength="inputMaxlength"
			:focus="focus"
			:autoHeight="autoHeight"
			@input="handleInput"
			@blur="handleBlur"
			@focus="onFocus"
			@confirm="onConfirm"
		/>
		<input
			v-if="type == 'text' || type == 'select'"
			class="u-input__input"
			:style="[fieldStyle]"
			:type="type"
			:value="defaultValue"
			:password="password || type === 'password'"
			:placeholder="placeholder"
			:placeholderStyle="placeholderStyle"
			:disabled="disabled || type === 'select'"
			:maxlength="inputMaxlength"
			:focus="focus"
			:confirmType="confirmType"
			@focus="onFocus"
			@blur="handleBlur"
			@input="handleInput"
			@confirm="onConfirm"
		/>
		<view class="u-input--select" v-if="type=='select'" :class="{
			'u-input--select--reverse': selectOpen
		}">
			<u-icon name="arrow-down-fill" size="26" color="#c0c4cc"></u-icon>
		</view>
	</view>
</template>

<script>
import Emitter from '../../libs/util/emitter.js';
export default {
	name: 'u-input',
	mixins: [Emitter],
	props: {
		value: {
			type: String,
			default: ''
		},
		// 输入框的类型，textarea，text，number
		type: {
			type: String,
			default: 'text'
		},
		clearable: {
			type: Boolean,
			default: true
		},
		inputAlign: {
			type: String,
			default: 'left'
		},
		placeholder: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: [Number, String],
			default: 140
		},
		placeholderStyle: {
			type: String,
			default: ''
		},
		confirmType: {
			type: String,
			default: 'done'
		},
		// 输入框的自定义样式
		fieldStyle: {
			type: Object,
			default() {
				return {};
			}
		},
		// 是否自动获得焦点
		focus: {
			type: Boolean,
			default: false
		},
		// 是否密码类型
		password: {
			type: Boolean,
			default: false
		},
		// input|textarea是否显示边框
		border: {
			type: Boolean,
			default: true
		},
		autoHeight: {
			type: Boolean,
			default: true
		},
		// type=select时，旋转右侧的图标，标识当前处于打开还是关闭select的状态
		// open-打开，close-关闭
		selectOpen: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			defaultValue: this.value
		};
	},
	watch: {
		value(nVal, oVal) {
			this.defaultValue = nVal;
			// 当值发生变化，且为select类型时(此时input被设置为disabled，不会触发@input事件)，模拟触发@input事件
			if(nVal != oVal && this.type == 'select') this.handleInput({
				detail: {
					value: nVal
				}
			})
		}
	},
	computed: {
		// 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，给用户可以传入字符串数值
		inputMaxlength() {
			return Number(this.maxlength);
		}
	},
	methods: {
		/**
		 * change 事件
		 * @param event
		 */
		handleInput(event) {
			// 当前model 赋值
			this.defaultValue = event.detail.value;
			// vue 原生的方法 return 出去
			this.$emit('input', event.detail.value);
			// 过一个生命周期再发送事件给u-form-item，否则this.$emit('input')更新了父组件的值，但是微信小程序上
			// 尚未更新到u-form-item，导致获取的值为空，从而校验混论
			this.$nextTick(() => {
				// 将当前的值发送到 u-form-item 进行校验
				this.dispatch('u-form-item', 'on-form-change', event.detail.value);
			});
		},
		/**
		 * blur 事件
		 * @param event
		 */
		handleBlur(event) {
			// vue 原生的方法 return 出去
			this.$emit('blur', event.detail.value);
			this.$nextTick(() => {
				// 将当前的值发送到 u-form-item 进行校验
				this.dispatch('u-form-item', 'on-form-blur', event.detail.value);
			});
		},
		onFocus(event) {
			this.focused = true;
			this.$emit('focus');
		},
		onConfirm(e) {
			this.$emit('confirm', e.detail.value);
		},
		onClear(event) {
			this.$emit('input');
		},
		inputClick() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss" scoped>
.u-input {
	position: relative;

	&__input {
		height: $u-form-item-height;
		font-size: 28rpx;
		color: $u-main-color;
	}
	
	&__textarea {
		min-height: 96rpx;
		width: auto;
		font-size: 28rpx;
		color: $u-main-color;
		padding: 10rpx 0;
	}

	&--border {
		border-radius: 6rpx;
		border-radius: 4px;
		border: 1px solid $u-form-item-border-color;
	}
	
	&--select {
		position: absolute;
		right: 20rpx;
		top: 50%;
		transition: transform .4s;
		transform: translateY(-50%);
		z-index: 1;
		
		&--reverse {
			transform: rotate(-180deg) translateY(50%);
		}
	}
}
</style>
