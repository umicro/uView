<template>
	<view class="u-notice-bar-wrap" v-if="isShow" :style="{
		borderRadius: borderRadius + 'rpx',
	}">
		<block v-if="mode == 'horizontal' && isCircular">
			<u-row-notice
				:type="type"
				:color="color"
				:bgColor="bgColor"
				:list="list"
				:volumeIcon="volumeIcon"
				:moreIcon="moreIcon"
				:volumeSize="volumeSize"
				:closeIcon="closeIcon"
				:mode="mode"
				:fontSize="fontSize"
				:speed="speed"
				:playState="playState"
				:padding="padding"
				@getMore="getMore"
				@close="close"
				@click="click"
			></u-row-notice>
		</block>
		<block v-if="mode == 'vertical' || (mode == 'horizontal' && !isCircular)">
			<u-column-notice
				:type="type"
				:color="color"
				:bgColor="bgColor"
				:list="list"
				:volumeIcon="volumeIcon"
				:moreIcon="moreIcon"
				:closeIcon="closeIcon"
				:mode="mode"
				:volumeSize="volumeSize"
				:disable-touch="disableTouch"
				:fontSize="fontSize"
				:duration="duration"
				:playState="playState"
				:padding="padding"
				@getMore="getMore"
				@close="close"
				@click="click"
				@end="end"
			></u-column-notice>
		</block>
	</view>
</template>
<script>
/**
 * noticeBar 滚动通知
 * @description 该组件用于滚动通告场景，有多种模式可供选择
 * @tutorial https://www.uviewui.com/components/noticeBar.html
 * @property {Array} list 滚动内容，数组形式，见上方说明
 * @property {String} type 显示的主题（默认warning）
 * @property {Boolean} volume-icon 是否显示小喇叭图标（默认true）
 * @property {Boolean} more-icon 是否显示右边的向右箭头（默认false）
 * @property {Boolean} close-icon 是否显示关闭图标（默认false）
 * @property {Boolean} autoplay 是否自动播放（默认true）
 * @property {String} color 文字颜色
 * @property {String Number} bg-color 背景颜色
 * @property {String} mode 滚动模式（默认horizontal）
 * @property {Boolean} show 是否显示（默认true）
 * @property {String Number} font-size 字体大小，单位rpx（默认28）
 * @property {String Number} volume-size 左边喇叭的大小（默认34）
 * @property {String Number} duration 滚动周期时长，只对步进模式有效，横向衔接模式无效，单位ms（默认2000）
 * @property {String Number} speed 水平滚动时的滚动速度，即每秒移动多少距离，只对水平衔接方式有效，单位rpx（默认160）
 * @property {String Number} font-size 字体大小，单位rpx（默认28）
 * @property {Boolean} is-circular mode为horizontal时，指明是否水平衔接滚动（默认true）
 * @property {String} play-state 播放状态，play - 播放，paused - 暂停（默认play）
 * @property {String Number} border-radius 通知栏圆角（默认为0）
 * @property {String Number} padding 内边距，字符串，与普通的内边距css写法一直（默认"18rpx 24rpx"）
 * @property {Boolean} no-list-hidden 列表为空时，是否显示组件（默认false）
 * @property {Boolean} disable-touch 是否禁止通过手动滑动切换通知，只有mode = vertical，或者mode = horizontal且is-circular = false时有效（默认true）
 * @event {Function} click 点击通告文字触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效
 * @event {Function} close 点击右侧关闭图标触发
 * @event {Function} getMore 点击右侧向右图标触发
 * @event {Function} end 列表的消息每次被播放一个周期时触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效
 * @example <u-notice-bar :more-icon="true" :list="list"></u-notice-bar>
 */
export default {
	name: "u-notice-bar",
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
		// 音量喇叭的大小
		volumeSize: {
			type: [Number, String],
			default: 34
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
		// 滚动方向，horizontal-水平滚动，vertical-垂直滚动
		mode: {
			type: String,
			default: 'horizontal'
		},
		// 是否显示
		show: {
			type: Boolean,
			default: true
		},
		// 字体大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 28
		},
		// 滚动一个周期的时间长，单位ms
		duration: {
			type: [Number, String],
			default: 2000
		},
		// 水平滚动时的滚动速度，即每秒滚动多少rpx，这有利于控制文字无论多少时，都能有一个恒定的速度
		speed: {
			type: [Number, String],
			default: 160
		},
		// 水平滚动时，是否采用衔接形式滚动
		// 水平衔接模式，采用的是swiper组件，水平滚动
		isCircular: {
			type: Boolean,
			default: true
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
		// 滚动通知设置圆角
		borderRadius: {
			type: [Number, String],
			default: 0
		},
		// 通知的边距
		padding: {
			type: [Number, String],
			default: '18rpx 24rpx'
		},
		// list列表为空时，是否显示组件
		noListHidden: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		// 如果设置show为false，或者设置了noListHidden为true，且list长度又为零的话，隐藏组件
		isShow() {
			if(this.show == false || (this.noListHidden == true && this.list.length == 0)) return false;
			else return true;
		}
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
		// 滚动一个周期结束，只对垂直，或者水平步进形式有效
		end() {
			this.$emit('end');
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../libs/css/style.components.scss";

.u-notice-bar-wrap {
	overflow: hidden;
}

.u-notice-bar {
	padding: 18rpx 24rpx;
	overflow: hidden;
}

.u-direction-row {
	@include vue-flex;
	align-items: center;
	justify-content: space-between;
}

.u-left-icon {
	@include vue-flex;
	align-items: center;
}

.u-notice-box {
	flex: 1;
	@include vue-flex;
	overflow: hidden;
	margin-left: 12rpx;
}

.u-right-icon {
	margin-left: 12rpx;
	@include vue-flex;
	align-items: center;
}

.u-notice-content {
	line-height: 1;
	white-space: nowrap;
	font-size: 26rpx;
	animation: u-loop-animation 10s linear infinite both;
	text-align: right;
	// 这一句很重要，为了能让滚动左右连接起来
	padding-left: 100%;
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
