// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UPicker extends Vue {
  /**
   * 需要显示的参数，见文档说明，mode=region或mode=time时有效
   */
  params?: Record<string, any>;

  /**
   * 模式选择，region-地区模式，time-时间模式，selector-单列模式，multiSelector-多列模式
   * @default time
   */
  mode?: 'region' | 'selector' | 'multiSelector' | 'time';

  /**
   * 可选的开始年份，mode=time时有效
   * @default 1950
   */
  'start-year'?: string | number;

  /**
   * 可选的结束年份，mode=time时有效
   * @default 2050
   */
  'end-year'?: string | number;

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
   * 默认选中的时间，mode=time时有效，需在"onReady"生命周期赋值，见顶部说明
   */
  'default-time'?: string;

  /**
   * 默认选中的地区，中文形式，mode=region时有效，需在"onReady"生命周期赋值，见顶部说明
   */
  'default-region'?: string[];

  /**
   * 默认选中的地区，编号形式，mode=region时有效
   */
  'area-code'?: string[];

  /**
   * 数组形式，其中每一项表示选择了"range"对应项中的第几个(下标从0开始)，见文档说明
   * @default []
   */
  'default-selector'?: string[];

  /**
   * 是否允许通过点击遮罩关闭Picker
   * @default true
   */
  'mask-close-able'?: boolean;

  /**
   * 时间模式时，是否显示后面的年月日中文提示
   * @default true
   */
  'show-time-tag'?: boolean;

  /**
   * 弹出时的"z-index"值
   * @default 10075
   */
  'z-index'?: string | number;

  /**
   * 自定义选择的数据，mode=selector或mode=multiSelector时有效
   * @default []
   */
  range?: string[];

  /**
   * 当"range"参数的元素为对象时，指定Object中的哪个key的值作为选择器显示内容，见文档说明
   */
  'range-key'?: string;

  /**
   * 顶部中间的标题
   * @version 1.3.6
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
   * @param value 按见文档"回调参数"部分说明
   */
  $emit(eventName: 'confirm', value: Record<string, any>): this;

  /**
   * 点点击取消按钮，返回当前选择的值
   * @param value 见文档"回调参数"部分说明
   */
  $emit(eventName: 'cancel', value: Record<string, any>): this;

  /**
   * 列发生改变时触发，只对mode = multiSelector时有效
   * @param value 按见文档"回调参数"部分说明
   */
  $emit(eventName: 'columnchange', value: { column: Record<string, any>; index: number }): this;
}
