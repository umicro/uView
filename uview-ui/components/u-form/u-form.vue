<template>
	<view class="u-form"><slot /></view>
</template>

<script>
export default {
	name: 'u-form',
	props: {
		// 当前form的需要验证字段的集合
		model: {
			type: Object,
			default() {
				return {}
			}
		},
		// 验证规则
		rules: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	provide() {
		return {
			uForm: this
		};
	},
	data() {
		return {
			// 存储当前form下的所有u-form的示例
			fields: []
		};
	},
	created() {
		// 存当前实例
		let that =this;
		// 监听on-form-item-add事件，将子组件添加到fields中
		this.$on('on-form-item-add',item=>{
			if (item) {
				that.fields.push(item);
			}
		});
		// 删除当前有的实例
		this.$on('on-form-item-remove',item=>{
			// 如果当前没有prop的话表示当前不要进行删除（因为没有注入）
			if (item.prop) {
				that.fields.splice(that.fields.indexOf(item), 1);
			}
		})
	},
	methods: {}
};
</script>

<style></style>
