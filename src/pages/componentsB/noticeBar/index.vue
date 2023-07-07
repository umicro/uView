<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast :type="type" ref="uToast"></u-toast>
				<u-notice-bar :autoplay="autoplay" :playState="playState" :speed="speed" @getMore="getMore" 
				:mode="mode" @end="end" @close="close" @click="click" :show="show" :type="type" :list="list"
				:moreIcon="moreIcon" :volumeIcon="volumeIcon" :duration="duration" :isCircular="isCircular"></u-notice-bar>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">主题</view>
				<u-subsection :current="3" :list="['primary', 'success', 'error', 'warning', 'none']" @change="typeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">滚动模式</view>
				<u-subsection :current="current" :list="['水平', '垂直']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否衔接(水平模式有效)</view>
				<u-subsection :list="['是', '否']" @change="isCircularChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">状态</view>
				<u-subsection :list="['播放', '暂停']" @change="playStateChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">速度</view>
				<u-subsection :current="1" :list="['慢', '正常', '快']" @change="speedChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">图标</view>
				<u-subsection :list="['显示', '隐藏']" @change="iconChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				autoplay: false,
				type: 'warning',
				list: [
					'锦瑟无端五十弦，一弦一柱思华年',
					'庄生晓梦迷蝴蝶，望帝春心托杜鹃',
					'沧海月明珠有泪，蓝田日暖玉生烟'
				],
				mode: 'horizontal',
				playState: 'play',
				speed: 160,
				duration: 2000,
				moreIcon: true,
				volumeIcon: true,
				isCircular: true,
				current: 0
			}
		},
		onLoad() {
			
		},
		methods: {
			typeChange(index) {
				let type = ['primary', 'success', 'error', 'warning', 'none'];
				this.type = type[index];
			},
			modeChange(index) {
				this.current = index;
				this.mode = index == 0 ? 'horizontal' : 'vertical';
			},
			playStateChange(index) {
				this.playState = index == 0 ? 'play' : 'paused';
			},
			speedChange(index) {
				if(index == 0) {
					this.$nextTick(() => {
						this.speed = 50;
						this.duration = 6000;
					})
				} else if(index == 1) {
					this.$nextTick(() => {
						this.speed = 160;
						this.duration = 2000;
					})
				} else {
					this.$nextTick(() => {
						this.speed = 350;
						this.duration = 400;
					})
				}
			},
			iconChange(index) {
				if(index == 0) {
					this.moreIcon = true;
					this.volumeIcon = true;
				} else {
					this.moreIcon = false;
					this.volumeIcon = false;
				}
			},
			isCircularChange(index) {
				this.isCircular = index == 0 ? true : false;
				this.current = 0;
				this.mode = 'horizontal';
			},
			close() {
				this.toast(`点击了关闭图标`);
			},
			click(index) {
				if(this.mode == 'horizontal' && this.isCircular) {
					this.toast('此模式无法获取Index值');
				} else {
					this.toast(`点击了第${index + 1}条消息`);
				}
				
			},
			getMore() {
				this.toast(`点击了更多图标`);
			},
			toast(title) {
				this.$refs.uToast.show({
					title: title,
					type: 'warning'
				})
			},
			end() {
				// console.log('end');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		margin-top: 30px;
	}
</style>
