<template>
	<view class="u-tabs" :style="{
			zIndex: zIndex,
			background: bgColor
		}">
		<scroll-view scroll-x class="u-scroll-view" :scroll-left="scrollLeft" scroll-with-animation :style="{ zIndex: zIndex + 1 }">
			<view class="u-tabs-scroll-box" :class="{'u-tabs-scorll-flex': !isScroll}">
				<view class="u-tabs-item" :style="[tabItemStyle(index)]"
				 v-for="(item, index) in getTabs" :key="index" :class="[preId + index]" @tap="emit(index)">
					{{ item[name] || item['name']}}
				</view>
				<view v-if="showBar" class="u-scroll-bar" :style="[tabBarStyle]"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import colorGradient from '../../libs/function/colorGradient';
	let color = colorGradient;
	const {
		windowWidth
	} = uni.getSystemInfoSync();
	const preId = 'UEl_';

	/**
	 * tabsSwiper 全屏选项卡
	 * @description 该组件内部实现主要依托于uniapp的scroll-view和swiper组件，主要特色是切换过程中，tabsSwiper文字的颜色可以渐变，底部滑块可以 跟随式滑动，活动tab滚动居中等。应用场景可以用于需要左右切换页面，比如商城的订单中心(待收货-待付款-待评价-已退货)等应用场景。
	 * @tutorial https://www.uviewui.com/components/tabsSwiper.html
	 * @property {Boolean} is-scroll tabs是否可以左右拖动（默认true）
	 * @property {Array} list 标签数组，元素为对象，如[{name: '推荐'}]
	 * @property {String Number} current 指定哪个tab为激活状态（默认0）
	 * @property {String Number} height 导航栏的高度，单位rpx（默认80）
	 * @property {String Number} font-size tab文字大小，单位rpx（默认30）
	 * @property {String Number} swiper-width tabs组件外部swiper的宽度，默认为屏幕宽度，单位rpx（默认750）
	 * @property {String} active-color 滑块和激活tab文字的颜色（默认#2979ff）
	 * @property {String} inactive-color tabs文字颜色（默认#303133）
	 * @property {String Number} bar-width 滑块宽度，单位rpx（默认40）
	 * @property {String Number} bar-height 滑块高度，单位rpx（默认6）
	 * @property {Object} bar-style 底部滑块的样式，对象形式
	 * @property {Object} active-item-style 活动tabs item的样式，对象形式
	 * @property {Boolean} show-bar 是否显示底部的滑块（默认true）
	 * @property {String Number} gutter 单个tab标签的左右内边距之和，单位rpx（默认40）
	 * @property {String} bg-color tabs导航栏的背景颜色（默认#ffffff）
	 * @property {String} name 组件内部读取的list参数中的属性名，见官网说明（默认name）
	 * @property {Boolean} bold 激活选项的字体是否加粗（默认true）
	 * @event {Function} change 点击标签时触发
	 * @example <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper>
	 */
	export default {
		name: "u-tabs-swiper",
		props: {
			// 导航菜单是否需要滚动，如只有2或者3个的时候，就不需要滚动了，此时使用flex平分tab的宽度
			isScroll: {
				type: Boolean,
				default: true
			},
			//需循环的标签列表
			list: {
				type: Array,
				default () {
					return [];
				}
			},
			// 当前活动tab的索引
			current: {
				type: [Number, String],
				default: 0
			},
			// 导航栏的高度和行高，单位rpx
			height: {
				type: [Number, String],
				default: 80
			},
			// 字体大小，单位rpx
			fontSize: {
				type: [Number, String],
				default: 30
			},
			// 过渡动画时长, 单位s
			// duration: {
			// 	type: [Number, String],
			// 	default: 0.5
			// },
			swiperWidth: {
				//line3生效, 外部swiper的宽度, 单位rpx
				type: [String, Number],
				default: 750
			},
			// 选中项的主题颜色
			activeColor: {
				type: String,
				default: '#2979ff'
			},
			// 未选中项的颜色
			inactiveColor: {
				type: String,
				default: '#303133'
			},
			// 菜单底部移动的bar的宽度，单位rpx
			barWidth: {
				type: [Number, String],
				default: 40
			},
			// 移动bar的高度
			barHeight: {
				type: [Number, String],
				default: 6
			},
			// 单个tab的左或右内边距（各占一半），单位rpx
			gutter: {
				type: [Number, String],
				default: 40
			},
			// 如果是绝对定位，添加z-index值
			zIndex: {
				type: [Number, String],
				default: 1
			},
			// 导航栏的背景颜色
			bgColor: {
				type: String,
				default: '#ffffff'
			},
			//滚动至中心目标类型
			autoCenterMode: {
				type: String,
				default: 'window'
			},
			// 读取传入的数组对象的属性
			name: {
				type: String,
				default: 'name'
			},
			// 活动tab字体是否加粗
			bold: {
				type: Boolean,
				default: true
			},
			// 当前活动tab item的样式
			activeItemStyle: {
				type: Object,
				default() {
					return {}
				}
			},
			// 是否显示底部的滑块
			showBar: {
				type: Boolean,
				default: true
			},
			// 底部滑块的自定义样式
			barStyle: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				scrollLeft: 0, // 滚动scroll-view的左边滚动距离
				tabQueryInfo: [], // 存放对tab菜单查询后的节点信息
				windowWidth: 0, // 屏幕宽度，单位为px
				//scrollBarLeft: 0, // 移动bar需要通过translateX()移动的距离
				animationFinishCurrent: this.current,
				componentsWidth: 0,
				line3AddDx: 0,
				line3Dx: 0,
				preId,
				sW: 0,
				tabsInfo: [],
				colorGradientArr: [],
				colorStep: 100 // 两个颜色之间的渐变等分
			};
		},
		computed: {
			// 获取当前活跃的current值
			getCurrent() {
				const current = Number(this.current);
				// 判断是否超出边界
				if (current > this.getTabs.length - 1) {
					return this.getTabs.length - 1;
				}
				if (current < 0) return 0;
				return current;
			},
			getTabs() {
				return this.list;
			},
			// 滑块需要移动的距离
			scrollBarLeft() {
				return Number(this.line3Dx) + Number(this.line3AddDx);
			},
			// 滑块的宽度转为px单位
			barWidthPx() {
				return uni.upx2px(this.barWidth);
			},
			// tab的样式
			tabItemStyle() {
				return (index) => {
					let style = {
						height: this.height + 'rpx',
						lineHeight: this.height + 'rpx',
						padding: `0 ${this.gutter / 2}rpx`,
						color: this.tabsInfo.length > 0 ? (this.tabsInfo[index] ? this.tabsInfo[index].color : this.activeColor) : this.inactiveColor,
						fontSize: this.fontSize + 'rpx',
						zIndex: this.zIndex + 2,
						fontWeight: (index == this.getCurrent && this.bold) ? 'bold' : 'normal'
					};
					if(index == this.getCurrent) {
						// 给选中的tab item添加外部自定义的样式
						style = Object.assign(style, this.activeItemStyle);
					}
					return style;
				}
			},
			// 底部滑块的样式
			tabBarStyle() {
				let style = {
					width: this.barWidthPx + 'px',
					height: this.barHeight + 'rpx',
					borderRadius: '100px',
					backgroundColor: this.activeColor,
					left: this.scrollBarLeft + 'px'
				};
				return Object.assign(style, this.barStyle);
			}
		},
		watch: {
			current(n, o) {
				this.change(n);
				this.setFinishCurrent(n);
			},
			list() {
				this.$nextTick(() => {
					this.init();
				})
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			async init() {
				this.countPx();
				await this.getTabsInfo();
				this.countLine3Dx();
				this.getQuery(() => {
					this.setScrollViewToCenter();
				});
				// 颜色渐变过程数组
				this.colorGradientArr = color.colorGradient(this.inactiveColor, this.activeColor, this.colorStep);
			},
			// 获取各个tab的节点信息 
			getTabsInfo() {
				return new Promise((resolve, reject) => {
					let view = uni.createSelectorQuery().in(this);
					for (let i = 0; i < this.list.length; i++) {
						view.select('.' + preId + i).boundingClientRect();
					}
					view.exec(res => {
						const arr = [];
						for (let i = 0; i < res.length; i++) {
							// 给每个tab添加其文字颜色属性
							res[i].color = this.inactiveColor;
							// 当前tab直接赋予activeColor
							if (i == this.getCurrent) res[i].color = this.activeColor;
							arr.push(res[i]);
						}
						this.tabsInfo = arr;
						resolve();
					});
				})
			},
			// 当swiper滑动结束，计算滑块最终要停留的位置
			countLine3Dx() {
				const tab = this.tabsInfo[this.animationFinishCurrent];
				// 让滑块中心点和当前tab中心重合
				if (tab) this.line3Dx = tab.left + tab.width / 2 - this.barWidthPx / 2 - this.tabsInfo[0].left;
			},
			countPx() {
				// swiper宽度由rpx转为px单位，因为dx等，都是px单位
				this.sW = uni.upx2px(Number(this.swiperWidth));
			},
			emit(index) {
				this.$emit('change', index);
			},
			change() {
				this.setScrollViewToCenter();
			},
			getQuery(cb) {
				try {
					let view = uni.createSelectorQuery().in(this).select('.u-tabs');
					view.fields({
							size: true
						},
						data => {
							if (data) {
								this.componentsWidth = data.width;
								if (cb && typeof cb === 'function') cb(data);
							} else {
								this.getQuery(cb);
							}
						}
					).exec();
				} catch (e) {
					this.componentsWidth = windowWidth;
				}
			},
			// 把活动tab移动到屏幕中心点
			setScrollViewToCenter() {
				let tab;
				tab = this.tabsInfo[this.animationFinishCurrent];
				if (tab) {
					let tabCenter = tab.left + tab.width / 2;
					let fatherWidth;
					// 活动tab移动到中心时，以屏幕还是tab组件为宽度为基准
					if (this.autoCenterMode === 'window') {
						fatherWidth = windowWidth;
					} else {
						fatherWidth = this.componentsWidth;
					}
					this.scrollLeft = tabCenter - fatherWidth / 2;
				}
			},
			setDx(dx) {
				let nextTabIndex = dx > 0 ? this.animationFinishCurrent + 1 : this.animationFinishCurrent - 1;
				// 判断索引是否超出边界
				nextTabIndex = nextTabIndex <= 0 ? 0 : nextTabIndex;
				nextTabIndex = nextTabIndex >= this.list.length ? this.list.length - 1 : nextTabIndex;
				const tab = this.tabsInfo[nextTabIndex];
				// 当前tab中心点x轴坐标
				let nowTab = this.tabsInfo[this.animationFinishCurrent];
				let nowTabX = nowTab.left + nowTab.width / 2;
				// 下一个tab
				let nextTab = this.tabsInfo[nextTabIndex];
				let nextTabX = nextTab.left + nextTab.width / 2;
				// 两个tab之间的距离，因为下一个tab可能在当前tab的左边或者右边，取绝对值即可
				let distanceX = Math.abs(nextTabX - nowTabX);
				this.line3AddDx = (dx / this.sW) * distanceX;
				this.setTabColor(this.animationFinishCurrent, nextTabIndex, dx);
			},
			// 设置tab的颜色
			setTabColor(nowTabIndex, nextTabIndex, dx) {
				let colorIndex = Math.abs(Math.ceil((dx / this.sW) * 100));
				let colorLength = this.colorGradientArr.length;
				// 处理超出索引边界的情况
				colorIndex = colorIndex >= colorLength ? colorLength - 1 : colorIndex <= 0 ? 0 : colorIndex;
				// 设置下一个tab的颜色
				this.tabsInfo[nextTabIndex].color = this.colorGradientArr[colorIndex];
				// 设置当前tab的颜色
				this.tabsInfo[nowTabIndex].color = this.colorGradientArr[colorLength - 1 - colorIndex];
			},
			// swiper结束滑动
			setFinishCurrent(current) {
				// 如果滑动的索引不一致，修改tab颜色变化，因为可能会有直接点击tab的情况
				if (current != this.animationFinishCurrent) {
					this.tabsInfo.map((val, index) => {
						if (current == index) val.color = this.activeColor;
						else val.color = this.inactiveColor;
						return val;
					});
				}
				this.line3AddDx = 0;
				this.animationFinishCurrent = current;
				this.countLine3Dx();
			}
		}
	};
