<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast" />
				<u-loadmore :status="status" :loadText="loadText"
				:icon-type="iconType" :is-dot="isDot" @loadmore="loadmore"/>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式选择</view>
				<u-subsection :current="current" :list="['加载前', '加载中', '加载后', '没有更多']" @change="statusChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义提示语</view>
				<u-subsection current="1" :list="['是', '否']" @change="loadTextChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">加载中图标样式</view>
				<u-subsection :list="['circle', 'flower']" @change="styleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">没有更多时用点替代</view>
				<u-subsection current="1" :list="['是', '否']" @change="isDotChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'loadmore',
				iconType: 'circle',
				isDot: false,
				loadText: {
					loadmore: '点击或上拉加载更多',
					loading: '正在加载...',
					nomore: '没有更多了'
				},
				current: 0
			}
		},
		onReachBottom() {
			// 在此请求下一页
		},
		methods: {
			statusChange(index) {
				this.current = index;
				this.status = index == 0 ? 'loadmore' : index == 1 ? 'loading' : index == 2 ? 'loadmore' : 'nomore';
			},
			loadTextChange(index) {
				if(index == 0) {
					this.loadText = {
						loadmore: '用力往上拉',
						loading: '正在加载，请喝杯茶...',
						nomore: '我也是有底线的'
					}
				} else {
					this.loadText = {
						loadmore: '点击或上拉加载更多',
						loading: '正在加载...',
						nomore: '没有更多了'
					}
				}
			},
			styleChange(index) {
				this.current = 1;
				this.statusChange(1);
				this.iconType = index == 0 ? 'circle' : 'flower';
			},
			isDotChange(index) {
				this.current = 3;
				this.statusChange(3);
				this.isDot = index == 0 ? true : false;
			},
			// 点击组件，触发加载更多事件(status为'loadmore'状态下才触发)
			loadmore() {
				this.$refs.uToast.show({
					title: '点击触发加载更多',
					type: 'success'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>