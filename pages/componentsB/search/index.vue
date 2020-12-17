<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-search v-model="value" @change="change" @custom="custom" @search="search" :shape="shape" :clearabled="clearabled" 
				:show-action="showAction" :input-align="inputAlign" @clear="clear"></u-search>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">初始值</view>
				<u-subsection :list="['空', '天山雪莲']" @change="valueChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">搜索框形状</view>
				<u-subsection :list="['圆形', '方形']" @change="shapeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">清除控件</view>
				<u-subsection :list="['启用', '关闭']" @change="clearabledChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">右侧控件</view>
				<u-subsection :list="['启用', '关闭']" @change="showActionChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">水平对齐方式</view>
				<u-subsection :list="['左', '中', '右']" @change="inputAlignChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				shape: 'round',
				clearabled: true,
				showAction: true,
				inputAlign: 'left'
			}
		},
		watch: {
			// 这里的演示为证明通过v-model绑定值，它是双向绑定的，意味着您无需监听change事件
			// 也能知道value值当前的内容
			value(val) {
				// console.log(val);
			}
		},
		methods: {
			valueChange(index) {
				this.value = index == 0 ? '' : '天山雪莲';
			},
			shapeChange(index) {
				this.shape = index == 0 ? 'round' : 'square';
			},
			clearabledChange(index) {
				this.clearabled = index == 0 ? true : false;
			},
			showActionChange(index) {
				this.showAction = index == 0 ? true : false;
			},
			inputAlignChange(index) {
				this.inputAlign = index == 0 ? 'left' : index == 1 ? 'center' : 'right';
			},
			change(value) {
				// 搜索框内容变化时，会触发此事件，value值为输入框的内容
				//console.log(value);
			},
			custom(value) {
				//console.log(value);
				this.$u.toast('输入值为：' + value)
			},
			search(value) {
				this.$refs.uToast.show({
					title: '搜索内容为：' + value,
					type: 'success'
				})
			},
			clear() {
				// console.log(this.value);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
