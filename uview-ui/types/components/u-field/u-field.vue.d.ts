// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UField extends Vue {
  /**
   * 输入框的类型
   * @default text
   */
  type?: 'textarea' | 'text';

  /**
   * "label"左边的图标，限uView的图标名称
   */
  icon?: string;

  /**
   * 是否显示field的下边框
   * @version 1.3.9
   * @default true
   */
  'border-bottom'?: boolean;

  /**
   * 是否显示field的上边框
   * @version 1.3.9
   * @default false
   */
  'border-top'?: boolean;

  /**
   * icon的样式，对象形式
   * @version 1.3.9
   */
  'icon-style'?: Record<string, any>;

  /**
   * 输入框右边的图标名称，限uView的图标名称
   */
  'right-icon'?: string;

  /**
   * 是否必填，左边显示红色"*"号
   * @default false
   */
  required?: boolean;

  /**
   * 输入框左边的文字提示
   */
  label?: string;

  /**
   * 是否密码输入方式(用点替换文字)，"type"为"text"时有效
   * @default false
   */
  password?: boolean;

  /**
   * 是否显示右侧清空内容的图标控件(输入框有内容，且获得焦点时才显示)，点击可清空输入框内容
   * @default true
   */
  clearable?: boolean;

  /**
   * "label"的宽度，单位rpx
   * @default 130
   */
  'label-width'?: number | string;

  /**
   * "label"的文字对齐方式
   * @default left
   */
  'label-align'?: 'center' | 'right' | 'left';

  /**
   * 输入框内容对齐方式
   * @default left
   */
  'input-align'?: 'center' | 'right' | 'left';

  /**
   * 左边通过"icon"配置的图标的颜色
   * @default #606266
   */
  'icon-color'?: string;

  /**
   * 清除图标的大小，单位rpx
   * @default 30
   */
  'clear-size'?: number | string;

  /**
   * 输入框的样式，对象形式
   */
  'field-style'?: Record<string, any>;

  /**
   * 是否自动增高输入区域，"type"为"textarea"时有效
   */
  'auto-height'?: boolean;

  /**
   * 显示的错误提示内容，如果为空字符串或者"false"，则不显示错误信息
   */
  'error-message'?: string | boolean;

  /**
   * 输入框的提示文字
   */
  placeholder?: string;

  /**
   * "placeholder"的样式(内联样式，字符串)，如"color: #ddd"
   */
  'placeholder-style'?: string;

  /**
   * 是否自动获得焦点
   * @default false
   */
  focus?: boolean;

  /**
   * 如果"type"为"textarea"，且在一个"position:fixed"的区域，需要指明为"true"
   * @default false
   */
  fixed?: boolean;

  /**
   * 是否不可输入
   * @default false
   */
  disabled?: boolean;

  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度
   * @default 140
   */
  maxlength?: number | string;

  /**
   * 设置键盘右下角按钮的文字，仅在type="text"时生效
   * @default done
   */
  'confirm-type'?: string;

  /**
   * 是否自动去除两端的空格
   * @version 1.5.8
   * @default true
  trim?: boolean;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义左侧的图标
     */
    icon: VNode[];
    /**
     * 自定义右侧内容
     */
    right: VNode[];
  };

  /**
   * 输入框内容发生变化时触发
   * @param value 输入框的内容，建议通过v-model双向绑定输入值，而不是监听此事件的形式
   */
  $emit(eventName: 'input', value: string): this;

  /**
   * 输入框获得焦点时触发
   */
  $emit(eventName: 'focus'): this;

  /**
   * 输入框失去焦点时触发
   */
  $emit(eventName: 'blur'): this;

  /**
   * 点击完成按钮时触发
   * @param value 输入框的内容，建议通过v-model双向绑定输入值，而不是监听此事件的形式
   */
  $emit(eventName: 'confirm', value: string): this;

  /**
   * 通过right-icon生成的图标被点击时触发
   */
  $emit(eventName: 'right-icon-click'): this;

  /**
   * 输入框被点击或者通过right-icon生成的图标被点击时触发，这样设计是考虑到传递右边的图标，一般都为需要弹出"picker"等操作时的场景，点击倒三角图标，理应发出此事件，见文档说明
   */
  $emit(eventName: 'click'): this;
}
