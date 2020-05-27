<template>
	<view class="">
		<u-form :model="model" :rules="rules">
			<u-form-item :label="label" prop="name">
				<u-input v-model="model.name" />
			</u-form-item>
		</u-form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model: {
					name: ''
				},
				rules: {
					name: [
						{ required: true, message: '请输入活动名称', trigger: 'change' },
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
					]
				},
				label: 'name'
			};
		},
		computed: {
			current() {
				return this.show ? 0 : 1;
			}
		},
		methods: {
			showChange(index) {
				this.show = !index;
			},
			titleChange(index) {
				this.showTitle = !index;
				this.show = true;
			},
			contentChange(index) {
				this.contentSlot = !index;
				this.content = !index;
				this.show = true;
			},
			asyncChange(index) {
				this.show = true;
				this.asyncClose = !index;
			},
			confirm() {
				setTimeout(() => {
					this.show = false;
				}, 2000)
			}
		}
	};
</script>

<style scoped lang="scss">
	
</style>
