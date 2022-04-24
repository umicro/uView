// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UImage extends Vue {
  /**
   * 图片地址，<strong data-v-ac2e6242="">强烈建议</strong>使用绝对或者网络路径
   */
  src?: string;

  /**
   * 裁剪模式，见文档说明
   * @default aspectFill
   */
  mode?: string;

  /**
   * 宽度，单位任意，如果为数值，则为rpx单位
   * @default 100%
   */
  width?: string | number;

  /**
   * 高度，单位任意，如果为数值，则为rpx单位
   * @default auto
   */
  height?: string | number;

  /**
   * 图片形状，circle-圆形，square-方形
   * @default square
   */
  shape?: 'circle' | 'square';

  /**
   * 圆角值，单位任意，如果为数值，则为rpx单位
   * @default 0
   */
  'border-radius'?: string | number;

  /**
   * 是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效
   * @default true
   */
  'lazy-load'?: boolean;

  /**
   * 是否开启长按图片显示识别小程序码菜单，仅微信小程序有效
   * @default false
   */
  'show-menu-by-longpress'?: boolean;

  /**
   * 加载中的图标，或者小图片
   * @default photo
   */
  'loading-icon'?: string;

  /**
   * 加载失败的图标，或者小图片
   * @default error-circle
   */
  'error-icon'?: string;

  /**
   * 是否显示加载中的图标或者自定义的slot
   * @default true
   */
  'show-loading'?: boolean;

  /**
   * 是否显示加载错误的图标或者自定义的slot
   * @default true
   */
  'show-error'?: boolean;

  /**
   * 是否需要淡入效果
   */
  fade?: boolean;

  /**
   * 只支持网络资源，只对微信小程序有效
   * @default false
   */
  webp?: boolean;

  /**
   * 搭配"fade"参数的过渡时间，单位ms
   * @default 500
   */
  duration?: string | number;

  /**
   * 背景颜色
   * @version 1.6.2
   * @default #f3f4f6
   */
  'bg-color'?: string;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义加载中的提示内容
     */
    loading: VNode[];
    /**
     * 自定义失败的提示内容
     */
    error: VNode[];
  };

  /**
   * 点击图片时触发
   */
  $emit(eventName: 'click'): this;

  /**
   * 图片加载失败时触发
   */
  $emit(eventName: 'error', err: string): this;

  /**
   * 图片加载成功时触发
   */
  $emit(eventName: 'load'): this;
}
