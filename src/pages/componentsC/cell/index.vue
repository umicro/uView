<template>
	<view class="u-demo">
		<view class="u-demo-wrap" style="padding-left:0;padding-right:0;margin-left: -40rpx;margin-right: -40rpx;">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<u-cell-group title="读万卷书">
					<u-cell-item center :is-link="true" :label="label" value="铁马冰河入梦来" i ndex="index" @click="click" :hover-class="hoverClass"
					 :arrow="arrow" :title="title" :icon="icon">
						<u-badge :absolute="false" v-if="rightSlot == 'badge'" count="105" slot="right-icon"></u-badge>
						<u-switch v-if="rightSlot == 'switch'" slot="right-icon" v-model="checked"></u-switch>
					</u-cell-item>
					<u-cell-item :border-bottom="false" value="" title="铁马冰河入梦来" value="行万里路" :arrow="false">
						<u-icon slot="icon" size="34" name="calendar" style="margin-right: 5px;"></u-icon>
						<u-icon slot="right-icon" size="34" name="calendar"></u-icon>
						<u-field slot="value"></u-field>
					</u-cell-item>
				</u-cell-group>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">更换图标</view>
				<u-subsection :list="['是', '否']" @change="iconChange"></u-subsection>
			</view>
			<!-- 小程序无法动态切换slot -->
			<!-- #ifndef MP -->
			<view class="u-config-item">
				<view class="u-item-title">自定义右侧内容</view>
				<u-subsection :list="['文字', 'Switch组件', 'Badge组件']" @change="rightSlotChange"></u-subsection>
			</view>
			<!-- #endif -->
			<view class="u-config-item">
				<view class="u-item-title">描述信息</view>
				<u-subsection current="1" :list="['是', '否']" @change="lableChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">更换标题</view>
				<u-subsection :list="['是', '否']" @change="titleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">右侧箭头</view>
				<u-subsection :list="['是', '否']" @change="arrowChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon: 'setting',
				arrow: true,
				label: '',
				title: '青山一道同云雨',
				rightSlot: true,
				checked: false,
			}
		},
		computed: {
			hoverClass() {
				// 如果右侧是switch步进器组件的话，去掉cell的点击反馈，因为这个时候点击的反馈应该在switch上
				return this.rightSlot == 'switch' ? 'none' : 'u-cell-hover';
			}
		},
		methods: {
			iconChange(index) {
				this.icon = index == 0 ? 'setting' : 'file-text'
			},
			arrowChange(index) {
				this.arrow = index == 0 ? true : false
			},
			lableChange(index) {
				this.label = index == 0 ? '岂曰无衣，与子同裳' : ''
			},
			titleChange(index) {
				this.title = index == 0 ? '青山一道同云雨' : '明月何曾是两乡'
			},
			rightSlotChange(index) {
				this.rightSlot = index == 0 ? 'text' : index == 1 ? 'switch' : 'badge'
				if (index == 0) this.arrow = true;
				else this.arrow = false;
			},
			click(index) {
				// console.log(index);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.gab {
		background-color: rgb(245, 245, 245);
		height: 20rpx;
	}

	.wrap {
		height: 100vh;
		background-color: rgb(241, 241, 241);
	}

	.box {
		padding: 30rpx 00rpx;
		font-size: 28rpx;
		color: $u-type-info;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
