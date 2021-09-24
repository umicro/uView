<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-no-demo-here">输入时间：{{timestamp}}</view>
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
				<view class="u-item-title">格式</view>
				<u-subsection :list="['yyyy-mm-dd', 'yyyy年-mm月-dd日']" @change="format1Change"></u-subsection>
				<view style="margin-top: 50rpx;">
					<u-subsection  :list="['mm-dd', 'yyyy-mm-dd hh:MM']" @change="format2Change"></u-subsection>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timestamp: '2020-11-02T02:59:24.732Z',
				result: null
			}
		},
		onLoad() {
			// 本时间格式化方法，也支持模板中过滤器形式写法，如
			// {{1585926095536 | date('yyyy-mm-dd')}} 或者 {{1585926095536 | date}}，因为'yyyy-mm-dd'为默认的参数
			this.getResult('yyyy-mm-dd');
		},
		methods: {
			format1Change(index) {
				let format = index == 0 ? 'yyyy-mm-dd' : 'yyyy年-mm月-dd日';
				this.getResult(format);
			},
			format2Change(index) {
				let format = index == 0 ? 'mm-dd' : 'yyyy-mm-dd hh:MM';
				this.getResult(format);
			},
			getResult(format) {
				this.result = this.$u.timeFormat(this.timestamp, format);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
