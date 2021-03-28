<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-alert-tips @close="close" :closeAble="closeAble" :show="show" @click="click"
				:type="type" :title="title" :description="description" :showIcon="showIcon"></u-alert-tips>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">左侧图标</view>
				<u-subsection current="1" :list="['是', '否']" @change="showIconChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">关闭图标</view>
				<u-subsection current="1" :list="['显示', '隐藏']" @change="closeAbleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">主题</view>
				<u-subsection current="3" :list="['primary', 'success', 'error', 'warning', 'info']" @change="typeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">状态</view>
				<u-subsection :current="current" :list="['开启', '关闭']" @change="showChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '大漠孤烟直，长河落日圆',
				description: "月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。飞流直下三千尺，疑是银河落九天！",
				show: true,
				closeAble: false,
				showIcon: false,
				type: 'warning',
			}
		},
		computed: {
			current() {
				return this.show ? 0 : 1;
			}
		},
		methods: {
			showIconChange(index) {
				this.showIcon = index == 0 ? true : false;
			},
			showChange(index) {
				this.show = index == 0 ? true : false;
			},
			closeAbleChange(index) {
				this.closeAble = index == 0 ? true : false;
			},
			typeChange(index) {
				this.type = index == 0 ? 'primary' : index == 1 ? 'success' : index == 2 ? 'error' : index == 3 ? 'warning'  : 'info';
			},
			close() {
				this.show = false;
				this.$refs.uToast.show({
					type: 'warning',
					title: '点击关闭按钮'
				})
			},
			click() {
				this.$refs.uToast.show({
					type: 'warning',
					title: '点击内容'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.item {
		margin: 30rpx 0;
	}
</style>
