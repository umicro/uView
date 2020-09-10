<template>
	<view class="">
		<u-radio-group v-model="value" @change="radioGroupChange">
			<u-radio 
				@change="radioChange" 
				v-for="(item, index) in list" :key="index" 
				:name="item.name"
				:disabled="item.disabled"
			>
				{{item.name}}
			</u-radio>
		</u-radio-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: 1,
					disabled: false
				},
				{
					name: 2,
					disabled: false
				},
				{
					name: 3,
					disabled: false
				}
			],
			// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
			value: 1,
		};
	},
	methods: {
		// 选中某个单选框时，由radio时触发
		radioChange(e) {
			// console.log(e);
		},
		// 选中任一radio时，由radio-group触发
		radioGroupChange(e) {
			// console.log(e);
		}
	}
};
</script>