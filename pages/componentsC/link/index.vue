<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-link :color="color" :font-size="fontSize" :under-line="underLine" :href="href">点此链接，跳转uView官网</u-link>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">下划线</view>
				<u-subsection :list="['显示', '隐藏']" @change="underLineChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义样式</view>
				<u-subsection current="1" :list="['是', '否']" @change="styleChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://www.uviewui.com',
				underLine: true,
				fontSize: 28,
				color: '#2979ff'
			}
		},
		methods: {
			underLineChange(index) {
				this.underLine = index == 0 ? true : false;
			},
			styleChange(index) {
				if(index == 0) {
					this.color = this.$u.color['tipsColor'];
					this.fontSize = 34;
				} else {
					this.color = this.$u.color['primary'];
					this.fontSize = 28;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
