<template>
	<view>
		<u-checkbox-group @change="checkboxGroupChange1">
			<view class="" v-for="(item, index) in list1" :key="index">
				<image :src="item.image" mode=""></image>
				<u-checkbox v-model="item.checked" :name="item.name">{{ item.name }}</u-checkbox>
			</view>
		</u-checkbox-group>
		<view class="">-------------------------------------------------------------------------------------</view>
		<u-checkbox-group @change="checkboxGroupChange2">
			<view class="" v-for="(item, index) in list2" :key="index">
				<image :src="addUrl(item.image)" mode=""></image>
				<u-checkbox v-model="item.checked" :name="item.name">{{ item.name }}</u-checkbox>
			</view>
		</u-checkbox-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list1: [
				{
					name: 'item-1',
					checked: false,
					image: 'https://qiniu.jieyoukj.cn/vote/2020/5/20/11:34:7/14yvkka1oqadcxr1592624047805'
				},
				{
					name: 'item-2',
					checked: false,
					image: 'https://qiniu.jieyoukj.cn/vote/2020/5/20/11:34:7/14yvkka1oqadcxr1592624047805'
				}
			],
			list2: [
				{
					name: 'item-1',
					checked: false,
					image: '/vote/2020/5/20/11:34:7/14yvkka1oqadcxr1592624047805'
				},
				{
					name: 'item-2',
					checked: false,
					image: '/vote/2020/5/20/11:34:7/14yvkka1oqadcxr1592624047805'
				}
			]
		};
	},
	methods: {
		// 选中任一checkbox时，由checkbox-group触发
		checkboxGroupChange1(e) {
			console.log(e);
		},
		checkboxGroupChange2(e) {
			console.log(e);
		},

		addUrl(url) {
			return 'https://qiniu.jieyoukj.cn' + url;
		}
	}
};
</script>

<style lang="scss"></style>
