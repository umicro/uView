<template>
	<view class="u-form"><slot /></view>
</template>

<script>
	/**
	 * form 表单
	 * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
	 * @tutorial http://uviewui.com/components/form.html
	 * @property {Object} model 表单数据对象
	 * @property {Object} rules 通过ref设置，见官网说明
	 * @property {Array} errorType 错误的提示方式，数组形式，见上方说明(默认['message'])
	 * @example <u-form :model="form" ref="uForm"></u-form>
	 */
	
export default {
	name: 'u-form',
	props: {
		// 当前form的需要验证字段的集合
		model: {
			type: Object,
			default() {
				return {};
			}
		},
		// 验证规则
		// rules: {
		// 	type: [Object, Function, Array],
		// 	default() {
		// 		return {};
		// 	}
		// },
		// 有错误时的提示方式，message-提示信息，border-如果input设置了边框，变成呈红色，
		// border-bottom-下边框呈现红色，none-无提示
		errorType: {
			type: Array,
			default() {
				return ['message', 'toast']
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
			rules: {}
		};
	},
	created() {
		// 存储当前form下的所有u-form-item的实例
		// 不能定义在data中，否则微信小程序会造成循环引用而报错
		this.fields = [];
		// 存当前实例
		let that = this;
		// 监听on-form-item-add事件，将子组件添加到fields中
		this.$on('on-form-item-add', item => {
			if (item) {
				that.fields.push(item);
			}
		});
		// 删除当前有的实例
		this.$on('on-form-item-remove', item => {
			// 如果当前没有prop的话表示当前不要进行删除（因为没有注入）
			if (item.prop) {
				that.fields.splice(that.fields.indexOf(item), 1);
			}
		});
	},
	methods: {
		setRules(rules) {
			this.rules = rules;
		},
		// 清空所有u-form-item组件的内容，本质上是调用了u-form-item组件中的resetField()方法
		resetFields() {
			this.fields.map(field => {
				field.resetField();
			});
		},
		// 校验全部数据
		validate(callback) {
			return new Promise(resolve => {
				// 对所有的u-form-item进行校验
				let valid = true; // 默认通过
				let count = 0; // 用于标记是否检查完毕
				let errorArr = []; // 存放错误信息
				this.fields.map(field => {
					// 调用每一个u-form-item实例的validation的校验方法
					field.validation('', error => {
						// 如果任意一个u-form-item校验不通过，就意味着整个表单不通过
						if (error) {
							valid = false;
							errorArr.push(error);
						}
						// 当历遍了所有的u-form-item时，调用promise的then方法
						if (++count === this.fields.length) {
							resolve(valid); // 进入promise的then方法
							// 判断是否设置了toast的提示方式，只提示最前面的表单域的第一个错误信息
							if(this.errorType.indexOf('none') === -1 && this.errorType.indexOf('toast') >= 0 && errorArr.length) {
								this.$u.toast(errorArr[0]);
							}
							// 调用回调方法
							if (typeof callback == 'function') callback(valid);
						}
					});
				});
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import "../../libs/css/style.components.scss";
</style>
