// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface URow extends Vue {
  /**
   * 栅格间隔，左右各为此值的一半，单位rpx
   * @default 0
   */
  gutter?: string | number;

  /**
   * 水平排列方式(微信小程序暂不支持)
   * @default start(或flex-start)
   */
  justify?:
    | 'end'
    | 'flex-end'
    | 'center'
    | 'around'
    | 'space-around'
    | 'between'
    | 'space-between'
    | 'start'
    | 'flex-start';

  /**
   * 垂直排列方式
   * @default center
   */
  align?: 'top' | 'bottom' | 'center';

  /**
   * row被点击
   */
  $emit(eventName: 'click'): this;
}
