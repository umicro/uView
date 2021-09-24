<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-button @click="openPage">点击跳转</u-button>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">类型</view>
				<u-subsection :list="['navigateTo', 'switchTab', 'navigateBack']" @change="typeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">携带参数(针对type=navigateTo)</view>
				<u-subsection :list="['是', '否']" @change="paramsChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">窗口动画(App且type=navigateTo||navigateBack时有效)</view>
				<u-subsection :list="['是', '否']" @change="animateChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'to',
				params: {
					age: 22,
					name: '李商隐'
				},
				animate: 'slide-in-bottom',
				url: ''
			}
		},
		computed: {
			jumpUrl() {
				let url = '';
				if(this.type == 'to') {
					url = '/pages/library/route/routeTo';
				} else if(this.type == 'tab') {
					url = '/pages/example/template';
				}
				return url;
			}
		},
		methods: {
			openPage() {
				this.$u.route({
					type: this.type,
					params: this.params,
					url: this.jumpUrl,
					animationType: this.animate
				});
			},
			typeChange(index) {
				this.type = index == 0 ? 'to' : index == 1 ? 'tab' : 'back';
			},
			paramsChange(index) {
				if(!index) {
					this.params = {
						age: 22,
						name: '李商隐'
					}
				} else {
					this.params = {}
				}
			},
			animateChange(index) {
				this.animate = index == 0 ? 'slide-in-bottom' : '';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
</style>
