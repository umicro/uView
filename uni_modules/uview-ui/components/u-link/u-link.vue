<template>
	<text class="u-link" @tap.stop="openLink" :style="{
		color: color,
		fontSize: fontSize + 'rpx',
		borderBottom: underLine ? `1px solid ${lineColor ? lineColor : color}` : 'none',
		paddingBottom: underLine ? '0rpx' : '0'
	}">
		<slot></slot>
	</text>
</template>

<script>
	/**
	 * link 超链接
	 * @description 该组件为超链接组件，在不同平台有不同表现形式：在APP平台会通过plus环境打开内置浏览器，在小程序中把链接复制到粘贴板，同时提示信息，在H5中通过window.open打开链接。
	 * @tutorial https://www.uviewui.com/components/link.html
	 * @property {String} color 文字颜色（默认#606266）
	 * @property {String Number} font-size 字体大小，单位rpx（默认28）
	 * @property {Boolean} under-line 是否显示下划线（默认false）
	 * @property {String} href 跳转的链接，要带上http(s)
	 * @property {String} line-color 下划线颜色，默认同color参数颜色 
	 * @property {String} mp-tips 各个小程序平台把链接复制到粘贴板后的提示语（默认“链接已复制，请在浏览器打开”）
	 * @example <u-link href="http://www.uviewui.com">蜀道难，难于上青天</u-link>
	 */
	export default {
		name: "u-link",
		props: {
			// 文字颜色
			color: {
				type: String,
				default: '#2979ff'
			},
			// 字体大小，单位rpx
			fontSize: {
				type: [String, Number],
				default: 28
			},
			// 是否显示下划线
			underLine: {
				type: Boolean,
				default: false
			},
			// 要跳转的链接
			href: {
				type: String,
				default: ''
			},
			// 小程序中复制到粘贴板的提示语
			mpTips: {
				type: String,
				default: '链接已复制，请在浏览器打开'
			},
			// 下划线颜色
			lineColor: {
				type: String,
				default: ''
			}
		},
		methods: {
			openLink() {
				// #ifdef APP-PLUS
				plus.runtime.openURL(this.href)
				// #endif
				// #ifdef H5
				window.open(this.href)
				// #endif
				// #ifdef MP
				uni.setClipboardData({
					data: this.href,
					success: () => {
						uni.hideToast();
						this.$nextTick(() => {
							this.$u.toast(this.mpTips);
						})
					}
				});
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-link {
		line-height: 1;
	}
</style>
