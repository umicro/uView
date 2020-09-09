<template>
	<view class="pageMain">

		<view class="title">完善个人信息</view>
		<view class="info">为了给您精准的推荐，请完善以下信息
		</view>
		<view class="my-form">
			<u-form :model="form" ref="formRef">

				<view class="my-form-item" @tap="selectSchoolTap">
					<view class="border padding position">
						<u-icon name="dingwei" custom-prefix="iconfont" color="#A0A0A0"></u-icon>
						<view class="collegeSelectValue">{{selectSchool.orgName}}{{selectSchool.regionName?('（'+selectSchool.regionName+'）'):''}}</view>
						<u-icon name="jiantou8" custom-prefix="iconfont" color="#A0A0A0"></u-icon>
					</view>
				</view>

				<view v-for="(formItem,i) in needKeyArr">

					<view class="my-form-item" v-if="formItem.name=='name'">
						<u-form-item prop="name" :label-style="{display:'none'}" :border-bottom="false">
							<view class="border padding">
								<u-input class="my-input" v-model="form.name" placeholder="请输入姓名" />
							</view>
						</u-form-item>
					</view>

					<view class="my-form-item" v-else-if="formItem.name=='idNumber'">
						<u-form-item prop="idNumber" label-width="0" :border-bottom="false">
							<view class="border padding">
								<u-input v-model="form.idNumber" placeholder="请输入身份证" />
							</view>
						</u-form-item>
					</view>

					<view class="my-form-item" v-else-if="formItem.name=='password'">
						<u-form-item prop="password" label-width="0" :border-bottom="false">
							<view class="border padding">
								<u-input v-model="form.password" placeholder="请输入密码" />
							</view>
						</u-form-item>
					</view>

					<view class="my-form-item" v-else-if="formItem.name=='idNumberEncryption'">
						<u-form-item prop="idNumberEncryption" label-width="0" :border-bottom="false">
							<view class="border padding">
								<u-input v-model="form.idNumberEncryption" placeholder="请输入身份证后六位" />
							</view>
						</u-form-item>
					</view>

					<view class="my-form-item" v-else-if="formItem.name=='jobNumber'">
						<u-form-item prop="jobNumber" label-width="0" :border-bottom="false">
							<view class="border padding">
								<u-input v-model="form.jobNumber" placeholder="请输入学工号" />
							</view>
						</u-form-item>
					</view>

					<view class="my-form-item" v-else-if="formItem.name=='sex'">
						<u-radio-group v-model="form.sex">
							<u-radio v-for="(item, index) in sexList" :key="index" :name="item.name" :disabled="item.disabled" shape="circle"
							 @change="radioChange">
								{{item.label}}
							</u-radio>
						</u-radio-group>
					</view>


				</view>

			</u-form>
		</view>

		<view class="submitButton" @tap="submitTap">
			<text class="buttonText">确定</text>
		</view>

		<!-- 提交新建校区模态框 -->
		<u-modal title="完善该校区信息" content="确认以上信息无误" v-model="collegeNewBuildMotalShow" @confirm="subNewBuildCollegeForm"
		 :show-cancel-button="true"></u-modal>
		<view class="">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '男',
				// 性别列表
				sexList: [{
						label: '男',
						name: 'MALE',
						disabled: false
					},
					{
						label: '女',
						name: 'FEMALE',
						disabled: false
					}
				],
				//新建校区模态框显示
				collegeNewBuildMotalShow: false,
				// 新建校区传递过来的参数
				selectSchool: {
					orgId: 0,
					orgName: "",
					regionId: 0,
					regionName: ""
				},
				// 需要提供的值数组
				needKeyArr: [

				],
				// 表单数据
				form: {
					name: '',
					password: '',
					idNumber: '',
					idNumberEncryption: '',
					jobNumber: '',
					sex: 'MALE'
				},
				// 表单规则
				formRules: {
					name: [{
						required: true,
						message: '请输入真实姓名',
						trigger: ['blur']
					}, {
						pattern: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{1,20}$/,
						message: '请输入中文',
						trigger: ['blur']
					}],
					phone: [{
						required: true,
						message: '请输入手机号',
						trigger: ['blur']
					}, {
						pattern: /^1[23456789]\d{9}$/,
						message: '请输入正确手机号',
						trigger: ['blur']
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: ['blur']
					}, ],
					// todo 身份证号验证
					idNumber: [{
						required: true,
						message: '请输入身份证号',
						trigger: ['blur']
					}, {
						pattern: /^(\d{18,18}|\d{17,17}x|\d{17,17}X)$/,
						message: '请输入正确身份证号码',
						trigger: ['blur']
					}],
					// todo 加密身份证=====
					idNumberEncryption: [{
						required: true,
						message: '请输入身份证号后六位',
						trigger: ['blur']
					}, {
						pattern: /^(\d{6,6}|(\d{5}x))$/i,
						message: '请输入正确身份证号码后六位',
						trigger: ['blur']
					}],
					jobNumber: [{
						required: true,
						message: '请输入学工号',
						trigger: ['blur']
					}]
				},
				countdownTime: 0,
			}
		},
		methods: {
			// 学校选择点击时
			selectSchoolTap() {
				uni.navigateBack({})
			},
			// 获取验证码
			getphonecode() {
				if (this.countdownTime > 0) {
					return;
				}
				this.countdownTime = 5
				let intervalId = setInterval(() => {
					if (this.countdownTime <= 0) {
						clearTimeout(intervalId)
						return;
					}
					this.countdownTime -= 1;
				}, 1000)
			},
			submitTap() {
				if (!this.needKeyArr || this.needKeyArr.length == 0) {
					this.collegeNewBuildMotalShow = true;
					return;
				}
				this.$refs.formRef.validate((v) => {
					if (v) {
						this.collegeNewBuildMotalShow = true;
					}
				})
			},
			// 点击模态框确定按钮提交新建校区表单信息
			subNewBuildCollegeForm() {
				uni.showToast({
					title: '点击了确定',
					icon: 'none'
				})
				return;
				try {
					let newObj = {}
					this.needKeyArr.map(v => v.name).forEach(v => {
						newObj[v] = this.form[v]
					})

					let school = {
						orgId: parseInt(this.selectSchool.orgId),
						orgRegionId: parseInt(this.selectSchool.regionId),
					}
					this.$u.$api.purchaser_perfection({ ...school,
						...newObj
					}).then(d => {
						uni.reLaunch({
							url: '/pages/home/index'
						})
					})
				} catch (e) {
					uni.showToast({
						title: '有异常：' + JSON.stringify(e),
						icon: 'none'
					})
				}

			},
			// 单选按钮点击时触发
			radioChange(e) {
				this.form.sex = e
			}
		},
		onLoad(params) {
			if (params) {
				this.selectSchool = Object.keys(params).reduce((obj, curr) => {
					if (!params[curr] || params[curr] == 'null') {
						obj[curr] = ''
					} else {
						obj[curr] = params[curr]
					}
					return obj
				}, {})
				this.$u.$api.gate_orgCheckField({
					orgId: params.orgId
				}).then(d => {
					if (!d.find(v => v.name == 'name')) {
						d.push({
							name: 'name',
							notes: '姓名'
						})
					}
					this.needKeyArr = d;
				})
			}
		},
		onReady() {
			// 官方要求，设置表单验证规则
			if (this.$refs.formRef) {
				this.$refs.formRef.setRules(this.formRules);
			}
		},
	}
