<template>
	<view :id="elId" class="u-grid" :class="{'u-border-top u-border-left': border}" :style="[gridStyle]"><slot /></view>
</template>

<script>
/**
 * grid 宫格布局
 * @description 宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件(badge)，或者图标等，也可以扩展为左右滑动的轮播形式。
 * @tutorial https://www.uviewui.com/components/grid.html
 * @property {String Number} col 宫格的列数（默认3）
 * @property {Boolean} border 是否显示宫格的边框（默认true）
 * @property {Boolean} hover-class 点击宫格的时候，是否显示按下的灰色背景（默认false）
 * @event {Function} click 点击宫格触发
 * @example <u-grid :col="3" @click="click"></u-grid>
 */
export default {
	name: 'u-grid',
	props: {
		// 分成几列
		col: {
			type: [Number, String],
			default: 3
		},
		// 是否显示边框
		border: {
			type: Boolean,
			default: true
		},
		// 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右
		align: {
			type: String,
			default: 'left'
		},
		// 宫格按压时的样式类，"none"为无效果
		hoverClass: {
			type: String,
			default: 'u-hover-class'
		}
	},
	data() {
		return {
			index: 0,
			elId: this.$u.guid(),
			// grid组件宽度，这里不用flex布局，是因为在微信小程序上，组件体现形式为
			// 页面上带上了组件结构元素，导致状态错乱
			width: 0, 
		}
	},
	provide() {
		return {
			uGrid: this
		}
	},
	mounted() {
		this.getGridRect();
	},
	computed: {
		// 宫格对齐方式
		gridStyle() {
			let style = {};
			switch(this.align) {
				case 'left':
					style.justifyContent = 'flex-start';
					break;
				case 'center':
					style.justifyContent = 'center';
					break;
				case 'right':
					style.justifyContent = 'flex-end';
					break;
				default: style.justifyContent = 'flex-start';
			};
			return style;
		}
	},
	methods: {
		click(index) {
			this.$emit('click', index);
		},
		async getGridRect() {
			let rect = await this.$uGetRect(`#${this.elId}`);
			// 小米和华为手机可能会导致宽度计算问题(特定机型)，宫格布局变乱，故在这里减少两个像素
			this.width = rect.width - 2;
		}
	}
	
};
</script>

<style scoped lang="scss">
.u-grid {
	display: flex;
	width: 100%;
	align-items: center;
	flex-wrap: wrap;
}
</style>
