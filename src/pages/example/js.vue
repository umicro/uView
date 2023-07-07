<template>
	<view class="wrap">
		<page-nav :desc="desc" title="nav.js"></page-nav>
		<view class="list-wrap">
			<u-cell-group title-bg-color="rgb(243, 244, 246)" :title="getGroupTitle(item)" v-for="(item, index) in list" :key="index">
				<u-cell-item :titleStyle="{fontWeight: 500}" @click="openPage(item1.path)" :title="getFieldTitle(item1)"
				 v-for="(item1, index1) in item.list" :key="index1">
					<image slot="icon" class="u-cell-icon" :src="getIcon(item1.icon)" mode="widthFix"></image>
				</u-cell-item>
			</u-cell-group>
		</view>
		<u-gap height="70"></u-gap>
		<!-- <u-tabbar :list="vuex_tabbar" :mid-button="true"></u-tabbar> -->
	</view>
</template>

<script>
	import list from "./js.config.js";
	export default {
		data() {
			return {
				list: list,
				// desc: '众多的贴心小工具，是你开发过程中召之即来的利器，让你飞镖在手，百步穿杨'
			}
		},
		computed: {
			getIcon() {
				return path => {
					return 'https://cdn.uviewui.com/uview/example/' + path + '.png';
				}
			},
			desc() {
				return this.$t('js.desc');
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('nav.js')
			});
		},
		methods: {
			openPage(path) {
				this.$u.route({
					url: '/pages/library/' + path + '/index'
				})
			},
			getGroupTitle(item) {
				return this.$i18n.locale == 'zh' ? item.groupName : item.groupName_en
			},
			getFieldTitle(item) {
				return this.$i18n.locale == 'zh' ? item.title : item.title_en
			}
		}
	}
</script>

<style>
	/* page {
		background-color: rgb(240, 242, 244);
	} */
</style>

<style lang="scss" scoped>
	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
</style>
