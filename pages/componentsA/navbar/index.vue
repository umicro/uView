<template>
	<view class="">
		<u-navbar title-color="#fff" back-icon-color="#ffffff" 
			:is-fixed="isFixed" :is-back="isBack" 
			:background="background" 
			:back-text-style="{color: '#fff'}" :title="title" 
			:back-icon-name="backIconName" :back-text="backText"
		>
			<view class="slot-wrap" v-if="useSlot">
				<view class="search-wrap" v-if="search">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search v-model="keyword" :show-action="showAction" height="56" :action-style="{color: '#fff'}"></u-search>
				</view>
				<view class="navbar-right" v-if="rightSlot">
					<view class="message-box right-item">
						<u-icon name="chat" size="38"></u-icon>
						<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
					</view>
					<view class="dot-box right-item">
						<u-icon name="calendar-fill" size="38"></u-icon>
						<u-badge size="mini" :is-dot="true" :offset="[-6, -6]"></u-badge>
					</view>
				</view>
				<view class="map-wrap" v-if="custom">
					<u-icon name="map" color="#ffffff" size="24"></u-icon>
					<text class="map-wrap-text">轻舟已过万重山</text>
					<u-icon name="arrow-down-fill" color="#ffffff" size="22"></u-icon>
				</view>
			</view>
			<view class="navbar-right" slot="right" v-if="slotRight">
				<view class="message-box right-item">
					<u-icon name="chat" size="38"></u-icon>
					<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
				</view>
				<view class="dot-box right-item">
					<u-icon name="calendar-fill" size="38"></u-icon>
					<u-badge size="mini" :is-dot="true" :offset="[-6, -6]"></u-badge>
				</view>
			</view>
		</u-navbar>
		<view class="u-demo">
			<view class="u-demo-wrap">
				<view class="u-demo-title">演示效果</view>
				<view class="u-demo-area">
					<u-toast ref="uToast"></u-toast>
					<view class="u-no-demo-here">查看顶部导航栏效果</view>
				</view> 
			</view>
			<view class="u-config-wrap">
				<view class="u-config-title u-border-bottom">
					参数配置
				</view>
				<view class="u-config-item">
					<view class="u-item-title">标题长度</view>
					<u-subsection :list="['短', '中', '长']" @change="titleChange"></u-subsection>
				</view>
				<view class="u-config-item">
					<view class="u-item-title">隐藏左侧返回区域</view>
					<u-subsection current="1" :list="['是', '否']" @change="backChange"></u-subsection>
				</view>
				<view class="u-config-item">
					<view class="u-item-title">自定义左侧内容</view>
					<u-subsection current="1" :list="['是', '否']" @change="leftChange"></u-subsection>
				</view>
				<view class="u-config-item">
					<view class="u-item-title">自定义右侧内容</view>
					<u-subsection :current="slotRightCurrent" :list="['是', '否']" @change="rightChange"></u-subsection>
				</view>
				<view class="u-config-item">
					<view class="u-item-title">传入整体slot</view>
					<u-subsection :list="['无', '搜索框', '搜索+按钮', '搜索+图标']" @change="searchChange"></u-subsection>
				</view>
				<view class="u-config-item">
					<view class="u-item-title">完全自定义传入内容</view>
					<u-subsection current="1" :list="['是', '否']" @change="customChange"></u-subsection>
				</view>
				<view class="u-config-item">
					<view class="u-item-title">背景色</view>
					<u-subsection :list="['渐变', '#39CCCC', '#B471CC', '#001f3f']" @change="bgColorChange"></u-subsection>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '新闻',
				backText: '返回',
				backIconName: 'nav-back',
				right: false,
				showAction: false,
				rightSlot: false,
				useSlot: false,
				background: {
					'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				isBack: true,
				search: false,
				custom: false,
				isFixed: true,
				keyword: '',
				// #ifdef MP
				slotRight: false,
				// #endif
				// #ifndef MP
				slotRight: true
				// #endif
			}
		},
		computed: {
			slotRightCurrent() {
				return this.slotRight ? 0 : 1;
			}
		},
		methods: {
			titleChange(index) {
				this.useSlot = false;
				this.title = index == 0 ? '新闻' : index == 1 ? '新闻列表' : '雨打梨花深闭门，忘了青春，误了青春';
			},
			leftChange(index) {
				if(index == 0) {
					this.backText = '';
					this.backIconName = 'arrow-leftward';
				} else {
					this.backText = '返回';
					this.backIconName = 'arrow-left';
				}
			},
			searchChange(index) {
				this.title = null;
				this.useSlot = true;
				this.search = false;
				this.custom = false;
				if(index == 0) {
					this.title = '新闻';
					this.useSlot = false;
					this.rightSlot = false;
				} else if(index == 1) {
					this.showAction = false;
					this.useSlot = true;
					this.rightSlot = false;
					this.search = true;
					this.slotRight = false;
				} else if(index == 2) {
					this.useSlot = true;
					this.showAction = true;
					this.rightSlot = false;
					this.search = true;
					this.slotRight = false;
				} else {
					this.useSlot = true;
					this.search = true;
					this.showAction = false;
					this.rightSlot = true;
					this.slotRight = false;
				}
			},
			backChange(index) {
				this.isBack = !!index;
			},
			bgColorChange(index) {
				this.background = {};
				if(index == 0) {
					this.background = {
						'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
					}
				} else {
					let color = index == 1 ? '#39CCCC' : index == 2 ? '#B471CC' : '#001f3f';
					this.background = {
						background: color
					}
				}
				
			},
			rightChange(index) {
				if(index == 0) {
					this.slotRight = true;
					this.useSlot = false;
				} else {
					this.slotRight = false;
				}
			},
			customChange(index) {
				this.search = false;
				this.rightSlot = false;
				if(index == 0) {
					this.custom = true;
					this.title = null;
					this.isBack = false;
					this.useSlot = true;
				} else {
					this.useSlot = false;
					this.title = '新闻';
					this.isBack = true;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {
		//height: 200vh;
		height: calc(100% - 44px);
		height: calc(100% - 44px - constant(safe-area-inset-top));
		height: calc(100% - 44px - env(safe-area-inset-top));
	}
	
	.wrap {
		padding: 24rpx;
	}
	
	.navbar-right {
		margin-right: 24rpx;
		display: flex;
	}
	
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
	
	.right-item {
		margin: 0 12rpx;
		position: relative;
		color: #ffffff;
		display: flex;
	}
	
	.message-box {
		
	}
	
	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}
	
	.map-wrap {
		display: flex;
		align-items: center;
		padding: 4px 6px;
		background-color: rgba(240,240, 240, 0.35);
		color: #fff;
		font-size: 22rpx;
		border-radius: 100rpx;
		margin-left: 30rpx;
	}
	
	.map-wrap-text {
		padding: 0 6rpx;
	}
</style>

