<template>
	<view class="u-search" :style="{
		margin: margin,
	}">
		<view
			class="u-content"
			:style="{
				backgroundColor: bgColor,
				borderRadius: shape == 'round' ? '100rpx' : '10rpx',
				border: borderStyle,
				height: height + 'rpx'
			}"
		>
			<view class="u-icon-wrap">
				<u-icon class="u-clear-icon" :size="30" :name="searchIcon" :color="searchIconColor ? searchIconColor : color"></u-icon>
			</view>
			<input
				confirm-type="search"
				@blur="blur"
				:value="value"
				@confirm="search"
				@input="inputChange"
				:disabled="disabled"
				@focus="getFocus"
				:maxlength="getMaxlength"
				:focus="focus"
				placeholder-class="u-placeholder-class"
				:placeholder="placeholder"
				:placeholder-style="`color: ${placeholderColor}`"
				class="u-input"
				type="text"
				:style="[{
					textAlign: inputAlign,
					color: color,
					backgroundColor: bgColor,
				}, inputStyle]"
			/>
			<view class="u-close-wrap" v-if="keyword && clearabled && focused" @touchstart="clear">
				<u-icon class="u-clear-icon" name="close-circle-fill" size="34" color="#c0c4cc"></u-icon>
			</view>
		</view>
		<view :style="[actionStyle]" class="u-action" 
			:class="[showActionBtn || show ? 'u-action-active' : '']" 
			@touchstart.stop.prevent="custom"
		>{{ actionText }}</view>
	</view>
</template>

<script>
/**
 * search 搜索框
 * @description 搜索组件，集成了常见搜索框所需功能，用户可以一键引入，开箱即用。
 * @tutorial https://www.uviewui.com/components/search.html
 * @property {String} shape 搜索框形状，round-圆形，square-方形（默认round）
 * @property {String} bg-color 搜索框背景颜色（默认#f2f2f2）
 * @property {String} border-color 边框颜色，配置了颜色，才会有边框
 * @property {String} placeholder 占位文字内容（默认“请输入关键字”）
 * @property {Boolean} clearabled 是否启用清除控件（默认true）
 * @property {Boolean} focus 是否自动获得焦点（默认false）
 * @property {Boolean} show-action 是否显示右侧控件（默认true）
 * @property {String} action-text 右侧控件文字（默认“搜索”）
 * @property {Object} action-style 右侧控件的样式，对象形式
 * @property {String} input-align 输入框内容水平对齐方式（默认left）
 * @property {Object} input-style 自定义输入框样式，对象形式
 * @property {Boolean} disabled 是否启用输入框（默认false）
 * @property {String} search-icon-color 搜索图标的颜色，默认同输入框字体颜色
 * @property {String} color 输入框字体颜色（默认#606266）
 * @property {String} placeholder-color placeholder的颜色（默认#909399）
 * @property {String} search-icon 输入框左边的图标，可以为uView图标名称或图片路径
 * @property {String} margin 组件与其他上下左右元素之间的距离，带单位的字符串形式，如"30rpx"
 * @property {Boolean} animation 是否开启动画，见上方说明（默认false）
 * @property {String} value 输入框初始值
 * @property {String | Number} maxlength 输入框最大能输入的长度，-1为不限制长度
 * @property {Boolean} input-style input输入框的样式，可以定义文字颜色，大小等，对象形式
 * @property {String | Number} height 输入框高度，单位rpx（默认64）
 * @event {Function} change 输入框内容发生变化时触发
 * @event {Function} search 用户确定搜索时触发，用户按回车键，或者手机键盘右下角的"搜索"键时触发
 * @event {Function} custom 用户点击右侧控件时触发
 * @event {Function} clear 用户点击清除按钮时触发
 * @example <u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
 */
