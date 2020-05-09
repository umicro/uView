<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<view class="u-no-demo-here" style="text-align: left;">
					根据当前时间，返回类似"刚刚，5分钟前，8小时前，3天前"等字样
				</view>
				<view class="u-demo-result-line">
					{{result}}
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">时间</view>
				<u-subsection vibrateShort :list="timeArr1" @change="timeArr1Change"></u-subsection>
				<u-subsection vibrateShort style="margin-top: 40rpx;" :list="timeArr2" @change="timeArr2Change"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeArr1: [0, 0],
				timeArr2: [0, 0],
				result: null
			}
		},
		onLoad() {
			this.getRandomTime();
			this.timeArr1Change(0);
		},
		methods: {
			getRandomTime() {
				let nowTime = Number(+ new Date());
				let threeDayAgo = nowTime - 2 * 86400000;
				this.timeArr1.map((val, index) => {
					this.timeArr1[index] = this.$u.timeFormat(this.$u.random(threeDayAgo, nowTime), 'yyyy/mm/dd hh:MM:ss');
					this.timeArr2[index] = this.$u.timeFormat(this.$u.random(threeDayAgo, nowTime), 'yyyy/mm/dd hh:MM:ss');
				})
			},
			timeArr1Change(index) {
				this.result = this.$u.timeFrom((new Date(this.timeArr1[index])).getTime());
			},
			timeArr2Change(index) {
				this.result = this.$u.timeFrom((new Date(this.timeArr2[index])).getTime());
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
