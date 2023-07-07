<template>
	<view class="">
		<view class="u-card-wrap">
			<u-card @click="click" @head-click="headClick" :title="title" :sub-title="subTitle" :thumb="thumb" :padding="padding" :border="border">
				<view class="" slot="body"> 
					<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
						<view class="u-body-item-title u-line-2">
							瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半
						</view>
						<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
					</view>
					<view class="u-body-item u-flex u-row-between u-p-b-0">
						<view class="u-body-item-title u-line-2">
							釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放
						</view>
						<image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="" slot="foot">
					<u-icon v-if="bottomSlot" name="chat-fill" size="34" label="30评论"></u-icon>
				</view>
			</u-card>
		</view>
		<view class="u-config-wrap u-demo">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">左上角图标</view>
				<u-subsection :list="['显示', '隐藏']" @change="thumbChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">内边距</view>
				<u-subsection current="1" :list="['20', '30', '40']" @change="paddingChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">底部</view>
				<u-subsection :list="['显示', '隐藏']" @change="bottomChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">外边框</view>
				<u-subsection :list="['显示', '隐藏']" @change="borderChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '素胚勾勒出青花，笔锋浓转淡',
				subTitle: '2020-05-15',
				thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				padding: 20,
				bottomSlot: true,
				border: true
			}
		},
		methods: {
			thumbChange(index) {
				this.thumb = index == 0 ? 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg' : '';
			},
			paddingChange(index) {
				this.padding = [20, 30, 40][index];
			},
			bottomChange(index) {
				this.bottomSlot = !index;
			},
			borderChange(index) {
				this.border = !index;
			},
			click(index) {
				console.log(index);
			},
			headClick(index) {
				console.log(index);
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-demo {
		padding-top: 0;
	}
	
	.u-card-wrap { 
		background-color: $u-bg-color;
		padding: 1px;
	}
	
	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}
		
	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
</style>
