<template>
	<view class="">
		<u-button @click="show = true;">打开弹窗</u-button>
		<u-popup mode="bottom" v-model="show">
			<view class="content">
				<u-image class="image" width="500rpx" height="300rpx" src="https://cdn.uviewui.com/uview/example/fade.jpg"></u-image>
				
				<view class="confrim-btn">
					<u-button @click="show = false;">确定</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 24rpx;
		text-align: center;
		position: relative;
	}
	
	.image {
		position: absolute;
		top: -200rpx;
	}
</style>