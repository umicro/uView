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
					<u-tr class="u-tr">
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('car')">购物车为空</u-button>
						</u-td>
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('page')">页面不存在</u-button>
						</u-td>
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('search')">没有搜索结果</u-button>
						</u-td>
					</u-tr>
					<u-tr class="u-tr">
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('address')">没有收货地址</u-button>
						</u-td>
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('wifi')">没有WiFi</u-button>
						</u-td>
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('order')">订单为空</u-button>
						</u-td>
					</u-tr>
					<u-tr class="u-tr">
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('coupon')">没有优惠券</u-button>
						</u-td>
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('favor')">没有收藏</u-button>
						</u-td>
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('permission')">无权限</u-button>
						</u-td>
					</u-tr>
					<u-tr class="u-tr">
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('history')">无历史记录</u-button>
						</u-td>
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('news')">无新闻列表</u-button>
						</u-td>
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('message')">消息列表为空</u-button>
						</u-td>
					</u-tr>
					<u-tr class="u-tr">
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('list')">列表为空</u-button>
						</u-td>
						<u-td class="u-td">
							<u-button :hair-line="false" size="mini" @click="modeChange('data')">数据为空</u-button>
						</u-td>
						<u-td class="u-td">
							待扩展
						</u-td>
					</u-tr>
				</u-table>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">传入slot</view>
				<u-subsection current="1" :list="['是', '否']" @change="slotChange"></u-subsection>
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
