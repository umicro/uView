// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UNoNetwork extends Vue {
  /**
   * 没有网络时的提示语
   * @default 哎呀，网络信号丢失
   */
  tips?: string;

  /**
   * 组件的"z-index"值
   * @default 10080
   */
  zIndex?: string | number;

  /**
   * 无网络的图片提示，可用的src地址或base64图片
   */
  image?: string;

  /**
   * 用户点击页面的"重试"按钮时触发
   */
  $emit(eventName: 'retry'): this;
}
