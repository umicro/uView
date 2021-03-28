<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-divider :type="type" :borderColor="borderColor" :bg-color="bgColor" @click="click"
				:half-width="halfWidth" :color="color" :font-size="fontSize">{{text}}</u-divider>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">提示内容</view>
				<u-subsection :list="['没有更多了', '到底了']" @change="textChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">单边线宽</view>
				<u-subsection current="1" :list="['50', '150', '250']" @change="halfWidthChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">横线颜色</view>
				<u-subsection :list="['#dcdfe6', 'primary', 'error', 'warning', 'success']" @change="borderColorChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">内容样式</view>
				<u-subsection :list="['默认', '自定义']" @change="contentChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '没有更多了',
				bgColor: '#fafafa',
				halfWidth: 150,
				borderColor: '#dcdfe6',
				type: 'primary',
				color: '#909399',
				fontSize: '26'
			}
		},
		methods: {
			textChange(index) {
				this.text = index == 0 ? '没有更多了' : '到底了';
			},
			halfWidthChange(index) {
				this.halfWidth = index == 0 ? 50 : index == 1 ? 150 : 250;
			},
			borderColorChange(index) {
				if(index == 0) {
					this.borderColor = '#dcdfe6';
				} else {
					// 因为border-color参数优先级高于type，要让type起作用，就需要设置border-color为空
					this.borderColor = '';
					this.type = index == 1 ? 'primary' : index == 2 ? 'error' : index == 3 ? 'warning' : 'success';
				}
			},
			contentChange(index) {
				if(index == 0) {
					 this.color = '#909399';
					 this.fontSize = 26;
				} else {
					this.color = this.$u.color['primary'];
					this.fontSize = 30;
				}
			},
			click() {
				console.log('click');
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-demo {}
</style>
