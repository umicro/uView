<template>
	<view class="u-td" :style="[tdStyle]">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * td td单元格
	 * @description 表格组件一般用于展示大量结构化数据的场景（搭配u-table使用）
	 * @tutorial https://www.uviewui.com/components/table.html#td-props
	 * @property {String Number} width 单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分tr的长度（默认auto）
	 * @example <u-td>二年级</u-td>
	 */
	export default {
		name: "u-td",
		props: {
			// 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比
			width: {
				type: [Number, String],
				default: 'auto'
			}
		},
		data() {
			return {
				tr: []
			};
		},
		inject: ['uTable', 'uTr'],
		provide() {
			return {
				uTd: this
			}
		},
		created() {

		},
		computed: {
			tdStyle() {
				let style = {};
				if (this.width != "auto") style.flex = `0 0 ${this.width}`;
				style.textAlign = this.uTable.align;
				style.padding = this.tr.length == 0 ? this.uTable.padding : 0;
				style.borderBottom = this.tr.length == 0 ? `solid 1px ${this.uTable.borderColor}` : 0;
				style.borderRight = this.tr.length == 0 ? `solid 1px ${this.uTable.borderColor}` : 0;
				style.fontSize = this.uTable.fontSize + 'rpx';
				style.color = this.uTable.color;
				return style;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.u-td {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		font-size: 28rpx;
		color: $u-content-color;
		align-self: stretch;
		box-sizing: border-box;
	}

	.u-col-1 {
		flex: 0 0 calc(100%/12);
	}

	.u-col-2 {
		flex: 0 0 calc(100%/12 * 2);
	}

	.u-col-3 {
		flex: 0 0 calc(100%/12 * 3);
	}

	.u-col-4 {
		flex: 0 0 calc(100%/12 * 4);
	}

	.u-col-5 {
		flex: 0 0 calc(100%/12 * 5);
	}

	.u-col-6 {
		flex: 0 0 calc(100%/12 * 6);
	}

	.u-col-7 {
		flex: 0 0 calc(100%/12 * 7);
	}

	.u-col-8 {
		flex: 0 0 calc(100%/12 * 8);
	}

	.u-col-9 {
		flex: 0 0 calc(100%/12 * 9);
	}

	.u-col-10 {
		flex: 0 0 calc(100%/12 * 10);
	}

	.u-col-11 {
		flex: 0 0 calc(100%/12 * 11);
	}

	.u-col-12 {
		flex: 0 0 calc(100%/12 * 12);
	}
</style>
