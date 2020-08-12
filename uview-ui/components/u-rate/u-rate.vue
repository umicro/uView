<template>
	<view class="u-rate" :id="elId" @touchmove.stop.prevent="touchMove">
		<view class="u-star-wrap" v-for="(item, index) in count" :key="index" :class="[elClass]">
			<u-icon
				:name="activeIndex > index ? activeIcon : inactiveIcon"
				@click="click(index + 1, $event)"
				:color="activeIndex > index ? activeColor : inactiveColor"
				:custom-style="{
					fontSize: size + 'rpx',
					padding: `0 ${gutter / 2 + 'rpx'}`
				}"
			></u-icon>
		</view>
	</view>
</template>

<script>
/**
 * rate 评分
 * @description 该组件一般用于满意度调查，星型评分的场景
 * @tutorial https://www.uviewui.com/components/rate.html
 * @property {String Number} count 最多可选的星星数量（默认5）
 * @property {String Number} current 默认选中的星星数量（默认0）
 * @property {Boolean} disabled 是否禁止用户操作（默认false）
 * @property {String Number} size 星星的大小，单位rpx（默认32）
 * @property {String} inactive-color 未选中星星的颜色（默认#b2b2b2）
 * @property {String} active-color 选中的星星颜色（默认#FA3534）
 * @property {String} active-icon 选中时的图标名，只能为uView的内置图标（默认star-fill）
 * @property {String} inactive-icon 未选中时的图标名，只能为uView的内置图标（默认star）
 * @property {String} gutter 星星之间的距离（默认10）
 * @property {String Number} min-count 最少选中星星的个数（默认0）
 * @property {Boolean} allow-half 是否允许半星选择（默认false）
 * @event {Function} change 选中的星星发生变化时触发
 * @example <u-rate :count="count" :current="2"></u-rate>
 */
export default {
	name: 'u-rate',
	props: {
		// 用于v-model双向绑定选中的星星数量
		// 1.4.5版新增
		value: {
			type: [Number, String],
			default: -1
		},
		// 要显示的星星数量
		count: {
			type: [Number, String],
			default: 5
		},
		// 当前需要默认选中的星星(选中的个数)
		// 1.4.5后通过value双向绑定，不再建议使用此参数
		current: {
			type: [Number, String],
			default: 0
		},
		// 是否不可选中
		disabled: {
			type: Boolean,
			default: false
		},
		// 星星的大小，单位rpx
		size: {
			type: [Number, String],
			default: 32
		},
		// 未选中时的颜色
		inactiveColor: {
			type: String,
			default: '#b2b2b2'
		},
		// 选中的颜色
		activeColor: {
			type: String,
			default: '#FA3534'
		},
		// 星星之间的间距，单位rpx
		gutter: {
			type: [Number, String],
			default: 10
		},
		// 最少能选择的星星个数
		minCount: {
			type: [Number, String],
			default: 0
		},
		// 是否允许半星(功能尚未实现)
		allowHalf: {
			type: Boolean,
			default: false
		},
		// 选中时的图标(星星)
		activeIcon: {
			type: String,
			default: 'star-fill'
		},
		// 未选中时的图标(星星)
		inactiveIcon: {
			type: String,
			default: 'star'
		}
	},
	data() {
		return {
			// 生成一个唯一id，否则一个页面多个评分组件，会造成冲突
			elId: this.$u.guid(),
			elClass: this.$u.guid(),
			starBoxLeft: 0, // 评分盒子左边到屏幕左边的距离，用于滑动选择时计算距离
			// 当前激活的星星的index，如果存在value，优先使用value，因为它可以双向绑定(1.4.5新增)
			activeIndex: this.value != -1 ? this.value : this.current,
			starWidth: 0, // 每个星星的宽度
			starWidthArr: [] //每个星星最右边到组件盒子最左边的距离
		};
	},
	watch: {
		current(val) {
			this.activeIndex = val;
		},
		value(val) {
			this.activeIndex = val;
		}
	},
	methods: {
		// 获取评分组件盒子的布局信息
		getElRectById() {
			// uView封装的获取节点的方法，详见文档
			this.$u.getRect('#' + this.elId).then(res => {
				this.starBoxLeft = res.left;
			})
		},
		// 获取单个星星的尺寸
		getElRectByClass() {
			// uView封装的获取节点的方法，详见文档
			this.$u.getRect('.' + this.elClass).then(res => {
				this.starWidth = res.width;
				// 把每个星星右边到组件盒子左边的距离放入数组中
				for (let i = 0; i < this.count; i++) {
					this.starWidthArr[i] = (i + 1) * this.starWidth;
				}
			})
		},
		// 手指滑动
		touchMove(e) {
			if (this.disabled) {
				return;
			}
			if (!e.changedTouches[0]) {
				return;
			}
			const movePageX = e.changedTouches[0].pageX;
			// 滑动点相对于评分盒子左边的距离
			const distance = movePageX - this.starBoxLeft;

			// 如果滑动到了评分盒子的左边界，就设置为0星
			if (distance <= 0) {
				this.activeIndex = 0;
			}
			// 滑动的距离，相当于多少颗星星
			let index = Math.ceil(distance / this.starWidth);
			this.activeIndex = index > this.count ? this.count : index;
			// 对最少颗星星的限制
			if (this.activeIndex < this.minCount) this.activeIndex = this.minCount;
			this.emitEvent();
		},
		// 通过点击，直接选中
		click(index, e) {
			if (this.disabled) {
				return;
			}
			// 半星选择，尚未实现
			if (this.allowHalf) {
			}
			// 对第一个星星特殊处理，只有一个的时候，点击可以取消，否则无法作0星评价
			if (index == 1) {
				if (this.activeIndex == 1) this.activeIndex = 0;
				else this.activeIndex = 1;
			} else {
				this.activeIndex = index;
			}
			// 对最少颗星星的限制
			if (this.activeIndex < this.minCount) this.activeIndex = this.minCount;
			this.emitEvent();
		},
		// 发出事件
		emitEvent() {
			// 发出change事件
			this.$emit('change', this.activeIndex);
			// 同时修改双向绑定的value的值
			if(this.value != -1) {
				this.$emit('input', this.activeIndex);
			}
		}
	},
	mounted() {
		this.getElRectById();
		this.getElRectByClass();
	}
};
</script>

<style scoped lang="scss">
@import "../../libs/css/style.components.scss";

.u-rate {
	display: -webkit-inline-flex;
	display: inline-flex;
	align-items: center;
	margin: 0;
	padding: 0;
}

.u-icon {
	box-sizing: border-box;
}
</style>
