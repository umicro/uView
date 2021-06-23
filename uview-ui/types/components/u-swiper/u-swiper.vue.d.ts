// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface USwiper extends Vue {
  /**
   * 轮播图数据，见文档"基本使用"说明
   */
  list?: Record<string, any>[];

  /**
   * 是否显示标题文字，需要配合"list"参数，见文档说明
   * @default false
   */
  title?: boolean;

  /**
   * 指示器模式，见文档说明
   * @default round
   */
  mode?: 'rect' | 'dot' | 'number' | 'none' | 'round';

  /**
   * 轮播图组件高度，单位rpx
   * @default 250
   */
  height?: string | number;

  /**
   * 指示器的位置
   * @default bottomCenter
   */
  'indicator-pos'?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'bottomCenter';

  /**
   * 是否开启3D效果
   * @default false
   */
  effect3d?: boolean;

  /**
   * 是否自动播放
   * @default true
   */
  autoplay?: boolean;

  /**
   * 自动轮播时间间隔，单位ms
   * @default 2500
   */
  interval?: string | number;

  /**
   * 是否衔接播放，见文档说明
   * @default true
   */
  circular?: boolean;

  /**
   * 切换一张轮播图所需的时间，单位ms
   * @default 500
   */
  duration?: string | number;

  /**
   * 轮播图圆角值，单位rpx
   * @default 8
   */
  'border-radius'?: string | number;

  /**
   * 自定义标题样式
   */
  'title-style'?: Record<string, any>;

  /**
   * effect3d = true模式的情况下，激活项与前后项之间的距离，单位rpx
   * @default 50
   */
  'effect3d-previous-margin'?: string | number;

  /**
   * 图片的裁剪模式，详见image组件裁剪模式 https://uniapp.dcloud.io/component/image
   * @default aspectFill
   */
  'img-mode'?: string;

  /**
   * 组件内部读取的"list"参数中的属性名，见文档说明
   * @default name
   */
  name?: string;

  /**
   * 背景颜色
   * @default #f3f4f6
   */
  'bg-color'?: string;

  /**
   * 初始化时，默认显示第几项
   * @version 1.6.2
   * @default 0
   */
  current?: string | number;

  /**
   * 点击轮播图时触发
   * @param	index 点击了第几张图片，从0开始
   */
  $emit(eventName: 'click', index: number): this;

  /**
   * 轮播图切换时触发(自动或者手动切换)
   * @param	index 切换到了第几张图片，从0开始
   */
  $emit(eventName: 'change', index: number): this;
}
