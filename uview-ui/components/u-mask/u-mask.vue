<template>
	<view class="u-mask" hover-stop-propagation :style="[maskStyle, zoomStyle]" @tap="click" @touchmove.stop.prevent :class="{
		'u-mask-zoom': zoom,
		'u-mask-show': show
	}">
		<slot />
	</view>
</template>

<script>
	/**
	 * mask 遮罩
	 * @description 创建一个遮罩层，用于强调特定的页面元素，并阻止用户对遮罩下层的内容进行操作，一般用于弹窗场景
	 * @tutorial https://www.uviewui.com/components/mask.html
	 * @property {Boolean} show 是否显示遮罩（默认false）
	 * @property {String Number} z-index z-index 层级（默认1070）
	 * @property {Object} custom-style 自定义样式对象，见上方说明
	 * @property {String Number} duration 动画时长，单位毫秒（默认300）
	 * @property {Boolean} zoom 是否使用scale对这招进行缩放（默认true）
	 * @property {Boolean} mask-click-able 遮罩是否可点击，为false时点击不会发送click事件（默认true）
	 * @event {Function} click mask-click-able为true时，点击遮罩发送此事件
	 * @example <u-mask :show="show" @click="show = false"></u-mask>
	 */
	export default {
		name: "u-mask",
		props: {
			// 是否显示遮罩
			show: {
				type: Boolean,
				default: false
			},
			// 层级z-index
			zIndex: {
				type: [Number, String],
				default: ''
			},
			// 用户自定义样式
			customStyle: {
				type: Object,
				default () {
					return {}
				}
			},
			// 遮罩的动画样式， 是否使用使用zoom进行scale进行缩放
			zoom: {
				type: Boolean,
				default: true
			},
			// 遮罩的过渡时间，单位为ms
			duration: {
				type: [Number, String],
				default: 300
			},
			// 是否可以通过点击遮罩进行关闭
			maskClickAble: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				zoomStyle: {
					transform: ''
				},
				scale: 'scale(1.2, 1.2)'
			}
		},
		watch: {
			show(n) {
				if(n && this.zoom) {
					// 当展示遮罩的时候，设置scale为1，达到缩小(原来为1.2)的效果
					this.zoomStyle.transform = 'scale(1, 1)';
				} else if(!n && this.zoom) {
					// 当隐藏遮罩的时候，设置scale为1.2，达到放大(因为显示遮罩时已重置为1)的效果
					this.zoomStyle.transform = this.scale;
				}
			}
		},
		computed: {
			maskStyle() {
				let style = {};
				style.backgroundColor = "rgba(0, 0, 0, 0.6)";
				if(this.show) style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.mask;
				else style.zIndex = -1;
				style.transition = `all ${this.duration / 1000}s ease-in-out`;
				// 判断用户传递的对象是否为空，不为空就进行合并
				if (Object.keys(this.customStyle).length) style = { ...style,
					...this.customStyle
				};
				return style;
			}
		},
		methods: {
			click() {
				if (!this.maskClickAble) return;
				this.$emit('click');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		transition: transform 0.3s;
	}

	.u-mask-show {
		opacity: 1;
	}
	
	.u-mask-zoom {
		transform: scale(1.2, 1.2);
	}
</style>
