<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-button @click="btnClick">唤起弹窗</u-button>
				<u-popup border-radius="10" v-model="show" 
					@close="close" @open="open" :mode="mode" 
					length="50%" :mask="mask"
					:closeable="closeable"
					:close-icon-pos="closeIconPos"
				>
					<view v-if="mode == 'center'" style="height: 400rpx">
						<view class="close-btn">
							<u-button @click="show = false;" size="medium">关闭弹窗</u-button>
						</view>
					</view>
					<view class="close-btn" v-if="mode != 'center'">
						<u-button size="medium" @click="show = false;">关闭弹窗</u-button>
					</view>
				</u-popup>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">状态</view>
				<u-subsection :current="show == false ? 1 : 0" :list="['打开', '关闭']" @change="showChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">弹出方向</view>
				<u-subsection :current="2" :list="['上', '下', '左', '右', '中']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">关闭按钮</view>
				<u-subsection :list="['显示', '隐藏']" @change="closeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">关闭按钮位置</view>
				<u-subsection :current="1" :list="['左上角', '右上角', '左下角', '右下角']" @change="closePosChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				mode: 'left',
				mask: true, // 是否显示遮罩
				closeable: true,
				closeIconPos: 'top-right'
			}
		},
		watch: {
			show(n) {
				// console.log(n);
			}
		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'top' : index == 1 ? 'bottom' : index == 2 ? 'left' : index == 3 ? 'right' : 'center';
				this.show = true;
			},
			showChange(index) {
				this.show = index == 0 ? true : false;
			},
			closeChange(index) {
				this.closeable = !index;
			},
			closePosChange(index) {
				this.closeIconPos = ['top-left', 'top-right', 'bottom-left', 'bottom-right'][index];
			},
			close() {
				// console.log('close');
			},
			open() {
				// console.log('open');
			},
			btnClick() {
				this.show = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.close-btn {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
