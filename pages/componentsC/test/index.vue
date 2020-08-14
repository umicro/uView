<template>
	<view class="">
		<u-modal v-model="show" content="点击确定进行授权">
			<button open-type="getUserInfo" class="u-reset-button" slot="confirm-button" @getuserinfo="getuserinfo">确定</button>
		</u-modal>
		<u-button @click="show = true">打开modal</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		},
		methods: {
			getuserinfo(res) {
				console.log(res);
			}
		}
	}
</script>
