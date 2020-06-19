<template>
	<u-popup class="" :mask="mask" :maskCloseAble="maskCloseAble" mode="bottom" :popup="false" v-model="value" length="auto"
	 :safeAreaInsetBottom="safeAreaInsetBottom" @close="popupClose">
		<slot />
		<view class="u-tooltip" v-if="tooltip">
			<view class="u-tooltip-item u-tooltip-cancel" hover-class="u-tooltip-cancel-hover" @tap="onCancel">
				{{cancelBtn ? '取消' : ''}}
			</view>
			<view v-if="showTips" class="u-tooltip-item u-tooltip-tips">
				{{tips ? tips : mode == 'number' ? '数字键盘' : mode == 'card' ? '身份证键盘' : '车牌号键盘'}}
			</view>
			<view v-if="confirmBtn" @tap="onConfirm" class="u-tooltip-item u-tooltips-submit" hover-class="u-tooltips-submit-hover">
				{{confirmBtn ? '完成' : ''}}
			</view>
		</view>
		<block v-if="mode == 'number' || mode == 'card'">
			<u-number-keyboard :random="random" @backspace="backspace" @change="change" :mode="mode" :dotEnabled="dotEnabled"></u-number-keyboard>
		</block>
		<block v-else>
			<u-car-keyboard :random="random" @backspace="backspace" @change="change"></u-car-keyboard>
		</block>
	</u-popup>
</template>

<script>
	/**
	 * keyboard 键盘
	 * @description 此为uViw自定义的键盘面板，内含了数字键盘，车牌号键，身份证号键盘3中模式，都有可以打乱按键顺序的选项。
	 * @tutorial https://www.uviewui.com/components/keyboard.html
	 * @property {String} mode 键盘类型，见官网基本使用的说明（默认number）
	 * @property {Boolean} dot-enabled 是否显示"."按键，只在mode=number时有效（默认true）
	 * @property {Boolean} tooltip 是否显示键盘顶部工具条（默认true）
	 * @property {String} tips 工具条中间的提示文字，见上方基本使用的说明，如不需要，请传""空字符
	 * @property {Boolean} cancel-btn 是否显示工具条左边的"取消"按钮（默认true）
	 * @property {Boolean} confirm-btn 是否显示工具条右边的"完成"按钮（默认true）
	 * @property {Boolean} mask 是否显示遮罩（默认true）
	 * @property {Number String} z-index 弹出键盘的z-index值（默认1075）
	 * @property {Boolean} random 是否打乱键盘按键的顺序（默认false）
	 * @property {Boolean} safe-area-inset-bottom 是否开启底部安全区适配（默认false）
	 * @property {Boolean} mask-close-able 是否允许点击遮罩收起键盘（默认true）
	 * @event {Function} change 按键被点击(不包含退格键被点击)
	 * @event {Function} cancel 键盘顶部工具条左边的"取消"按钮被点击
	 * @event {Function} confirm 键盘顶部工具条右边的"完成"按钮被点击
	 * @event {Function} backspace 键盘退格键被点击
	 * @example <u-keyboard mode="number" v-model="show"></u-keyboard> 
	 */
	export default {
		name: "u-keyboard",
		props: {
			// 键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘
			mode: {
				type: String,
				default: 'number'
			},
			// 是否显示键盘的"."符号
			dotEnabled: {
				type: Boolean,
				default: true
			},
			// 是否显示顶部工具条
			tooltip: {
				type: Boolean,
				default: true
			},
			// 是否显示工具条中间的提示
			showTips: {
				type: Boolean,
				default: true
			},
			// 工具条中间的提示文字
			tips: {
				type: String,
				default: ''
			},
			// 是否显示工具条左边的"取消"按钮
			cancelBtn: {
				type: Boolean,
				default: true
			},
			// 是否显示工具条右边的"完成"按钮
			confirmBtn: {
				type: Boolean,
				default: true
			},
			// 是否打乱键盘按键的顺序
			random: {
				type: Boolean,
				default: false
			},
			// 是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距
			safeAreaInsetBottom: {
				type: Boolean,
				default: false
			},
			// 是否允许通过点击遮罩关闭键盘
			maskCloseAble: {
				type: Boolean,
				default: true
			},
			// 通过双向绑定控制键盘的弹出与收起
			value: {
				type: Boolean,
				default: false
			},
			// 是否显示遮罩，某些时候数字键盘时，用户希望看到自己的数值，所以可能不想要遮罩
			mask: {
				type: Boolean,
				default: true
			},
			// z-index值
			zIndex: {
				type: [Number, String],
				default: ''
			}
		},
		data() {
			return {
				//show: false
			}
		},
		computed: {
			uZIndex() {
				return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
			}
		},
		methods: {
			change(e) {
				this.$emit('change', e);
			},
			// 键盘关闭
			popupClose() {
				// 通过发送input这个特殊的事件名，可以修改父组件传给props的value的变量，也即双向绑定
				this.$emit('input', false);
			},
			// 输入完成
			onConfirm() {
				this.popupClose();
				this.$emit('confirm');
			},
			// 取消输入
			onCancel() {
				this.popupClose();
				this.$emit('cancel');
			},
			// 退格键
			backspace() {
				this.$emit('backspace');
			},
			// 关闭键盘
			// close() {
			// 	this.show = false;
			// },
			// // 打开键盘
			// open() {
			// 	this.show = true;
			// }
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-keyboard {
		position: relative;
		z-index: 1003;
	}

	.u-tooltip {
		display: flex;
		justify-content: space-between;
	}

	.u-tooltip-item {
		color: #333333;
		flex: 0 0 33.333333%;
		text-align: center;
		padding: 20rpx 10rpx;
		font-size: 28rpx;
	}

	.u-tooltips-submit {
		text-align: right;
		flex-grow: 1;
		flex-wrap: 0;
		padding-right: 40rpx;
		color: $u-type-primary;
	}

	.u-tooltip-cancel {
		text-align: left;
		flex-grow: 1;
		flex-wrap: 0;
		padding-left: 40rpx;
		color: #888888;
	}

	.u-tooltips-submit-hover {
		color: $u-type-success;
	}

	.u-tooltip-cancel-hover {
		color: #333333;
	}
</style>
