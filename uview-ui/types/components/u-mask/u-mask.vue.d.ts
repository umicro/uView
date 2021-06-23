// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UMask extends Vue {
  /**
   * 是否显示遮罩
   * @default false
   */
  show?: boolean;

  /**
   * z-index 层级
   * @default 10070
   */
  'z-index'?: string | number;

  /**
   * 自定义样式对象，见文档说明
   */
  'custom-style'?: Record<string, any>;

  /**
   * 动画时长，单位毫秒
   * @default 300
   */
  duration?: string | number;

  /**
   * 是否使用"scale"对遮罩进行缩放
   * @default true
   */
  zoom?: boolean;

  /**
   * 遮罩是否可点击，为"false"时点击不会发送"click"事件
   * @default true
   */
  'mask-click-able'?: boolean;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 默认插槽，用于在遮罩层文档嵌入内容
     */
    default: VNode[];
  };

  /**
   * mask-click-able为true时，点击遮罩发送此事件
   */
  $emit(eventName: 'click'): this;
}
