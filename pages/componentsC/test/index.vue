<template>
	<view>
		<u-field></u-field>
		<u-button @click="password = !password"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: false
			}
		},
	}
</script>

<style>
	
</style>