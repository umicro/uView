<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<view class="u-no-demo-here">请点击弹出弹窗查看效果</view>
				<u-modal v-model="show" :show-cancel-button="true" :show-title="showTitle" :content-slot="contentSlot">
					<view class="warp" style="margin: 30rpx;" v-if="content">
						<image class="logo" src="https://uviewui.com/common/logo.png" style="width: 220rpx;" mode="widthFix"></image>
					</view>
				</u-modal>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">状态</view>
				<u-subsection vibrateShort :current="current" :list="['显示', '隐藏']" @change="showChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否显示标题</view>
				<u-subsection vibrateShort current="0" :list="['是', '否']" @change="titleChange"></u-subsection>
			</view>
			
			<view class="u-config-item">
				<view class="u-item-title">自定义内容</view>
				<u-subsection vibrateShort current="1" :list="['是', '否']" @change="contentChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				zoom: false,
				content: false,
				showTitle: true,
				contentSlot: false
			};
		},
		computed: {
			current() {
				return this.show ? 0 : 1;
			}
		},
		methods: {
			showChange(index) {
				this.show = !index;
			},
			titleChange(index) {
				this.showTitle = !index;
				this.show = true;
			},
			contentChange(index) {
				this.contentSlot = !index;
				this.content = !index;
				this.show = true;
			}
		}
	};
</script>

<style scoped lang="scss">
	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 120px;
		height: 120px;
		background-color: #fff;
	}
	
	.logo {
		height: auto;
	}
</style>
