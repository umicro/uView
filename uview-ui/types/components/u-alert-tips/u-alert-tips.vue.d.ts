// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UAlertTips extends Vue {
  /**
   * 显示的文字
   */
  title?: string;

  /**
   * 辅助性文字，颜色比"title"浅一点，字号也小一点，可选
   */
  description?: string;

  /**
   * 关闭按钮(默认为叉号icon图标)
   * @default false
   */
  'close-able'?: boolean;

  /**
   * 使用预设的颜色
   * @default warning
   */
  type?: 'success' | 'primary' | 'warning' | 'error' | 'info';

  /**
   * 用文字替代关闭图标，"close-able"为"true"时有效
   */
  'close-text'?: string;

  /**
   * 是否显示左边的辅助图标
   * @default false
   */
  'show-icon'?: boolean;

  /**
   * 显示或隐藏组件
   * @default true
   */
  show?: boolean;

  /**
   * 左侧的图标名称，如设置"type"和"show-icon"值，会有一个默认的图标
   * @version 1.5.8
   */
  icon?: string;

  /**
   * 自定义图标的样式，对象形式
   * @version 1.5.8
   */
  'icon-style'?: Record<string, any>;

  /**
   * 自定义标题的样式，对象形式
   * @version 1.5.8
   */
  'title-style'?: Record<string, any>;

  /**
   * 自定义内容的样式，对象形式
   * @version 1.5.8
   */
  'desc-style'?: Record<string, any>;

  /**
   * 点击关闭按钮时触发，需在此回调设置show为false
   */
  $emit(eventName: 'close'): this;

  /**
   * 点击组件时触发
   */
  $emit(eventName: 'click'): this;
}
