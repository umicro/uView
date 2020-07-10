<template>
	<view>
		<u-select v-model="show" @confirm="confirm" :list="list"></u-select>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			list: [
				{
					label: '测试',
					value: 'b0da629fa36e32110ea86dbfc53db96a',
					extra: {
						ductId: 'b0da629fa36e32110ea86dbfc53db96a',
						name: '测试',
						type: 3,
						imgUrl: '1594173070713.jpg',
						effectiveDay: 4,
						dateType: 'day',
						isInlay: 1,
						createTime: '2020-07-08 09:51:13',
						printerNum: 3,
						createBy: '1',
						updateTime: '2020-07-08 09:51:13',
						updateBy: null,
						ductAccessoryInfoList: []
					}
				},
				{
					label: 'PICC - 2类',
					value: '1c0c70fafe74e840dc79f1bfe2833b2b',
					extra: {
						ductId: '1c0c70fafe74e840dc79f1bfe2833b2b',
						name: 'PICC - 2类',
						type: 3,
						imgUrl: '1592987125427.jpeg',
						effectiveDay: 7,
						dateType: 'day',
						isInlay: 1,
						createTime: '2020-06-24 16:25:25',
						printerNum: 1,
						createBy: '1',
						updateTime: '2020-07-09 12:01:02',
						updateBy: null,
						ductAccessoryInfoList: [
							{
								ductAccessoryId: 'aecdc0e314dcb346a5ec1838929c02e6',
								name: '敷贴 - 2类',
								type: 1,
								imgUrl: '',
								effectiveDay: 3,
								createTime: '2020-06-24 16:26:01',
								createBy: '1',
								updateTime: '2020-07-09 12:02:25',
								dateType: 'day',
								updateBy: null,
								ductId: '1c0c70fafe74e840dc79f1bfe2833b2b',
								printerNum: 2
							},
							{
								ductAccessoryId: 'cea78c669259529a6e66cd0d3b7ea357',
								name: '敷贴 - 1类',
								type: 1,
								imgUrl: '1592987145754.jpeg',
								effectiveDay: 7,
								createTime: '2020-06-24 16:25:46',
								createBy: '1',
								updateTime: '2020-07-09 12:04:29',
								dateType: 'day',
								updateBy: null,
								ductId: '1c0c70fafe74e840dc79f1bfe2833b2b',
								printerNum: 2
							}
						]
					}
				},
				{
					label: 'PICC - 1类',
					value: '903a262182003743bb3062fe7393ffbd',
					extra: {
						ductId: '903a262182003743bb3062fe7393ffbd',
						name: 'PICC - 1类',
						type: 3,
						imgUrl: '1592987111641.jpeg',
						effectiveDay: 56,
						dateType: 'hour',
						isInlay: 1,
						createTime: '2020-06-24 16:25:12',
						printerNum: 1,
						createBy: '1',
						updateTime: '2020-07-09 14:24:02',
						updateBy: null,
						ductAccessoryInfoList: []
					}
				}
			]
		};
	},
	methods: {
		confirm(e) {
			console.log(e);
		}
	}
};
</script>
