<template>
	<u-popup :maskCloseAble="maskCloseAble" mode="bottom" :popup="false" v-model="value" length="auto"
	 :safeAreaInsetBottom="safeAreaInsetBottom" @close="close" :z-index="uZIndex">
		<view class="u-calendar-header" :class="{'u-calendar-radius':radius}" @touchmove.stop.prevent="stop" v-if="isFixed">
				<view>日期选择</view>
				<view class="u-iconfont u-font-close" hover-class="u-opacity" :hover-stay-time="150" @tap="hide"></view>
			</view>
			<view class="u-date-box">
				<view class="u-iconfont u-font-arrowleft" :style="{color:yearArrowColor}" hover-class="u-opacity"
				 :hover-stay-time="150" v-if="arrowType == 1" @tap="changeYear(0)"></view>
				<view class="u-iconfont u-font-arrowleft" :style="{color:monthArrowColor}" hover-class="u-opacity"
				 :hover-stay-time="150" @tap="changeMonth(0)"></view>
				<view class="u-date_time">{{ showTitle }}</view>
				<view class="u-iconfont u-font-arrowright" :style="{color:monthArrowColor}" hover-class="u-opacity"
				 :hover-stay-time="150" @tap="changeMonth(1)"></view>
				<view class="u-iconfont u-font-arrowright" :style="{color:yearArrowColor}" hover-class="u-opacity"
				 :hover-stay-time="150" v-if="arrowType == 1" @tap="changeYear(1)"></view>
			</view>
			<view class="u-date-header">
				<view class="u-date">日</view>
				<view class="u-date">一</view>
				<view class="u-date">二</view>
				<view class="u-date">三</view>
				<view class="u-date">四</view>
				<view class="u-date">五</view>
				<view class="u-date">六</view>
			</view>
			<view class="u-date-content">
				<block v-for="(item, index) in weekdayArr" :key="index">
					<view class="u-date"></view>
				</block>
				<view class="u-date" :class="{'u-opacity':openDisAbled(year,month,index+1),'u-start-date':(type==2 && startDate==`${year}-${month}-${index+1}`) ||type==1,'u-end-date':(type==2 && endDate==`${year}-${month}-${index+1}`) || type==1}"
				 :style="{backgroundColor:isFixed? getColor(index,1):'transparent'}" v-for="(item, index) in daysArr" :key="index"
				 @tap="dateClick(index)">
					<view class="u-date-text" :style="{color:isFixed? getColor(index,2):getStatusData(3,index),backgroundColor: getStatusData(2,index)}">
						<view v-if="isFixed || !getStatusData(4,index)">{{ index + 1 }}</view>
						<view class="u-custom-desc">{{getStatusData(1,index)}}</view>
						<text class="u-iconfont u-font-check" v-if="getStatusData(4,index)"></text>
					</view>
					<view class="u-date-desc" :style="{color:activeColor}" v-if="type==2 && startDate==`${year}-${month}-${index+1}` && startDate!=endDate">{{startText}}</view>
					<view class="u-date-desc" :style="{color:activeColor}" v-if="type==2 && endDate==`${year}-${month}-${index+1}`">{{endText}}</view>
				</view>
				<view class="u-bg-month">{{month}}</view>
			</view>
		
			<view class="u-calendar-op" v-if="isFixed" @touchmove.stop.prevent="stop">
				<view class="u-calendar-result">
					<text>{{type==1?activeDate:startDate}}</text>
					<text v-if="endDate">至{{endDate}}</text>
				</view>
				<view class="u-calendar-btn_box">
					<u-button :type="btnType" height="72rpx" shape="circle" :size="28" @click="btnFix(false)">确定</u-button>
				</view>
			</view>
		</view>
	</u-popup>
