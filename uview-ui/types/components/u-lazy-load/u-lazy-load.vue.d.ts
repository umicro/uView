// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface ULazyLoad extends Vue {
  /**
   * 用户自定义值，在事件触发时回调，用以区分是哪个图片
   */
  index?: string | number;

  /**
   * 图片路径
   */
  image?: string;

  /**
   * 预加载时的占位图
   */
  'loading-img'?: string;

  /**
   * 图片加载出错时的占位图
   */
  'error-img'?: string;

  /**
   * 触发加载时的位置，见文档说明，单位 rpx
   * @default 100
   */
  threshold?: string;

  /**
   * 图片加载成功时，淡入淡出时间，单位ms
   * @default 500
   */
  duration?: string | number;

  /**
   * 图片加载成功时，淡入淡出的css动画效果
   * @default ease-in-out
   */
  effect?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

  /**
   * 图片加载成功时，是否启用淡入淡出效果
   * @default true
   */
  'is-effect'?: boolean;

  /**
   * 图片圆角值，单位rpx
   * @default 0
   */
  'border-radius'?: string | number;

  /**
   * 图片高度，注意：实际高度可能受"img-mode"参数影响
   * @default 450
   */
  height?: string | number;

  /**
   * 图片的裁剪模式，详见image组件裁剪模式 https://uniapp.dcloud.io/component/image
   * @default widthFix
   */
  'img-mode'?: string | number;

  /**
   * 点击图片时触发
   * @param index 用户通过props传递的index值
   */
  $emit(eventName: 'click', index: number): this;

  /**
   * 图片加载成功时触发
   * @param index 用户通过props传递的index值
   */
  $emit(eventName: 'load', index: number): this;

  /**
   * 图片加载失败时触发
   * @param index 用户通过props传递的index值
   */
  $emit(eventName: 'error', index: number): this;
}
