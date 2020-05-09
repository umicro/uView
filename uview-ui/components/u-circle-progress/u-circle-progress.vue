<template>
	<view class="u-circle-progress" :style="{
		width: widthPx + 'px',
		height: widthPx + 'px',
		backgroundColor: bgColor
	}">
		<canvas class="u-canvas-bg" :canvas-id="elBgId" :style="{
		width: widthPx + 'px',
		height: widthPx + 'px'
	}"></canvas>
		<canvas class="u-canvas" :canvas-id="elId" :style="{
		width: widthPx + 'px',
		height: widthPx + 'px'
	}"></canvas>
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * circleProgress 环形进度条
	 * @description 展示操作或任务的当前进度，比如上传文件，是一个圆形的进度条。注意：此组件的percent值只能动态增加，不能动态减少。
	 * @tutorial https://www.uviewui.com/components/circleProgress.html
	 * @property {String Number} percent 圆环进度百分比值，为数值类型，0-100
	 * @property {String} inactive-color 圆环的底色，默认为灰色(该值无法动态变更)（默认#ececec）
	 * @property {String} active-color 圆环激活部分的颜色(该值无法动态变更)（默认#19be6b）
	 * @property {String Number} width 整个圆环组件的宽度，高度默认等于宽度值，单位rpx（默认200）
	 * @property {String Number} border-width 圆环的边框宽度，单位rpx（默认14）
	 * @property {String Number} duration 整个圆环执行一圈的时间，单位ms（默认呢1500）
	 * @property {String} type 如设置，active-color值将会失效
	 * @property {String} bg-color 整个组件背景颜色，默认为白色
	 * @example <u-circle-progress active-color="#2979ff" :percent="80"></u-circle-progress>
	 */
	export default {
		name: "u-circle-progress",
		props: {
			// 圆环进度百分比值
			percent: {
				type: Number,
				default: 0,
				// 限制值在0到100之间
				validator: val => {
					return val >= 0 && val <= 100;
				}
			},
			// 底部圆环的颜色（灰色的圆环）
			inactiveColor: {
				type: String,
				default: "#ececec"
			},
			// 圆环激活部分的颜色
			activeColor: {
				type: String,
				default: '#19be6b'
			},
			// 圆环线条的宽度，单位rpx
			borderWidth: {
				type: [Number, String],
				default: 14
			},
			// 整个圆形的宽度，单位rpx
			width: {
				type: [Number, String],
				default: 200
			},
			// 整个圆环执行一圈的时间，单位ms
			duration: {
				type: [Number, String],
				default: 1500
			},
			// 主题类型
			type: {
				type: String,
				default: ''
			},
			// 整个圆环进度区域的背景色
			bgColor: {
				type: String,
				default: "#ffffff"
			}
		},
		data() {
			return {
				elBgId: this.$u.guid(),
				elId: this.$u.guid(),
				ctxBg: '', // 背景canvas实例
				ctx: '', // 前景(激活时候)canvas的实例
				count: 0, // 计数器
				timer: null, // 定时器
				times: 0, // 总共要执行的动画次数，setInterval的次数
				time: 0, // 执行整个动画的时间
				widthPx: uni.upx2px(this.width), // 转成px后的整个组件的背景宽度
				borderWidthPx: uni.upx2px(this.borderWidth), // 转成px后的圆环的宽度
				mode: 'more', // more-percent增加，less-percent减少
			}
		},
		watch: {
			percent: {
				immediate: true,
				handler(nVal, oVal = 0) {
					this.mode = nVal > oVal ? 'more' : 'less';
					this.times = Math.ceil(nVal * 3.6);
					this.time = Math.ceil(this.duration / 360 * this.times);
					setTimeout(() => {
						this.countInterval();
					}, 50)
				}
			}
		},
		computed: {
			// 有type主题时，优先起作用
			circleColor() {
				if (['success', 'error', 'info', 'primary', 'warning'].indexOf(this.type) >= 0) return this.$u.color[this.type];
				else return this.activeColor;
			}
		},
		mounted() {
			this.ctxBg = uni.createCanvasContext(this.elBgId, this);
			this.ctx = uni.createCanvasContext(this.elId, this);
			// 在h5端，必须要做一点延时才起作用，this.$nextTick()无效(HX2.4.7)
			setTimeout(() => {
				this.drawProgressBg();
			}, 50)
		},
		methods: {
			drawProgressBg() {
				this.ctxBg.setLineWidth(this.borderWidthPx); // 设置圆环宽度
				this.ctxBg.setStrokeStyle(this.inactiveColor); // 线条颜色
				this.ctxBg.setLineCap('round'); // 圆环端点的形状为圆形
				this.ctxBg.beginPath(); // 开始描绘路径
				// 设置一个原点(110,110)，半径为100的圆的路径到当前路径
				this.ctxBg.arc(this.widthPx / 2, this.widthPx / 2, this.widthPx / 2 - this.borderWidthPx / 2 - 1, 0, 2 * Math.PI,
					false);
				this.ctxBg.stroke(); // 对路径进行描绘
				this.ctxBg.draw();
			},
			drawCircle(step) {
				this.ctx.setLineWidth(this.borderWidthPx);
				this.ctx.setStrokeStyle(this.circleColor);
				this.ctx.setLineCap('round');
				this.ctx.beginPath();
				// 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
				if (this.mode == 'more') {
					this.ctx.arc(this.widthPx / 2, this.widthPx / 2, this.widthPx / 2 - this.borderWidthPx / 2 - 1, -Math.PI / 2, step *
						Math.PI - Math.PI / 2, false);
				} else {
					this.ctx.arc(this.widthPx / 2, this.widthPx / 2, this.widthPx / 2 - this.borderWidthPx / 2 - 1, -Math.PI / 2, Math
						.PI / 2 - step *
						Math.PI, false);
				}
				this.ctx.stroke();
				this.ctx.draw()
			},
			countInterval() {
				this.countTimer = setInterval(() => {
					if (this.count <= this.times) {
						// 全一个圆时候，值为2，这里求出每一份的值为2/360
						this.drawCircle(this.count * 2 / 360);
						this.count++;
					} else {
						clearInterval(this.countTimer);
					}
				}, Math.ceil(this.duration / 360)); // 总过渡时间分为360份，这里为每一份的时间
			},
		}
	}
</script>

<style lang="scss" scoped>
	.u-circle-progress {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.u-canvas-bg {
		position: absolute;
	}

	.u-canvas {
		position: absolute;
	}
</style>
