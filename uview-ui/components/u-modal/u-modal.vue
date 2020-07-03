<template>
	<view>
		<u-popup :zoom="zoom"
			mode="center" :popup="false"
			:z-index="uZIndex" v-model="value"
			:length="width" :mask-close-able="maskCloseAble"
			:border-radius="borderRadius"
			@close="popupClose"
			:negative-top="negativeTop"
		>
			<view class="u-model">
				<view v-if="showTitle" class="u-model-title u-line-1" :style="[titleStyle]">{{ title }}</view>
				<view class="u-model-content">
					<view :style="[contentStyle]" v-if="$slots.default">
						<slot />
					</view>
					<view v-else class="u-model-content-message" :style="[contentStyle]">{{ content }}</view>
				</view>
				<view class="u-model-footer u-border-top" v-if="showCancelButton || showConfirmButton">
					<view
						v-if="showCancelButton"
						:hover-stay-time="100"
						hover-class="btn-hover"
						class="u-model-footer-button"
						type="default"
						:style="[cancelBtnStyle]"
						@tap="cancel"
					>
						{{cancelText}}
					</view>
					<view
						v-if="showConfirmButton"
						:hover-stay-time="100"
						:hover-class="asyncClose ? 'none' : 'btn-hover'"
						class="u-model-footer-button hairline-left"
						:style="[confirmBtnStyle]"
						@tap="confirm"
					>
						<u-loading mode="circle" :color="confirmColor" v-if="loading"></u-loading>
						<block v-else>
							{{confirmText}}
						</block>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
/**
 * modal 模态框
 * @description 弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作
 * @tutorial https://www.uviewui.com/components/modal.html
 * @property {Boolean} value 是否显示模态框
 * @property {String | Number} z-index 层级
 * @property {String} title 模态框标题（默认"提示"）
 * @property {String | Number} width 模态框宽度（默认600）
 * @property {String} content 模态框内容（默认"内容"）
 * @property {Boolean} show-title 是否显示标题（默认true）
 * @property {Boolean} async-close 是否异步关闭，只对确定按钮有效（默认false）
 * @property {Boolean} show-confirm-button 是否显示确认按钮（默认true）
 * @property {Stringr | Number} negative-top modal往上偏移的值
 * @property {Boolean} show-cancel-button 是否显示取消按钮（默认false）
 * @property {Boolean} mask-close-able 是否允许点击遮罩关闭modal（默认false）
 * @property {String} confirm-text 确认按钮的文字内容（默认"确认"）
 * @property {String} cancel-text 取消按钮的文字内容（默认"取消"）
 * @property {String} cancel-color 取消按钮的颜色（默认"#606266"）
 * @property {String} confirm-color 确认按钮的文字内容（默认"#2979ff"）
 * @property {String | Number} border-radius 模态框圆角值，单位rpx（默认16）
 * @property {Object} title-style 自定义标题样式，对象形式
 * @property {Object} content-style 自定义内容样式，对象形式
 * @property {Object} cancel-style 自定义取消按钮样式，对象形式
 * @property {Object} confirm-style 自定义确认按钮样式，对象形式
 * @property {Boolean} zoom 是否开启缩放模式（默认true）
 * @event {Function} confirm 确认按钮被点击
 * @event {Function} cancel 取消按钮被点击
 * @example <u-modal :src="title" :content="content"></u-modal>
 */
export default {
	name: 'u-modal',
	props: {
		// 是否显示Modal
		value: {
			type: Boolean,
			default: false
		},
		// 层级z-index
		zIndex: {
			type: [Number, String],
			default: ''
		},
		// 标题
		title: {
			type: [String],
			default: '提示'
		},
		// 弹窗宽度，可以是数值(rpx)，百分比，auto等
		width: {
			type: [Number, String],
			default: 600
		},
		// 弹窗内容
		content: {
			type: String,
			default: '内容'
		},
		// 是否显示标题
		showTitle: {
			type: Boolean,
			default: true
		},
		// 是否显示确认按钮
		showConfirmButton: {
			type: Boolean,
			default: true
		},
		// 是否显示取消按钮
		showCancelButton: {
			type: Boolean,
			default: false
		},
		// 确认文案
		confirmText: {
			type: String,
			default: '确认'
		},
		// 取消文案
		cancelText: {
			type: String,
			default: '取消'
		},
		// 确认按钮颜色
		confirmColor: {
			type: String,
			default: '#2979ff'
		},
		// 取消文字颜色
		cancelColor: {
			type: String,
			default: '#606266'
		},
		// 圆角值
		borderRadius: {
			type: [Number, String],
			default: 16
		},
		// 标题的样式
		titleStyle: {
			type: Object,
			default() {
				return {}
			}
		},
		// 内容的样式
		contentStyle: {
			type: Object,
			default() {
				return {}
			}
		},
		// 取消按钮的样式
		cancelStyle: {
			type: Object,
			default() {
				return {}
			}
		},
		// 确定按钮的样式
		confirmStyle: {
			type: Object,
			default() {
				return {}
			}
		},
		// 是否开启缩放效果
		zoom: {
			type: Boolean,
			default: true
		},
		// 是否异步关闭，只对确定按钮有效
		asyncClose: {
			type: Boolean,
			default: false
		},
		// 是否允许点击遮罩关闭modal
		maskCloseAble: {
			type: Boolean,
			default: false
		},
		// 给一个负的margin-top，往上偏移，避免和键盘重合的情况
		negativeTop: {
			type: [String, Number],
			default: 0
		}
	},
	data() {
		return {
			loading: false, // 确认按钮是否正在加载中
		}
	},
	computed: {
		cancelBtnStyle() {
			return Object.assign({color: this.cancelColor}, this.cancelStyle);
		},
		confirmBtnStyle() {
			return Object.assign({color: this.confirmColor}, this.confirmStyle);
		},
		uZIndex() {
			return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
		}
	},
	watch: {
		// 如果是异步关闭时，外部修改v-model的值为false时，重置内部的loading状态
		// 避免下次打开的时候，状态混乱
		value(n) {
			if(n === true) this.loading = false;
		}
	},
	methods: {
		confirm() {
			this.$emit('confirm');
			// 异步关闭
			if(this.asyncClose) {
				this.loading = true;
			} else {
				this.$emit('input', false);
			}
		},
		cancel() {
			this.$emit('cancel');
			this.$emit('input', false);
			// 目前popup弹窗关闭有一个延时操作，此处做一个延时
			// 避免确认按钮文字变成了"确定"字样，modal还没消失，造成视觉不好的效果
			setTimeout(() => {
				this.loading = false;
			}, 300);
		},
		// 点击遮罩关闭modal，设置v-model的值为false，否则无法第二次弹起modal
		popupClose() {
			this.$emit('input', false);
		},
		// 清除加载中的状态
		clearLoading() {
			this.loading = false;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../libs/css/style.components.scss";

.btn-hover {
	background-color: rgb(230, 230, 230);
}

.u-model {
	height: auto;
	overflow: hidden;
	font-size: 32rpx;
	background-color: #fff;

	&-title {
		padding-top: 48rpx;
		font-weight: 500;
		text-align: center;
		color: $u-main-color;
	}

	&-content {
		&-message {
			padding: 48rpx;
			font-size: 30rpx;
			text-align: center;
			color: $u-content-color;
		}
	}

	&-footer {
		display: flex;

		&-button {
			flex: 1;
			height: 100rpx;
			line-height: 100rpx;
			font-size: 32rpx;
			box-sizing: border-box;
			cursor: pointer;
			text-align: center;
			border-radius: 4rpx;
		}
	}
}
</style>
