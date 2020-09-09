<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-no-demo-here">
					源对象为："{info: {name: 'mary'}}"
				</view>
				<view class="u-demo-result-line">
					{{result}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj: {
					info: {
						name: 'mary'
					}
				},
				result: ''
			}
		},
		onLoad() {
			this.result = this.$u.deepClone(this.obj);
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
