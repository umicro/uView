<template>
	<view>
		<!-- 底部弹窗 -->
		<u-popup v-model="show" mode="bottom">
			<view style="padding-bottom: 60px;">出淤泥而不染，濯清涟而不妖</view>
		</u-popup>
		<!-- 底部固定栏 -->
		<view class="box-1"></view>
		<!-- 模态框 -->
		<u-modal v-model="show" :zoom="false"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				s:false,
				show:false
			}
		},
		onReady() {
			this.show = true;
		},
		methods: {

		}
	}
</script>

<style>
	.box-1{
		z-index: 999;
		height: 50px;
		background-color: #f00;
		left: 0;
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
