<template>
	<view class="u-demo">
		<view class="u-demo-wrap" style="background-color: #FFFFFF;">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-calendar isFixed :minDate="minDate" :maxDate="maxDate" :btnType="btnType" :activeBgColor="activeBgColor"
				 :rangeBgColor="rangeBgColor" :rangeColor="rangeColor" :startText="startText" :endText="endText" :arrowType="arrowType"
				 :type="type" ref="calendar" @change="change"></-calendar>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">右侧按钮</view>
				<u-subsection vibrateShort current="1" :list="['是', '否']" @change="showBtnChange"></u-subsection>
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
				type: 1,
				status: [],
				arrowType: 1,
				minDate: "1920-01-01",
				maxDate: "",
				btnType: "primary",
				activeBgColor: "#5677fc",
				rangeBgColor: "rgba(86,119,252,0.1)",
				rangeColor: "#5677fc",
				startText: "开始",
				endText: "结束",
				result: ""
			}
		},
		methods: {
			showBtnChange(index) {
				this.showBtn = index == 0 ? true : false;
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {
		
	}
</style>
