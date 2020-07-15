<template>
	<view class="u-alert-tips" v-if="show" :class="[
		!show ? 'u-close-alert-tips': '',
		type ? 'u-alert-tips--bg--' + type + '-light' : '',
		type ? 'u-alert-tips--border--' + type + '-disabled' : '',
	]" :style="{
		backgroundColor: bgColor,
		borderColor: borderColor
	}">
		<view class="u-icon-wrap">
			<u-icon v-if="showIcon" :name="$u.type2icon(type)" :size="description ? 40 : 32" class="u-icon" :color="type"></u-icon>
		</view>
		<view class="u-alert-content" @tap.stop="click">
			<view class="u-alert-title" :style="{fontWeight: description ? 500 : 'normal'}">
				{{title}}
			</view>
			<view v-if="description" class="u-alert-desc">
				{{description}}
			</view>
		</view>
		<view class="u-icon-wrap">
			<u-icon @click="close" v-if="closeAble && !closeText" hoverClass="u-type-error-hover-color" name="close" color="#c0c4cc"
			 :size="22" class="u-close-icon" :style="{
				top: description ? '18rpx' : '24rpx'
			}"></u-icon>
		</view>
		<text v-if="closeAble && closeText" class="u-close-text" :style="{
			top: description ? '18rpx' : '24rpx'
		}">{{closeText}}</text>
	</view>
</template>

<script>
	/**
	 * alertTips 警告提示
	 * @description 警告提示，展现需要关注的信息
	 * @tutorial https://uviewui.com/components/alertTips.html
	 * @property {String} title 显示的标题文字
	 * @property {String} description 辅助性文字，颜色比title浅一点，字号也小一点，可选
	 * @property {String} type 关闭按钮(默认为叉号icon图标)
	 * @property {String} close-able 用文字替代关闭图标，close-able为true时有效
	 * @property {Boolean} show-icon 是否显示左边的辅助图标
	 * @property {Boolean} show 显示或隐藏组件
	 * @event {Function} click 点击组件时触发
	 * @event {Function} close 点击关闭按钮时触发
	 */
	export default {
		name: 'u-alert-tips',
		props: {
			// 显示文字
			title: {
				type: String,
				default: ''
			},
			// 主题，success/warning/info/error
			type: {
				type: String,
				default: 'warning'
			},
			// 辅助性文字
			description: {
				type: String,
				default: ''
			},
			// 是否可关闭
			closeAble: {
				type: Boolean,
				default: false
			},
			// 关闭按钮自定义文本
			closeText: {
				type: String,
				default: ''
			},
			// 是否显示图标
			showIcon: {
				type: Boolean,
				default: false
			},
			// 文字颜色，如果定义了color值，icon会失效
			color: {
				type: String,
				default: ''
			},
			// 背景颜色
			bgColor: {
				type: String,
				default: ''
			},
			// 边框颜色
			borderColor: {
				type: String,
				default: ''
			},
			// 是否显示
			show: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
			}
		},
		methods: {
			// 点击内容
			click() {
				this.$emit('click');
			},
			// 点击关闭按钮
			close() {
				this.$emit('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-alert-tips {
		display: flex;
		align-items: center;
		padding: 16rpx 30rpx;
		border-radius: 8rpx;
		position: relative;
		transition: all 0.3s linear;
		border: 1px solid #fff;
		
		&--bg--primary-light {
			background-color: $u-type-primary-light;
		}
		
		&--bg--info-light {
			background-color: $u-type-info-light;
		}
		
		&--bg--success-light {
			background-color: $u-type-success-light;
		}
		
		&--bg--warning-light {
			background-color: $u-type-warning-light;
		}
		
		&--bg--error-light {
			background-color: $u-type-error-light;
		}
		
		&--border--primary-disabled {
			border-color: $u-type-primary-disabled;
		}
		
		&--border--success-disabled {
			border-color: $u-type-success-disabled;
		}
		
		&--border--error-disabled {
			border-color: $u-type-error-disabled;
		}
		
		&--border--warning-disabled {
			border-color: $u-type-warning-disabled;
		}
		
		&--border--info-disabled {
			border-color: $u-type-info-disabled;
		}
	}

	.u-close-alert-tips {
		opacity: 0;
		visibility: hidden;
	}

	@keyframes myfirst {
		from {
			height: 100%;
		}

		to {
			height: 0
		}
	}

	.u-icon {
		margin-right: 16rpx;
	}

	.u-alert-title {
		font-size: 28rpx;
		color: $u-main-color;
	}

	.u-alert-desc {
		font-size: 26rpx;
		text-align: left;
		color: $u-content-color;
	}

	.u-close-icon {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
	}

	.u-close-hover {
		color: red;
	}
	
	.u-close-text {
		font-size: 24rpx;
		color: $u-tips-color;
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		line-height: 1;
	}
</style>
