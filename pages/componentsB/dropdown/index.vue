<template>
	<view class="">
		<view class="">
			<view class="u-demo-title">演示效果</view>

			<view class="u-demo-area u-flex u-row-center">
				<u-dropdown ref="uDropdown">
					<u-dropdown-item v-model="value1" title="距离" :options="options1"></u-dropdown-item>
					<u-dropdown-item v-model="value2" title="温度" :options="options2"></u-dropdown-item>
					<u-dropdown-item title="属性">
						<view class="slot-content">
							<view class="item-box">
								<view class="item" :class="[item.active ? 'active' : '']" @tap="tagClick(index)" v-for="(item, index) in list" :key="index">
									{{item.text}}
								</view>
							</view>
							<u-button type="primary" @click="closeDropdown">确定</u-button>
						</view>
					</u-dropdown-item>
				</u-dropdown>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置时
			</view>
			<!-- <view class="u-config-item">
				<view class="u-item-title">颜色</view>
				<u-subsection vibrateShort :list="['primary', 'success', 'warning', 'error', 'info']" @change="colorChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">线条类型</view>
				<u-subsection vibrateShort :list="['实线', '方形虚线', '圆点虚线']" @change="borderStyleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">细边</view>
				<u-subsection vibrateShort :list="['是', '否']" @change="hairLineChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">方向</view>
				<u-subsection vibrateShort :list="['水平', '垂直']" @change="directionChange"></u-subsection>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: '',
				value2: '2',
				value3: '',
				options1: [{
						text: '默认排序',
						value: 1,
						icon: 'map'
					},
					{
						text: '距离优先',
						value: 2,
						icon: 'map'
					},
					{
						text: '价格优先',
						value: 3,
						icon: 'map'
					}
				],
				options2: [{
						text: '去冰',
						value: 1,
						icon: 'map'
					},
					{
						text: '加冰',
						value: 2,
						icon: 'map'
					},
					{
						text: '正常温',
						value: 3,
						icon: 'map'
					},
					{
						text: '加热',
						value: 4,
						icon: 'map'
					},
					{
						text: '极寒风暴',
						value: 5,
						icon: 'map'
					}
				],
				list: [{
						text: '琪花瑶草',
						active: true,
					},
					{
						text: '清词丽句',
						active: false,
					},
					{
						text: '宛转蛾眉',
						active: false,
					},
					{
						text: '煦色韶光',
						active: false,
					},
					{
						text: '鱼沉雁落',
						active: false,
					},
					{
						text: '章台杨柳',
						active: false,
					},
					{
						text: '霞光万道',
						active: false,
					}
				],
				direction: 'row',
				hairLine: true,
				length: '100%',
				color: this.$u.color['primary'],
				borderStyle: 'solid'
			}
		},
		methods: {
			colorChange(index) {
				this.color = this.$u.color[['primary', 'success', 'warning', 'error', 'info'][index]];
			},
			hairLineChange(index) {
				this.hairLine = !index;
			},
			directionChange(index) {
				this.direction = index == 0 ? 'row' : 'col';
				if (index == 0) this.length = '100%';
				else this.length = '50rpx';
			},
			borderStyleChange(index) {
				this.borderStyle = ['solid', 'dashed', 'dotted'][index];
			},
			tagClick(index) {
				this.list[index].active = !this.list[index].active;
			},
			closeDropdown() {
				this.$refs.uDropdown.close();
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-config-wrap {
		padding: 40rpx;
	}
	
	.slot-content {
		background-color: #FFFFFF;
		padding: 24rpx;
		
		.item-box {
			margin-bottom: 50rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.item {
				border: 1px solid $u-type-primary;
				color: $u-type-primary;
				padding: 8rpx 40rpx;
				border-radius: 100rpx;
				margin-top: 30rpx;
			}
			
			.active {
				color: #FFFFFF;
				background-color: $u-type-primary;
			}
		}
	}
</style>
