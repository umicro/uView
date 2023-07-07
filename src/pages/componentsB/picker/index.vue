<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				<view class="u-demo-result-line">{{ input ? input : 'Picker值' }}</view>
				<u-picker
					:mode="mode"
					:defaultTime="defaultTime"
					v-model="show"
					:defaultRegion="defaultRegion"
					:params="params"
					end-year="2030"
					@confirm="confirm"
					:defaultSelector="defaultSelector"
					:range="range"
					:range-key="rangKey"
					@columnchange="columnchange"
				></u-picker>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-bottom">参数配置</view>
			<view class="u-config-item">
				<view class="u-item-title">Picker开关</view>
				<u-subsection :current="status" :list="['显示', '隐藏']" @change="statusChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">模式选择</view>
				<u-subsection :list="['单列', '多列', '时间', '地区']" @change="modeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">默认时间</view>
				<u-subsection :list="['2019-12-11 20:15:35', '2020-02-05 13:09:42']" @change="defaultTimeChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">显示时分秒</view>
				<u-subsection :list="['显示', '隐藏']" @change="minSecChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">默认地区</view>
				<u-subsection :list="['广东-深圳-宝安', '海南-三亚-海棠']" @change="defaultRegionChange"></u-subsection>
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
			rangKey: 'name',
			mode: 'selector',
			range: ['一', '片', '冰', '心', '在', '玉', '壶'],
			defaultTime: '2019-12-11 20:15:35',
			defaultSelector: [0],
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
				area: true,
				timestamp: true
			}
		};
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
			this.mode = ['selector', 'multiSelector', 'time', 'region'][index];
			if (this.mode == 'selector') {
				this.range = ['一', '片', '冰', '心', '在', '玉', '壶'];
				this.defaultSelector = [0];
			}
			if (this.mode == 'multiSelector') {
				this.range = [['亚洲', '欧洲'], ['中国', '日本'], ['北京', '上海', '广州']];
				this.defaultSelector = [0, 0, 0];
			}
			this.show = true;
		},
		defaultTimeChange(index) {
			this.defaultTime = index == 0 ? '2019-12-11 20:15:35' : '2020-02-05 13:09:42';
			this.mode = 'time';
			this.show = true;
		},
		defaultRegionChange(index) {
			this.defaultRegion = index == 0 ? ['广东省', '深圳市', '宝安区'] : ['海南省', '三亚市', '海棠区'];
			this.mode = 'region';
			this.show = true;
		},
		minSecChange(index) {
			if (index == 0) {
				this.params.hour = true;
				this.params.minute = true;
				this.params.second = true;
			}
			if (index == 1) {
				this.params.hour = false;
				this.params.minute = false;
				this.params.second = false;
			}
			this.mode = 'time';
			this.show = true;
		},
		confirm(e) {
			// console.log(e);
			this.input = '';
			if (this.mode == 'time') {
				if (this.params.year) this.input += e.year;
				if (this.params.month) this.input += '-' + e.month;
				if (this.params.day) this.input += '-' + e.day;
				if (this.params.hour) this.input += ' ' + e.hour;
				if (this.params.minute) this.input += ':' + e.minute;
				if (this.params.second) this.input += ':' + e.second;
			} else if (this.mode == 'region') {
				this.input = e.province.label + '-' + e.city.label + '-' + e.area.label;
			} else if (this.mode == 'selector') {
				this.input = this.range[e[0]];
			} else if (this.mode == 'multiSelector') {
				this.input = this.range[0][e[0]] + '-' + this.range[1][e[1]] + '-' + this.range[2][e[2]];
			}
		},
		columnchange(e) {
			let column = e.column, index = e.index;
			this.defaultSelector[column] = index;
			switch (column) {
				case 0: 
					switch (index) {
						case 0:
							this.range[1] = ['中国', '日本']
							this.range[2] = ['北京', '上海', '广州']
							break
						case 1:
							this.range[1] = ['英国', '法国']
							this.range[2] = ['伦敦', '曼彻斯特']
							break
					}
					this.defaultSelector.splice(1, 1, 0)
					this.defaultSelector.splice(2, 1, 0)
					break
				case 1: //拖动第2列
					switch (this.defaultSelector[0]) { //判断第一列是什么
						case 0:
							switch (this.defaultSelector[1]) {
								case 0:
									this.range[2] = ['北京', '上海', '广州']
									break
								case 1:
									this.range[2] = ['东京','北海道']
									break
							}
							break
						case 1:
							switch (this.defaultSelector[1]) {
								case 0:
									this.range[2] = ['伦敦', '曼彻斯特']
									break
								case 1:
									this.range[2] = ['巴黎', '马赛']
									break
							}
							break
					}
					this.defaultSelector.splice(2, 1, 0)
					break
			}
		}
	}
};
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
