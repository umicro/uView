// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UCountDown extends Vue {
  /**
   * 倒计时，单位为秒
   * @default 0
   */
  timestamp?: string | number;

  /**
   * 是否自动开始倒计时，如果为"false"，需手动调用开始方法。见文档说明
   * @default true
   */
  autoplay?: boolean;

  /**
   * 分隔符，"colon"为英文冒号，"zh"为中文
   * @default colon
   */
  separator?: 'zh' | 'colon' | string;

  /**
   * 分隔符的字体大小，单位rpx
   * @default 30
   */
  'separator-size'?: string | number;

  /**
   * 分隔符的颜色
   * @default #303133
   */
  'separator-color'?: string;

  /**
   * 倒计时字体大小，单位rpx
   * @default 30
   */
  'font-size'?: string | number;

  /**
   * 是否显示倒计时数字的边框
   * @default false
   */
  'show-border'?: boolean;

  /**
   * 数字边框的颜色
   * @default #303133
   */
  'border-color'?: string;

  /**
   * 倒计时数字的背景颜色
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 倒计时数字的颜色
   * @default #303133
   */
  color?: string;

  /**
   * 数字高度值(宽度等同此值)，设置边框时看情况是否需要设置此值，单位rpx
   * @default auto
   */
  height?: string;

  /**
   * 是否显示倒计时的"天"部分
   * @default true
   */
  'show-days'?: boolean;

  /**
   * 是否显示倒计时的"时"部分
   * @default true
   */
  'show-hours'?: boolean;

  /**
   * 是否显示倒计时的"分"部分
   * @default true
   */
  'show-minutes'?: boolean;

  /**
   * 是否显示倒计时的"秒"部分
   * @default true
   */
  'show-seconds'?: boolean;

  /**
   * 当"天"的部分为0时，隐藏该字段
   * @version 1.4.4
   * @default true
   */
  'hide-zero-day'?: boolean;

  /**
   * 开始倒计时
   */
  start(): void;

  /**
   * 倒计时结束
   */
  $emit(eventName: 'end'): this;

  /**
   * 倒计过程中，每秒触发一次
   * @param timestamp 当前剩余的倒计秒数
   */
  $emit(eventName: 'change', timestamp: number): this;
}
