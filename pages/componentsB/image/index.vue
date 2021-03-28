<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area u-flex u-row-center">
				<u-image :shape="shape" ref="uImage" :width="width" :height="height" :src="src" mode="aspectFill">
					<u-loading size="44" mode="flower" slot="loading" v-if="loadingSlot"></u-loading>
					<view v-if="errorSlot" slot="error" style="font-size: 24rpx;">加载失败</view>
				</u-image>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">状态</view>
				<u-subsection :current="statusCurrent" :list="['加载成功', '加载中', '加载失败']" @change="statusChange"></u-subsection>
			</view>
			<!-- 微信小程序中，无法动态切换slot，所以隐藏此部分的演示 -->
			<!-- #ifndef MP-WEIXIN -->
			<view class="u-config-item">
				<view class="u-item-title">加载中状态</view>
				<u-subsection :list="['默认', '自定义']" @change="loadingChange"></u-subsection>
			</view>
			<!-- #endif -->
			<view class="u-config-item">
				<view class="u-item-title">加载失败状态</view>
				<u-subsection :list="['默认', '自定义']" @change="errorChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">形状</view>
				<u-subsection :list="['方形', '圆形']" @change="shapeChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
			width: '200',
			height: '200',
			loadingSlot: false,
			statusCurrent: 0,
			errorSlot: false,
			shape: 'square'
		};
	},
	computed: {
		// statusCurrent() {
		// }
	},
	methods: {
		statusChange(index) {
			// 此处通过ref操作组件内部状态，仅是为了演示使用，实际中无需这些操作，由内部的图片加载事件自动完成
			if (index == 0) {
				this.src = 'http://img5.imgtn.bdimg.com/it/u=2438062088,2808868405&fm=26&gp=0.jpg';
				this.$refs.uImage.loading = false;
				this.$refs.uImage.isError = false;
			} else if (index == 1) {
				this.$refs.uImage.loading = true;
			} else {
				this.$refs.uImage.loading = false;
				this.$refs.uImage.isError = true;
			}
		},
		loadingChange(index) {
			this.statusCurrent = 1;
			this.statusChange(1);
			if (index == 0) {
				this.loadingSlot = false;
			} else {
				this.loadingSlot = true;
			}
		},
		errorChange(index) {
			this.statusCurrent = 2;
			this.statusChange(2);
			if (index == 0) {
				this.errorSlot = false;
			} else {
				this.errorSlot = true;
			}
		},
		shapeChange(index) {
			this.shape = index == 0 ? 'square' : 'circle';
		}
	}
};
</script>

<style scoped lang="scss">
.u-demo-area {
}
</style>
