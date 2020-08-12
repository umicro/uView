<template>
	<view class="u-wrap">
		<view class="meituan">
			<view class="content">
				<view class="left">
					<view class="sum">
						￥
						<text class="num">8</text>
					</view>
					<view class="type">抵用券</view>
				</view>
				<view class="centre">
					<view class="title">【洗牙】8元无门槛红包</view>
					<view class="valid-date">今日到期</view>
				</view>
				<view class="right">
					<view size="mini" class="immediate-use" :round="true">立即使用</view>
				</view>
			</view>
			<view class="tips">
				<view class="circle-left"></view>
				<view class="circle-right"></view>
				<view class="explain u-line-1">满8.1元可用、限最新版本客户端使用</view>
				<view class="rule u-line-1" @tap="xxx122">
					<text>使用规则</text>
					<u-icon name="arrow-right" color="" :size="20" @click=""></u-icon>
				</view>
			</view>
		</view>
		<view class="jingdong">
			<view class="left">
				<view class="sum">
					￥
					<text class="num">100</text>
				</view>
				<view class="type">满149元可用</view>
			</view>
			<view class="right">
				<view class="top">
					<view class="title">
						<text class="tag">限品类东券</text>
						<text>仅可购买个人护理部分商品</text>
					</view>
					<view class="bottom">
						<view class="date u-line-1">2020.01.01-2020.01.31</view>
						<view class="immediate-use">立即使用</view>
					</view>
				</view>
				<view class="tips">
					<view class="explain">
						<u-icon name="zhuanfa" class="transpond" :size="24"></u-icon>
						<text>可赠送</text>
					</view>
				</view>
			</view>
		</view>
		<view class="taobao">
			<view class="title">
				<view class="left">
					<image class="buddha" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1975388697,1068670603&fm=26&gp=0.jpg" mode="aspectFill"></image>
					<view class="store">袜子精保护协会</view>
				</view>
				<view class="entrance">进店</view>
			</view>
			<view class="ticket">
				<view class="left">
					<image
						class="picture"
						src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578059523488&di=5f592ac19c1b983005d3e85add469756&imgtype=0&src=http%3A%2F%2Fimg010.hc360.cn%2Fg7%2FM00%2F2D%2FB9%2FwKhQs1QfUo6EdeM-AAAAALwk1hM072.jpg"
						mode="widthFix"
					></image>
					<view class="introduce">
						<view class="top">
							￥
							<text class="big">3</text>
							满88减3
						</view>
						<view class="type">店铺优惠券</view>
						<view class="date u-line-1">2019.11.28-2020.1.24</view>
					</view>
				</view>
				<view class="right">
					<view class="use immediate-use" :round="true">去使用</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
export default {
	
};
</script>

<style lang="scss" scoped>
page {
	height: 100%;
	background-color: rgb(244, 244, 244);
}
.u-wrap {
	padding: 24rpx;
}

.meituan {
	margin: 30rpx auto;
	background-color: #ffffff;
	width: 700rpx;
	// border: 10rpx;
	color: $u-type-warning;
	font-size: 28rpx;
	.content {
		display: flex;
		align-items: center;
		padding: 80rpx 20rpx;
		border: 10rpx;
		background-color: #fff5f4;
		.left {
			.sum {
				font-size: 32rpx;
				.num {
					font-size: 60rpx;
					font-weight: bold;
				}
			}
		}
		.centre {
			margin-left: 40rpx;
			.title {
				font-size: 32rpx;
				font-weight: bold;
				color: $u-main-color;
				margin-bottom: 20rpx;
			}
		}
		.right {
			margin-left: 30rpx;
			.immediate-use {
				padding: 0 20rpx;
				height: 50rpx;
				border-radius: 25rpx;
				line-height: 50rpx;
				background-color: $u-type-warning!important;
				color: #ffffff!important;
				font-size: 24rpx;
				border: none;
				word-break: keep-all;
			}
		}
	}
	.tips {
		padding: 0 20rpx;
		border: 10rpx;
		background-color: $u-type-info-light;
		position: relative;
		color: $u-tips-color;
		display: flex;
		justify-content: space-between;
		line-height: 60rpx;
		font-size: 24rpx;
		.circle-left,
		.circle-right {
			position: absolute;
			height: 36rpx;
			width: 18rpx;
			background-color: #f2f2f2;
		}

		.circle-right {
			border-radius: 40rpx 0 0 40rpx;
			right: 0;
			top: -18rpx;
		}

		.circle-left {
			border-radius: 0 40rpx 40rpx 0;
			left: 0;
			top: -18rpx;
		}
		.rule {
			font-size: 24rpx;
			display: flex;
			align-items: center;
			text {
				margin-right: 10rpx;
				flex: 1;
			}
		}
	}
}

