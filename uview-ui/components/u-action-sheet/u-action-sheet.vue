<template>
	<u-popup mode="bottom" :border-radius="borderRadius" :popup="false" v-model="value" :maskCloseAble="maskCloseAble"
	    length="auto" :safeAreaInsetBottom="safeAreaInsetBottom" @close="popupClose" :z-index="uZIndex">
		<view class="u-tips u-border-bottom" v-if="tips.text" :style="[tipsStyle]">
			{{tips.text}}
		</view>
		<block v-for="(item, index) in list" :key="index">
			<view 
				@touchmove.stop.prevent 
				@tap="itemClick(index)" 
				:style="[itemStyle(index)]" 
				class="u-action-sheet-item u-line-1" 
				:class="[index < list.length - 1 ? 'u-border-bottom' : '']"
				:hover-stay-time="150"
			>
				<text>{{item.text}}</text>
				<text class="u-action-sheet-item__subtext u-line-1" v-if="item.subText">{{item.subText}}</text>
			</view>
		</block>
		<view class="u-gab" v-if="cancelBtn">
		</view>
		<view @touchmove.stop.prevent class="u-actionsheet-cancel u-action-sheet-item" hover-class="u-hover-class"
		    :hover-stay-time="150" v-if="cancelBtn" @tap="close">{{cancelText}}</view>
	</u-popup>
</template>

<script>
	/**
	 * actionSheet 操作菜单
	 * @description 本组件用于从底部弹出一个操作菜单，供用户选择并返回结果。本组件功能类似于uni的uni.showActionSheetAPI，配置更加灵活，所有平台都表现一致。
	 * @tutorial https://www.uviewui.com/components/actionSheet.html
	 * @property {Array<Object>} list 按钮的文字数组，见官方文档示例
	 * @property {Object} tips 顶部的提示文字，见官方文档示例
	 * @property {String} cancel-text 取消按钮的提示文字
	 * @property {Boolean} cancel-btn 是否显示底部的取消按钮（默认true）
	 * @property {Number String} border-radius 弹出部分顶部左右的圆角值，单位rpx（默认0）
	 * @property {Boolean} mask-close-able 点击遮罩是否可以关闭（默认true）
	 * @property {Boolean} safe-area-inset-bottom 是否开启底部安全区适配（默认false）
	 * @property {Number String} z-index z-index值（默认1075）
	 * @property {String} cancel-text 取消按钮的提示文字
	 * @event {Function} click 点击ActionSheet列表项时触发
	 * @event {Function} close 点击取消按钮时触发
	 * @example <u-action-sheet :list="list" @click="click" v-model="show"></u-action-sheet>
	 */
	export default {
		name: "u-action-sheet",
		props: {
			// 点击遮罩是否可以关闭actionsheet
			maskCloseAble: {
				type: Boolean,
				default: true
			},
			// 按钮的文字数组，可以自定义颜色和字体大小，字体单位为rpx
			list: {
				type: Array,
				default () {
					// 如下
					// return [{
					// 	text: '确定',
					// 	color: '',
					// 	fontSize: ''
					// }]
					return [];
				}
			},
			// 顶部的提示文字
			tips: {
				type: Object,
				default () {
					return {
						text: '',
						color: '',
						fontSize: '26'
					}
				}
			},
			// 底部的取消按钮
			cancelBtn: {
				type: Boolean,
				default: true
			},
			// 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距
			safeAreaInsetBottom: {
				type: Boolean,
				default: false
			},
			// 通过双向绑定控制组件的弹出与收起
			value: {
				type: Boolean,
				default: false
			},
			// 弹出的顶部圆角值
			borderRadius: {
				type: [String, Number],
				default: 0
			},
			// 弹出的z-index值
			zIndex: {
				type: [String, Number],
				default: 0
			},
			// 取消按钮的文字提示
			cancelText: {
				type: String,
				default: '取消'
			}
		},
		computed: {
			// 顶部提示的样式
			tipsStyle() {
				let style = {};
				if (this.tips.color) style.color = this.tips.color;
				if (this.tips.fontSize) style.fontSize = this.tips.fontSize + 'rpx';
				return style;
			},
			// 操作项目的样式
			itemStyle() {
				return (index) => {
					let style = {};
					if (this.list[index].color) style.color = this.list[index].color;
					if (this.list[index].fontSize) style.fontSize = this.list[index].fontSize + 'rpx';
					// 选项被禁用的样式
					if (this.list[index].disabled) style.color = '#c0c4cc';
					return style;
				}
			},
			uZIndex() {
				// 如果用户有传递z-index值，优先使用
				return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
			}
		},
		methods: {
			// 点击取消按钮
			close() {
				// 发送input事件，并不会作用于父组件，而是要设置组件内部通过props传递的value参数
				// 这是一个vue发送事件的特殊用法
				this.popupClose();
				this.$emit('close');
			},
			// 弹窗关闭
			popupClose() {
				this.$emit('input', false);
			},
			// 点击某一个item
			itemClick(index) {
				// disabled的项禁止点击
				if(this.list[index].disabled) return;
				this.$emit('click', index);
				this.$emit('input', false);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";

	.u-tips {
		font-size: 26rpx;
		text-align: center;
		padding: 34rpx 0;
		line-height: 1;
		color: $u-tips-color;
	}

	.u-action-sheet-item {
		@include vue-flex;;
		line-height: 1;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		padding: 34rpx 0;
		flex-direction: column;
	}
	
	.u-action-sheet-item__subtext {
		font-size: 24rpx;
		color: $u-tips-color;
		margin-top: 20rpx;
	}

	.u-gab {
		height: 12rpx;
		background-color: rgb(234, 234, 236);
	}

	.u-actionsheet-cancel {
		color: $u-main-color;
	}
</style>
