<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="" :style="{
					display: !top ? 'block' : 'none'
				}">
					<view class="rect-block-1">第一个节点</view>
					<view class="rect-block-2">第2个节点</view>
					<view class="u-no-demo-here">节点信息为</view>
					<view class="u-demo-result-line">{{ JSON.stringify(result) }}</view>
				</view>
				<view class="jump-to-top">
					<u-button @click="scrollToTop" :style="{
						display: top ? 'block' : 'none'
					}">
						点我自动滚动到顶部
					</u-button>
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">元素</view>
				<u-subsection :list="['第一个节点', '第2个节点']" @change="elChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">指定元素置顶</view>
				<u-subsection current="1" :list="['是', '否']" @change="topChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			result: '',
			scrollTop: 0,
			top: false
		};
	},
	onReady() {
		this.elChange(0);
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	methods: {
		async elChange(index) {
			let el = index == 0 ? '.rect-block-1' : '.rect-block-2';
			this.result = await this.$u.getRect(el);
		},
		scrollToTop() {
			this.$u.getRect('.jump-to-top').then(res => {
				uni.pageScrollTo({
					scrollTop: this.scrollTop + res.top,
					duration: 0
				});
			});
		},
		topChange(index) {
			this.top = index == 0 ? true : false;
			if(index == 1) {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.u-demo {
	min-height: 200vh;
}	

.rect-block-1 {
	background-color: #a0cfff;
	padding: 26rpx 60rpx;
	color: #ffffff;
	display: inline-flex;
	margin: auto;
}

.rect-block-2 {
	background-color: #fcbd71;
	padding: 12rpx 8rpx;
	width: 60%;
	color: #ffffff;
	margin: 30rpx auto;
}
</style>
