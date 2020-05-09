<template>
	<view class="content u-skeleton">
		<view class="bg-white padding-10 banner u-skeleton-fillet">
			<u-swiper :list="bannerList" :effect3d="true" @click='bannerClick' :title='true'></u-swiper>
		</view>
		<view class="bg-white radius-bbg padding-5 nav flex flex-row flex-nowrap align-center">
			<view v-for="(item, index) in gridIconList" @click="gridClick(item)" :key="index" class="u-skeleton-fillet padding-sm flex-1 flex flex-column align-center">
				<image :src="'/static/index/'+item+'.png'" style="width: 80rpx;height: 80rpx;"></image>
				<text class="grid-text">{{ tabs[index].name }}</text>
			</view>
		</view>
		<view class="tab bg-gray ">
			<u-tabs-swiper class='u-skeleton-fillet' bg-color='#f1f1f1' :isScroll="false" ref="uTabs" activeColor="#A87DFF" :list="tabs" :current="current" @change="tabsChange" :isScrool="false" swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper class="padding-10 bg-white radius-bbg" :style="{height: swiperHeight}" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item v-for="(item, index) in tabs" :key="index" >
				<scroll-view scroll-y :style="{height: swiperHeight,width: '100%'}" :scroll-top="scrollTop" @scroll="scroll" @scrolltolower="onreachBottom(index)">
					<view v-for="(item1,index1) in swiperData[0]" @click="dataClick(item1.id)" :key='index1' :class="index1==0?'margin-top-sm':''" class="flex flex-row align-center padding-5">
						<view class="flex-1 u-skeleton-fillet">
							<image :src="'/static/source/'+item1.img+'.png'" style="width: 100rpx;height: 100rpx;"></image>
						</view>
						<view class="u-skeleton-rect flex-9 margin-left-sm flex flex-column justify-start justify-between">
							<view class="flex-7 text-format-2 text-black">{{item1.title}}</view>
							<view class="flex-3 flex flex-row align-center justify-between padding-top-sm margin-bottom-sm">
								<view class="flex-7">{{item1.typename}}</view>
								<view class="flex-3">{{item1.time*1000 | date}}</view>
							</view>
							<view v-if='(index1+1)<swiperData[0].length' class="zise-line"></view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<u-top-tips ref="uTips"></u-top-tips>
		<u-skeleton :loading="loading" :animation="true" bgColor="#f1f1f1"></u-skeleton>
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [
					{
						id:1,type:'forum',
						image: '1',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						id:2,type:'book',
						image: '2',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						id:3,type:'video',
						image: '3',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					},
					{
						id:4,type:'cartoon',
						image: '4',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					},
					{
						id:5,type:'audio',
						image: '5',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				],
				gridIconList: ['forum', 'book', 'video', 'cartoon', 'audio'],
				tabs: [{name: '论坛'}, {name: '小说'}, {name: '视频'}, {name: '漫画'}, {name: '音频'}],
				current: 0,
				swiperCurrent: 0,
				dx: 0,
				swiperHeight:'800rpx',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				loading:true,
				swiperData:[
					[
						{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:1,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:2,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:3,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:4,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:5,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:6,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:1,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:2,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:2,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:2,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:2,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:2,
							time:1586758367
						},{
							title:'蒹葭苍苍，白露为霜。所谓伊人，在水一方',
							typename:'蒹葭苍苍',
							img:2,
							time:1586758367
						},
					]
				],
			}
		},
		async onLoad() {
			setTimeout(()=>{
				this.loading = false;
			},2000)
		},
		onReady() {
			this.getSwiperHeight();
		},
		methods: {
			async getSwiperHeight(){
				let windowHeight = this.$until.height(1)
				let banner = await this.$u.getRect('.banner');
				let nav = await this.$u.getRect('.nav');
				let tab = await this.$u.getRect('.tab');
				this.swiperHeight = (windowHeight-banner.height-nav.height-tab.height)+'px'
			},
			bannerClick(index) {
				this.$refs.uTips.show({
					title: `点击了`+this.bannerList[index].id+',类型为'+this.bannerList[index].type,
					type: 'success',
				})
			},
			gridClick(index) {
				switch(index){
					case 'forum':
						this.$u.route('/pages/forum/index');
						break;
					default:
						this.$refs.uTips.show({
							title: `点击了${index}按钮`,
							type: 'success',
						})
				}
			},
			tabsChange(index) {
				this.swiperCurrent = index;
				this.scrollTop = this.old.scrollTop
				this.$nextTick(()=>{
					this.scrollTop = 0
				});
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
				this.scrollTop = this.old.scrollTop
				this.$nextTick(()=>{
					this.scrollTop = 0
				});
			},
			// scroll-view到底部加载更多
			onreachBottom(index) {
				this.$refs.uTips.show({
					title: `在${index}触发触底刷新`,
					type: 'success',
				})
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style scoped>
	.grid-text {
		color: #A87DFF;
		font-size: 28rpx;
		margin-top: 6rpx;
	}
	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
	}
</style>
