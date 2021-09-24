<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-message-input :mode="mode" :maxlength="maxlength" :value="value"
				:breathe="breathe" :bold="bold" @finish="finish" :dot-fill="dotFill"></u-message-input>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式选择</view>
				<u-subsection :list="['方框', '下划线', '中划线']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">输入长度</view>
				<u-subsection :list="[4, 5, 6]" @change="maxLengthChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<!-- #ifdef MP-WEIXIN -->
				<view class="u-item-title">初始值(为满足演示需要，微信小程序切换会有抖动，非性能问题)</view>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<view class="u-item-title">初始值</view>
				<!-- #endif -->
				<u-subsection :list="['空', '23', '678']" @change="valueChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">呼吸灯效果</view>
				<u-subsection :list="['是', '否']" @change="breatheChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否加粗</view>
				<u-subsection :list="['是', '否']" @change="boldChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">点替代输入值</view>
				<u-subsection current="1" :list="['是', '否']" @change="dotFillChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: 'box',
				maxlength: 4,
				value: '', 
				bold: true,
				breathe: true,
				dotFill: false,
			}
		},
		computed: {

		},
		onLoad() {

		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'box' : index == 1 ? 'bottomLine' : 'middleLine';
			},
			maxLengthChange(index) {
				this.maxlength = index == 0 ? 4 : index == 1 ? 5 : 6;
			},
			valueChange(index) {
				this.value = index == 0 ? '' : index == 1 ? '23' : '678';
			},
			breatheChange(index) {
				this.breathe = index == 0 ? true : false;
			},
			boldChange(index) {
				this.bold = index == 0 ? true : false;
			},
			dotFillChange(index) {
				this.dotFill = index == 0 ? true : false;
			},
			finish(value) {
				this.$refs.uToast.show({
					title: '输入完成，值为：' + value,
					type: 'success'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
