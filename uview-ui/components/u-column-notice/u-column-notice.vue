<template>
	<view
		class="u-notice-bar"
		:style="{
			background: computeBgColor,
			padding: padding
		}"
	>
		<view class="u-icon-wrap">
			<u-icon class="u-left-icon" v-if="volumeIcon" name="volume-fill" :size="volumeSize" :color="computeColor"></u-icon>
		</view>
		<swiper :disable-touch="disableTouch" @change="change" :autoplay="autoplay && playState == 'play'" :vertical="vertical" circular :interval="duration" class="u-swiper">
			<swiper-item v-for="(item, index) in list" :key="index" class="u-swiper-item">
				<view
					class="u-news-item u-line-1"
					:style="{
						color: computeColor,
						fontSize: fontSize + 'rpx'
					}"
					@tap="click(index)"
				>
					{{ item }}
				</view>
			</swiper-item>
		</swiper>
		<view class="u-icon-wrap">
			<u-icon @click="getMore" class="u-right-icon" v-if="moreIcon" name="arrow-right" :size="26" :color="computeColor"></u-icon>
			<u-icon @click="close" class="u-right-icon" v-if="closeIcon" name="close" :size="24" :color="computeColor"></u-icon>
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
		// 显示的主题，success|error|primary|info|warning
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
		// 滚动方向，row-水平滚动，column-垂直滚动
		direction: {
			type: String,
			default: 'row'
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
		// 滚动一个周期的时间长，单位ms
		duration: {
			type: [Number, String],
			default: 2000
		},
		// 音量喇叭的大小
		volumeSize: {
			type: [Number, String],
			default: 34
		},
		// 水平滚动时的滚动速度，即每秒滚动多少rpx，这有利于控制文字无论多少时，都能有一个恒定的速度
		speed: {
			type: Number,
			default: 160
		},
		// 水平滚动时，是否采用衔接形式滚动
		isCircular: {
			type: Boolean,
			default: true
		},
		// 滚动方向，horizontal-水平滚动，vertical-垂直滚动
		mode: {
			type: String,
			default: 'horizontal'
		},
		// 播放状态，play-播放，paused-暂停
		playState: {
			type: String,
			default: 'play'
		},
		// 是否禁止用手滑动切换
		// 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序
		disableTouch: {
			type: Boolean,
			default: true
		},
		// 通知的边距
		padding: {
			type: [Number, String],
			default: '18rpx 24rpx'
		}
	},
	computed: {
		// 计算字体颜色，如果没有自定义的，就用uview主题颜色
		computeColor() {
			if (this.color) return this.color;
			else if(this.type == 'none') return this.$u.color['contentColor'];
			else return this.$u.color[this.type];
		},
		// 垂直或者水平滚动
		vertical() {
			if(this.mode == 'horizontal') return false;
			else return true;
		},
		// 计算背景颜色
		computeBgColor() {
			if (this.bgColor) return this.bgColor;
			else if(this.type == 'none') return 'transparent';
			else return this.$u.color[this.type + 'Light'];
		}
	},
	data() {
		return {
			// animation: false
		};
	},
	methods: {
		// 点击通告栏
		click(index) {
			this.$emit('click', index);
		},
		// 点击关闭按钮
		close() {
			this.$emit('close');
		},
		// 点击更多箭头按钮
		getMore() {
			this.$emit('getMore');
		},
		change(e) {
			let index = e.detail.current;
			if(index == this.list.length - 1) {
				this.$emit('end');
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.u-notice-bar {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;
	padding: 18rpx 24rpx;
	overflow: hidden;
}

.u-swiper {
	font-size: 26rpx;
	height: 32rpx;
	display: flex;
	align-items: center;
	flex: 1;
	margin-left: 12rpx;
}

.u-swiper-item {
	display: flex;
	align-items: center;
	overflow: hidden;
}

.u-news-item {
	overflow: hidden;
}

.u-right-icon {
	margin-left: 12rpx;
	display: inline-flex;
	align-items: center;
}

.u-left-icon {
	display: inline-flex;
	align-items: center;
}
</style>
