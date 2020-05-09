<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-empty :mode="mode">
					<u-button v-if="slot" slot="bottom" size="medium">
						slot按钮
					</u-button>
				</u-empty>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式选择</view>
				<u-table>
					<u-tr>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('car')">购物车为空</u-button>
						</u-td>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('page')">页面不存在</u-button>
						</u-td>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('search')">没有搜索结果</u-button>
						</u-td>
					</u-tr>
					<u-tr>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('address')">没有收货地址</u-button>
						</u-td>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('wifi')">没有WiFi</u-button>
						</u-td>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('order')">订单为空</u-button>
						</u-td>
					</u-tr>
					<u-tr>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('coupon')">没有优惠券</u-button>
						</u-td>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('favor')">没有收藏</u-button>
						</u-td>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('permission')">无权限</u-button>
						</u-td>
					</u-tr>
					<u-tr>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('history')">无历史记录</u-button>
						</u-td>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('news')">无新闻列表</u-button>
						</u-td>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('message')">消息列表为空</u-button>
						</u-td>
					</u-tr>
					<u-tr>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('list')">列表为空</u-button>
						</u-td>
						<u-td>
							<u-button :hair-line="false" size="mini" @tap="modeChange('data')">数据为空</u-button>
						</u-td>
						<u-td>
							待扩展
						</u-td>
					</u-tr>
				</u-table>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">传入slot</view>
				<u-subsection vibrateShort current="1" :list="['是', '否']" @change="slotChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: 'data',
				slot: false
			}
		},
		methods: {
			modeChange(mode = 'data') {
				this.mode = mode;
			},
			slotChange(index) {
				this.slot = !index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo-area {
		height: 160px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.u-demo-area .u-empty {
		padding-top: 0;
	}
</style>
