<template>
	<view v-if="loading" :style="{
		width: windowWinth + 'px', 
		height: windowHeight + 'px', 
		backgroundColor: bgColor, 
		position: 'absolute', 
		left: left + 'px', 
		top: top + 'px', 
		zIndex: 9998, 
		overflow: 'hidden'
	}"
	 @touchmove.stop.prevent>
		<view v-for="(item, index) in RectNodes" :key="$u.guid()" :class="[animation ? 'skeleton-fade' : '']" :style="{
			width: item.width + 'px', 
			height: item.height + 'px', 
			backgroundColor: elColor, 
			position: 'absolute', 
			left: (item.left - left) + 'px', 
			top: (item.top - top) + 'px'
		}"></view>
		<view v-for="(item, index) in circleNodes" :key="$u.guid()" :class="animation ? 'skeleton-fade' : ''" :style="{
			width: item.width + 'px', 
			height: item.height + 'px', 
			backgroundColor: elColor, 
			borderRadius: item.width/2 + 'px', 
			position: 'absolute', 
			left: (item.left - left) + 'px',
			top: (item.top - top) + 'px'
		}"></view>
		<view v-for="(item, index) in filletNodes" :key="$u.guid()" :class="animation ? 'skeleton-fade' : ''" :style="{
			width: item.width + 'px', 
			height: item.height + 'px', 
			backgroundColor: elColor, 
			borderRadius: borderRadius + 'rpx', 
			position: 'absolute', 
			left: (item.left - left) + 'px',
			top: (item.top - top) + 'px'
		}"></view>
	</view>
</template>

<script>
	/**
	 * skeleton 骨架屏
	 * @description 骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。
	 * @tutorial https://www.uviewui.com/components/skeleton.html
	 * @property {String} el-color 骨架块状元素的背景颜色（默认#e5e5e5）
	 * @property {String} bg-color 骨架组件背景颜色（默认#ffffff）
	 * @property {Boolean} animation 骨架块是否显示动画效果（默认false）
	 * @property {String Number} border-radius u-skeleton-fillet类名元素，对应的骨架块的圆角大小，单位rpx（默认10）
	 * @property {Boolean} loading 是否显示骨架组件，请求完成后，将此值设置为false（默认true）
	 * @example <u-skeleton :loading="true" :animation="true"></u-skeleton>
	 */
	export default {
		name: "u-skeleton",
		props: {
			// 需要渲染的元素背景颜色，十六进制或者rgb等都可以
			elColor: {
				type: String,
				default: '#e5e5e5'
			},
			// 整个骨架屏页面的背景颜色
			bgColor: {
				type: String,
				default: '#ffffff'
			},
			// 是否显示加载动画
			animation: {
				type: Boolean,
				default: false
			},
			// 圆角值，只对类名为u-skeleton-fillet的元素生效，为数值，不带单位
			borderRadius: {
				type: [String, Number],
				default: "10"
			},
			// 是否显示骨架，true-显示，false-隐藏
			loading: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				windowWinth: 750, // 骨架屏宽度
				windowHeight: 1500, // 骨架屏高度
				filletNodes: [], // 圆角元素
				circleNodes: [], // 圆形元素
				RectNodes: [], // 矩形元素
				top: 0,
				left: 0,
			}
		},
		methods: {
			// 查询各节点的信息
			selecterQueryInfo() {
				// 获取整个父组件容器的高度，当做骨架屏的高度
				uni.createSelectorQuery().selectAll('.u-skeleton').boundingClientRect().exec((res) => {
					this.windowHeight = res[0][0].height;
					this.windowWinth = res[0][0].width;
					this.top = res[0][0].bottom - res[0][0].height;
					this.left = res[0][0].left;
				});
				// 矩形骨架元素
				this.getRectEls();
				// 圆形骨架元素
				this.getCircleEls();
				// 圆角骨架元素
				this.getFilletEls();
			},
			// 矩形元素列表
			getRectEls() {
				uni.createSelectorQuery().selectAll('.u-skeleton-rect').boundingClientRect().exec((res) => {
					this.RectNodes = res[0];
				});
			},
			// 圆角元素列表
			getFilletEls() {
				uni.createSelectorQuery().selectAll('.u-skeleton-fillet').boundingClientRect().exec((res) => {
					this.filletNodes = res[0];
				});
			},
			// 圆形元素列表
			getCircleEls() {
				uni.createSelectorQuery().selectAll('.u-skeleton-circle').boundingClientRect().exec((res) => {
					this.circleNodes = res[0];
				});
			}
		},
		// 组件被挂载
		mounted() {
			// 获取系统信息
			let systemInfo = uni.getSystemInfoSync();
			this.windowHeight = systemInfo.windowHeight;
			this.windowWinth = systemInfo.windowWidth;
			this.selecterQueryInfo();
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.skeleton-fade {
		width: 100%;
		height: 100%;
		background: rgb(194, 207, 214);
		animation-duration: 1.5s;
		animation-name: blink;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0.4;
		}

		100% {
			opacity: 1;
		}
	}
</style>
