<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-demo-result-line">
					{{input ? input : 'Picker值'}}
				</view>
				<u-picker :mode="mode" :defaultTime="defaultTime" v-model="show"
				:defaultRegion="defaultRegion" :params="params" @confirm="confirm"></u-picker>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">
				参数配置
			</view>
			<view class="u-config-item">
				<view class="u-item-title">Picker开关</view>
				<u-subsection vibrateShort :current="status" :list="['显示', '隐藏']" @change="statusChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式选择</view>
				<u-subsection vibrateShort :list="['时间', '地区']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">默认时间</view>
				<u-subsection vibrateShort :list="['2019-12-11 20:15:35', '2020-02-05 13:09:42']" @change="defaultTimeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">显示时分秒</view>
				<u-subsection vibrateShort :list="['显示', '隐藏']" @change="minSecChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">默认地区</view>
				<u-subsection vibrateShort :list="['广东-深圳-宝安', '海南-三亚-海棠']" @change="defaultRegionChange"></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				input: '', 
				mode: 'time',
				defaultTime: '2019-12-11 20:15:35',
				defaultRegion: ['广东省', '深圳市', '宝安区'],
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true,
					province: true,
					city: true,
					area: true
				}
			}
		},
		computed: {
			status() {
				return this.show == true ? 0 : 1;
			}
		},
		methods: {
			statusChange(index) {
				this.show = index == 0 ? true : false;
			},
			modeChange(index) {
				this.mode = index == 0 ? 'time' : 'region';
				this.show = true;
			},
			defaultTimeChange(index) {
				this.defaultTime = index == 0 ? '2019-12-11 20:15:35' : '2020-02-05 13:09:42';
				this.mode = 'time';
				this.show = true;
			},
			defaultRegionChange(index) {
				this.defaultRegion = index == 0 ? ['广东省', '深圳市', '宝安区'] : ['海南省','三亚市', '海棠区'];
				this.mode = 'region';
				this.show = true;
			},
			minSecChange(index) {
				if(index == 0) {
					this.params.hour = true;
					this.params.minute = true;
					this.params.second = true;
				}
				if(index == 1) {
					this.params.hour = false;
					this.params.minute = false;
					this.params.second = false;
				}
				this.mode = 'time';
				this.show = true;
			},
			confirm(e) {
				this.input = '';
				if(this.mode == 'time') {
					if(this.params.year) this.input += e.year;
					if(this.params.month) this.input += '-' + e.month;
					if(this.params.day) this.input += '-' + e.day;
					if(this.params.hour) this.input += " " + e.day;
					if(this.params.minute) this.input += ':' + e.minute;
					if(this.params.second) this.input += ':' + e.second;
				} else {
					this.input = e.province.label + '-' + e.city.label + '-' + e.area.label;
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.input {
		border: 1px solid $u-light-color;
		border-radius: 4px;
		margin-bottom: 20px;
		height: 30px;
		font-size: 26rpx;
		flex: 1;
	}
	
	.input-wrap {
		display: flex;
	}
</style>
