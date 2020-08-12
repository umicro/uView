<template>
	<view
		v-if="show"
		class="u-notice-bar"
		:style="{
			background: computeBgColor,
			padding: padding
		}"
		:class="[
			type ? `u-type-${type}-light-bg` : ''
		]"
	>
		<view class="u-direction-row">
			<view class="u-icon-wrap">
				<u-icon class="u-left-icon" v-if="volumeIcon" name="volume-fill" :size="volumeSize" :color="computeColor"></u-icon>
			</view>
			<view class="u-notice-box" id="u-notice-box">
				<view
					class="u-notice-content"
					id="u-notice-content"
					:style="{
						animationDuration: animationDuration,
						animationPlayState: animationPlayState,
					}"
				>
					<text class="u-notice-text" @tap="click" :style="[textStyle]"
					:class="['u-type-' + type]">{{showText}}</text>
				</view>
			</view>
			<view class="u-icon-wrap">
				<u-icon @click="getMore" class="u-right-icon" v-if="moreIcon" name="arrow-right" :size="26" :color="computeColor"></u-icon>
				<u-icon @click="close" class="u-right-icon" v-if="closeIcon" name="close" :size="24" :color="computeColor"></u-icon>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		// 显示的内容，数组
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		// 显示的主题，success|error|primary|info|warning|none
		// none主题默认为透明背景，黑色(contentColor)字体
		type: {
			type: String,
			default: 'warning'
		},
		// 是否显示左侧的音量图标
		volumeIcon: {
			type: Boolean,
			default: true
		},
		// 是否显示右侧的右箭头图标
		moreIcon: {
			type: Boolean,
			default: false
		},
		// 是否显示右侧的关闭图标
		closeIcon: {
			type: Boolean,
			default: false
		},
		// 是否自动播放
		autoplay: {
			type: Boolean,
			default: true
		},
		// 文字颜色，各图标也会使用文字颜色
		color: {
			type: String,
			default: ''
		},
		// 背景颜色
		bgColor: {
			type: String,
			default: ''
		},
		// 是否显示
		show: {
			type: Boolean,
			default: true
		},
		// 字体大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 26
		},
		// 音量喇叭的大小
		volumeSize: {
			type: [Number, String],
			default: 34
		},
		// 水平滚动时的滚动速度，即每秒滚动多少rpx，这有利于控制文字无论多少时，都能有一个恒定的速度
		speed: {
			type: [Number, String],
			default: 160
		},
		// 播放状态，play-播放，paused-暂停
		playState: {
			type: String,
			default: 'play'
		},
		// 通知的边距
		padding: {
			type: [Number, String],
			default: '18rpx 24rpx'
		}
	},
	data() {
		return {
			textWidth: 0, // 滚动的文字宽度
			boxWidth: 0, // 供文字滚动的父盒子的宽度，和前者一起为了计算滚动速度
			animationDuration: '10s', // 动画执行时间
			animationPlayState: 'paused', // 动画的开始和结束执行
			showText: '' // 显示的文本
		};
	},
	watch: {
		list: {
			immediate: true,
			handler(val) {
				this.showText = val.join('，');
				this.$nextTick(() => {
					this.initSize();
				});
			}
		},
		playState(val) {
			if(val == 'play') this.animationPlayState = 'running';
			else this.animationPlayState = 'paused';
		},
		speed(val) {
			this.initSize();
		}
	},
	computed: {
		// 计算字体颜色，如果没有自定义的，就用uview主题颜色
		computeColor() {
			if (this.color) return this.color;
			// 如果是无主题，就默认使用content-color
			else if(this.type == 'none') return '#606266';
			else return this.type;
		},
		// 文字内容的样式
		textStyle() {
			let style = {};
			if (this.color) style.color = this.color;
			else if(this.type == 'none') style.color = '#606266';
			style.fontSize = this.fontSize + 'rpx';
			return style;
		},
		// 计算背景颜色
		computeBgColor() {
			if (this.bgColor) return this.bgColor;
			else if(this.type == 'none') return 'transparent';
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.initSize();
		});
	},
	methods: {
		initSize() {
			let query = [],
				boxWidth = 0,
				textWidth = 0;
			let textQuery = new Promise((resolve, reject) => {
				uni.createSelectorQuery()
					.in(this)
					.select(`#u-notice-content`)
					.boundingClientRect()
					.exec(ret => {
						this.textWidth = ret[0].width;
						resolve();
					});
			});
			query.push(textQuery);
			Promise.all(query).then(() => {
				// 根据t=s/v(时间=路程/速度)，这里为何不需要加上#u-notice-box的宽度，因为中设置了.u-notice-content样式中设置了padding-left: 100%
				// 恰巧计算出来的结果中已经包含了#u-notice-box的宽度
				this.animationDuration = `${this.textWidth / uni.upx2px(this.speed)}s`;
				// 这里必须这样开始动画，否则在APP上动画速度不会改变(HX版本2.4.6，IOS13)
				this.animationPlayState = 'paused';
				setTimeout(() => {
					if(this.playState == 'play' && this.autoplay) this.animationPlayState = 'running';
				}, 10);
			});
		},
		// 点击通告栏
		click(index) {
			this.$emit('click');
		},
		// 点击关闭按钮
		close() {
			this.$emit('close');
		},
		// 点击更多箭头按钮
		getMore() {
			this.$emit('getMore');
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../libs/css/style.components.scss";
	
.u-notice-bar {
	padding: 18rpx 24rpx;
	overflow: hidden;
}

.u-direction-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.u-left-icon {
	display: inline-flex;
	align-items: center;
}

.u-notice-box {
	flex: 1;
	display: flex;
	overflow: hidden;
	margin-left: 12rpx;
}

.u-right-icon {
	margin-left: 12rpx;
	display: inline-flex;
	align-items: center;
}

.u-notice-content {
	animation: u-loop-animation 10s linear infinite both;
	text-align: right;
	// 这一句很重要，为了能让滚动左右连接起来
	padding-left: 100%;
	display: flex;
	flex-wrap: nowrap;
}

.u-notice-text {
	font-size: 26rpx;
	word-break: keep-all;
	white-space: nowrap
}

@keyframes u-loop-animation {
	0% {
		transform: translate3d(0, 0, 0);
	}

	100% {
		transform: translate3d(-100%, 0, 0);
	}
}
</style>
