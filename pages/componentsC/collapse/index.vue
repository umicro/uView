<template>
	<view class="u-demo">
		<view class="u-demo-wrap" style="background-color: #ffffff;">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-collapse v-if="key" :item-style="itemStyle" event-type="close" :arrow="arrow" :accordion="accordion" @change="change">
					<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in itemList" :key="index">
						{{item.body}}
					</u-collapse-item>
				</u-collapse>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">手风琴模式</view>
				<u-subsection :list="['是', '否']" @change="accordionChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">右侧箭头</view>
				<u-subsection :list="['显示', '隐藏']" @change="arrowChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义样式</view>
				<u-subsection current="1" :list="['是', '否']" @change="styleChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
					head: "赏识在于角度的转换",
					body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来：闪光的道德、妙异的智慧、优美的人情…… 赏识不是单向的施舍，是智慧与智慧的主动碰撞",
					show: false,
				}, {
					head: "生活中不是缺少美，而是缺少发现美的眼睛",
					body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
					show: false,
				}, {
					head: "周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧",
					body: "但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美，用它绝对雕不出好的艺术品，总之它被批评为一块不受人赏识的普通石头",
					show: false,
				}, {
					head: "点燃心中的火焰，找回了自信和人生的价值",
					body: "他随手翻了几页，竟被一篇题名为《童年》的小说所吸引，作者是一个初出茅庐的无名小辈，但屠格涅夫却十分欣赏，钟爱有加",
					show: false,
				}, {
					head: "因为赏识，那块被人不耻的石头变成了雕塑",
					body: "这个材料反应的就是赏识的问题，赏识是一种理解和信任，包含了肯定与欣赏，也是一种激励和引导，可以使人悔过自新，扬长避短，更健康地成长和进步",
					show: false,
				}],
				accordion: true,
				arrow: true,
				hoverClass: 'hover2',
				itemStyle: {},
				key: true
			}
		},
		methods: {
			accordionChange(index) {
				this.accordion = index == 0 ? true : false;
			},
			arrowChange(index) {
				this.arrow = index == 0 ? true : false;
				this.changeStatus();
			},
			styleChange(index) {
				if(index == 0) {
					this.itemStyle = {
						border: '1px solid rgb(230, 230, 230)',
						marginTop: '20px',
						padding: '0 8rpx'
					}
				} else {
					this.itemStyle = {}
				}
				this.changeStatus();
			},
			change(index) {
				let str = '';
				if(Array.isArray(index)) {
					let arr = index.map(val => {
						return Number(val) + 1;
					})
					index = arr.join(',');
				} else {
					index = Number(index) + 1;
				}
				this.$refs.uToast.show({
					title: `点击了第${index}个`,
					type: 'warning'
				})
			},
			itemChange(e) {
				console.log(e);
			},
			changeStatus() {
				this.key = false;
				this.$nextTick(function(){
					this.key = true;
				})
			}
		}
	}
</script>

<style>
	.hover1 {
		background-color: red;
	}
</style>

<style lang="scss" scoped>
	.wrap {
		// padding: 24rpx;
	}

	.item {
		//padding: 0 24rpx;
	}

	.head {
		font-size: 30rpx;
		color: $u-main-color;
		line-height: 1;
		padding: 24rpx 24rpx;
	}

	.body {
		font-size: 28rpx;
		color: $u-tips-color;
		line-height: 1.4;
		padding: 24rpx;
	}
</style>
