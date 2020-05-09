<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[{
					id:1,
					num:0
					},
					{
					id:2,
					num:0
				}],
			};
		},
		methods: {
			valChanges(e,index){
				this.dataList[index]['num'] = parseInt(e['value']);
				console.log(e);
			},
		}
	};
</script>

<style lang="scss" scoped>
	.item {
		display: flex;
		padding: 20rpx;
	}
	
	image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		margin-right: 20rpx;
		border-radius: 12rpx;
	}
	
	.title {
		text-align: left;
		font-size: 28rpx;
		color: $u-content-color;
		margin-top: 20rpx;
	}
</style>