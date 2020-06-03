<template>
	<u-select v-model="show" mode="mutil-column-auto" :list="list" @confirm="confirm"></u-select>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				list: [
					{
						value: 1,
						label: '中国',
						children: [
							{
								value: 2,
								label: '广东',
								children: [
									{
										value: 3,
										label: '深圳'
									},
									{
										value: 4,
										label: '广州'
									}
								]
							},
							{
								value: 5,
								label: '广西',
								children: [
									{
										value: 6,
										label: '南宁'
									},
									{
										value: 7,
										label: '桂林'
									}
								]
							}
						]
					},
					{
						value: 8,
						label: '美国',
						children: [
							{
								value: 9,
								label: '纽约',
								children: [
									{
										value: 10,
										label: '皇后街区'
									}
								]
							}
						]
					}
				]
			}
		},
		methods: {
			confirm(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">
	.money{
		font-size: 80rpx;
		color: $u-type-primary;
	}
</style>
