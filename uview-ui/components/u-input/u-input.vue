<template>
	<view
		class="u-input"
		:class="{
			'u-input--border': border,
			'u-input--error': validateState
		}"
		:style="{
			padding: `0 ${border ? 20 : 0}rpx`,
			borderColor: borderColor,
			textAlign: inputAlign
		}"
		@tap.stop="inputClick"
	>
		<textarea
			v-if="type == 'textarea'"
			class="u-input__input u-input__textarea"
			:style="[getStyle]"
			:value="value"
			:placeholder="placeholder"
			:placeholderStyle="placeholderStyle"
			:disabled="disabled"
			:maxlength="inputMaxlength"
			:fixed="fixed"
			:focus="focus"
			:autoHeight="autoHeight"
			:selection-end="uSelectionEnd"
			:selection-start="uSelectionStart"
			@input="handleInput"
			@blur="handleBlur"
			@focus="onFocus"
			@confirm="onConfirm"
		/>
		<input
			v-else
			class="u-input__input"
			:type="type == 'password' ? 'text' : type"
			:style="[getStyle]"
			:value="defaultValue"
			:password="type == 'password' && !showPassword"
			:placeholder="placeholder"
			:placeholderStyle="placeholderStyle"
			:disabled="disabled || type === 'select'"
			:maxlength="inputMaxlength"
			:focus="focus"
			:confirmType="confirmType"
			:cursor-spacing="getCursorSpacing"
			:selection-end="uSelectionEnd"
			:selection-start="uSelectionStart"
			@focus="onFocus"
			@blur="handleBlur"
			@input="handleInput"
			@confirm="onConfirm"
		/>
		<view class="u-input__right-icon u-flex">
			<view class="u-input__right-icon__clear u-input__right-icon__item" v-if="clearable && value != '' && focused">
				<u-icon size="32" name="close-circle-fill" color="#c0c4cc" @touchstart="onClear"/>
			</view>
			<view class="u-input__right-icon__clear u-input__right-icon__item" v-if="passwordIcon && type == 'password'">
				<u-icon size="32" :name="!showPassword ? 'eye' : 'eye-fill'" color="#c0c4cc" @click="showPassword = !showPassword"/>
			</view>
			<view class="u-input__right-icon--select u-input__right-icon__item" v-if="type == 'select'" :class="{
				'u-input__right-icon--select--reverse': selectOpen
			}">
				<u-icon name="arrow-down-fill" size="26" color="#c0c4cc"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
import Emitter from '../../libs/util/emitter.js';

/**
 * input 输入框
 * @description 此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件u-form而设计的，利用它可以快速实现表单验证，输入内容，下拉选择等功能。
 * @tutorial http://uviewui.com/components/input.html
 * @property {String} type 模式选择，见官网说明
 * @property {Boolean} clearable 是否显示右侧的清除图标(默认true)
 * @property {} v-model 用于双向绑定输入框的值
 * @property {String} input-align 输入框文字的对齐方式(默认left)
 * @property {String} placeholder placeholder显示值(默认 '请输入内容')
 * @property {Boolean} disabled 是否禁用输入框(默认false)
 * @property {String Number} maxlength 输入框的最大可输入长度(默认140)
 * @property {String Number} selection-start 光标起始位置，自动聚焦时有效，需与selection-end搭配使用（默认-1）
 * @property {String Number} maxlength 光标结束位置，自动聚焦时有效，需与selection-start搭配使用（默认-1）
 * @property {String Number} cursor-spacing 指定光标与键盘的距离，单位px(默认0)
 * @property {String} placeholderStyle placeholder的样式，字符串形式，如"color: red;"(默认 "color: #c0c4cc;")
 * @property {String} confirm-type 设置键盘右下角按钮的文字，仅在type为text时生效(默认done)
 * @property {Object} custom-style 自定义输入框的样式，对象形式
 * @property {Boolean} focus 是否自动获得焦点(默认false)
 * @property {Boolean} fixed 如果type为textarea，且在一个"position:fixed"的区域，需要指明为true(默认false)
 * @property {Boolean} password-icon type为password时，是否显示右侧的密码查看图标(默认true)
 * @property {Boolean} border 是否显示边框(默认false)
 * @property {String} border-color 输入框的边框颜色(默认#dcdfe6)
 * @property {Boolean} auto-height 是否自动增高输入区域，type为textarea时有效(默认true)
 * @property {String Number} height 高度，单位rpx(text类型时为70，textarea时为100)
 * @example <u-input v-model="value" :type="type" :border="border" />
 */
