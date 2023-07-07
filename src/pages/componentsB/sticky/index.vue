<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-sticky :offset-top="offsetTop" :enable="enable" @fixed="fixed" @unfixed="unfixed">
					<view class="sticky">
						宝剑锋从磨砺出,梅花香自苦寒来
					</view>
				</u-sticky>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">吸顶高度</view>
				<u-subsection :list="[0, 120, 200]" @change="offsetTopChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">状态</view>
				<u-subsection :list="['允许吸顶', '禁止吸顶']" @change="enableChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				offsetTop: 0,
				enable: true,
			}
		},
		methods: {
			offsetTopChange(index) {
				this.offsetTop = index == 0 ? 0 : index == 1 ? 120 : 200;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				})
			},
			enableChange(index) {
				this.enable = index == 0 ? true : false;
			},
			fixed() {
				this.$refs.uToast.show({
					type: 'warning',
					title: '触发吸顶'
				})
			},
			unfixed() {
				this.$refs.uToast.show({
					type: 'success',
					title: '取消吸顶'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo-area {
		overflow: hidden;
	}
	
	.u-config-wrap {
		height: 200vh;
	}
	
	.u-demo-title {
		margin-bottom: 140rpx;
	}
	
	.sticky {
		background-color: $u-type-primary;
		color: #fff;
		padding: 24rpx;
		margin: auto;
		font-size: 28rpx;
		line-height: 1;
		border-radius: 5px;
	}
</style>
