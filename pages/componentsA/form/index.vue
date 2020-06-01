<template>
	<view class="wrap">
		<u-form :model="model" :rules="rules" ref="uForm">
			<u-form-item label="姓名" prop="name">
				<u-input :border="border" placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
			</u-form-item>
			<u-form-item label="性别" prop="sex">
				<u-input :border="border" type="select" :select-open="actionSheetShow" v-model="model.sex" placeholder="请选择性别" @click="actionSheetShow = true"></u-input>
			</u-form-item>
			<u-form-item label="简介" prop="intro">
				<u-input type="textarea" placeholder="请填写简介" v-model="model.intro" />
			</u-form-item>
			<u-form-item label="水果品种" label-width="150" prop="likeFruit">
				<u-checkbox-group @change="checkboxGroupChange">
					<u-checkbox v-model="item.checked" v-for="(item, index) in checkboxList" :key="index" :name="item.name">{{ item.name }}</u-checkbox>
				</u-checkbox-group>
			</u-form-item>
			<u-form-item label="结算方式" prop="payType" label-width="150">
				<u-radio-group v-model="radio" @change="radioGroupChange">
					<u-radio shape="circle" v-model="item.checked" v-for="(item, index) in radioList" :key="index" :name="item.name">{{ item.name }}</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="所在地区" prop="region" label-width="150">
				<u-input :border="border" type="select" :select-open="pickerShow" v-model="model.region" placeholder="请选择地区" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-form-item label="所在地区" prop="goodsType" label-width="150">
				<u-input :border="border" type="select" :select-open="selectShow" v-model="model.goodsType" placeholder="请选择商品类型" @click="selectShow = true"></u-input>
			</u-form-item>
		</u-form>
		<view class="agreement">
			<u-checkbox v-model="check" @change="checkboxChange"></u-checkbox>
			<view class="agreement-text">
				勾选代表同意uView的版权协议
			</view>
		</view>
		<u-button @click="submit">提交</u-button>
		<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
		<u-select mode="single-column" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
		<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>
	</view>
</template>

<script>
export default {
	data() {
		let that = this;
		return {
			model: {
				name: '',
				sex: '',
				likeFruit: '',
				intro: '',
				payType: '支付宝',
				agreement: false,
				region: '',
				goodsType: '',
				
			},
			selectList: [
				{
					value: '电子产品',
					label: '电子产品'
				},
				{
					value: '服装',
					label: '服装'
				},
				{
					value: '工艺品',
					label: '工艺品'
				}
			],
			rules: {
				name: [
					{ 
						required: true, 
						message: '请输入姓名', 
						trigger: 'blur' ,
					}, 
					{ 
						min: 3, 
						max: 5, 
						message: '姓名长度在3到5个字符', 
						trigger: 'change,blur',
					},
					{
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							//return that.$u.test.chinese(value);
						},
						validator1: 33,
						message: '姓名必须为中文',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: 'change,blur',
					}
				],
				sex: [
					{
						required: true, 
						message: '请选择性别',
						trigger: 'change'
					}, 
				],
				intro: [
					{
						required: true, 
						message: '请填写简介'
					}, 
					{
						min: 5, 
						message: '简介不能少于5个字', 
						trigger: 'change' ,
					},
					// 正则校验示例，此处用正则校验是否中文，此处仅为示例，因为uView有this.$u.test.chinese可以判断是否中文
					{
						pattern: "/^[\u4e00-\u9fa5]+$/gi",
						message: '简介只能为中文',
						trigger: 'change',
					},
				],
				likeFruit: [
					{
						required: true, 
						message: '请选择您喜欢的水果',
						trigger: 'change',
						type: 'array',
					}
				],
				payType: [
					{
						required: true, 
						message: '请选择任意一种支付方式',
						trigger: 'change',
					}
				],
				region: [
					{
						required: true, 
						message: '请选择地区',
						trigger: 'change',
					}
				],
				goodsType: [
					{
						required: true, 
						message: '请选择商品类型',
						trigger: 'change',
					}
				],
			},
			border: false,
			check: false,
			selectStatus: 'close',
			checkboxList: [
				{
					name: '荔枝',
					checked: false,
					disabled: false
				},
				{
					name: '香蕉',
					checked: false,
					disabled: false
				},
				{
					name: '橙子',
					checked: false,
					disabled: false
				},
				{
					name: '草莓',
					checked: false,
					disabled: false
				}
			],
			radioList: [
				{
					name: '支付宝',
					checked: true,
					disabled: false
				},
				{
					name: '微信',
					checked: false,
					disabled: false
				},
				{
					name: '银联',
					checked: false,
					disabled: false
				},
				{
					name: '现金',
					checked: false,
					disabled: false
				}
			],
			radio: '支付宝',
			actionSheetList: [
				{
					text: '男'
				},
				{
					text: '女'
				},
				{
					text: '保密'
				}
			],
			actionSheetShow: false,
			pickerShow: false,
			selectShow: false,
			
			
		};
	},
	computed: {
		current() {
			return this.show ? 0 : 1;
		}
	},
	onLoad() {
		
	},
	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					if(!this.model.agreement) return this.$u.toast('请勾选协议');
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
		},
		// 点击actionSheet回调
		actionSheetCallback(index) {
			this.model.sex = this.actionSheetList[index].text;
		},
		// checkbox选择发生变化
		checkboxGroupChange(e) {
			this.model.likeFruit = e;
		},
		// radio选择发生变化
		radioGroupChange(e) {
			this.model.payType = e;
		},
		// 勾选版权协议
		checkboxChange(e) {
			this.model.agreement = e.value;
		},
		// 选择地区回调
		regionConfirm(e) {
			this.model.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
		},
		// 选择商品类型回调
		selectConfirm(e) {
			this.model.goodsType = '';
			e.map((val, index) => {
				this.model.goodsType += this.model.goodsType == '' ? val.label : '-' + val.label;
			})
		}
	}
};
</script>

<style scoped lang="scss">
.wrap {
	padding: 30rpx;
}

.agreement {
	display: flex;
	align-items: center;
	margin: 40rpx 0;
	
	.agreement-text {
		padding-left: 8rpx;
		color: $u-tips-color;
	}
}
</style>
