<template>
	<view>
		<u-popup v-model="show" @close="close">
			<view>出淤泥而不染，濯清涟而不妖</view>
		</u-popup>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			close() {
				console.log('close');
			}
		}
	}
</script>