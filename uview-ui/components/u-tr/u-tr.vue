<template>
	<view class="u-tr">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * tr 表格行标签
	 * @description 表格组件一般用于展示大量结构化数据的场景（搭配<u-table>使用）
	 * @tutorial https://www.uviewui.com/components/table.html
	 * @example <u-tr></u-tr>
	 */
	export default {
		name: "u-tr",
		inject: ['uTable', 'uTd'],
		provide() {
			return {
				uTr: this,
			};
		},
		created() {
			if (this.uTd && this.uTd.tr) {
				this.uTd.tr.push(this);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-tr {
		display: flex;
	}
</style>
