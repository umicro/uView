<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-swipe-action
					bg-color="rgb(250, 250, 250)"
					@open="open"
					:disabled="disabled"
					:index="index"
					v-for="(item, index) in list"
					:key="item.id"
					:show="item.show"
					@click="click"
					:btn-width="btnWidth"
					@close="close"
					:options="options"
					@content-click="contentClick"
				>
					<view class="item u-border-bottom">
						<image mode="aspectFill" :src="item.images" />
						<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
						<view class="title-wrap">
							<text class="title u-line-2">{{ item.title }}</text>
						</view>
					</view>
				</u-swipe-action>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">状态(操作第一个)</view>
				<u-subsection :current="1" :list="['打开', '关闭']" @change="showChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">禁止滑动</view>
				<u-subsection :current="1" :list="['是', '否']" @change="disabledChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list1: [
				{
					id: 1,
					title: '长安回望绣成堆，山顶千门次第开，一骑红尘妃子笑，无人知是荔枝来',
					images: 'https://cdn.uviewui.com/uview/common/logo.png',
					show: false
				},
				{
					id: 2,
					title: '新丰绿树起黄埃，数骑渔阳探使回，霓裳一曲千峰上，舞破中原始下来',
					images: 'https://cdn.uviewui.com/uview/common/logo.png',
					show: false
				},
				{
					id: 3,
					title: '登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇',
					images: 'https://cdn.uviewui.com/uview/common/logo.png',
					show: false,
				}
			],
			list: [],
			disabled: false,
			btnWidth: 180,
			show: false,
			options: [
				{
					text: '收藏',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			]
		};
	},
	onLoad() {
		setTimeout(() => {
			this.list = this.list1;
		}, 0)
	},
	methods: {
		disabledChange(index) {
			this.disabled = index == 0 ? true : false;
		},
		showChange(index) {
			if (index == 0) {
				this.list.map((val, ids) => {
					if (ids != 0) val.show = false;
					else val.show = true;
				});
			} else {
				this.list[0].show = false;
			}
		},
		click(index, index1) {
			if(index1 == 1) {
				this.list.splice(index, 1);
				this.$u.toast(`删除了第${index}个cell`);
			} else {
				this.list[index].show = false;
				this.$u.toast(`收藏成功`);
			}
		},
		open(index) {
			this.list[index].show = true;
			this.list.map((val, idx) => {
				if (index != idx) this.list[idx].show = false;
			});
		},
		close(index) {
			this.list[index].show = false;
		},
		contentClick(index) {
			// console.log(index);
		}
	}
};
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	padding: 20rpx;
}

image {
	width: 120rpx;
	flex: 0 0 120rpx;
	height: 120rpx;
	margin-right: 20rpx;
	border-radius: 12rpx;
}

.title {
	text-align: left;
	font-size: 28rpx;
	color: $u-content-color;
	margin-top: 20rpx;
}
</style>
