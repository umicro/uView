<template>
	<view class="u-demo">
		<view class="u-demo-wrap" style="background-color: #FFFFFF;">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-calendar v-model="show" :minDate="minDate" :maxDate="maxDate" :btnType="btnType" :activeBgColor="activeBgColor"
				 :rangeBgColor="rangeBgColor" :rangeColor="rangeColor" :startText="startText" :endText="endText" :arrowType="arrowType"
				 :mode="mode" ref="calendar" @change="change">
					
				</u-calendar>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">状态</view>
				<u-subsection vibrateShort :current="showBtnStatus" :list="['显示', '隐藏']" @change="showChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">显示错误信息</view>
				<u-subsection vibrateShort current="1" :list="['是', '否']" @change="errorMessageChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否必填</view>
				<u-subsection vibrateShort current="1" :list="['是', '否']" @change="requiredChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">显示左图标和右箭头</view>
				<u-subsection vibrateShort current="1" :list="['是', '否']" @change="customChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">第一个输入框为textarea类型</view>
				<u-subsection vibrateShort current="1" :list="['是', '否']" @change="textareaChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				mode: 'range',
				arrowType: 1,
				minDate: "1920-01-01",
				maxDate: "",
				btnType: "primary",
				activeBgColor: "#2979ff",
				rangeBgColor: "rgba(41,121,255,0.13)",
				rangeColor: "#2979ff",
				startText: "开始",
				endText: "结束",
				result: ""
			}
		},
		computed: {
			showBtnStatus() {
				return this.show ? 0 : 1;
			}
		},
		methods: {
			showChange(index) {
				this.show = !index;
			},
			errorMessageChange(index) {
				this.errorMessage = index == 0 ? '手机号有误' : false
			},
			requiredChange(index) {
				this.required = index == 0 ? true : false;
			},
			customChange(index) {
				if(index == 0) {
					this.icon1 = 'map';
					this.icon2 = 'photo';
					this.arrow = true;
				} else {
					this.icon1 = '';
					this.icon2 = '';
					this.arrow = false;
				}
			},
			textareaChange(index) {
				this.type = index == 0 ? 'textarea' : 'text';
			},
			change(e) {
				console.log(e)
				if (this.type == 1) {
					this.result = e.result
				} else {
					this.result = `${e.startDate} 至 ${e.endDate}`
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {
		
	}
</style>
