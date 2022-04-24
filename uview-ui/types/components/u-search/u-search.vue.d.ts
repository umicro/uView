// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface USearch extends Vue {
  /**
   * 双向绑定输入框搜索值
   */
  'v-model'?: string;

  /**
   * 搜索框形状，round-圆形，square-方形
   * @default round
   */
  shape?: 'square' | 'round';

  /**
   * 搜索框背景颜色
   * @default #f2f2f2
   */
  'bg-color'?: string;

  /**
   * 边框颜色，配置了颜色，才会有边框
   */
  'border-color'?: string;

  /**
   * 占位文字内容
   * @default 请输入关键字
   */
  placeholder?: string;

  /**
   * 是否启用清除控件
   * @default true
   */
  clearabled?: boolean;

  /**
   * 是否自动获得焦点
   * @default false
   */
  focus?: boolean;

  /**
   * 是否显示右侧控件(右侧的"搜索"按钮)
   * @default true
   */
  'show-action'?: boolean;

  /**
   * 右侧控件文字
   * @default 搜索
   */
  'action-text'?: string;

  /**
   * 右侧控件的样式，对象形式
   */
  'action-style'?: Record<string, any>;

  /**
   * 输入框内容水平对齐方式
   * @default left
   */
  'input-align'?: 'center' | 'right' | 'left';

  /**
   * 是否启用输入框
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否开启动画，见文档说明
   * @default false
   */
  animation?: boolean;

  /**
   * 输入框高度，单位rpx
   * @default 64
   */
  height?: string | number;

  /**
   * 搜索图标的颜色，默认同输入框字体颜色
   */
  'search-icon-color'?: string;

  /**
   * 输入框字体颜色
   * @default #606266
   */
  color?: string;

  /**
   * placeholder的颜色
   * @default #909399
   */
  'placeholder-color'?: string;

  /**
   * 组件与其他上下左右元素之间的距离，带单位的字符串形式，如"30rpx"、"30rpx 20rpx"等写法
   */
  margin?: string;

  /**
   * 输入框最大能输入的长度，-1为不限制长度
   * @default -1
   */
  maxlength?: string | number;

  /**
   * 自定义输入框样式，对象形式
   */
  'input-style'?: Record<string, any>;

  /**
   * 输入框左边的图标，可以为uView图标名称或图片路径
   * @version 1.3.5
   * @default search
   */
  'search-icon'?: string;

  /**
   * 输入框内容发生变化时触发
   * @param value 输入框的值
   */
  $emit(eventName: 'change', value: string): this;

  /**
   * 用户确定搜索时触发，用户按回车键，或者手机键盘右下角的"搜索"键时触发
   * @param value 输入框的值
   */
  $emit(eventName: 'search', value: string): this;

  /**
   * 用户点击右侧控件时触发
   * @param value 输入框的值
   */
  $emit(eventName: 'custom', value: string): this;

  /**
   * 输入框失去焦点时触发
   * @param value 输入框的值
   */
  $emit(eventName: 'blur', value: string): this;

  /**
   * 输入框获得焦点时触发
   * @param value 输入框的值
   */
  $emit(eventName: 'focus', value: string): this;

  /**
   * 配置了clearabled后，清空内容时会发出此事件
   * @param value 输入框的值
   */
  $emit(eventName: 'clear', value: string): this;

  /**
   * disabled为true时，点击输入框，发出此事件，用于跳转搜索页
   * @param value 输入框的值
   * @version 1.5.3
   */
  $emit(eventName: 'click', value: string): this;
}
