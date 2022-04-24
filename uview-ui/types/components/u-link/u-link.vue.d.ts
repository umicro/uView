// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface ULink extends Vue {
  /**
   * 文字颜色
   * @default #606266
   */
  color?: string;

  /**
   * 字体大小，单位rpx
   * @default 28
   */
  'font-size'?: string | number;

  /**
   * 是否显示下划线
   * @default false
   */
  'under-line'?: boolean;

  /**
   * 跳转的链接，要带上http(s)
   */
  href?: string;

  /**
   * 下划线颜色，默认同"color"参数颜色
   */
  'line-color'?: string;

  /**
   * 各个小程序平台把链接复制到粘贴板后的提示语
   * @default 链接已复制，请在浏览器打开
   */
  'mp-tips'?: string;
}