.jingdong {
	margin-top: 40rpx;
	width: 700rpx;
	height: auto;
	background-color: #ffffff;
	display: flex;
	.left {
		padding: 0 30rpx;
		background-color: rgb(95, 148, 224); //rgb(94, 152, 225);
		text-align: center;
		font-size: 28rpx;
		color: #ffffff;
		.sum {
			margin-top: 50rpx;
			font-weight: bold;
			font-size: 32rpx;
			.num {
				font-size: 80rpx;
			}
		}
		.type {
			margin-bottom: 50rpx;
			font-size: 24rpx;
		}
	}
	.right {
		padding: 20rpx 20rpx 0;
		font-size: 28rpx;
		.top {
			border-bottom: 2rpx dashed $u-border-color;
			.title {
				margin-right: 60rpx;
				line-height: 40rpx;
				.tag {
					padding: 4rpx 20rpx;
					background-color: rgb(73, 154, 201);
					border-radius: 20rpx;
					color: #ffffff;
					font-weight: bold;
					font-size: 24rpx;
					margin-right: 10rpx;
				}
			}
			.bottom {
				display: flex;
				margin-top: 20rpx;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 10rpx;
				.date {
					font-size: 20rpx;
					flex: 1;
				}
				.immediate-use {
					height: auto;
					padding: 0 20rpx;
					font-size: 24rpx;
					border-radius: 40rpx;
					line-height: 40rpx;
					color: rgb(117, 142, 165);
					border: 2rpx solid rgb(117, 142, 165);
				}
			}
		}
		.tips {
			width: 100%;
			line-height: 50rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24rpx;
			.transpond {
				margin-right: 10rpx;
			}
			.explain {
				display: flex;
				align-items: center;
			}
			.particulars {
				width: 30rpx;
				height: 30rpx;
				box-sizing: border-box;
				padding-top: 8rpx;
				border-radius: 50%;
				background-color: $u-type-info-disabled;
				text-align: center;
			}
		}
	}
}

.taobao {
	margin-top: 40rpx;
	width: 700rpx;
	background-color: white;
	padding: 30rpx 20rpx 20rpx;
	border-radius: 20rpx;
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20rpx;
		font-size: 30rpx;
		.left {
			display: flex;
			align-items: center;
		}
		.store {
			font-weight: 500;
		}
		.buddha {
			width: 70rpx;
			height: 70rpx;
			border-radius: 10rpx;
			margin-right: 10rpx;
		}
		.entrance {
			color: $u-type-info;
			border: solid 2rpx $u-type-info;
			line-height: 48rpx;
			padding: 0 30rpx;
			background: none;
			border-radius: 15px;
		}
	}
	.ticket {
		display: flex;
		.left {
			width: 70%;
			padding: 30rpx 20rpx;
			background-color: rgb(255, 245, 244);
			border-radius: 20rpx;
			border-right: dashed 2rpx rgb(224, 215, 211);
			display: flex;
			.picture {
				width: 172rpx;
				border-radius: 20rpx;
			}
			.introduce {
				margin-left: 10rpx;
				.top{
					color:$u-type-warning;
					font-size: 28rpx;
					.big{
						font-size: 60rpx;
						font-weight: bold;
						margin-right: 10rpx;
					}
				}
				.type{
					font-size: 28rpx;
					color: $u-type-info-dark;
				}
				.date{
					margin-top: 10rpx;
					font-size: 20rpx;
					color: $u-type-info-dark;
				}
			}
		}
		.right {
			width: 30%;
			padding: 40rpx 20rpx;
			background-color: rgb(255, 245, 244);
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			.use{
				height: auto;
				padding: 0 20rpx;
				font-size: 24rpx;
				border-radius: 40rpx;
				color: #ffffff!important;
				background-color: $u-type-warning!important;
				line-height: 40rpx;
				color: rgb(117, 142, 165);
				margin-left: 20rpx;
			}
		}
	}
}
</style>
