<template>
	<view class="u-keyboard" @touchmove.stop.prevent>
		<view class="u-keyboard-grids">
			<view
			    class="u-keyboard-grids-item"
			    :class="[btnBgGray(index) ? 'u-bg-gray' : '', index <= 2 ? 'u-border-top' : '', index < 9 ? 'u-border-bottom' : '', (index + 1) % 3 != 0 ? 'u-border-right' : '']"
			    :style="[itemStyle(index)]"
			    v-for="(item, index) in numList"
			    :key="index"
			    :hover-class="hoverClass(index)"
			    :hover-stay-time="100"
			    @tap="keyboardClick(item)">
				<view class="u-keyboard-grids-btn">{{ item }}</view>
			</view>
			<view class="u-keyboard-grids-item u-bg-gray" hover-class="u-hover-class" :hover-stay-time="100" @touchstart.stop="backspaceClick"
			    @touchend="clearTimer">
				<view class="u-keyboard-back u-keyboard-grids-btn">
					<u-icon name="backspace" :size="38" :bold="true"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 键盘的类型，number-数字键盘，card-身份证键盘
			mode: {
				type: String,
				default: 'number'
			},
			// 是否显示键盘的"."符号
			dotEnabled: {
				type: Boolean,
				default: true
			},
			// 是否打乱键盘按键的顺序
			random: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				backspace: 'backspace', // 退格键内容
				dot: '.', // 点
				timer: null, // 长按多次删除的事件监听
				cardX: 'X' // 身份证的X符号
			};
		},
		computed: {
			// 键盘需要显示的内容
			numList() {
				let tmp = [];
				if (!this.dotEnabled && this.mode == 'number') {
					if (!this.random) {
						return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
					} else {
						return this.$u.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
					}
				} else if (this.dotEnabled && this.mode == 'number') {
					if (!this.random) {
						return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0];
					} else {
						return this.$u.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0]);
					}
				} else if (this.mode == 'card') {
					if (!this.random) {
						return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0];
					} else {
						return this.$u.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0]);
					}
				}
			},
			// 按键的样式，在非乱序&&数字键盘&&不显示点按钮时，index为9时，按键占位两个空间
			itemStyle() {
				return index => {
					let style = {};
					if (this.mode == 'number' && !this.dotEnabled && index == 9) style.flex = '0 0 66.6666666666%';
					return style;
				};
			},
			// 是否让按键显示灰色，只在非乱序&&数字键盘&&且允许点按键的时候
			btnBgGray() {
				return index => {
					if (!this.random && index == 9 && (this.mode != 'number' || (this.mode == 'number' && this.dotEnabled))) return true;
					else return false;
				};
			},
			hoverClass() {
				return index => {
					if (!this.random && index == 9 && (this.mode == 'number' && this.dotEnabled || this.mode == 'card')) return 'u-hover-class';
					else return 'u-keyboard-hover';
				}
			}
		},
		methods: {
			// 点击退格键
			backspaceClick() {
				this.$emit('backspace');
				clearInterval(this.timer); //再次清空定时器，防止重复注册定时器
				this.timer = null;
				this.timer = setInterval(() => {
					this.$emit('backspace');
				}, 250);
			},
			clearTimer() {
				clearInterval(this.timer);
				this.timer = null;
			},
			// 获取键盘显示的内容
			keyboardClick(val) {
				// 允许键盘显示点模式和触发非点按键时，将内容转为数字类型
				if (this.dotEnabled && val != this.dot && val != this.cardX) val = Number(val);
				this.$emit('change', val);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";

	.u-keyboard {
		position: relative;
		z-index: 1003;
	}

	.u-keyboard-grids {
		display: flex;
		flex-wrap: wrap;
	}

	.u-keyboard-grids-item {
		flex: 0 0 33.3333333333%;
		text-align: center;
		font-size: 50rpx;
		color: #333;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 110rpx;
		font-weight: 500;
	}

	.u-bg-gray {
		background-color: $u-border-color;
	}

	.u-keyboard-back {
		font-size: 36rpx;
	}

	.u-keyboard-hover {
		background-color: #e7e6eb;
	}
</style>
