<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-table :align="align" :borderColor="borderColor">
					<u-tr class="u-tr">
						<u-th class="u-th">姓名</u-th>
						<u-th class="u-th">年龄</u-th>
						<u-th class="u-th">籍贯</u-th>
						<u-th class="u-th">性别</u-th>
					</u-tr>
					<u-tr class="u-tr">
						<u-td class="u-td">吕布</u-td>
						<u-td class="u-td">22</u-td>
						<u-td class="u-td">楚河</u-td>
						<u-td class="u-td">男</u-td>
					</u-tr>
					<u-tr class="u-tr">
						<u-td class="u-td">项羽</u-td>
						<u-td class="u-td">28</u-td>
						<u-td class="u-td">汉界</u-td>
						<u-td class="u-td">男</u-td>
					</u-tr>
					<u-tr class="u-tr">
						<u-td class="u-td">木兰</u-td>
						<u-td class="u-td">24</u-td>
						<u-td class="u-td">南国</u-td>
						<u-td class="u-td">女</u-td>
					</u-tr>
				</u-table>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">边框颜色</view>   
				<u-subsection :list="['gray', 'primary', 'warning']" @change="borderColorChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">对齐方式</view>
				<u-subsection current="1" :list="['左', '中', '右']" @change="alignChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: false,
				borderColor: '#e4e7ed',
				align: 'center',
				index: 0,
			}
		},
		methods: {
			modeChange(index) {
				// #ifdef MP-WEIXIN
				return this.$u.toast('微信小程序暂不支持单元格合并')
				// #endif
				this.mode = index == 0 ? true : false;
				this.key ++;
			},
			borderColorChange(index) {
				this.borderColor = index == 0 ? '#e4e7ed' : index == 1 ? '#2979ff' : '#ff9900';
			},
			alignChange(index) {
				this.align = index == 0 ? 'left' : index == 1 ? 'center' : 'right';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
</style>
