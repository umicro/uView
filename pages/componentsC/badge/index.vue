<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-badge-wrap"><u-badge :is-center="isCenter" :type="type" :count="count" :is-dot="isDot" :offset="offset" :size="size"></u-badge></view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">数值显示</view>
				<u-subsection current="1" :list="[0, 8, 15, 106, 209]" @change="countChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">主题选择</view>
				<u-subsection current="2" :list="['primary', 'success', 'error', 'warning', 'info']" @change="typeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">显示点</view>
				<u-subsection current="1" :list="['是', '否']" @change="isDotChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">尺寸</view>
				<u-subsection :list="['default', 'mini']" @change="sizeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">位置偏移</view>
				<u-subsection current="1" :list="['[20, 20]', '[-8, -8]', '[-20, -20]']" @change="offsetChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">中心点与父右上角重合</view>
				<u-subsection current="1" :list="['是', '否']" @change="isCenterChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			count: 8,
			type: 'error',
			isDot: false,
			offset: [-8, -8],
			size: 'default',
			isCenter: false
		};
	},
	methods: {
		countChange(index) {
			this.count = index == 0 ? 0 : index == 1 ? 8 : index == 2 ? 15 : index == 3 ? 106 : 209;
		},
		typeChange(index) {
			this.type = index == 0 ? 'primary' : index == 1 ? 'success' : index == 2 ? 'error' : index == 3 ? 'warning' : 'info';
		},
		sizeChange(index) {
			this.size = index == 0 ? 'default' : 'mini';
		},
		isDotChange(index) {
			this.isDot = index == 0 ? true : false;
		},
		offsetChange(index) {
			this.offset = index == 0 ? [20, 20] : index == 1 ? [-8, -8] : [-20, -20];
		},
		isCenterChange(index) {
			this.isCenter = index == 0 ? true : false;
		}
	}
};
</script>

<style lang="scss" scoped>
.u-badge-wrap {
	width: 60px;
	height: 60px;
	border-radius: 6px;
	background-color: $u-light-color;
	position: relative;
	margin: auto;
}
</style>
