<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-avatar :mode="mode" :size="size" :src="src" :text="text">
				</u-avatar>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式选择</view>
				<u-subsection vibrateShort :list="['圆形', '圆角方形']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义内容</view>
				<u-subsection vibrateShort current="1" :list="['默认', '图片', '文字']" @change="styleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">尺寸</view>
				<u-subsection vibrateShort current="1" :list="['large', 'default', 'mini', 160]" @change="sizeChange"></u-subsection>
			</view> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: 'circle',
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				text: '', // 优先级比src高
				size: '90'
			}
		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'circle' : 'square';
			},
			styleChange(index) {
				if(index == 0) {
					this.src = '';
					this.text = '';
				} else if(index == 1) {
					this.text = '';
					this.src = 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg';
				} else {
					this.text = '无头像';
				}
			},
			sizeChange(index) {
				this.size = index == 0 ? 'large' : index == 1 ? 'default' : index == 2 ? 'mini' : 160;
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
