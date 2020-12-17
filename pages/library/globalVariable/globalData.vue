<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-no-demo-here">
					此处为演示globalData全局变量的使用，需手动更新
				</view>
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
				<view class="u-item-title">修改globalData为如下值</view>
				<u-subsection :list="['雅蓝', '皓白', '橘黄']" @change="globalDataChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: null
			}
		},
		onShow() {
			// 对globalData的使用，应在onShow生命周期，而不是onLoad生命周期
			this.result = getApp().globalData.username;
		},
		methods: {
			globalDataChange(index) {
				getApp().globalData.username = index == 0 ? '雅蓝' : index == 1 ? '皓白' : '橘黄';
				// 在此改变了globalData，想要再次触发本页内容更细，还必须手动操作
				this.result = getApp().globalData.username;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
