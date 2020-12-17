<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-grid :col="col" @click="click" v-if="!isSwiper" :border="border">
					<u-grid-item name="item1" :index="0" @click="itemClick">
						<u-badge count="9" :offset="[col == 3 ? 20 : 14, col == 3 ? 30 : 20]"></u-badge>
						<u-icon name="photo" :size="46"></u-icon>
						<view class="grid-text">图片</view>
					</u-grid-item>
					<u-grid-item :index="1">
						<u-icon name="lock" :size="46"></u-icon>
						<view class="grid-text">锁头</view>
					</u-grid-item>
					<u-grid-item :index="2">
						<image src="https://cdn.uviewui.com/uview/grid/hot5.png" :style="{
							top: col == 3 ? '14rpx' : '8rpx',
							right: col == 3 ? '40rpx' : '28rpx'
						}" style="width: 34rpx;height: 34rpx;" class="badge-icon" mode="widthFix"></image>
						<u-icon name="hourglass" :size="46"></u-icon>
						<view class="grid-text">沙漏</view>
					</u-grid-item>
					<u-grid-item :index="3">
						<u-icon name="home" :size="46"></u-icon>
						<view class="grid-text">首页</view>
					</u-grid-item>
					<u-grid-item :index="4">
						<u-icon name="star" :size="46"></u-icon>
						<view class="grid-text">星星</view>
					</u-grid-item>
					<u-grid-item :index="5">
						<u-icon name="volume-up" :size="46"></u-icon>
						<view class="grid-text">音量</view>
					</u-grid-item>
					<u-grid-item :index="6">
						<image src="https://cdn.uviewui.com/uview/grid/hot6.png" style="width: 44rpx;height: 44rpx;top:0;right:0;" class="badge-icon"></image>
						<u-icon name="trash" :size="46"></u-icon>
						<view class="grid-text">回收站</view>
					</u-grid-item>
					<u-grid-item :index="7">
						<u-icon name="rewind-right" :size="46"></u-icon>
						<view class="grid-text">快进</view>
					</u-grid-item>
					<u-grid-item :index="8">
						<u-icon name="shopping-cart" :size="46"></u-icon>
						<view class="grid-text">购物车</view>
					</u-grid-item>
				</u-grid>
				<swiper class="swiper" v-else @change="change">
					<swiper-item>
						<u-grid :border="border" :col="col" @click="click" hover-class="hover-class">
							<u-grid-item v-for="(item, index) in list" :index="index" :key="index">
								<u-icon :name="item" :size="46"></u-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</u-grid-item>
						</u-grid>
					</swiper-item>
					<swiper-item>
						<u-grid :border="border" :col="col" @click="click">
							<u-grid-item v-for="(item, index) in list" :index="index + 9" :key="index">
								<u-icon :name="item" :size="46"></u-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</u-grid-item>
						</u-grid>
					</swiper-item>
					<swiper-item>
						<u-grid :border="border" :col="col" @click="click">
							<u-grid-item v-for="(item, index) in list" :index="index + 18" :key="index">
								<u-icon :name="item" :size="46"></u-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</u-grid-item>
						</u-grid>
					</swiper-item>
				</swiper>
				<view class="indicator-dots" v-if="isSwiper">
					<view class="indicator-dots-item" :class="[current == 0 ? 'indicator-dots-active' : '']">
					</view>
					<view class="indicator-dots-item" :class="[current == 1 ? 'indicator-dots-active' : '']">
					</view>
					<view class="indicator-dots-item" :class="[current == 2 ? 'indicator-dots-active' : '']">
					</view>
				</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否显示边框</view>
				<u-subsection :list="['是', '否']" @change="borderChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否可滑动</view>
				<u-subsection current="1" :list="['是', '否']" @change="isSwiperChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">修改列数</view>
				<u-subsection :list="['3', '4']" @change="colChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email', 'list'],
				isSwiper: false,
				current: 0,
				border: true,
				col: 3
			};
		},
		methods: {
			isSwiperChange(index) {
				this.isSwiper = index == 0 ? true : false;
			},
			borderChange(index) {
				this.border = index == 0 ? true : false;
			},
			colChange(index) {
				this.col = index == 0 ? 3 : 4;
			},
			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}宫格`,
					type: 'warning'
				})
			},
			change(e) {
				this.current = e.detail.current;
			},
			// 针对单个grid-item的事件
			itemClick(index) {
				// console.log(index);
			}
		}
	};
</script>

<style scoped lang="scss">
.grid-text {
	font-size: 28rpx;
	margin-top: 4rpx;
	color: $u-type-info;
}

.badge-icon {
	position: absolute;
	width: 40rpx;
	height: 40rpx;
}

.swiper {
	height: 480rpx;
}

.indicator-dots {
	margin-top: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.indicator-dots-item {
	background-color: $u-tips-color;
	height: 6px;
	width: 6px;
	border-radius: 10px;
	margin: 0 3px;
}

.indicator-dots-active {
	background-color: $u-type-primary;
}
</style>
