<template>
	<view class="u-keyboard" @touchmove.stop.prevent>
		<view class="u-keyboard-grids">
			<block>
				<view class="u-keyboard-grids-item" v-for="(group, i) in abc ? EngKeyBoardList : areaList" :key="i">
					<view :hover-stay-time="100" @tap="carInputClick(i, j)" hover-class="u-carinput-hover" class="u-keyboard-grids-btn"
					 v-for="(item, j) in group" :key="j">
						{{ item }}
					</view>
				</view>
				<view @touchstart="backspaceClick" @touchend="clearTimer" :hover-stay-time="100" class="u-keyboard-back"
				 hover-class="u-hover-class">
					<u-icon :size="38" name="backspace" :bold="true"></u-icon>
				</view>
				<view :hover-stay-time="100" class="u-keyboard-change" hover-class="u-carinput-hover" @tap="changeCarInputMode">
					<text class="zh" :class="[!abc ? 'active' : 'inactive']">中</text>
					/
					<text class="en" :class="[abc ? 'active' : 'inactive']">英</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	/**
	 * carKeyboard 车牌号键盘
	 * @description 此为uViw自定义的键盘面板，内含了数字键盘，车牌号键，身份证号键盘3中模式，都有可以打乱按键顺序的选项。
	 * @tutorial https://www.uviewui.com/components/keyboard.html
	 * @property {String} mode 键盘类型，见官网基本使用的说明（默认number）
	 * @property {Boolean} dot-enabled 是否显示"."按键，只在mode=number时有效（默认true）
	 * @property {Boolean} tooltip 是否显示键盘顶部工具条（默认true）
	 * @property {String} tips 工具条中间的提示文字，见官网基本使用的说明，如不需要，请传""空字符
	 * @property {Boolean} cancel-btn 是否显示工具条左边的"取消"按钮（默认true）
	 * @property {Boolean} confirm-btn 是否显示工具条右边的"完成"按钮（默认true）
	 * @property {Boolean} mask 是否显示遮罩（默认true）
	 * @property {Number String} z-index 弹出键盘的z-index值（默认1075）
	 * @property {Boolean} random 是否打乱键盘按键的顺序（默认false）
	 * @property {Boolean} safe-area-inset-bottom 是否开启底部安全区适配（默认false）
	 * @property {Boolean} mask-close-able 是否允许点击遮罩收起键盘（默认true）
	 * @event {Function} change 按键被点击(不包含退格键被点击)
	 * @event {Function} cancel 键盘顶部工具条左边的"取消"按钮被点击
	 * @event {Function} confirm 键盘顶部工具条右边的"完成"按钮被点击
	 * @event {Function} backspace 键盘退格键被点击
	 * @example <u-keyboard ref="uKeyboard" mode="car" v-model="show"></u-keyboard>
	 */
	export default {
		name: "u-keyboard",
		props: {
			// 是否打乱键盘按键的顺序
			random: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				// 车牌输入时，abc=true为输入车牌号码，bac=false为输入省份中文简称
				abc: false
			};
		},
		computed: {
			areaList() {
				let data = [
					'京',
					'沪',
					'粤',
					'津',
					'冀',
					'豫',
					'云',
					'辽',
					'黑',
					'湘',
					'皖',
					'鲁',
					'苏',
					'浙',
					'赣',
					'鄂',
					'桂',
					'甘',
					'晋',
					'陕',
					'蒙',
					'吉',
					'闽',
					'贵',
					'渝',
					'川',
					'青',
					'琼',
					'宁',
					'挂',
					'藏',
					'港',
					'澳',
					'新',
					'使',
					'学'
				];
				let tmp = [];
				// 打乱顺序
				if (this.random) data = this.$u.randomArray(data);
				// 切割成二维数组
				tmp[0] = data.slice(0, 10);
				tmp[1] = data.slice(10, 20);
				tmp[2] = data.slice(20, 30);
				tmp[3] = data.slice(30, 36);
				return tmp;
			},
			EngKeyBoardList() {
				let data = [
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					0,
					'Q',
					'W',
					'E',
					'R',
					'T',
					'Y',
					'U',
					'I',
					'O',
					'P',
					'A',
					'S',
					'D',
					'F',
					'G',
					'H',
					'J',
					'K',
					'L',
					'Z',
					'X',
					'C',
					'V',
					'B',
					'N',
					'M'
				];
				let tmp = [];
				if (this.random) data = this.$u.randomArray(data);
				tmp[0] = data.slice(0, 10);
				tmp[1] = data.slice(10, 20);
				tmp[2] = data.slice(20, 30);
				tmp[3] = data.slice(30, 36);
				return tmp;
			}
		},
		methods: {
			// 点击键盘按钮
			carInputClick(i, j) {
				let value = '';
				// 不同模式，获取不同数组的值
				if (this.abc) value = this.EngKeyBoardList[i][j];
				else value = this.areaList[i][j];
				this.$emit('change', value);
			},
			// 修改汽车牌键盘的输入模式，中文|英文
			changeCarInputMode() {
				this.abc = !this.abc;
			},
			// 点击退格键
			backspaceClick() {
				this.$emit('backspace');
				clearInterval(this.timer); //再次清空定时器，防止重复注册定时器
				this.timer = setInterval(() => {
					this.$emit('backspace');
				}, 250);
			},
			clearTimer() {
				clearInterval(this.timer);
			},
		}
	};
</script>

<style lang="scss" scoped>
	.u-keyboard-grids {
		background: rgb(215, 215, 217);
		padding: 24rpx 0;
		position: relative;
	}

	.u-keyboard-grids-item {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.u-keyboard-grids-btn {
		text-decoration: none;
		width: 62rpx;
		flex: 0 0 64rpx;
		height: 80rpx;
		display: inline-block;
		font-size: 36rpx;
		text-align: center;
		line-height: 80rpx;
		background-color: #fff;
		margin: 8rpx 5rpx;
		border-radius: 8rpx;
		box-shadow: 0 2rpx 0rpx #888992;
		font-weight: 500;
	}

	.u-carinput-hover {
		background-color: rgb(185, 188, 195) !important;
	}

	.u-keyboard-back {
		position: absolute;
		width: 96rpx;
		right: 22rpx;
		bottom: 32rpx;
		height: 80rpx;
		background-color: rgb(185, 188, 195);
		display: flex;
		align-items: center;
		border-radius: 8rpx;
		justify-content: center;
		box-shadow: 0 2rpx 0rpx #888992;
	}

	.u-keyboard-change {
		font-size: 24rpx;
		box-shadow: 0 2rpx 0rpx #888992;
		position: absolute;
		width: 96rpx;
		left: 22rpx;
		line-height: 1;
		bottom: 32rpx;
		height: 80rpx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		border-radius: 8rpx;
		justify-content: center;
	}

	.u-keyboard-change .inactive.zh {
		transform: scale(0.85) translateY(-10rpx);
	}

	.u-keyboard-change .inactive.en {
		transform: scale(0.85) translateY(10rpx);
	}

	.u-keyboard-change .active {
		color: rgb(237, 112, 64);
		font-size: 30rpx;
	}

	.u-keyboard-change .zh {
		transform: translateY(-10rpx);
	}

	.u-keyboard-change .en {
		transform: translateY(10rpx);
	}
</style>
