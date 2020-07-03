<template>
	<view class="container">
		<view class="search-box">
			<u-search @focus="getKeys" @blur="hideKey" bg-color='#ffffff' border-color='rgba(242, 242, 242, 1)'  placeholder="日照香炉生紫烟" :clearabled="true" v-model="keyword"></u-search>
		</view>
		<view class="search-word">
			<view class="search-hot" v-if="keys.length!==0">
				热门搜索
			</view>
			<view class="search-key" v-if="keys.length!==0">
				<view class="key-font" :key="" v-for="item in keys">
					{{item.brand_name}}
				</view>
			</view>
		</view>

		<view class="search-end" v-if="keys.length==0">
			<view class="">
				全部
			</view>
			<view class="">
				销量
			</view>
			<view class="" @click="showChoice = true">
				筛选
			</view>
		</view>

		<view class="guess-section">
			<view v-for="(item, index) in mainData" :key="index" class="guess-item" @click="navToDetailPage(item)">
				<view class="image-wrapper">
					<image :src="item.goods_img"></image>
					<text class="goods-tip" v-if="item.is_new==1">新品</text>
				</view>
				<view class="goods-info">
					<text class="title clamp">{{item.goods_name}}</text>
					<p><text class="price">￥{{item.promote_price}}</text><text class="price sell">¥{{item.market_price}}</text></p>
					<view class="">
						<u-rate count="count" gutter="6" size=3 inactive-icon="star-fill" :plain="true" active-color="#FBD14F"  inactive-color="RGBA(251, 209, 79, 0.3)" current="2"></u-rate>
						<text style="font-size:16upx;margin-left: 8upx; color: #363636;">4.5</text>
					</view>

				</view>
			</view>
		</view>

		<u-popup v-model="showChoice"  mode="right" width="404rpx"  @close="closePopup">
			<view class="choice">筛选</view>

			<view class="choice-main">
				<view class="choice-price">
					价格区间(元）
				</view>
				<view class="choice-between">
					<input type="text"  v-model="higtPrice"  placeholder="最低价"/>
					<view class="line">

					</view>
					<input type="text" v-model="lowPrice"   placeholder="最高价"/>
				</view>
				<view class="choice-price">
					品牌
				</view>
				<view class="choice-brand">
					<view class="choice-item" v-for="i in 5">
						富安娜
					</view>
				</view>
				<view class="choice-submit">
					<view class="sub" @click="closePopup">
						取消
					</view>
					<view class="sub confirm" @click="GetData">
						确定
					</view>
				</view>
			</view>
		</u-popup>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				keys:[],
				page:1,
				pageSize:10,
				mainData:[],
				showChoice:false,
				higtPrice:'',
				lowPrice:''
			};
		},
		created() {
			this.GetData()
		},
		methods:{
			GetData() {
				this.$request.get(`/v1/goods/getGoodsByType?page=${this.page}&pageSize=${this.pageSize}&type=1&higtPrice=${this.higtPrice}&lowPrice=${this.lowPrice}`).then((res) => {
					this.mainData = res.data.list
					console.log(3435333, this.mainData)
					this.closePopup()
				})
			},
			getKeys(){
				this.$request.get(`/v1/brand/getBrandList`).then((res) => {
					this.keys = res.data.list
					console.log(3333, this.keys)
				})
			},
			hideKey(){
				this.keys = []
			},
			closePopup(){
				this.higtPrice = ''
				this.lowPrice = ''
				this.showChoice = false
			}
		}
	}
</script>

<style scoped>
page{
		background-color: #ffffff;
}
.container{
	background-color: #ffffff;
	.search-box{
		padding: 34upx 32upx;
		/deep/ .u-action-active{
			background:rgba(255,105,105,1);
			border-radius:32upx;
			border:2upx solid rgba(254,156,143,1);
			padding: 10upx 22upx;
			width: 108upx;
			margin-left: 32upx;
			color: #ffffff;

		}
	}
	.search-word{
		padding: 0 34upx;
		margin-top: 12upx;
		.search-hot{
			font-size:32upx;
			line-height:44upx;
			margin-bottom: 24upx;
		}
		.search-key{
			display: flex;
			flex-wrap: wrap;
			.key-font{
				background-color: rgba(242, 242, 242, 1);
				border-radius:24upx;
				padding: 6upx 30upx;
				font-size:28upx;
				line-height:40upx;
				color: #252A33;
				margin-right: 32upx;
				margin-bottom: 36upx;
			}
		}
	}
	.search-end{
		display: flex;
		padding: 0 65upx;
		justify-content: space-between;
		font-size:28upx;
		line-height:80upx;
	}
	/* 精品推荐 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 32upx;
		padding-top: 24upx;
		background: $page-color-base;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 47.5%;
			margin-bottom: 40upx;
			border-radius:8upx;
			background-color: #ffffff;
			&:nth-child(2n+1){
				margin-right: 4.5%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			overflow: hidden;
			position: relative;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
			.goods-tip{
				display: block;
				position: absolute;
				top: 20upx;
				right: 32upx;
				width: 56upx;
				height: 56upx;
				background-color: #000000;
				line-height: 56upx;
				text-align: center;
				border-radius: 50%;
				font-size:18upx!important;
				color: #ffffff;
			}
		}
		.goods-info{
			padding: 8upx 20upx 22upx;
			position: relative;
			.title{
				font-size: 24upx;
				color: #202020;
				line-height: 34upx;
			}
			.price{
				font-size: 24upx;
				color: $text-color-red;
				line-height:28upx;
			}
			.sell{
				flex-basis: 16upx;
				color: #B1ADAD;
				margin-left: 4upx;
			}
			.icon-buy{
				position: absolute;
				width: 44upx;
				height: 44upx;
				bottom: 24upx;
				right: 24upx;
			}

		}

	}

}

.choice{
	width: 100%;
	height: 88upx;
	padding-left: 40upx;
	background-color: #F2F2F2;
	font-size:24upx;
	color: #8E9299;
	margin-bottom: 20upx;
}
.choice-main{
	padding: 0upx 32upx;
	.choice-price{
		font-size:24upx;
		line-height:34upx;
		color: #252A33;
		margin-bottom: 24upx;
	}
	.line{
		width:24upx;
		height:2upx;
		background-color: #DADEE6;
		margin: 0 12upx;
		vertical-align: middle;
		margin-top: 30upx;
	}
	.choice-between{
		display: flex;
		margin-bottom: 36upx;
		input{
			width: 136upx;
			height: 64upx;
			border: 2upx solid #DADEE6;
			padding-left: 16upx;
		}
	}
	.choice-brand{
		display: flex;
		flex-wrap: wrap;
		.choice-item{
			margin-right:32upx;
			font-size:28upx;
			line-height:40upx;
			padding: 4upx 32upx;
			background:linear-gradient(180deg,rgba(255,162,162,1) 0%,rgba(255,105,105,1) 100%);
			border-radius:24upx;
			margin-bottom: 44upx;
			color: #ffffff;
			&:nth-of-type(2n){
				margin-right:0upx;
			}
		}
	}
	.choice-submit{
		display: flex;
		position: absolute;
		bottom: 72upx;
		.sub{
			font-size:30upx;
			height: 68upx;
			line-height: 60upx;
			color: #FF6969;
			padding: 0upx 24upx;
			border:2px solid #DADEE6;
			border-radius:34upx;
			color: #DADEE6;
		}
		.confirm{
			border-color: #FF6969;
			color: #FF6969;
			margin-left: 32upx;
		}
	}
}
</style>
