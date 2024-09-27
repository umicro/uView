<template>
	<view>
		<u-form :model="form" ref="uForm">
			<u-divider>动态表单的验证</u-divider>
			<u-form-item v-for="(item,index) in form.names" :prop="'names.'+index+'.name'" :rule="[{required: true,message: '请输入姓名',trigger: 'blur'}]">
				<u-input v-model="item.name"></u-input>
			</u-form-item>
			<u-divider>对象的验证</u-divider>
			<u-form-item  prop="person.name">
				<u-input v-model="form.person.name"></u-input>
			</u-form-item>
		</u-form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					name:"",
					person:{
						name:""
					},
					names:[{
						name:""
					}]
				},
				rules:{
					'person.name':[{required: true,message: '请输入姓名',trigger: 'blur'}]
				}
			}
		},
		mounted() {
			setTimeout(()=>{
				this.form.names.push({name:""})
			},5000)
		},
		methods: {
			
		},
		onReady() {
				this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style>

</style>
