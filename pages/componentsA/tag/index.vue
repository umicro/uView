<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-tag :text="text" :type="type" :shape="shape" :closeable="closeable" :mode="mode" @close="close" @click="click" :show="show" :size="size" />
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">模式选择</view>
				<u-subsection :list="['light', 'dark', 'plain']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">显示内容</view>
				<u-subsection :list="['蒹葭苍苍', '白露为霜', '在水一方']" @change="textChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">主题选择</view>
				<u-subsection current="2" :list="['primary', 'success', 'error', 'warning', 'info']" @change="typeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">形状</view>
				<u-subsection :list="['square', 'circle', 'circleLeft', 'circleRight']" @change="shapeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">尺寸</view>
				<u-subsection :list="['default', 'mini']" @change="sizeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">关闭图标</view>
				<u-subsection :list="['是', '否']" @change="closeableChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			text: '蒹葭苍苍',
			mode: 'light',
			type: 'error',
			size: 'default',
			shape: 'square',
			closeable: true,
			show: true
		};
	},
	methods: {
		modeChange(index) {
			this.mode = index == 0 ? 'light' : index == 1 ? 'dark' : 'plain';
		},
		textChange(index) {
			this.text = index == 0 ? '蒹葭苍苍' : index == 1 ? '白露为霜' : '在水一方';
		},
		typeChange(index) {
			this.type = index == 0 ? 'primary' : index == 1 ? 'success' : index == 2 ? 'error' : index == 3 ? 'warning' : 'info';
		},
		shapeChange(index) {
			this.shape = index == 0 ? 'square' : index == 1 ? 'circle' : index == 2 ? 'circleLeft' : 'circleRight';
		},
		sizeChange(index) {
			this.size = index == 0 ? 'default' : 'mini';
		},
		closeableChange(index) {
			this.closeable = index == 0 ? true : false;
		},
		click(index) {
			this.$refs.uToast.show({
				title: `第${index + 1}个标签被点击`,
				type: 'success'
			});
		},
		close(index) {
			this.$refs.uToast.show({
				title: `关闭图标被点击`,
				type: 'success'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.u-demo {
}
</style>
