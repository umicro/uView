<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode" 
				@change="codeChange" :startText="startText" :changeText="changeText" 
				:endText="endText"></u-verification-code>
				<u-button @click="getCode">{{tips}}</u-button>
				<u-button :custom-style="{marginTop: '30rpx'}" @tap="reset" style="margin-top: 30rpx;">重置</u-button>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">倒计时间</view>
				<u-subsection :current="0" :list="['60s', '10s', '5s']" @change="secondsChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义提示语</view>
				<u-subsection :current="1" :list="['是', '否']" @change="textChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '',
				seconds: 60,
				refCode: null,
				startText: '获取验证码',
				changeText: 'X秒重新获取',
				endText: '重新获取'
			}
		},
		onReady() {
			// 注意这里为错误示例，目前微信小程序最新稳定版开发工具如此
			// 赋值会报错，很诡异，其他端无此问题
			// this.refCode = this.$refs.uCode;
		},
		methods: {
			codeChange(text) {
				// console.log(text);
				this.tips = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			secondsChange(index) {
				this.seconds = index == 0 ? 60 : index == 1 ? 10 : 5;
			},
			textChange(index) {
				if(index == 0) {
					this.startText = '点一下获取',
					this.changeText = '重新获取Xs',
					this.endText = '再次获取'
				} else {
					this.startText = '获取验证码',
					this.changeText = 'X秒重新获取',
					this.endText = '重新获取'
				}
			},
			end() {
				this.$u.toast('倒计时结束');
			},
			start() {
				this.$u.toast('倒计时开始');
			},
			reset() {
				this.$refs.uCode.reset();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
