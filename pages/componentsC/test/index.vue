<template>
	<view class="">
		<u-checkbox-group>
			<u-checkbox v-model="checked" active-color="red">光影</u-checkbox>
		</u-checkbox-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			checked: true
		};
	},
};
</script>