<template>
	<view class="">
		<view class="u-sticky-wrap" :class="[elClass]" :style="{
			height: fixed ? height + 'px' : 'auto',
			backgroundColor: bgColor
		}">
			<view class="u-sticky" :style="{
				position: fixed ? 'fixed' : 'static',
				top: stickyTop + 'px',
				left: left + 'px',
				width: width == 'auto' ? 'auto' : width + 'px',
				zIndex: uZIndex
			}">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * sticky 吸顶
	 * @description 该组件与CSS中position: sticky属性实现的效果一致，当组件达到预设的到顶部距离时， 就会固定在指定位置，组件位置大于预设的顶部距离时，会重新按照正常的布局排列。
	 * @tutorial https://www.uviewui.com/components/sticky.html
	 * @property {String Number} offset-top 吸顶时与顶部的距离，单位rpx（默认0）
	 * @property {String Number} index 自定义标识，用于区分是哪一个组件
	 * @property {Boolean} enable 是否开启吸顶功能（默认true）
	 * @property {String} bg-color 组件背景颜色（默认#ffffff）
	 * @property {String Number} z-index 吸顶时的z-index值（默认970）
	 * @property {String Number} h5-nav-height 导航栏高度，自定义导航栏时(无导航栏时需设置为0)，需要传入此值，单位px（默认44）
	 * @event {Function} fixed 组件吸顶时触发
	 * @example <u-sticky offset-top="200"><view>塞下秋来风景异，衡阳雁去无留意</view></u-sticky>
	 */
	export default {
		name: "u-sticky",
		props: {
			// 吸顶容器到顶部某个距离的时候，进行吸顶，在H5平台，NavigationBar为44px
			offsetTop: {
				type: [Number, String],
				default: 0
			},
			//列表中的索引值
			index: {
				type: [Number, String],
				default: ''
			},
			// 是否开启吸顶功能
			enable: {
				type: Boolean,
				default: true
			},
			// h5顶部导航栏的高度
			h5NavHeight: {
				type: [Number, String],
				default: 44
			},
			// 吸顶区域的背景颜色
			bgColor: {
				type: String,
				default: '#ffffff'
			},
			// z-index值
			zIndex: {
				type: [Number, String],
				default: ''
			}
		},
		data() {
			return {
				fixed: false,
				height: 'auto',
				stickyTop: 0,
				elClass: this.$u.guid(),
				left: 0,
				width: 'auto',
			};
		},
		watch: {
			offsetTop(val) {
				this.initObserver();
			},
			enable(val) {
				if (val == false) {
					this.fixed = false;
					this.disconnectObserver('contentObserver');
				} else {
					this.initObserver();
				}
			}
		},
		computed: {
			uZIndex() {
				return this.zIndex ? this.zIndex : this.$u.zIndex.sticky;
			}
		},
		mounted() {
			this.initObserver();
		},
		methods: {
			initObserver() {
				if (!this.enable) return;
				// #ifdef H5
				this.stickyTop = this.offsetTop != 0 ? uni.upx2px(this.offsetTop) + this.h5NavHeight : this.h5NavHeight;
				// #endif
				// #ifndef H5
				this.stickyTop = this.offsetTop != 0 ? uni.upx2px(this.offsetTop) : 0;
				// #endif

				this.disconnectObserver('contentObserver');
				this.$uGetRect('.' + this.elClass).then((res) => {
					this.height = res.height;
					this.left = res.left;
					this.width = res.width;
					this.$nextTick(() => {
						this.observeContent();
					});
				});
			},
			observeContent() {
				this.disconnectObserver('contentObserver');
				const contentObserver = this.createIntersectionObserver({
					thresholds: [0.95, 0.98, 1]
				});
				contentObserver.relativeToViewport({
					top: -this.stickyTop
				});
				contentObserver.observe('.' + this.elClass, res => {
					if (!this.enable) return;
					this.setFixed(res.boundingClientRect.top);
				});
				this.contentObserver = contentObserver;
			},
			setFixed(top) {
				const fixed = top < this.stickyTop;
				this.fixed = fixed;
				if (fixed) this.$emit('fixed', this.index);
			},
			disconnectObserver(observerName) {
				const observer = this[observerName];
				observer && observer.disconnect();
			},
		}
	};
</script>

<style scoped lang="scss">
	.u-sticky {
		z-index: 9999999999;
	}
</style>
