<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-slider :step="step" :height="height" :block-width="blockWidth" 
					:active-color="activeColor" :value="30" 
					:use-slot="useSlot" v-model="value"
					:min="min" :max="max" 
					@end="end"
					@moving="moving"
				>
					<!-- #ifndef MP-WEIXIN || MP-TOUTIAO -->
					<view class="" v-if="useSlot">
						<view class="badge-button">
							{{value}}
						</view>
					</view>
					<!-- #endif -->
				</u-slider>
				<view class="u-demo-result-line">
					滑块值：{{value}}
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义颜色</view>
				<u-subsection :list="['primary', 'warning', 'error', 'success']" @change="typeChange"></u-subsection>
			</view>
			<!-- #ifndef MP-WEIXIN -->
			<view class="u-config-item">
				<view class="u-item-title">自定义传入内容</view>
				<u-subsection current="1" :list="['是', '否']" @change="slotChange"></u-subsection>
			</view>
			<!-- #endif -->
			<view class="u-config-item">
				<view class="u-item-title">自定义尺寸</view>
				<u-subsection current="1" :list="['是', '否']" @change="sizeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">步进值</view>
				<u-subsection :list="['1', '10', '20']" @change="stepChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">最大最小值</view>
				<u-subsection :list="['0-100', '40-80']" @change="minMaxchange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 30,
				useSlot: false,
				setp: 1,
				activeColor: '#2979ff',
				height: 6,
				blockWidth: 30,
				step: 1,
				min: 0,
				max: 100
			};
		},
		onLoad() {
			
		},
		computed: {
			current() {
				return this.show ? 0 : 1;
			}
		},
		methods: {
			typeChange(index) {
				let type = ['primary', 'warning', 'error', 'success'];
				this.activeColor = this.$u.color[type[index]];
			},
			sizeChange(index) {
				if(index == 0) {
					this.height = 4;
					this.blockWidth = 30;
				} else {
					this.height = 6;
					this.blockWidth = 20;
				}
			},
			stepChange(index) {
				let arr = ['1', '10', '20'];
				this.step = arr[index];
			},
			slotChange(index) {
				this.useSlot = !index;
			},
			minMaxchange(index) {
				if(index == 0) {
					this.min = 0;
					this.max = 100;
				} else {
					this.min = 40;
					this.max = 80;
				}
			},
			end() {
				// console.log('end');
			},
			moving() {
				// console.log('moving');
			}
		}
	};
</script>

<style scoped lang="scss">
	.badge-button {
		padding: 4rpx 6rpx;
		background-color: $u-type-error;
		color: #fff;
		border-radius: 10rpx;
		font-size: 22rpx;
		line-height: 1;
	}
</style>
