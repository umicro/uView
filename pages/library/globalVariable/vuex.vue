<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-no-demo-here">
					此处为演示vuex全局变量的使用
				</view>
				<view class="u-demo-result-line">
					{{vuex_demo}}
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">修改vuex变量为如下值</view>
				<u-subsection :list="['墨绿', '黛蓝', '浅紫']" @change="vuexChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			vuexChange(index) {
				let val = index == 0 ? '墨绿' : index == 1 ? '黛蓝' : '浅紫';
				// 通过this.$u.vuex使用，方法见uView文档
				this.$u.vuex('vuex_demo', val);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>