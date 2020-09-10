<template>
	<view class="">
		<u-checkbox-group @change="checkboxGroupChange">
			<u-checkbox 
				@change="checkboxChange" 
				v-model="item.checked" 
				v-for="(item, index) in list" :key="index" 
				:name="item.name"
			>{{item.name}}</u-checkbox>
		</u-checkbox-group>
		<u-button @click="checkedAll">全选</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: 'apple',
					checked: false,
					disabled: false
				},
				{
					name: 'banner',
					checked: false,
					disabled: false
				},
				{
					name: 'orange',
					checked: false,
					disabled: false
				}
			]
		};
	},
	methods: {
		// 选中某个复选框时，由checkbox时触发
		checkboxChange(e) {
			console.log(e);
		},
		// 选中任一checkbox时，由checkbox-group触发
		checkboxGroupChange(e) {
			// console.log(e);
		},
		// 全选
		checkedAll() {
			this.list.map(val => {
				val.checked = true;
			})
		}
	}
};
</script>