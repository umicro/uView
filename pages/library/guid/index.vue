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
				<view class="u-item-title">长度</view>
				<u-subsection current="2" :list="['10', '16', '32', 'rfc4122标准']" @change="lengthChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">首字符为"u"</view>
				<u-subsection :list="['是', '否']" @change="fristUChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">取值基数(进制)</view>
				<u-subsection current="3" :list="['二', '八', '十', '六十二']" @change="radixChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				length: 32,
				firstU: true,
				radix: 62,
				result: null
			}
		},
		onLoad() {
			this.getResult();
		},
		methods: {
			lengthChange(index) {
				this.length = index == 0 ? 10 : index == 1 ? 16 : index == 2 ? 32 : null;
				this.getResult();
			},
			fristUChange(index) {
				this.firstU = index == 0 ? true : false;
				this.getResult();
			},
			radixChange(index) {
				this.radix = index == 0 ? 2 : index == 1 ? 8 : index == 2 ? 10 : 62;
				this.getResult();
			},
			getResult() {
				this.result = this.$u.guid(this.length, this.firstU, this.radix);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
