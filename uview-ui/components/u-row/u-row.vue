<template>
	<view class="u-row" :style="{
		marginLeft: `-${gutter/2 + 'rpx'}`,
		marginRight: `-${gutter/2 + 'rpx'}`,
		alignItems: uAlignItem,
		justifyContent: uJustify
	}">
		<slot />
	</view>
</template>

<script>
	/**
	 * row 行布局
	 * @description 通过基础的 12 分栏，迅速简便地创建布局。
	 * @tutorial https://www.uviewui.com/components/layout.html#row-props
	 * @property {String Number} gutter 栅格间隔，左右各为此值的一半，单位rpx（默认0）
	 * @property {String} justify 水平排列方式(微信小程序暂不支持)默认（start(或flex-start)）
	 * @property {String} align 垂直排列方式（默认center）
	 * @example <u-row gutter="16"></u-row>
	 */
	export default {
		name: "u-row",
		props: {
			// 给col添加间距，左右边距各占一半
			gutter: {
				type: [String, Number],
				default: 20
			},
			// 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
			justify: {
				type: String,
				default: 'start'
			},
			// 垂直对齐方式，可选值为top、center、bottom
			align: {
				type: String,
				default: 'center'
			}
		},
		provide() {
			return {
				gutter: this.gutter
			}
		},
		computed: {
			uJustify() {
				if (this.justify == 'end' || this.justify == 'start') return 'flex-' + this.justify;
				else if (this.justify == 'around' || this.justify == 'between') return 'space-' + this.justify;
				else return this.justify;
			},
			uAlignItem() {
				if (this.align == 'top') return 'flex-start';
				if (this.align == 'bottom') return 'flex-end';
				else return this.align;
			}
		}
	}
</script>

<style lang="scss">
	.u-row {
		// 由于微信小程序编译后奇怪的页面结构，只能使用float布局实现，flex无法实现
		/* #ifndef MP-WEIXIN */
		display: flex;
		/* #endif */
	}

	.u-row:after {
		/* #ifdef MP-WEIXIN */
		display: table;
		clear: both;
		content: "";
		/* #endif */
	}
</style>
