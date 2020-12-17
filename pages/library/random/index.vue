<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-demo-result-line">
					{{result}}
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">操作</view>
				<u-subsection :list="['min=0, max=5', 'min=541, max=8164']" @change="paramsChange"></u-subsection>
				<view class="u-btn-wrap">
					<u-button @click="getResult">执行</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				min: 0,
				max: 5,
				result: ''
			}
		},
		onLoad() {
			this.getResult();
		},
		methods: {
			paramsChange(index) {
				if(index == 0) {
					this.min = 0;
					this.max = 5;
				} else {
					this.min = 541;
					this.max = 8164;
				}
				this.getResult();
			},
			getResult() {
				this.result = this.$u.random(this.min, this.max);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-btn-wrap {
		margin-top: 50rpx;
	}
</style>