</script>

<style scoped lang="scss">
	@import "../../libs/css/style.components.scss";
	
	view,
	scroll-view {
		box-sizing: border-box;
	}

	.u-tabs {
		width: 100%;
		transition-property: background-color, color;
	}

	::-webkit-scrollbar,
	::-webkit-scrollbar,
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	/* #ifdef H5 */
	// 通过样式穿透，隐藏H5下，scroll-view下的滚动条
	scroll-view /deep/ ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	/* #endif */

	.u-scroll-view {
		width: 100%;
		white-space: nowrap;
		position: relative;
	}

	.u-tabs-scroll-box {
		position: relative;
	}

	.u-tabs-scorll-flex {
		display: flex;
		justify-content: space-between;
	}

	.u-tabs-scorll-flex .u-tabs-item {
		flex: 1;
	}

	.u-tabs-item {
		position: relative;
		display: inline-block;
		text-align: center;
		transition-property: background-color, color, font-weight;
	}

	.content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.boxStyle {
		pointer-events: none;
		position: absolute;
		transition-property: all;
	}

	.boxStyle2 {
		pointer-events: none;
		position: absolute;
		bottom: 0;
		transition-property: all;
		transform: translateY(-100%);
	}

	.itemBackgroundBox {
		pointer-events: none;
		position: absolute;
		top: 0;
		transition-property: left, background-color;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.itemBackground {
		height: 100%;
		width: 100%;
		transition-property: all;
	}

	.u-scroll-bar {
		position: absolute;
		bottom: 4rpx;
	}
</style>
