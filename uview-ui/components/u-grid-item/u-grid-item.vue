<template>
	<view class="u-grid-item" :hover-class="parentData.hoverClass"
	 :hover-stay-time="200" @tap="click" :style="{
			background: bgColor,
			width: width,
		}">
		<view class="u-grid-item-box" :style="customStyle" :class="[parentData.border ? 'u-border-right u-border-bottom' : '']">
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
	 * @property {Object} custom-style 自定义样式，对象形式
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
			// 自定义样式，对象形式
			customStyle: {
				type: Object,
				default() {
					return {
						padding: '30rpx 0'
					}
				}
			}
		},
		data() {
			return {
				parentData: {
					hoverClass: '', // 按下去的时候，是否显示背景灰色
					col: 3, // 父组件划分的宫格数
					border: true, // 是否显示边框，根据父组件决定
				}
			};
		},
		created() {
			// 父组件的实例
			this.updateParentData();
			// this.parent在updateParentData()中定义
			this.parent.children.push(this);
		},
		computed: {
			// 每个grid-item的宽度
			width() {
				return 100 / Number(this.parentData.col) + '%';
			},
		},
		methods: {
			// 获取父组件的参数
			updateParentData() {
				// 此方法写在mixin中
				this.getParentData('u-grid');
			},
			click() {
				this.$emit('click', this.index);
				this.parent && this.parent.click(this.index);
			}
		}
	};
</script>

<style scoped lang="scss">
	@import "../../libs/css/style.components.scss";
	
	.u-grid-item {
		box-sizing: border-box;
		background: #fff;
		@include vue-flex;
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
		/* #ifndef APP-NVUE */
		display: inline-flex;		
		/* #endif */
		line-height: 0;
	}

	.u-grid-marker-wrap {
		position: absolute;
	}

	.u-grid-item-box {
		padding: 30rpx 0;
		@include vue-flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex: 1;
		width: 100%;
		height: 100%;
	}
</style>
