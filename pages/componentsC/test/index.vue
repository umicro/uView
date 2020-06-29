<template>
	<view>
		<u-icon name="map" label="nihao" label-pos="right"></u-icon>
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
