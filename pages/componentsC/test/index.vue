<template>
	<view class="">
		<u-modal v-model="show" @confirm="confirm" :async-close="true"></u-modal>
		<u-button @click="showModal">弹起Modal</u-button>
	</view>
</template>

<script>
export default {
    data() {
        return {
			show: false
		}
	},
	onLoad: function(opt) {
		
	},
	methods:{
		showModal() {
			this.show = true;
		},
		confirm() {
			setTimeout(() => {
				this.show = false;
			}, 3000)
		}
    }
}
</script>

