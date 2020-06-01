<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<u-icon label="uView" size="40" name="https://cdn.uviewui.com/uview/example/button.png"></u-icon>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">状态</view>
				<u-button @click="value = true">打开Picker</u-button>
			</view>
		</view>
	</view>
</template>

<script>
import citySelect from './u-city-select.vue';
export default {
	components: {
		citySelect
	},
	data() {
		return {
			height: 30,
			bgColor: this.$u.color.bgColor,
			marginTop: 30,
			marginBottom: 30,
			value: false,
			input: '',
		};
	},
	methods: {
		cityChange(e) {
			this.input = e.province.label + '-' + e.city.label + '-' + e.area.label;
		}
	}
};
</script>

<style scoped>
	.btn-wrap {
		margin: 100rpx 30rpx;
	}
</style>
