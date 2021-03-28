<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-no-demo-here">
					源字符串：{{`"${string}"`}}
				</view>
				<view class="u-demo-result-line">
					{{`"${result}"`}}
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式选择</view>
				<u-subsection :list="['左空格', '全部空格', '两边空格', '右空格']" @change="modeChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				string: "  我用十年  青春，赴你  最后之约  ",
				result: '',
				pos: 'left'
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
			modeChange(index) {
				this.pos = index == 0 ? 'left' : index == 1 ? 'all' : index == 2 ? 'both' : 'right';
				this.getResult();
			},
			getResult() {
				this.result = this.$u.trim(this.string, this.pos);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