export default {
	name: "u-search",
	props: {
		// 搜索框形状，round-圆形，square-方形
		shape: {
			type: String,
			default: 'round'
		},
		// 搜索框背景色，默认值#f2f2f2
		bgColor: {
			type: String,
			default: '#f2f2f2'
		},
		// 占位提示文字
		placeholder: {
			type: String,
			default: '请输入关键字'
		},
		// 是否启用清除控件
		clearabled: {
			type: Boolean,
			default: true
		},
		// 是否自动聚焦
		focus: {
			type: Boolean,
			default: false
		},
		// 是否在搜索框右侧显示取消按钮
		showAction: {
			type: Boolean,
			default: true
		},
		// 右边控件的样式
		actionStyle: {
			type: Object,
			default() {
				return {};
			}
		},
		// 取消按钮文字
		actionText: {
			type: String,
			default: '搜索'
		},
		// 输入框内容对齐方式，可选值为 left|center|right
		inputAlign: {
			type: String,
			default: 'left'
		},
		// 是否启用输入框
		disabled: {
			type: Boolean,
			default: false
		},
		// 开启showAction时，是否在input获取焦点时才显示
		animation: {
			type: Boolean,
			default: false
		},
		// 边框颜色，只要配置了颜色，才会有边框
		borderColor: {
			type: String,
			default: 'none'
		},
		// 输入框的初始化内容
		value: {
			type: String,
			default: ''
		},
		// 搜索框高度，单位rpx
		height: {
			type: [Number, String],
			default: 64
		},
		// input输入框的样式，可以定义文字颜色，大小等，对象形式
		inputStyle: {
			type: Object,
			default() {
				return {}
			}
		},
		// 输入框最大能输入的长度，-1为不限制长度(来自uniapp文档)
		maxlength: {
			type: [Number, String],
			default: -1
		},
		// 搜索图标的颜色，默认同输入框字体颜色
		searchIconColor: {
			type: String,
			default: ''
		},
		// 输入框字体颜色
		color: {
			type: String,
			default: '#606266'
		},
		// placeholder的颜色
		placeholderColor: {
			type: String,
			default: '#909399'
		},
		// 组件与其他上下左右元素之间的距离，带单位的字符串形式，如"30rpx"、"30rpx 20rpx"等写法
		margin: {
			type: String,
			default: '0'
		},
		// 左边输入框的图标，可以为uView图标名称或图片路径
		searchIcon: {
			type: String,
			default: 'search'
		}
	},
	data() {
		return {
			keyword: '',
			showClear: false, // 是否显示右边的清除图标
			show: false,
			// 标记input当前状态是否处于聚焦中，如果是，才会显示右侧的清除控件
			focused: this.focus
			// 绑定输入框的值
			// inputValue: this.value
		};
	},
	watch: {
		keyword(nVal) {
			// 双向绑定值，让v-model绑定的值双向变化
			this.$emit('input', nVal);
			// 触发change事件，事件效果和v-model双向绑定的效果一样，让用户多一个选择
			this.$emit('change', nVal);
		},
		value: {
			immediate: true,
			handler(nVal) {
				this.keyword = nVal;
			}
		}
	},
	computed: {
		showActionBtn() {
			if (!this.animation && this.showAction) return true;
			else return false;
		},
		// 样式，根据用户传入的颜色值生成，如果不传入，默认为none
		borderStyle() {
			if (this.borderColor) return `1px solid ${this.borderColor}`;
			else return 'none';
		},
		// 将maxlength转为数值
		getMaxlength() {
			return Number(this.maxlength);
		}
	},
	methods: {
		// 目前HX2.6.9 v-model双向绑定无效，故监听input事件获取输入框内容的变化
		inputChange(e) {
			this.keyword = e.detail.value;
		},
		// 清空输入
		// 也可以作为用户通过this.$refs形式调用清空输入框内容
		clear() {
			this.keyword = '';
			// 延后发出事件，避免在父组件监听clear事件时，value为更新前的值(不为空)
			this.$nextTick(() => {
				this.$emit('clear');
			})
		},
		// 确定搜索
		search(e) {
			this.$emit('search', e.detail.value);
			// 收起键盘
			uni.hideKeyboard();
		},
		// 点击右边自定义按钮的事件
		custom() {
			this.$emit('custom', this.keyword);
			// 收起键盘
			uni.hideKeyboard();
		},
		// 获取焦点
		getFocus() {
			this.focused = true;
			// 开启右侧搜索按钮展开的动画效果
			if (this.animation && this.showAction) this.show = true;
			this.$emit('focus', this.keyword);
		},
		// 失去焦点
		blur() {
			this.focused = false;
			this.show = false;
			this.$emit('blur', this.keyword);
		}
	}
};
</script>

<style lang="scss" scoped>
.u-search {
	display: flex;
	align-items: center;
	flex: 1;
}

.u-content {
	display: flex;
	align-items: center;
	padding: 0 18rpx;
	flex: 1;
}

.u-clear-icon {
	display: flex;
	align-items: center;
}

.u-input {
	flex: 1;
	font-size: 28rpx;
	line-height: 1;
	margin: 0 10rpx;
	color: $u-tips-color;
}

.u-close-wrap {
	width: 40rpx;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
}

.u-placeholder-class {
	color: $u-tips-color;
}

.u-action {
	font-size: 28rpx;
	color: $u-main-color;
	width: 0;
	overflow: hidden;
	transition: all 0.3s;
	white-space: nowrap;
	text-align: center;
}

.u-action-active {
	width: 80rpx;
	margin-left: 10rpx;
}
</style>
