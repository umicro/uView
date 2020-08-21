<template>
	<view class="">
		
	</view>
</template>

<script>
export default {

	data() {
		return {
			
		};
	},
	onLoad() {
		console.log(this.$u.test.url('http://www.aa.com?b=3&a=328sdsfhiwiefwismdfhsewiemsnfwiemdhisi'));
	},
	computed: {
		
	},
	methods: {
		reachBottom() {
			// 此tab为空数据
			if(this.current != 2) {
				this.loadStatus.splice(this.current,1,"loading")
				setTimeout(() => {
					this.getOrderList(this.current);
				}, 1200);
			}
		},
		
		// 页面数据
		getOrderList(idx) {
			for(let i = 0; i < 5; i++) {
				let index = this.$u.random(0, this.dataList.length - 1);
				let data = JSON.parse(JSON.stringify(this.dataList[index]));
				data.id = this.$u.guid();
				this.orderList[idx].push(data);
			}
			this.loadStatus.splice(this.current,1,"loadmore")
		},
		
		change(index) {
			this.swiperCurrent = index;
			this.getOrderList();
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		},
		
		// 数据请求
		// post示例
				// sumbitByPost() {
				// 	this.$u.post('http://10.28.83.111:59694/formMessage', {
				// 		username:this.loginForm.username,
				// 		password:md5(this.loginForm.password).toUpperCase(),
				// 	}).then(res => {
				// 		// res为服务端返回的数据
						
				// 	})
				// },
		sendInfo(){
		    let params = {
		          username:this.loginForm.username,
		          password:md5(this.loginForm.password).toUpperCase(),
		    }
		    let headers={
		          "Content-Type":"application/x-www-form-urlencoded",
		          // "Token":`this.userToken`   //设置token，保证每一个用户进入系统的安全性
		    }
		    uni.request({
		          url: `http://10.28.83.111:59694/formMessage`,
		          method: 'POST',
		          header: headers,
		          data: params,
		          success: (res)=>{
					
				  },
		          fail: (err)=>{
					  
				  }
		    })  
		}
		
		

	}
};
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */
</style>

<style lang="scss" scoped>
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			// color: $u-type-warning-dark;
			color: #F29100;
			// color: #5098ff;
			// color: #e5d001;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #999999;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 250rpx;
		height: 300rpx;
		// margin-bottom: 20rpx;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
</style>