</template>
<script>
	export default {
		name: 'u-calendar',
		props: {
			safeAreaInsetBottom: {
				type: Boolean,
				default: false
			},
			// 是否允许通过点击遮罩关闭Picker
			maskCloseAble: {
				type: Boolean,
				default: true
			},
			// 通过双向绑定控制组件的弹出与收起
			value: {
				type: Boolean,
				default: false
			},
			// 弹出的z-index值
			zIndex: {
				type: [String, Number],
				default: 0
			},
			//1-切换月份和年份 2-切换月份
			arrowType: {
				type: [Number, String],
				default: 1
			},
			//1-单个日期选择 2-开始日期+结束日期选择
			type: {
				type: Number,
				default: 1
			},
			//可切换最大年份
			maxYear: {
				type: Number,
				default: 2030
			},
			//可切换最小年份
			minYear: {
				type: Number,
				default: 1920
			},
			//最小可选日期(不在范围内日期禁用不可选)
			minDate: {
				type: String,
				default: '1920-01-01'
			},
			/**
			 * 最大可选日期
			 * 默认最大值为今天，之后的日期不可选
			 * 2030-12-31
			 * */
			maxDate: {
				type: String,
				default: ''
			},
			//显示圆角
			radius: {
				type: Boolean,
				default: true
			},
			//状态 数据顺序与当月天数一致，index=>day
			/**
			 * [{
				 * text:"", 描述：2字以内
				 * value:"",状态值 
				 * bgColor:"",背景色
				 * color:""  文字颜色,
				 * check:false //是否显示对勾
				 * 
			 }]
			 * 
			 * **/
			status: {
				type: Array,
				default () {
					return [];
				}
			},
			//月份切换箭头颜色
			monthArrowColor: {
				type: String,
				default: '#999'
			},
			//年份切换箭头颜色
			yearArrowColor: {
				type: String,
				default: '#bcbcbc'
			},
			//默认日期字体颜色
			color: {
				type: String,
				default: '#333'
			},
			//选中|起始结束日期背景色
			activeBgColor: {
				type: String,
				default: '#5677fc'
			},
			//选中|起始结束日期字体颜色
			activeColor: {
				type: String,
				default: '#fff'
			},
			//范围内日期背景色
			rangeBgColor: {
				type: String,
				default: 'rgba(86,119,252,0.1)'
			},
			//范围内日期字体颜色
			rangeColor: {
				type: String,
				default: '#5677fc'
			},
			//type=2时生效，起始日期自定义文案
			startText: {
				type: String,
				default: '开始'
			},
			//type=2时生效，结束日期自定义文案
			endText: {
				type: String,
				default: '结束'
			},
			//按钮样式类型
			btnType: {
				type: String,
				default: 'primary'
			},
			isFixed: {
				type: Boolean,
				default: false
			},
			//当前选中日期带选中效果
			isActiveCurrent: {
				type: Boolean,
				default: true
			},
			//切换年月是否触发事件 type=1时生效
			isChange: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				isShow: false,
				weekday: 1, // 星期几,值为1-7
				weekdayArr:[],
				days: 0, //当前月有多少天
				daysArr:[],
				showTitle: '',
				year: 2020,
				month: 0,
				day: 0,
				startYear: 0,
				startMonth: 0,
				startDay: 0,
				endYear: 0,
				endMonth: 0,
				endDay: 0,
				today: '',
				activeDate: '',
				startDate: '',
				endDate: '',
				isStart: true,
				min: null,
				max: null
			};
		},
		computed: {
			dataChange() {
				return `${this.type}-${this.minDate}-${this.maxDate}`;
			}
		},
		watch: {
			dataChange(val) {
				this.init()
			}
		},
		created() {
			this.init()
		},
		methods: {
			getColor(index, type) {
				let color = type == 1 ? '' : this.color;
				let day = index + 1
				let date = `${this.year}-${this.month}-${day}`
				let timestamp = new Date(date.replace(/\-/g, '/')).getTime();
				let start = this.startDate.replace(/\-/g, '/')
				let end = this.endDate.replace(/\-/g, '/')
				if ((this.isActiveCurrent && this.activeDate == date) || this.startDate == date || this.endDate == date) {
					color = type == 1 ? this.activeBgColor : this.activeColor;
				} else if (this.endDate && timestamp > new Date(start).getTime() && timestamp < new Date(end).getTime()) {
					color = type == 1 ? this.rangeBgColor : this.rangeColor;
				}
				return color;
			},
			//获取状态数据
			getStatusData(type, index) {
				//1-描述text,2-bgColor背景色,3-color文字颜色 4-check 是否显示对勾
				let val = ["", "transparent", "#333", ""][type - 1];
				if (!this.isFixed && this.status && this.status.length > 0) {
					let item = this.status[index]
					if (item) {
						switch (type) {
							case 1:
								val = item.text;
								break;
							case 2:
								val = item.bgColor;
								break;
							case 3:
								val = item.color;
								break;
							case 4:
								val = item.check;
								break;
							default:
								break;
						}
					}
				}
				return val;
			},
			init() {
				let now = new Date();
				this.year = now.getFullYear();
				this.month = now.getMonth() + 1;
				this.day = now.getDate();
				this.today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
				this.activeDate = this.today;
				this.min = this.initDate(this.minDate);
				this.max = this.initDate(this.maxDate || this.today);
				this.startDate = "";
				this.startYear = 0;
				this.startMonth = 0;
				this.startDay = 0;
				this.endYear = 0;
				this.endMonth = 0;
				this.endDay = 0;
				this.endDate = "";
				this.isStart = true;
				this.changeData();
			},
			//日期处理
			initDate(date) {
				let fdate = date.split('-');
				return {
					year: Number(fdate[0] || 1920),
					month: Number(fdate[1] || 1),
					day: Number(fdate[2] || 1)
				}
			},
			openDisAbled: function(year, month, day) {
				let bool = true;
				let date = `${year}/${month}/${day}`;
				// let today = this.today.replace(/\-/g, '/');
				let min = `${this.min.year}/${this.min.month}/${this.min.day}`;
				let max = `${this.max.year}/${this.max.month}/${this.max.day}`;
				let timestamp = new Date(date).getTime();
				if (timestamp >= new Date(min).getTime() && timestamp <= new Date(max).getTime()) {
					bool = false;
				}
				return bool;
			},
			generateArray: function(start, end) {
				return Array.from(new Array(end + 1).keys()).slice(start);
			},
			formatNum: function(num) {
				return num < 10 ? '0' + num : num + '';
			},
			stop() {
				return !this.isFixed
			},
			//一个月有多少天
			getMonthDay(year, month) {
				let days = new Date(year, month, 0).getDate();
				return days;
			},
			getWeekday(year, month) {
				let date = new Date(`${year}/${month}/01 00:00:00`);
				return date.getDay();
			},
			checkRange(year) {
				let overstep = false;
				if (year < this.minYear || year > this.maxYear) {
					uni.showToast({
						title: "日期超出范围啦~",
						icon: 'none'
					})
					overstep = true;
				}
				return overstep;
			},
			changeMonth(isAdd) {
				if (isAdd) {
					let month = this.month + 1;
					let year = month > 12 ? this.year + 1 : this.year;
					if (!this.checkRange(year)) {
						this.month = month > 12 ? 1 : month;
						this.year = year;
						this.changeData();
					}

				} else {
					let month = this.month - 1;
					let year = month < 1 ? this.year - 1 : this.year;
					if (!this.checkRange(year)) {
						this.month = month < 1 ? 12 : month;
						this.year = year;
						this.changeData();
					}
				}
			},
			changeYear(isAdd) {
				let year = isAdd ? this.year + 1 : this.year - 1;
				if (!this.checkRange(year)) {
					this.year = year;
					this.changeData();
				}
			},
			changeData() {
				this.days = this.getMonthDay(this.year, this.month);
				this.daysArr=this.generateArray(1,this.days)
				this.weekday = this.getWeekday(this.year, this.month);
				this.weekdayArr=this.generateArray(1,this.weekday)
				this.showTitle = `${this.year}年${this.month}月`;
				if (this.isChange && this.type == 1) {
					this.btnFix(true);
				}
			},
			dateClick: function(day) {
				day += 1;
				if (!this.openDisAbled(this.year, this.month, day)) {
					this.day = day;
					let date = `${this.year}-${this.month}-${day}`;
					if (this.type == 1) {
						this.activeDate = date;
					} else {
						let compare = new Date(date.replace(/\-/g, '/')).getTime() < new Date(this.startDate.replace(/\-/g, '/')).getTime()
						if (this.isStart || compare) {
							this.startDate = date;
							this.startYear = this.year;
							this.startMonth = this.month;
							this.startDay = this.day;
							this.endYear = 0;
							this.endMonth = 0;
							this.endDay = 0;
							this.endDate = "";
							this.activeDate = "";
							this.isStart = false;
						} else {
							this.endDate = date;
							this.endYear = this.year;
							this.endMonth = this.month;
							this.endDay = this.day;
							this.isStart = true;
						}
					}
					if (!this.isFixed) {
						this.btnFix();
					}
				}
			},
			show() {
				this.isShow = true;
			},
			hide() {
				this.isShow = false;
			},
			getWeekText(date) {
				date = new Date(`${date.replace(/\-/g, '/')} 00:00:00`);
				let week = date.getDay();
				return '星期' + ['日', '一', '二', '三', '四', '五', '六'][week];
			},
			btnFix(show) {
				if (!show) {
					this.hide();
				}
				if (this.type == 1) {
					let arr = this.activeDate.split('-')
					let year = this.isChange ? this.year : Number(arr[0]);
					let month = this.isChange ? this.month : Number(arr[1]);
					let day = this.isChange ? this.day : Number(arr[2]);
					//当前月有多少天
					let days = this.getMonthDay(year, month);
					let result = `${year}-${this.formatNum(month)}-${this.formatNum(day)}`;
					let weekText = this.getWeekText(result);
					let isToday = false;
					if (`${year}-${month}-${day}` == this.today) {
						//今天
						isToday = true;
					}
					this.$emit('change', {
						year: year,
						month: month,
						day: day,
						days: days,
						result: result,
						week: weekText,
						isToday: isToday,
						switch: show //是否是切换年月操作
					});
				} else {
					if (!this.startDate || !this.endDate) return;
					let startMonth = this.formatNum(this.startMonth);
					let startDay = this.formatNum(this.startDay);
					let startDate = `${this.startYear}-${startMonth}-${startDay}`;
					let startWeek = this.getWeekText(startDate)

					let endMonth = this.formatNum(this.endMonth);
					let endDay = this.formatNum(this.endDay);
					let endDate = `${this.endYear}-${endMonth}-${endDay}`;
					let endWeek = this.getWeekText(endDate);
					this.$emit('change', {
						startYear: this.startYear,
						startMonth: this.startMonth,
						startDay: this.startDay,
						startDate: startDate,
						startWeek: startWeek,
						endYear: this.endYear,
						endMonth: this.endMonth,
						endDay: this.endDay,
						endDate: endDate,
						endWeek: endWeek
					});
				}
			}
		}
	};
