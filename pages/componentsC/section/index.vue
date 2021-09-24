<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-section :title="title" :right="right" :bold="bold" :color="color" :show-line="showLine"></u-section>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">更换主标题</view>
				<u-subsection :current="1" :list="['是', '否']" @change="titleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">竖条状态</view>
				<u-subsection :list="['显示', '隐藏']" @change="showLineChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">是否显示右边部分</view>
				<u-subsection :list="['是', '否']" @change="rightChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">主标题粗体</view>
				<u-subsection :list="['是', '否']" @change="boldChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">主标题颜色</view>
				<u-subsection :list="['默认', '自定义']" @change="colorChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '红豆生南国',
				bold: true,
				right: true,
				color: this.$u.color['mainColor'],
				showLine: true
			}
		},
		methods: {
			titleChange(index) {
				if(index == 0) this.title = '春来发几枝';
				else  this.title = '红豆生南国';
			},
			rightChange(index) {
				this.right = index == 0 ? true : false;
			},
			boldChange(index) {
				this.bold = index == 0 ? true : false;
			},
			colorChange(index) {
				this.color = index == 0 ? this.$u.color['mainColor'] : this.$u.color['primary'];
			},
			showLineChange(index) {
				this.showLine = !index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {}
</style>
