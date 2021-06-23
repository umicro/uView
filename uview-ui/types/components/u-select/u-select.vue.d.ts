// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface USelect extends Vue {
  /**
   * 模式选择，"single-column"-单列模式，"mutil-column"-多列模式，"mutil-column-auto"-多列联动模式
   * @default single-column
   */
  mode?: 'mutil-column' | 'mutil-column-auto' | 'single-column';

  /**
   * 列数据，数组形式，见文档说明
   */
  list?: Record<string, any>[] | Record<string, any>[][];

  /**
   * 布尔值变量，用于控制选择器的弹出与收起
   * @default false
   */
  'v-model'?: boolean;

  /**
   * 是否开启底部安全区适配 /components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明
   * @default false
   */
  'safe-area-inset-bottom'?: boolean;

  /**
   * 取消按钮的颜色
   * @default #606266
   */
  'cancel-color'?: string;

  /**
   * 确认按钮的颜色
   * @default #2979ff
   */
  'confirm-color'?: string;

  /**
   * 提供的默认选中的下标，见文档说明
   */
  'default-value'?: string[];

  /**
   * 是否允许通过点击遮罩关闭Picker
   * @default true
   */
  'mask-close-able'?: boolean;

  /**
   * 弹出时的"z-index"值
   * @default 10075
   */
  'z-index'?: string | number;

  /**
   * 自定义"list"数据的"value"属性名 <span data-v-c922b936="" class="badge tip" style="vertical-align: top;">1.3.6</span>
   * @default value
   */
  'value-name'?: string;

  /**
   * 自定义"list"数据的"label"属性名 <span data-v-c922b936="" class="badge tip" style="vertical-align: top;">1.3.6</span>
   * @default label
   */
  'label-name'?: string;

  /**
   * 自定义"list"数据的"children"属性名，只对多列联动模式有效 <span data-v-c922b936="" class="badge tip" style="vertical-align: top;">1.3.6</span>
   * @default children
   */
  'child-name'?: string;

  /**
   * 顶部中间的标题 <span data-v-c922b936="" class="badge tip" style="vertical-align: top;">1.3.6</span>
   */
  title?: string;

  /**
   * 确认按钮的文字
   * @version 1.5.6
   * @default 确认
   */
  'confirm-text'?: string;

  /**
   * 取消按钮的文字
   * @version 1.5.6
   * @default 取消
   */
  'cancel-text'?: string;

  /**
   * 点击确定按钮，返回当前选择的值
   * @param selectValue 选中的值
   */
  $emit(eventName: 'confirm', selectValue: any[]): this;

  /**
   * 点击取消按钮，返回当前选择的值
   * @param selectValue 选中的值
   */
  $emit(eventName: 'cancel', selectValue: any[]): this;
}
