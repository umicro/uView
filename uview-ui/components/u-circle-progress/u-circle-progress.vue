<template>
	<view
		class="u-circle-progress"
		:style="{
			width: widthPx + 'px',
			height: widthPx + 'px',
			backgroundColor: bgColor
		}"
	>
		<canvas
			class="u-canvas-bg"
			:canvas-id="elBgId"
			:style="{
				width: widthPx + 'px',
				height: widthPx + 'px'
			}"
		></canvas>
		<canvas
			class="u-canvas"
			:canvas-id="elId"
			:style="{
				width: widthPx + 'px',
				height: widthPx + 'px'
			}"
		></canvas>
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
	name: 'u-circle-progress',
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
			default: '#ececec'
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
			default: '#ffffff'
		}
	},
	data() {
		return {
			// #ifdef MP-WEIXIN
			elBgId: 'uCircleProgressBgId', // 微信小程序中不能使用this.$u.guid()形式动态生成id值，否则会报错
			elId: 'uCircleProgressElId',
			// #endif
			// #ifndef MP-WEIXIN
			elBgId: this.$u.guid(), // 非微信端的时候，需用动态的id，否则一个页面多个圆形进度条组件数据会混乱
			elId: this.$u.guid(),
			// #endif
			widthPx: uni.upx2px(this.width), // 转成px后的整个组件的背景宽度
			borderWidthPx: uni.upx2px(this.borderWidth), // 转成px后的圆环的宽度
			startAngle: -Math.PI / 2, // canvas画圆的起始角度，默认为3点钟方向，定位到12点钟方向
			progressContext: null, // 活动圆的canvas上下文
			newPercent: 0, // 当动态修改进度值的时候，保存进度值的变化前后值，用于比较用
			oldPercent: 0 // 当动态修改进度值的时候，保存进度值的变化前后值，用于比较用
		};
	},
	watch: {
		percent(nVal, oVal = 0) {
			if (nVal > 100) nVal = 100;
			if (nVal < 0) oVal = 0;
			// 此值其实等于this.percent，命名一个新
			this.newPercent = nVal;
			this.oldPercent = oVal;
			setTimeout(() => {
				// 无论是百分比值增加还是减少，需要操作还是原来的旧的百分比值
				// 将此值减少或者新增到新的百分比值
				this.drawCircleByProgress(oVal);
			}, 50);
		}
	},
	created() {
		// 赋值，用于加载后第一个画圆使用
		this.newPercent = this.percent;
		this.oldPercent = 0;
	},
	computed: {
		// 有type主题时，优先起作用
		circleColor() {
			if (['success', 'error', 'info', 'primary', 'warning'].indexOf(this.type) >= 0) return this.$u.color[this.type];
			else return this.activeColor;
		}
	},
	mounted() {
		// 在h5端，必须要做一点延时才起作用，this.$nextTick()无效(HX2.4.7)
		setTimeout(() => {
			this.drawProgressBg();
			this.drawCircleByProgress(this.oldPercent);
		}, 50);
	},
	methods: {
		drawProgressBg() {
			let ctx = uni.createCanvasContext(this.elBgId, this);
			ctx.setLineWidth(this.borderWidthPx); // 设置圆环宽度
			ctx.setStrokeStyle(this.inactiveColor); // 线条颜色
			ctx.beginPath(); // 开始描绘路径
			// 设置一个原点(110,110)，半径为100的圆的路径到当前路径
			let radius = this.widthPx / 2;
			ctx.arc(radius, radius, radius - this.borderWidthPx, 0, 2 * Math.PI, false);
			ctx.stroke(); // 对路径进行描绘
			ctx.draw();
		},
		drawCircleByProgress(progress) {
			// 第一次操作进度环时将上下文保存到了this.data中，直接使用即可
			let ctx = this.progressContext;
			if (!ctx) {
				ctx = uni.createCanvasContext(this.elId, this);
				this.progressContext = ctx;
			}
			// 表示进度的两端为圆形
			ctx.setLineCap('round');
			// 设置线条的宽度和颜色
			ctx.setLineWidth(this.borderWidthPx);
			ctx.setStrokeStyle(this.circleColor);
			// 将总过渡时间除以100，得出每修改百分之一进度所需的时间
			let time = Math.floor(this.duration / 100);
			// 结束角的计算依据为：将2π分为100份，乘以当前的进度值，得出终止点的弧度值，加起始角，为整个圆从默认的
			// 3点钟方向开始画图，转为更好理解的12点钟方向开始作图，这需要起始角和终止角同时加上this.startAngle值
			let endAngle = ((2 * Math.PI) / 100) * progress + this.startAngle;
			ctx.beginPath();
			// 半径为整个canvas宽度的一半
			let radius = this.widthPx / 2;
			ctx.arc(radius, radius, radius - this.borderWidthPx, this.startAngle, endAngle, false);
			ctx.stroke();
			ctx.draw();
			// 如果变更后新值大于旧值，意味着增大了百分比
			if (this.newPercent > this.oldPercent) {
				// 每次递增百分之一
				progress++;
				// 如果新增后的值，大于需要设置的值百分比值，停止继续增加
				if (progress > this.newPercent) return;
			} else {
				// 同理于上面
				progress--;
				if (progress < this.newPercent) return;
			}
			setTimeout(() => {
				// 定时器，每次操作间隔为time值，为了让进度条有动画效果
				this.drawCircleByProgress(progress);
			}, time);
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../libs/css/style.components.scss";
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
