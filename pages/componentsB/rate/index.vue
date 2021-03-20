<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-rate v-model="value" :count="count" @change="change"
				:active-color="activeColor" :inaction-color="inactiveColor"
				:active-icon="activeIcon" :inactive-icon="inactiveIcon"
				:disabled="disabled" :colors="colors" :icons="icons"></u-rate>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">初始值</view>
				<u-subsection :list="[1, 2, 3, 4]" @change="currentChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">镂空状态</view>
				<u-subsection current="1" :list="['是', '否']" @change="plainChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义样式</view>
				<u-subsection current="1" :list="['是', '否']" @change="styleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义图标</view>
				<u-subsection current="1" :list="['是', '否']" @change="iconChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否分层</view>
				<u-subsection current="1" :list="['是', '否']" @change="decimalChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否禁用</view>
				<u-subsection current="1" :list="['是', '否']" @change="disabledChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">星星数量</view>
				<u-subsection current="1" :list="[4, 5, 6]" @change="countChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 1.4.5后推荐使用v-model双向绑定，弃用current
				// current: 1,
				activeColor: '#FA3534',
				inactiveColor: '#b2b2b2',
				disabled: false,
				count: 5,
				customIcon: false,
				plain: false,
				value: 0,
				colors: [],
				icons: []
			}
		},
		watch: {
			value(n) {
				// console.log(n);
			}
		},
		computed: {
			activeIcon() {
				let icon = this.customIcon ? 'heart' : 'star';
				return this.plain ? icon : icon + '-fill'
			},
			inactiveIcon() {
				let icon = this.customIcon ? 'heart' : 'star';
				return this.plain ? icon : icon + '-fill'
			}
		},
		methods: {
			currentChange(index) {
				this.value = index == 0 ? 1 : index == 1 ? 2 : index == 2 ? 3 : 4;
			},
			plainChange(index) {
				this.plain = !index;
			},
			disabledChange(index) {
				this.disabled = index == 0 ? true : false;
			},
			countChange(index) {
				this.count = index == 0 ? 4 : index == 1 ? 5 : 6;
			},
			styleChange(index) {
				if(index == 0) {
					this.activeColor = this.$u.color['primary'];
					this.inactiveColor = this.$u.color['info'];
				} else {
					this.activeColor = '#FA3534';
					this.inactiveColor = '#b2b2b2';
				}
			},
			decimalChange(index) {
				if(index == 0) {
					this.colors = ['#ffc454', '#ffb409', '#ff9500'];
					this.icons = ['thumb-down-fill', 'thumb-down-fill', 'thumb-up-fill', 'thumb-up-fill'];
				} else {
					this.colors = [];
					this.icons = [];
				}
			},
			iconChange(index) {
				this.customIcon = !index;
			},
			change(val) {
				// console.log(val);
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-demo {}
</style>
