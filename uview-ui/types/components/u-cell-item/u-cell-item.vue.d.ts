// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UCellItem extends Vue {
  /**
   * 左侧标题
   */
  title?: string;

  /**
   * 左侧图标名，只支持uView内置图标，见Icon 图标 /components/icon.html
   */
  icon?: string;

  /**
   * icon的样式，对象形式
   * @version 1.4.0
   */
  'icon-style'?: Record<string, any>;

  /**
   * 右侧内容
   */
  value?: string;

  /**
   * 标题下方的描述信息
   */
  label?: string;

  /**
   * 是否显示cell的下边框
   * @default true
   */
  'border-bottom'?: boolean;

  /**
   * 是否显示cell的上边框
   * @default false
   */
  'border-top'?: boolean;

  /**
   * "border-bottom"为"true"时，Cell列表中间的条目的下边框是否与左边有一个间隔
   * @default true
   * @deprecated 1.4.0已废弃
   */
  'border-gap'?: boolean;

  /**
   * 是否开启点击反馈，"none"为无效果，见文档说明
   */
  'hover-class'?: 'none' | string;

  /**
   * 是否显示右侧箭头，开启的话，将会默认带上点击反馈，可通过"hover-class"配置
   * @default true
   */
  arrow?: boolean;

  /**
   * 箭头方向，可选值为
   * @default right
   */
  'arrow-direction'?: 'up' | 'down' | 'right';

  /**
   * 标题样式，对象形式
   */
  'title-style'?: Record<string, any>;

  /**
   * 是否显示左边表示必填的星号
   * @default false
   */
  required?: boolean;

  /**
   * 右侧内容样式，对象形式
   */
  'value-style'?: Record<string, any>;

  /**
   * 标题下方描述信息的样式，对象形式
   */
  'label-style'?: Record<string, any>;

  /**
   * 背景颜色，默认透明背景
   * @default transparent
   */
  'bg-color'?: string;

  /**
   * 用于在"click"事件回调中返回，标识当前是第几个Item
   */
  index?: string | number;

  /**
   * 标题的宽度，单位rpx
   */
  'title-width'?: number | string;

  /**
   * 左边通过"icon"参数传入的图标的大小，单位rpx
   * @default 34
   */
  'icon-size'?: number | string;

  /**
   * 是否使内容垂直居中
   * @default false
   */
  center?: boolean;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义左侧标题部分的内容，如需使用，请勿定义title参数，或赋值null即可
     */
    title: VNode[];
    /**
     * 自定义左侧的图标
     */
    icon: VNode[];
    /**
     * 自定义右侧图标内容，需设置arrow为false才起作用
     */
    'right-icon': VNode[];
    /**
     * 自定义label内容，需同时设置use-label-slot为true
     */
    label: VNode[];
  };

  /**
   * 点击cell列表时触发
   * @param index 通过props传递的index参数
   */
  $emit(eventName: 'click', index: number): this;
}
