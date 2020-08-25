<template>
	<view class="nav-wrap">
		<view class="nav-title">
			<image class="logo" src="https://cdn.uviewui.com/uview/common/logo.png" mode="widthFix"></image>
			<view class="nav-info">
				<view class="nav-title__text">
					{{$t('common.title')}}
				</view>
				<view class="nav-slogan">
					 {{$t('common.intro')}}
				</view>
			</view>
		</view>
		<view class="nav-desc">
			{{desc}}
		</view>
		<view class="lang" @tap="switchLang">
			<u-icon size="46" color="warning" :name="lang"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			desc: String,
			title: String,
		},
		computed: {
			lang() {
				return this.$i18n.locale == 'zh' ? 'zh' : 'en';
			}
		},
		methods: {
			switchLang() {
				this.$i18n.locale = this.$i18n.locale == 'en' ? 'zh' : 'en';
				this.vuex_tabbar[0].text = this.$t('nav.components')
				this.vuex_tabbar[1].text = this.$t('nav.js')
				this.vuex_tabbar[2].text = this.$t('nav.template')
				uni.setNavigationBarTitle({
					title: this.$t(this.title)
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-wrap {
		padding: 30rpx;
		position: relative;
	}
	
	.lang {
		position: absolute;
		top: 30rpx;
		right: 30rpx;
	}
	
	.nav-title {
		display: flex;
		align-items: center;
	}
	
	.nav-info {
		margin-left: 30rpx;
	}
	
	.nav-title__text {
		display: flex;
		color: $u-main-color;
		font-size: 50rpx;
		font-weight: bold;
	}
	
	.logo {
		width: 140rpx;
		flex: 0 0 140rpx;
		height: auto;
	}
	
	.nav-slogan {
		color: $u-tips-color;
		font-size: 28rpx;
	}
	
	.nav-desc {
		margin-top: 20rpx;
		font-size: 28rpx;
		color: $u-content-color;
	}
</style>
