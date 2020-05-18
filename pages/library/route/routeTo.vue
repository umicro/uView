<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-no-demo-here">
					收到的参数为：{{paramsStr}}
				</view>
				<view class="u-btn-wrap">
					<u-button @click="back">返回</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default { 
		data() {
			return {
				params: {}
			}
		},
		onLoad(option) {
			this.params = option;
		},
		computed: {
			paramsStr() {
				return JSON.stringify(this.params);
			}
		},
		methods: {
			back() {
				this.$u.route({
					type: 'back',
					animationType: 'slide-in-top'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.u-btn-wrap {
		margin-top: 50rpx;
	}
</style>
