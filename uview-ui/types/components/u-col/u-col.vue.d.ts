// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UCol extends Vue {
  /**
   * 栅格占据的列数，总12等分
   * @default 0
   */
  span?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;

  /**
   * 分栏左边偏移，计算方式与"span"相同
   * @default 0
   */
  offset?: string | number;

  /**
   * 文字水平对齐方式
   * @version 1.5.5
   * @default left
   */
  'text-align'?: 'center' | 'right' | 'left';

  /**
   * col被点击，会阻止事件冒泡到row
   */
  $emit(eventName: 'click'): this;
}
