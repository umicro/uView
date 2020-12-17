<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="">
					<u-radio-group :shape="shape" :size="size" :width="width" :wrap="wrap" v-model="value" @change="radioGroupChange" :activeColor="activeColor">
						<u-radio @change="radioChange" v-for="(item, index) in list" :disabled="item.disabled"
							:key="index" :name="item.name"
						>{{item.name}}</u-radio>
					</u-radio-group>
				</view>
				<view class="u-demo-result-line">
					{{value ? `选中了"${result}"` : '请选择'}}
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">形状</view>
				<u-subsection current="1" :list="['方形', '圆形']" @change="shapeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">整体大小(单位rpx)</view>
				<u-subsection current="1" :list="['30', '40', '50']" @change="sizeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">激活颜色</view>
				<u-subsection :list="['primary', 'error', 'warning', 'success', 'info']" @change="activeColorChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">每个占一行</view>
				<u-subsection current="1" :list="['是', '否']" @change="wrapChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">每个宽度50%</view>
				<u-subsection current="1" :list="['是', '否']" @change="widthChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">默认选中第一个</view>
				<u-subsection current="1" :list="['是', '否']" @change="defaultChooseChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">禁用第一个</view>
				<u-subsection current="1" :list="['是', '否']" @change="disabledChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: '荔枝',
						checked: true,
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
				disabled: false,
				result: '荔枝',
				shape: 'circle', 
				value: '荔枝',
				activeColor: '#2979ff',
				size: 34,
				wrap: false,
				width: 'auto'
			}
		},
		methods: {
			shapeChange(index) {
				this.shape = index == 0 ? 'square' : 'circle';
			},
			sizeChange(index) {
				this.size = index == 0 ? 30 : index == 1 ? 40 : 50;
			},
			defaultChooseChange(index) {
				// 特别处理对第一个选的选中的情况，涉及到提示语，选中状态等
				// 实际开发中不会存在这些情况，只是演示用
				if(index == 0) {
					this.result = this.value = this.list[0].name;
				} else {
					if(this.value == this.list[0].name) {
						this.result = this.value = '';
					}
				}
			},
			activeColorChange(index) {
				// 如果用户尚未勾选任何radio，切换颜色时，默认选中第一个让用户看到效果，因为勾选了才有效果
				if(!this.result) this.result = this.value = this.list[0].name;
				let theme = index == 0 ? 'primary' : index == 1 ? 'error' : index == 2 ? 'warning' : index == 3 ? 'success' : 'info';
				this.activeColor = this.$u.color[theme];
			},
			disabledChange(index) {
				if(index == 0) {
					this.list[0].disabled = true;
				} else {
					this.list[0].disabled = false;
				}
			},
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				//console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				this.result = e;
				//console.log(e);
			},
			widthChange(index) {
				this.width = index == 0 ? '50%' : '';
			},
			wrapChange(index) {
				this.wrap = !index;
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-demo {}
</style>
