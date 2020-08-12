<template>
	<view class="u-grid-item" :hover-class="hoverClass"
	 :hover-stay-time="200" @tap="click" :style="{
			background: bgColor,
			width: width,
		}">
		<view class="u-grid-item-box" :class="[showBorder ? 'u-border-right u-border-bottom' : '']">
			<slot />
		</view>
	</view>
</template>

<script>
	/**
	 * gridItem 提示
	 * @description 宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件(badge)，或者图标等，也可以扩展为左右滑动的轮播形式。搭配u-grid使用
	 * @tutorial https://www.uviewui.com/components/grid.html
	 * @property {String} bg-color 宫格的背景颜色（默认#ffffff）
	 * @property {String Number} index 点击宫格时，返回的值
	 * @event {Function} click 点击宫格触发
	 * @example <u-grid-item></u-grid-item>
	 */
	export default {
		name: "u-grid-item",
		props: {
			// 背景颜色
			bgColor: {
				type: String,
				default: '#ffffff'
			},
			// 点击时返回的index
			index: {
				type: [Number, String],
				default: ''
			},
		},
		// 父组件通过provide传递过来的整个this
		inject: ['uGrid'],
		data() {
			return {
				hoverClass: '', // 按下去的时候，是否显示背景灰色
			};
		},
		created() {
			this.hoverClass = this.uGrid.hoverClass;
		},
		computed: {
			// 小于2，显示2列；大于12，显示12列
			colNum() {
				return this.col < 2 ? 2 : this.col > 12 ? 12 : this.col;
			},
			// 每个grid-item的宽度
			width() {
				return 100 / Number(this.uGrid.col) + '%';
			},
			// 是否显示边框
			// 为了迎合演示的需要，从created生命周期移到此，以为演示中可能需要动态修改有无边框
			showBorder() {
				return this.uGrid.border;
			}
		},
		methods: {
			click() {
				this.$emit('click', this.index);
				this.uGrid.click(this.index);
			}
		},
	};
</script>

<style scoped lang="scss">
	@import "../../libs/css/style.components.scss";
	
	.u-grid-item {
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex-direction: column;
		
		/* #ifdef MP */
		position: relative;
		float: left;
		/* #endif */
	}

	.u-grid-item-hover {
		background: #f7f7f7 !important;
	}

	.u-grid-marker-box {
		position: absolute;
		display: inline-block;
		line-height: 0;
	}

	.u-grid-marker-wrap {
		position: absolute;
	}

	.u-grid-item-box {
		padding: 30rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex: 1;
		width: 100%;
		height: 100%;
	}
</style>
