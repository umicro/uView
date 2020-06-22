<template>
	<view class="u-collapse">
		<slot />
	</view>
</template>

<script>
	/**
	 * collapse 手风琴
	 * @description 通过折叠面板收纳内容区域
	 * @tutorial https://www.uviewui.com/components/collapse.html
	 * @property {Boolean} accordion 是否手风琴模式（默认true）
	 * @property {Boolean} arrow 是否显示标题右侧的箭头（默认true）
	 * @property {String} arrow-color 标题右侧箭头的颜色（默认#909399）
	 * @property {Object} head-style 标题自定义样式，对象形式
	 * @property {Object} body-style 主体自定义样式，对象形式
	 * @property {String} hover-class 样式类名，按下时有效（默认u-hover-class）
	 * @event {Function} change 当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)
	 * @example <u-collapse></u-collapse>
	 */
	export default {
		name:"u-collapse",
		props: {
			// 是否手风琴模式
			accordion: {
				type: Boolean,
				default: true
			},
			// 头部的样式
			headStyle: {
				type: Object,
				default () {
					return {}
				}
			},
			// 主体的样式
			bodyStyle: {
				type: Object,
				default () {
					return {}
				}
			},
			// 每一个item的样式
			itemStyle: {
				type: Object,
				default () {
					return {}
				}
			},
			// 是否显示右侧的箭头
			arrow: {
				type: Boolean,
				default: true
			},
			// 箭头的颜色
			arrowColor: {
				type: String,
				default: '#909399'
			},
			// 标题部分按压时的样式类，"none"为无效果
			hoverClass: {
				type: String,
				default: 'u-hover-class'
			}
		},
		provide() {
			return {
				uCollapse: this
			}
		},
		created() {
			this.childrens = []
		},
		data() {
			return {

			}
		},
		methods: {
			// 重新初始化一次内部的所有子元素的高度计算，用于异步获取数据渲染的情况
			init() {
				this.childrens.forEach((vm, index) => {
					vm.init();
				})
			},
			// collapse item被点击，由collapse item调用父组件方法
			onChange() {
				let activeItem = [];
				this.childrens.forEach((vm, index) => {
					if (vm.isShow) {
						activeItem.push(vm.nameSync);
					}
				})
				// 如果是手风琴模式，只有一个匹配结果，也即activeItem长度为1，将其转为字符串
				if (this.accordion) activeItem = activeItem.join('');
				this.$emit('change', activeItem);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
</style>
