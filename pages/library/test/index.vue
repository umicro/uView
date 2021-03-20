<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<view class="u-no-demo-here" style="text-align: left;">
					这里仅对部分验证规则进行演示，目前总的验证规则有如下：
				</view>
				<u-table style="margin-top: 20rpx;">
					<u-tr>
						<u-td>邮箱号</u-td>
						<u-td>手机号</u-td>
						<u-td>URL</u-td>
						<u-td>普通日期</u-td>
					</u-tr>
					<u-tr>
						<u-td>十进制数</u-td>
						<u-td>身份证号</u-td>
						<u-td>车牌号</u-td>
						<u-td>金额</u-td>
					</u-tr>
					<u-tr>
						<u-td>汉字</u-td>
						<u-td>字母</u-td>
						<u-td>字母|数字</u-td>
						<u-td>包含值</u-td>
					</u-tr>
					<u-tr>
						<u-td>数值范围</u-td>
						<u-td>长度范围</u-td>
						<u-td width="50%"></u-td>
					</u-tr>
				</u-table>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">邮箱</view>
				<u-subsection :list="email" @change="emailChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">手机号</view>
				<u-subsection :list="mobile" @change="mobileChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">中文</view>
				<u-subsection :list="chinese" @change="chineseChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">整数</view>
				<u-subsection :list="digits" @change="digitsChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: ['google@gmail.com', 'google艾特gmail.com'],
				mobile: ['13478561273', '0778-3423082'],
				chinese: ['天青色等烟雨', 'Beat it'],
				digits: [283, '下雨的声音']
			}
		},
		methods: {
			toast(type) {
				this.$refs.uToast.show({
					type: type ? 'success' : 'error',
					title: type ? '验证通过' : '验证失败'
				})
			},
			emailChange(index)  {
				this.toast(this.$u.test.email(this.email[index]));
			},
			mobileChange(index) {
				this.toast(this.$u.test.mobile(this.mobile[index]));
			},
			chineseChange(index) {
				this.toast(this.$u.test.chinese(this.chinese[index]));
			},
			digitsChange(index) {
				this.toast(this.$u.test.digits(this.digits[index]));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
