<template>
	<view>
		<!-- {{hasLogin}}||{{provider}}||{{openid}} -->
		<image src="http://www.gyb086.com/Content/Home/images/regist-logo_03.jpg" mode="aspectFill" class="logo"></image>
		<view class="loginWarp">
			<view class="u-border-bottom">
				<u-cell-group :border="false">
					<u-field :field-style="fieldStyle" v-model="formData.name" placeholder="请输入用户名" label-width="20" :placeholder-style="placeholderClass">
						<text class="iconfont icon-xingmingyonghumingnicheng color_gray2 u-padding-top-30" slot="icon"></text>
					</u-field>
					<u-field :field-style="fieldStyle" :password="true" v-model="formData.password" placeholder="请输入密码" label-width="20" :placeholder-style="placeholderClass">
						<text class="iconfont icon-mima color_gray2 u-padding-top-30" slot="icon"></text>
						<text class="iconfont icon-yanjing color_gray2" slot="right"></text>
					</u-field>
					<u-field :field-style="fieldStyle" v-model="formData.phone" placeholder="请输入手机号" label-width="20" :placeholder-style="placeholderClass">
						<text class="iconfont icon-shoujihao color_gray2 u-padding-top-30" slot="icon"></text>
					</u-field>
					<u-field :field-style="fieldStyle" v-model="formData.code" placeholder="请填写验证码" label-width="20" :placeholder-style="placeholderClass">
						<text class="iconfont icon-_yanzhengma color_gray2 u-padding-top-30" slot="icon"></text>
						<!-- <u-button size="mini" slot="right" type="success" @tap="getCode">获取验证码</u-button> -->
						<!-- <u-toast ref="uToast"></u-toast> -->
						<text class="color_green u-padding-top-30" slot="right" @click="getCode">{{ tips }}</text>
					</u-field>
				</u-cell-group>
			</view>
			<view class="loginbtn">
				<u-button :custom-style="btnColor" type="success" shape="circle" :ripple="true" ripple-bg-color="#19be6b" @click="login()">
					登录
				</u-button>
			</view>
			<navigator url="/pages/register/register" class="color_gray8 f28 text_ac">快速注册</navigator>
			<!-- <navigator class="wxLogin"><text class="iconfont icon-weixin1"></text></navigator> -->
			<u-button class="wxbtn" type="success" :custom-style="wxLogin" shape="circle" :plain="true" :hair-line="false" open-type="getPhoneNumber" @getphonenumber="getphonenumber">
				<text class="iconfont icon-weixin1 wxicon"></text>
			</u-button>
			<u-verification-code seconds="60" :keep-running="true" @end="end" @start="start" ref="uCode" @change="codeChange"></u-verification-code>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			placeholderClass: 'color:#c4c4c5;',
			fieldStyle: {
				paddingTop: '30rpx',
			},
			wxLogin:{
				border:'none',
				borderColor:'#fff',
				backgroundColor:'none',
				height: '120rpx',
				width:'120rpx',
				color: '#fff',
				fontSize: '70rpx',
				marginTop:'120px'
			},
			btnColor:{
				backgroundColor: '#338b39',
				borderColor: '#338b39'
			},
			formData: {
				name: '高供货',
				password: '123456',
				phone: '13730508115',
				code: '888',
				verCode: '',
				wxPhone: '',
				codeSession_key: ''
			},
			tips: '获取验证码'
		};
	},
	// computed: {
	// 	...mapState(['hasLogin', 'provider', 'openid', 'session_key'])
	// },
	methods: {
		//...mapMutations(['setOpenid', 'loginSetData']),
		// 获取微信用户手机号 快捷登陆
		getphonenumber: function(e) {
			// console.log(e);
			let getWxPhone = this.util.getWxPhone(e.detail.encryptedData, this.session_key, e.detail.iv);
			this.formData.wxPhone = getWxPhone.phoneNumber;
			console.log(this.formData.wxPhone);
			this.request
				.post('/Common/Login/', {
					ciphertext: {
						nvc_platform: '1',
						nvc_wx_identifier: this.openid,
						nvc_phone: this.formData.wxPhone
					}
				})
				.then(res => {
					console.log(res);
					if(res.code == 400){
						this.$u.toast('您还未绑定平台账号，请先登陆后进行绑定');
					}
					// uni.hideLoading();
					// // 这里此提示会被this.start()方法中的提示覆盖
					// this.$u.toast('验证码已发送');
					// // 通知验证码组件内部开始倒计时
					// this.$refs.uCode.start();
				})
				.catch(e => {
					
				});
			
			
		},
		// 获取验证码
		codeChange(text) {
			this.tips = text;
		},
		getCode() {
			console.log(this.$refs.uCode);
			if (this.$refs.uCode.canGetCode) {
				if (this.$u.test.isEmpty(this.formData.name)) {
					this.$u.toast('请输入用户名');
					return;
				} else if (this.$u.test.isEmpty(this.formData.phone)) {
					this.$u.toast('请输入手机号');
					return;
				} else {
					uni.showLoading({
						title: '正在获取验证码'
					});
					this.request
						.post('/Common/SendMobileCode/', {
							ciphertext: {
								nvc_platform: '1',
								sendType: '1',
								number: this.formData.phone,
								userName: this.formData.name
							}
						})
						.then(res => {
							console.log(res);
							if(res.success == true){
								uni.hideLoading();
								// 这里此提示会被this.start()方法中的提示覆盖
								this.$u.toast('验证码已发送');
								this.formData.codeSession_key = res.data.session_key
								// 通知验证码组件内部开始倒计时
								this.$refs.uCode.start();
							}else{
								this.$u.toast(res.msg);
							}
						})
						.catch(e => {});
				}
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		},
		end() {
			// this.$u.toast('倒计时结束');
		},
		start() {
			this.$u.toast('验证码已发送啊啊');
		},
		login(){
			if (this.$u.test.isEmpty(this.formData.name)) {
				this.$u.toast('请输入用户名');
				return;
			} else if (this.$u.test.isEmpty(this.formData.password)) {
				this.$u.toast('请输入密码');
				return;
			} else if (this.$u.test.isEmpty(this.formData.phone)) {
				this.$u.toast('请输入手机号');
				return;
			} else if(!this.$u.test.mobile(this.formData.phone)){
				this.$u.toast('请输入正确的手机号');
				return;
			}else if(this.$u.test.isEmpty(this.formData.code)){
				this.$u.toast('请输入验证码');
				return;
			}else{
				this.request
					.post('/Common/Login/', {
						ciphertext: {
							nvc_platform: '1',
							nvc_user_name: this.formData.name,
							nvc_pass_word: this.formData.password,
							nvc_phone:this.formData.phone,
							mobile_code:this.formData.code,
							session_key:this.formData.codeSession_key
						}
					})
					.then(res => {
						console.log(res);
						// debugger
						if(res.success == true){
							this.loginSetData({
								loginUser:res.data.loginUser,
								loginPersonInfo:res.data.loginPersonInfo
							})
							uni.setStorageSync('userData',{
								loginUser:res.data.loginUser,
								loginPersonInfo:res.data.loginPersonInfo
							})
							uni.switchTab({
								url:'../me/me-index/me-index'
							})
							this.$u.toast('登录成功');
						}
						
					})
					.catch(e => {});
			}
		}
	},
	onLoad: function() {
		// console.log(this.openid)
		if (this.openid == null) {
			// 获取服务供应商
			let that = this;
			let provider = '';
			uni.getProvider({
				service: 'oauth',
				success: function(res) {
					console.log(res);
					provider = res.provider[0];
					// 登录微信
					uni.login({
						provider: provider,
						success: function(loginRes) {
							console.log(loginRes);
							// debugger
							that.request
								.post('/Common/GetOpenId/', {
									ciphertext: {
										nvc_platform: '1',
										js_code: loginRes.code
									}
								})
								.then(res => {
									console.log(res);
									// debugger
									that.setOpenid({
										openid: res.data.openid,
										session_key: res.data.session_key,
										provider: provider
									});
								})
								.catch(e => {});

							// // 获取用户信息
							// uni.getUserInfo({
							// 	provider:provider,
							// 	success:function(infoRes){
							// 		console.log(infoRes)
							// 	}
							// })
						},
						fail: function(res) {}
					});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.logo {
	display: block;
	width: 282rpx;
	height: 106rpx;
	margin: 0 auto;
	padding: 40rpx 0 60rpx;
}
.loginWarp {
	padding: 0 75rpx;
	.loginbtn {
		margin: 70rpx 0;
	}
	.wxicon {
		color: #52c223;
	}
}

</style>
