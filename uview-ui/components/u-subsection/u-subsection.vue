<template>
	<view class="u-subsection" :style="[subsectionStyle]">
		<view class="u-item u-line-1" :style="[itemStyle(index)]" @tap="click(index)" :class="[noBorderRight(index), 'u-item-' + index]"
		 v-for="(item, index) in listInfo" :key="index">
			<view :style="[textStyle(index)]" class="u-item-text u-line-1">{{ item.name }}</view>
		</view>
		<view class="u-item-bg" :style="[itemBarStyle]"></view>
	</view>
</template>

<script>
	/**
	 * subsection 分段器
	 * @description 该分段器一般用于用户从几个选项中选择某一个的场景
	 * @tutorial https://www.uviewui.com/components/subsection.html
	 * @property {Array} list 选项的数组，形式见上方"基本使用"
	 * @property {String Number} current 初始化时默认选中的选项索引值（默认0）
	 * @property {String} active-color 激活时的颜色，mode为subsection时固定为白色（默认#303133）
	 * @property {String} inactive-color 未激活时字体的颜色，mode为subsection时无效（默认#606266）
	 * @property {String} mode 模式选择，见官网"模式选择"说明（默认button）
	 * @property {String Number} font-size 字体大小，单位rpx（默认28）
	 * @property {String Number} height 组件高度，单位rpx（默认70）
	 * @property {Boolean} animation 是否开启动画效果，见上方说明（默认true）
	 * @property {Boolean} bold 激活选项的字体是否加粗（默认true）
	 * @property {String} bg-color 组件背景颜色，mode为button时有效（默认#eeeeef）
	 * @property {String} button-color 按钮背景颜色，mode为button时有效（默认#ffffff）
	 * @event {Function} change 分段器选项发生改变时触发
	 * @example <u-subsection active-color="#ff9900"></u-subsection>
	 */
	export default {
		name: "u-subsection",
		props: {
			// tab的数据
			list: {
				type: Array,
				default () {
					return [];
				}
			},
			// 当前活动的tab的index
			current: {
				type: [Number, String],
				default: 0
			},
			// 激活的颜色
			activeColor: {
				type: String,
				default: '#303133'
			},
			// 未激活的颜色
			inactiveColor: {
				type: String,
				default: '#606266'
			},
			// 模式选择，mode=button为按钮形式，mode=subsection时为分段模式
			mode: {
				type: String,
				default: 'button'
			},
			// 字体大小，单位rpx
			fontSize: {
				type: [Number, String],
				default: 28
			},
			// 是否开启动画效果
			animation: {
				type: Boolean,
				default: true
			},
			// 组件的高度，单位rpx
			height: {
				type: [Number, String],
				default: 70
			},
			// 激活tab的字体是否加粗
			bold: {
				type: Boolean,
				default: true
			},
			// mode=button时，组件背景颜色
			bgColor: {
				type: String,
				default: '#eeeeef'
			},
			// mode = button时，滑块背景颜色
			buttonColor: {
				type: String,
				default: '#ffffff'
			},
			// 在切换分段器的时候，是否让设备震一下
			vibrateShort: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				listInfo: [],
				itemBgStyle: {
					width: 0,
					left: 0,
					backgroundColor: '#ffffff',
					height: '100%',
					transition: ''
				},
				currentIndex: this.current,
				buttonPadding: 3, // mode = button 时，组件的内边距
				borderRadius: 5, // 圆角值
				firstTimeVibrateShort: true // 组件初始化时，会触发current变化，此时不应震动
			};
		},
		watch: {
			current: {
				immediate: true,
				handler(nVal) {
					this.currentIndex = nVal;
					this.changeSectionStatus(nVal);
				}
			}
		},
		created() {
			// 将list的数据，传入listInfo数组，因为不能修改props传递的list值
			// 可以接受直接数组形式，或者数组元素为对象的形式，如：['简介', '评论'],或者[{name: '简介'}, {name: '评论'}]
			this.listInfo = this.list.map((val, index) => {
				if (typeof val != 'object') {
					let obj = {
						width: 0,
						name: val
					};
					return obj;
				} else {
					val.width = 0;
					return val;
				}
			});
		},
		computed: {
			// 设置mode=subsection时，滑块特有的样式
			noBorderRight() {
				return index => {
					if (this.mode != 'subsection') return;
					let classs = '';
					// 不显示右边的边框
					if (index < this.list.length - 1) classs += ' u-none-border-right';
					// 显示整个组件的左右边圆角
					if (index == 0) classs += ' u-item-first';
					if (index == this.list.length - 1) classs += ' u-item-last';
					return classs;
				};
			},
			// 文字的样式
			textStyle() {
				return index => {
					let style = {};
					// 设置字体颜色
					if (this.mode == 'subsection') {
						if (index == this.currentIndex) {
							style.color = '#ffffff';
						} else {
							style.color = this.activeColor;
						}
					} else {
						if (index == this.currentIndex) {
							style.color = this.activeColor;
						} else {
							style.color = this.inactiveColor;
						}
					}
					// 字体加粗
					if (index == this.currentIndex && this.bold) style.fontWeight = 'bold';
					// 文字大小
					style.fontSize = this.fontSize + 'rpx';
					return style;
				};
			},
			// 每个分段器item的样式
			itemStyle() {
				return index => {
					let style = {};
					if (this.mode == 'subsection') {
						// 设置border的样式
						style.borderColor = this.activeColor;
						style.borderWidth = '1px';
						style.borderStyle = 'solid';
					}
					return style;
				};
			},
			// mode=button时，外层view的样式
			subsectionStyle() {
				let style = {};
				style.height = uni.upx2px(this.height) + 'px';
				if (this.mode == 'button') {
					style.backgroundColor = this.bgColor;
					style.padding = `${this.buttonPadding}px`;
					style.borderRadius = `${this.borderRadius}px`;
				}
				return style;
			},
			// 滑块的样式
			itemBarStyle() {
				let style = {};
				style.backgroundColor = this.activeColor;
				style.zIndex = 1;
				if (this.mode == 'button') {
					style.backgroundColor = this.buttonColor;
					style.borderRadius = `${this.borderRadius}px`;
					style.bottom = `${this.buttonPadding}px`;
					style.height = uni.upx2px(this.height) - this.buttonPadding * 2 + 'px';
					style.zIndex = 0;
				}
				return Object.assign(this.itemBgStyle, style);
			}
		},
		mounted() {
			setTimeout(() => {
				this.getTabsInfo();
			}, 10);
		},
		methods: {
			// 改变滑块的样式
			changeSectionStatus(nVal) {
				if (this.mode == 'subsection') {
					// 根据滑块在最左边和最右边时，显示左边和右边的圆角
					if (nVal == this.list.length - 1) {
						this.itemBgStyle.borderRadius = `0 ${this.buttonPadding}px ${this.buttonPadding}px 0`;
					}
					if (nVal == 0) {
						this.itemBgStyle.borderRadius = `${this.buttonPadding}px 0 0 ${this.buttonPadding}px`;
					}
					if (nVal > 0 && nVal < this.list.length - 1) {
						this.itemBgStyle.borderRadius = '0';
					}
				}
				// 更新滑块的位置
				setTimeout(() => {
					this.itemBgLeft();
				}, 10);
				if (this.vibrateShort && !this.firstTimeVibrateShort) {
					// 使手机产生短促震动，微信小程序有效，APP(HX 2.6.8)和H5无效
					// #ifndef H5
					uni.vibrateShort();
					// #endif
				}
				// 第一次过后，设置firstTimeVibrateShort为false，让其下一次可以震动(如果允许震动的话)
				this.firstTimeVibrateShort = false;
			},
			click(index) {
				// 不允许点击当前激活选项
				if (index == this.currentIndex) return;
				this.currentIndex = index;
				this.changeSectionStatus(index);
				this.$emit('change', Number(index));
			},
			// 获取各个tab的节点信息
			getTabsInfo() {
				let view = uni.createSelectorQuery().in(this);
				for (let i = 0; i < this.list.length; i++) {
					view.select('.u-item-' + i).boundingClientRect();
				}
				view.exec(res => {
					if (!res.length) {
						setTimeout(() => {
							this.getTabsInfo();
							return;
						}, 10);
					}
					// 将分段器每个item的宽度，放入listInfo数组
					res.map((val, index) => {
						this.listInfo[index].width = val.width;
					});
					// 初始化滑块的宽度
					if (this.mode == 'subsection') {
						this.itemBgStyle.width = this.listInfo[0].width + 'px';
					} else if (this.mode == 'button') {
						this.itemBgStyle.width = this.listInfo[0].width + 'px';
					}
					// 初始化滑块的位置
					this.itemBgLeft();
				});
			},
			itemBgLeft() {
				// 根据是否开启动画效果，
				if (this.animation) {
					this.itemBgStyle.transition = 'all 0.35s';
				} else {
					this.itemBgStyle.transition = 'all 0s';
				}
				let left = 0;
				// 计算当前活跃item到组件左边的距离
				this.listInfo.map((val, index) => {
					if (index < this.currentIndex) left += val.width;
				});
				// 根据mode不同模式，计算滑块需要移动的距离
				if (this.mode == 'subsection') {
					this.itemBgStyle.left = left + 'px';
				} else if (this.mode == 'button') {
					this.itemBgStyle.left = left + this.buttonPadding + 'px';
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-subsection {
		display: flex;
		align-items: center;
		overflow: hidden;
		position: relative;
	}

	.u-item {
		flex: 1;
		text-align: center;
		font-size: 26rpx;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: $u-main-color;
		display: inline-flex;
		padding: 0 6rpx;
	}

	.u-item-bg {
		background-color: $u-type-primary;
		position: absolute;
		z-index: -1;
	}

	.u-none-border-right {
		border-right: none !important;
	}

	.u-item-first {
		border-top-left-radius: 8rpx;
		border-bottom-left-radius: 8rpx;
	}

	.u-item-last {
		border-top-right-radius: 8rpx;
		border-bottom-right-radius: 8rpx;
	}

	.u-item-text {
		transition: all 0.35s;
		color: $u-main-color;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 3;
	}
</style>