export default {
	name: 'u-input',
	mixins: [Emitter],
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		// 输入框的类型，textarea，text，number
		type: {
			type: String,
			default: 'text'
		},
		inputAlign: {
			type: String,
			default: 'left'
		},
		placeholder: {
			type: String,
			default: '请输入内容'
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
			default: 'color: #c0c4cc;'
		},
		confirmType: {
			type: String,
			default: 'done'
		},
		// 输入框的自定义样式
		customStyle: {
			type: Object,
			default() {
				return {};
			}
		},
		// 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
		fixed: {
			type: Boolean,
			default: false
		},
		// 是否自动获得焦点
		focus: {
			type: Boolean,
			default: false
		},
		// 密码类型时，是否显示右侧的密码图标
		passwordIcon: {
			type: Boolean,
			default: true
		},
		// input|textarea是否显示边框
		border: {
			type: Boolean,
			default: false
		},
		// 输入框的边框颜色
		borderColor: {
			type: String,
			default: '#dcdfe6'
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
		},
		// 高度，单位rpx
		height: {
			type: [Number, String],
			default: ''
		},
		// 是否可清空
		clearable: {
			type: Boolean,
			default: true
		},
		// 指定光标与键盘的距离，单位 px
		cursorSpacing: {
			type: [Number, String],
			default: 0
		},
		// 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
		selectionStart: {
			type: [Number, String],
			default: -1
		},
		// 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
		selectionEnd: {
			type: [Number, String],
			default: -1
		}
	},
	data() {
		return {
			defaultValue: this.value,
			inputHeight: 70, // input的高度
			textareaHeight: 100, // textarea的高度
			validateState: false, // 当前input的验证状态，用于错误时，边框是否改为红色
			focused: false, // 当前是否处于获得焦点的状态
			showPassword: false, // 是否预览密码
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
		},
	},
	computed: {
		// 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，给用户可以传入字符串数值
		inputMaxlength() {
			return Number(this.maxlength);
		},
		getStyle() {
			let style = {};
			// 如果没有自定义高度，就根据type为input还是textare来分配一个默认的高度
			style.minHeight = this.height ? this.height + 'rpx' : this.type == 'textarea' ?
				this.textareaHeight + 'rpx' : this.inputHeight + 'rpx';
			style = Object.assign(style, this.customStyle);
			return style;
		},
		//
		getCursorSpacing() {
			return Number(this.cursorSpacing);
		},
		// 光标起始位置
		uSelectionStart() {
			return String(this.selectionStart);
		},
		// 光标结束位置
		uSelectionEnd() {
			return String(this.selectionEnd);
		}
	},
	created() {
		// 监听u-form-item发出的错误事件，将输入框边框变红色
		this.$on('on-form-item-error', this.onFormItemError);
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
			this.focused = false;
			// vue 原生的方法 return 出去
			this.$emit('blur', event.detail.value);
			this.$nextTick(() => {
				// 将当前的值发送到 u-form-item 进行校验
				this.dispatch('u-form-item', 'on-form-blur', event.detail.value);
			});
		},
		onFormItemError(status) {
			this.validateState = status;
		},
		onFocus(event) {
			this.focused = true;
			this.$emit('focus');
		},
		onConfirm(e) {
			this.$emit('confirm', e.detail.value);
		},
		onClear(event) {
			this.$emit('input', '');
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
	flex: 1;
	display: flex;

	&__input {
		//height: $u-form-item-height;
		font-size: 28rpx;
		color: $u-main-color;
		flex: 1;
	}

	&__textarea {
		width: auto;
		font-size: 28rpx;
		color: $u-main-color;
		padding: 10rpx 0;
		line-height: normal;
		flex: 1;
	}

	&--border {
		border-radius: 6rpx;
		border-radius: 4px;
		border: 1px solid $u-form-item-border-color;
	}

	&--error {
		border-color: $u-type-error!important;
	}

	&__right-icon {

		&__item {
			margin-left: 10rpx;
		}

		&--select {
			transition: transform .4s;

			&--reverse {
				transform: rotate(-180deg);
			}
		}
	}
}
</style>
