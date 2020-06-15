<template>
	<view class="u-section">
		<view class="u-section-title" :style="{
			fontWeight: bold ? 'bold' : 'normal',
			color: color,
			fontSize: fontSize + 'rpx',
			paddingLeft: showLine ? '10rpx' : 0
		}" :class="{
			'u-section--line': showLine
		}">
			{{title}}
		</view>
		<view class="u-right-info" v-if="right" :style="{
			color: subColor
		}" @tap="rightClick">
			{{subTitle}}
			<view class="u-icon-arrow">
				<u-icon name="arrow-right" size="24" :color="subColor"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * section 查看更多
	 * @description 该组件一般用于分类信息有很多，但是限于篇幅只能列出一部分，让用户通过"查看更多"获得更多信息的场景，实际效果见演示。
	 * @tutorial https://www.uviewui.com/components/section.html
	 * @property {String} title 左边主标题
	 * @property {String} sub-title 右边副标题（默认更多）
	 * @property {Boolean} right 是否显示右边的内容（默认true）
	 * @property {Boolean} showLine 是否显示左边的竖条（默认true）
	 * @property {String Number} font-size 主标题的字体大小（默认28）
	 * @property {Boolean} bold 主标题是否加粗（默认true）
	 * @property {String} color 主标题颜色（默认#303133）
	 * @event {Function} click 组件右侧的内容被点击时触发，用于跳转"更多"
	 * @example <u-section title="今日热门" :right="false"></u-section>
	 */
	export default {
		name: "u-section",
		props: {
			// 标题信息
			title: {
				type: String,
				default: ''
			},
			// 右边副标题内容
			subTitle: {
				type: String,
				default: '更多'
			},
			// 是否显示右边的内容
			right: {
				type: Boolean,
				default: true
			},
			fontSize: {
				type: [Number, String],
				default: 28
			},
			// 主标题是否加粗
			bold: {
				type: Boolean,
				default: true
			},
			// 主标题的颜色
			color: {
				type: String,
				default: '#303133'
			},
			// 右边副标题的颜色
			subColor: {
				type: String,
				default: '#909399'
			},
			// 是否显示左边的竖条
			showLine: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			rightClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	
	.u-section-title {
		position: relative;
		font-size: 28rpx;
		line-height: 1;
	}
	
	.u-section--line:after {
		position: absolute;
		width: 4px;
		height: 100%;
		content: '';
		left: 0;
		border-radius: 10px;
		background-color: currentColor;
	}
	
	.u-right-info {
		color: $u-tips-color;
		font-size: 26rpx;
		display: flex;
		align-items: center;
	}
	
	.u-icon-arrow {
		margin-left: 6rpx;
	}
</style>
