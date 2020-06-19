<template>
	<view>
		<view class="wed">
			<!-- 单选日期 -->
			<text @click="WE=!WE">开始</text>
			<input type="text" v-model="result" />
			<u-calendar v-model="WE" :mode="WEmode" @change="WEchange" start-text="开始" end-text="结束"></u-calendar>
		</view>

		<view class="wed">
			<!-- 多选日期 -->
			<text @click="WED=!WED">开始</text>
			<input type="text" v-model="startDate" />
			<text@click="WED=!WED">结束</text>
				<input type="text" v-model="endDate" />
				<u-calendar v-model="WED" :mode="WEDmode" @change="WEDchange" start-text="开始" end-text="结束"></u-calendar>
		</view>


			<view class="">
			<u-read-more class="u-read-more" :toggle="true" show-height="100" font-size="12" close-text="更多" :shadow-style="shadowStyle">
				<rich-text :nodes="content"></rich-text>
			</u-read-more>
			<u-read-more class="u-read-more" :toggle="true" show-height="100" font-size="12" close-tex t="更多" :shadow-style="shadowStyle">
				<rich-text :nodes="content"></rich-text>
			</u-read-more>

		</view> 

		<view>
			<!-- 字段少的表格 -->
			<u-table>
				<u-tr>
					<u-th width="30%">学校</u-th>
					<u-th>班级</u-th>
					<u-th>年龄</u-th>
					<u-th>爱好</u-th>
				</u-tr>
				<u-tr v-for="(item, index) in itemList" :key="index">
					<u-td width="6%">
						<u-checkbox-group @change="checkboxGroupChange1(index)">
							<u-checkbox @change="checkboxChange" v-model="item.checked"></u-checkbox>
						</u-checkbox-group>
					</u-td>
					<u-td>{{item.warehouseid}}</u-td>
					<u-td>{{item.warehouseid}}</u-td>
					<u-td>{{item.desc}}</u-td>
					<u-td>{{item.desc}}</u-td>
				</u-tr>
			</u-table>
		</view>



		<view>
			<u-table>
				<u-tr>
					<u-th width="38%">名称</u-th>
					<u-th>别名</u-th>
					<u-th>座右铭</u-th>
				</u-tr>
				<u-tr v-for="(item, index) in itemList" :key="index">
					<u-td width="6%">
						<u-radio-group v-model="value" label-disabled="true" @change="radioGroupChange(index)">
							<u-radio @change="radioChange" :name="item.warehouseid">

							</u-radio>
						</u-radio-group>
					</u-td>
					<u-td>{{item.warehouseid}}</u-td>
					<u-td>{{item.warehouseid}}</u-td>
					<u-td>{{item.desc}}</u-td>

				</u-tr>
			</u-table>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				// ----单选------------
				WE: false,
				WEmode: "date",
				result: '',
				// ---------------------

				// ----多选--------------
				WED: false,
				WEDmode: 'range',
				startDate: "",
				endDate: '',
				// ----------------------
				content: `客户:山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
				 shadowStyle: {
					// backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
					paddingTop: "300rpx",
					marginTop: "-300rpx",

				},
				//-------------单选框
				checked: false,
				checked1: false,
				currentSort: 0,
				itemList: {},


				value: 'orange',
				bangkList: [{
						name: '英雄联盟',
						alias: '撸啊撸',
						else: '玩你**',

					},
					{
						name: '守望先锋',
						alias: '守望屁股',
						else: '打你**',

					},
					{
						name: '炉石传说',
						alias: '非酋玩家',
						else: '冲你**',

					}
				],

				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				// value: false,


			}
		},
		created() {
			//页面一进来就发送请求
			uni.request({
				url: 'http://47.99.173.114:9999/wms/wmmdwarehouse/list',
				method: 'GET',
				success: res => {
					this.itemList = res.data
				}
			})

		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				// console.log(e);
			},

			// 选中任一radio时，由radio-group触发
			radioGroupChange(index) {
				console.log(index);
			},


			checkboxGroupChange1(index) {
				console.log("下标为:" + index);

			},
			// 选中某个复选框时，由checkbox时触发
			checkboxChange(e) {
				console.log(e);


			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				console.log("全部选按钮" + e);
			},

			WEchange(e) {
				console.log(e); //打印出来的值
				// ----------时间单选-----------
				this.result = e.result
			},
			WEDchange(e) {
				console.log(e); //打印出来的值
				// ----------时间多选择-----------
				this.startDate = e.startDate //赋值
				this.endDate = e.endDate //赋值

			},
		}
	}
</script>

<style lang="scss">
	.u-read-more {
		border: 1px solid #007AFF;
		margin-top: 10rpx;
	}

	.u-content {
		font-size: 12;

	}

	.wed {
		rich-text {
			font-size: 12rpx;
			color: #0066CC
		}

		text {
			width: 100rpx;
			height: 100%;
		}

		width: 100%;
		height: 100%;
		display: flex;
		border: 2rpx solid #007AFF;
		// justify-content: center;

		.red {

			uni-view,
			uni-text {
				border: 1px solid #007aff;
			}
		}
	}
</style>
