<template>
	<input type="text" @input="handleInput" @blur="handleBlur" :value="defaultValue" />
</template>

<script>
import Emitter from '../../libs/util/emitter.js';
export default {
	name: 'u-input',
	mixins: [Emitter],
	props: {
		value: {
			type: String,
			default: '1234'
		}
	},
	data() {
		return {
			defaultValue: this.value
		};
	},
	watch: {
		value(val) {
			this.defaultValue = val;
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
			})
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
			})
		}
	}
};
</script>