</script>

<style scoped>
	@font-face {
		font-family: 'tuiDateFont';
		src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAVgAA0AAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAFRAAAABoAAAAci0/w50dERUYAAAUkAAAAHgAAAB4AKQANT1MvMgAAAaAAAABDAAAAVjxuSNNjbWFwAAAB+AAAAEoAAAFS5iPQt2dhc3AAAAUcAAAACAAAAAj//wADZ2x5ZgAAAlQAAAFHAAABvPf29TBoZWFkAAABMAAAADAAAAA2GMsN3WhoZWEAAAFgAAAAHQAAACQHjAOFaG10eAAAAeQAAAATAAAAFgzQAPJsb2NhAAACRAAAABAAAAAQAOoBSG1heHAAAAGAAAAAHgAAACABEwA3bmFtZQAAA5wAAAFJAAACiCnmEVVwb3N0AAAE6AAAADQAAABLUwjqHHjaY2BkYGAAYp5Gj5/x/DZfGbhZGEDg1tUn7+F00P/LzOuY9YFcDgYmkCgAa0gNlHjaY2BkYGBu+N/AEMPCAALM6xgYGVABCwBT4AMaAAAAeNpjYGRgYGBn0GZgYgABEMkFhAwM/8F8BgANaAFLAAB42mNgZGFgnMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PGJ49ZG7438AQw9zA0AAUZgTJAQDrcAy8AHjaY2GAABYIDgLCBQx1AAcEAc8AeNpjYGBgZoBgGQZGBhDwAfIYwXwWBgMgzQGETAwMzxifcTx7+P8/kMUAYUkxS/6VVIXqAgNGNgY4lxGoB6QPBTAyDHsAADDkDYkAAAAAAAAAAAAAADQAagC2AN542m2QsU7DMBCG/Tt1bNPUiUnkSgiVtqKpxJAgVLVbeAa6MaK+B4JXgJWBjY21UtW5gpkdMTFX7dzApaJLhXU6n8+n//ttxtn458N79XJWZ8eMxS00C4wy9A1EP8PQncAlIQzS4WgsVtPpSmwzV3OFRqLetH5TSQMK939X61ptPZ2p2EAttNMLBRMrtschQblDeS34aY50cIkCzg/B2Y5C+VpyQxhFkRgu515O8jvU5mmPM2O0wJ5Z27vhX+yMsV437WvCdTM+GI40MgwKfuGammC0uURqeqFMfe9cxaJclkt5GMaB1hIR1VobOgpEiKq+sLZcIrJWhO3/Jw7qWlYj1Jf21FaCtmd5bevrlk28O/7A4spXTl4KTh9MTlqQ8PESBRstReic+sRj0Dni9fIqmNS/pXNWCvWOeYBmx5S9Bsn9Ah+5WtAAeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAO2MGiTIxMjMyMLIys7GmJeRmlmWZQ2pQ5OSORLaU0Mz2/FACDfwlbAAAAAf//AAIAAQAAAAwAAAAWAAAAAgABAAMABgABAAQAAAACAAAAAHjaY2BgYGQAgqtL1DlA9K2rT97DaABNlwiuAAA=) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	.u-iconfont {
		font-family: "tuiDateFont" !important;
		font-size: 36rpx;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.u-font-close:before {
		content: "\e608";
	}

	.u-font-check:before {
		content: "\e6e1";
	}

	.u-font-arrowright:before {
		content: "\e600";
	}

	.u-font-arrowleft:before {
		content: "\e601";
	}

	.u-date-box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20rpx 0 30rpx;
		background-color: #fff;
	}

	.u-calendar-radius {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		overflow: hidden;
	}

	.u-date_time {
		padding: 0 16rpx;
		color: #333;
		font-size: 32rpx;
		line-height: 32rpx;
		font-weight: bold;
	}

	.u-font-arrowleft {
		margin-right: 32rpx;
	}

	.u-font-arrowright {
		margin-left: 32rpx;
	}

	.u-date-header {
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #fff;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #555;
		box-shadow: 0 15rpx 20rpx -15rpx #efefef;
		position: relative;
		z-index: 2;
	}

	.u-date-content {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 12rpx 0;
		box-sizing: border-box;
		background-color: #fff;
		position: relative;
	}

	.u-bg-month {
		position: absolute;
		font-size: 260rpx;
		line-height: 260rpx;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: #F5F5F7;
		z-index: 1;
	}


	.u-date {
		width: 14.2857%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 12rpx 0;
		overflow: hidden;
		position: relative;
		z-index: 2;
	}

	.u-start-date {
		border-top-left-radius: 8rpx;
		border-bottom-left-radius: 8rpx;
	}

	.u-end-date {
		border-top-right-radius: 8rpx;
		border-bottom-right-radius: 8rpx;
	}

	.u-date-text {
		width: 80rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 32rpx;
		position: relative;
		border-radius: 50%;
	}

	.u-btn-calendar {
		padding: 16rpx;
		box-sizing: border-box;
		text-align: center;
		text-decoration: none;
	}

	.u-opacity {
		opacity: 0.5;
	}

	.u-bottom-popup {
		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		visibility: hidden;
		transform: translate3d(0, 100%, 0);
		transform-origin: center;
		transition: all 0.3s ease-in-out;
		min-height: 20rpx;
	}

	.u-popup-show {
		transform: translate3d(0, 0, 0);
		visibility: visible;
	}

	.u-popup-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 9996;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.u-mask-show {
		opacity: 1;
		visibility: visible;
	}

	.u-calendar-header {
		width: 100%;
		height: 80rpx;
		padding: 0 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		font-size: 30rpx;
		background-color: #fff;
		color: #555;
		position: relative;
	}

	.u-font-close {
		position: absolute;
		right: 30rpx;
		top: 50%;
		transform: translateY(-50%);
		color: #999;
	}

	.u-btn-calendar {
		padding: 16rpx;
		box-sizing: border-box;
		text-align: center;
		text-decoration: none;
	}

	.u-font-check {
		color: #fff;
		font-size: 54rpx;
		line-height: 54rpx;
	}

	.u-custom-desc {
		width: 100%;
		font-size: 24rpx;
		line-height: 24rpx;
		transform: scale(0.75);
		transform-origin: center center;
		position: absolute;
		left: 0;
		text-align: center;
		bottom: 2rpx;
	}

	.u-date-desc {
		width: 100%;
		font-size: 24rpx;
		line-height: 24rpx;
		position: absolute;
		left: 0;
		transform: scale(0.8);
		transform-origin: center center;
		text-align: center;
		bottom: 8rpx;
		z-index: 2;
	}

	.u-calendar-op {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #fff;
		padding: 0 42rpx 30rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #666;
	}

	.u-calendar-result {
		height: 48rpx;
	}

	.u-calendar-btn_box {
		width: 100%;
	}
</style>