</script>

<style lang="scss" scoped>
	// 本页主体
	.pageMain {
		padding: 65rpx;
		min-height: 100vh;
		box-sizing: border-box;
		// background-image: url(@/static/common/img/userLogin.jpg);
	}

	// 大标题
	.title {
		font-weight: bold;
		margin-top: 80rpx;
		font-size: 52rpx;
		color: #2A2A2A;
		line-height: 52px;
	}

	// 标题下描述信息
	.info {
		font-size: 28rpx;
		color: #6A6A6A;
		margin-bottom: 100rpx;
	}

	// 表单信息
	.my-form {
		.my-form-item {

			// 添加边框
			.border {
				border: 2rpx solid #E2E2E2;
				border-radius: 12rpx;
				display: flex;
				width: 100%;
				box-sizing: border-box;

				.padding {
					max-width: 330rpx;
				}
			}

			// 添加边距
			.padding {
				padding: 20rpx 50rpx;
			}

			.my-input {
				width: 100%;
			}

			// 获取短信验证码
			.getphonecode {
				min-width: 100rpx;
				border-left: 2rpx solid #E2E2E2;
				padding: 20rpx 20rpx;
				color: #6A6A6A;
			}

			.getphonecode.hasTime {
				color: #558BD3;
			}

			// 错误警告信息
			// .u-form-item__message {
			// 	font-size: 28rpx;
			// 	margin-left: 50rpx !important;
			// }
		}
	}

	// 选择学校按钮行
	.position {
		display: flex;
		align-items: center;
		line-height: 70rpx;

		// 定位、下拉-字体图标
		.iconfont {
			// color: #A0A0A0;
			// padding-right: 20rpx;
		}

		// 文本区域
		.collegeSelectValue {
			flex: 1;
			padding-left: 20rpx;
		}
	}

	// 确定按钮
	.submitButton {
		background-color: #4990EE;
		border: 1rpx solid #AEAEAE;
		border-radius: 12rpx;
		width: 100%;
		padding: 25rpx 0;
		text-align: center;
		margin-top: 70rpx;

		// 按钮文本
		.buttonText {
			font-size: 32rpx;
			color: #FFFFFF;
		}
	}
</style>
