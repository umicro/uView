// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UPopup extends Vue {
  /**
   * 弹出方向
   * @default left
   */
  mode?: 'top' | 'right' | 'bottom' | 'center' | 'left';

  /**
   * 是否显示遮罩
   * @default true
   */
  mask?: boolean;

  /**
   * mode=left | 见文档说明
   * @default auto
   */
  length?: string | number;

  /**
   * 是否开启缩放动画，只在"mode"为"center"时有效
   * @default true
   */
  zoom?: boolean;

  /**
   * 是否开启底部安全区适配 /components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明
   * @default false
   */
  'safe-area-inset-bottom'?: boolean;

  /**
   * 点击遮罩是否可以关闭弹出层
   * @default true
   */
  'mask-close-able'?: boolean;

  /**
   * 用户自定义样式
   */
  'custom-style'?: Record<string, any>;

  /**
   * 弹窗圆角值
   * @default 0
   */
  'border-radius'?: number | string;

  /**
   * 弹出内容的"z-index"值
   * @default 10075
   */
  'z-index'?: number | string;

  /**
   * 是否显示关闭图标
   * @default false
   */
  closeable?: boolean;

  /**
   * 关闭图标的名称，只能uView的内置图标
   * @default close
   */
  'close-icon'?: string;

  /**
   * 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
   * @default top-right
   */
  'close-icon-pos'?: 'top-left' | 'bottom-left' | 'bottom-right' | 'top-right';

  /**
   * 关闭图标的颜色
   * @default #909399
   */
  'close-icon-color'?: string;

  /**
   * 关闭图标的大小，单位rpx
   * @default 30
   */
  'close-icon-size'?: string | number;

  /**
   * mode = left | center | right时有效，优先级高于"length"
   * @version 1.3.7
   */
  width?: string | number;

  /**
   * mode = top | center | bottom时有效，优先级高于"length"
   * @version 1.3.7
   */
  height?: string | number;

  /**
   * 中部弹出时，以避免可能弹出的键盘重合，往上偏移的值，单位任意，数值则默认为rpx单位
   * @default 0
   */
  'negative-top'?: string | number;

  /**
   * 遮罩自定义样式，一般用于修改遮罩透明度对象形式，如：{background: 'rgba(0, 0, 0, 0.5)'}
   * @version 1.5.4
   */
  'mask-custom-style'?: Record<string, any>;

  /**
   * 遮罩打开或收起的动画过渡时间，单位ms
   * @version 1.6.6
   * @default 250
   */
  duration?: string | number;

  /**
   * 弹出层打开
   */
  $emit(eventName: 'open'): this;

  /**
   * 弹出层收起
   */
  $emit(eventName: 'close'): this;
}
