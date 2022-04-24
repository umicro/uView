// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UVerificationCode extends Vue {
  /**
   * 倒计时所需的秒数
   * @default 60
   */
  seconds?: number | string;

  /**
   * 开始前的提示语，见文档说明
   * @default 获取验证码
   */
  'start-text'?: string;

  /**
   * 倒计时期间的提示语，必须带有字母"x"，见文档说明
   * @default X秒重新获取
   */
  'change-text'?: string;

  /**
   * 倒计结束的提示语，见文档说明
   * @default 重新获取
   */
  'end-text'?: string;

  /**
   * 是否在H5刷新或各端返回再进入时继续倒计时
   * @default false
   */
  'keep-running'?: boolean;

  /**
   * 多个组件之间继续倒计时的区分"key"，见文档说明
   * @version 1.3.4
   */
  'unique-key'?: string;

  /**
   * 开始倒计时
   */
  start(): void;

  /**
   * 结束当前正在进行中的倒计时，设置组件为可以重新获取验证码的状态
   */
  reset(): void;

  /**
   * 倒计时期间，每秒触发一次
   * @param text 当前剩余多少秒的状态，见文档说明
   */
  $emit(eventName: 'change', text: string): this;

  /**
   * 开始倒计时触发
   */
  $emit(eventName: 'start'): this;

  /**
   * 结束倒计时触发
   */
  $emit(eventName: 'end'): this;
}
