<template>
	<view class="">
		<u-keyboard ref="uKeyboard" mode="number" v-model="show" @backspace="backspace" @change="change"><u-message-input :value="value"></u-message-input></u-keyboard>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: true,
			value: ''
		};
	},
	methods: {
		change(val) {
			this.value += val;
		},
		backspace() {
			// 删除value的最后一个字符
			if (this.value.length) this.value = this.value.substr(0, this.value.length - 1);
			//console.log(this.value);
		}
	}
};
</script>
