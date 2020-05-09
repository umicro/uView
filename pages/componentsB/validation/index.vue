<template>
	<view class="wrap">
		<form @submit="submit">
			<view class="item u-border-bottom">
				<view class="label">
					姓名
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入姓名" type="text" name="name" value="" />
				</view>
			</view>
			<view class="item u-border-bottom">
				<view class="label">
					金额
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入金额,最多2位小数" type="text" name="amount" value="" />
				</view>
			</view>
			<view class="item u-border-bottom">
				<view class="label">
					邮箱
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入邮箱" type="text" name="email" value="" />
				</view>
			</view>
			<view class="item u-border-bottom">
				<view class="label">
					身份证
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入身份证号" type="text" name="idCard" value="" />
				</view>
			</view>
			<view class="item u-border-bottom">
				<view class="label">
					最大值
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入小于99的数值" type="text" name="max" value="" />
				</view>
			</view>
			<view class="item u-border-bottom">
				<view class="label">
					数字字母
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入数字和字母" type="text" name="enOrNum" value="" />
				</view>
			</view>
			<view class="item u-border-bottom">
				<view class="label">
					手机号 
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入手机号" type="text" name="tel" value="" />
				</view>
			</view>
			<view class="item u-border-bottom">
				<view class="label">
					车牌号 
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入车牌号" type="text" name="carNo" value="" />
				</view>
			</view>
			<view class="item u-border-bottom">
				<view class="label">
					数值 
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入数值" type="text" name="digits" value="" />
				</view>
			</view>
			<view class="item u-border-bottom">
				<view class="label">
					日期 
				</view>
				<view class="field">
					<input placeholder-class="placeholder-class" placeholder="请输入有效日期" type="text" name="date" value="" />
				</view>
			</view>
			<u-toast ref="uToast"></u-toast>
			<button form-type="submit">提交</button>
		</form>
	</view>
</template>

<script>
	import Uvalidation from "uview-ui/libs/validation/validation.js";
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.initValidation();
		},
		methods: {
			initValidation() {
				// 规则
				const rules = {
					name: {
						required: true,
					},
					amount: {
						required: true,
						amount: true,
					},
					email: {
						required: true,
						email: true
					},
					idCard: {
						required: true,
						idCard: true
					},
					max: {
						required: true,
						max: true
					},
					enOrNum: {
						required: true,
						enOrNum: true
					},
					tel: {
						required: true,
						tel: true
					},
					carNo: {
						required: true,
						carNo: true
					},
					digits: {
						required: true,
						digits: true
					},
					date: {
						required: true,
						date: true
					}
				}
				// 提示
				const messages = {
					// name: {
					// 	required: '请输入姓名',
					// }
				}
				// 校验规则
				this.Uvalidation = new Uvalidation(rules, messages);
				this.Uvalidation.addMethod('assistance', (value) => {
				    return (value.length >= 1 && value.length <= 2)
				}, '请勾选1-2个敲码助手')
			},
			submit(e) {
				let params = e.detail.value;
				if (!this.Uvalidation.checkForm(params)) {
					//console.log(this.Uvalidation.errorList);
					const error = this.Uvalidation.errorList[0].msg;
					// 可以自定义提示
					this.$refs.uToast.show({
						type: 'error',
						title: error,
					})
					return false
				} else {
					console.log('提交成功!');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.item {
		display: flex;
		align-items: center;
		margin: 30rpx 0;
		font-size: 30rpx;
		color: $u-main-color;
		padding-bottom: 10rpx;
		line-height: 1;
		
		.field {
			margin-left: 12rpx;
			width: 400rpx;
		}
	}
	
	.placeholder-class {
		font-size: 28rpx;
		color: $u-light-color;
	}
</style>
