<template>
	<view style="padding-top: 200px;">
		<u-button @click="show = true" :custom-style="{
			color: 'red',
			borderColor: 'blue'
		}">打开</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				list: [{
					name: '待收货'
				}, {
					name: '待付款'
				}, {
					name: '待评价'
				}],
				current: 0
			}
		},
		onLoad() {
			// setTimeout(() => {
			// 	this.show = false;
			// }, 2000)
		},
		methods: {
			close() {
				//console.log('close');
			},
			change(index) {
				this.current = index;
			}
		}
	}
</script>
