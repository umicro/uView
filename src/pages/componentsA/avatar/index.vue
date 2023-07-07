<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-avatar 
					:mode="mode" 
					:size="size" 
					:src="src" 
					:text="text"
					:showLevel="showLevel"
					:showSex="showSex"
					:sexIcon="sexIcon"
					:bgColor='bgColor'
				></u-avatar>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式选择</view>
				<u-subsection :list="['圆形', '圆角方形']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">性别选择</view>
				<u-subsection :list="['男', '女', '不显示']" @change="sexChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">等级</view>
				<u-subsection :list="['显示', '不显示']" @change="levelChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义内容</view>
				<u-subsection current="0" :list="['图片', '文字']" @change="styleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">尺寸</view>
				<u-subsection current="1" :list="['large', 'default', 'mini', 160]" @change="sizeChange"></u-subsection>
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
				size: '90',
				showLevel: true,
				showSex: true,
				sexIcon: 'man',
				bgColor: '#fcbd71'
			}
		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'circle' : 'square';
			},
			styleChange(index) {
				if(index == 0) {
					this.text = '';
					this.src = 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg';
				} else {
					this.text = '无头像';
				}
			},
			sizeChange(index) {
				this.size = index == 0 ? 'large' : index == 1 ? 'default' : index == 2 ? 'mini' : 160;
			},
			sexChange(index) {
				this.showSex = true;
				if(index == 0) this.sexIcon = 'man';
				if(index == 1) this.sexIcon = 'woman';
				if(index == 2) this.showSex = false;
			},
			levelChange(index) {
				this.showLevel = !index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
