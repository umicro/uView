// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UNumberBox extends Vue {
  /**
   * 输入框初始值
   * @default 1
   */
  'v-model'?: number;

  /**
   * 输入框和按钮的背景颜色
   * @default #F2F3F5
   */
  'bg-color'?: string;

  /**
   * 用户可输入的最小值
   * @default 0
   */
  min?: number;

  /**
   * 用户可输入的最大值
   * @default 99999
   */
  max?: number;

  /**
   * 步长，每次加或减的值，<span data-v-c922b936="" class="badge tip" style="vertical-align: top;">1.4.5</span>起支持小数值，如需小数，请设置"positive-integer"为"false"
   * @default 1
   */
  step?: number;

  /**
   * 是否禁用操作，禁用后无法加减或手动修改输入框的值
   * @default false
   */
  disabled?: boolean;

  /**
   * 输入框文字和按钮字体大小，单位rpx
   * @default 26
   */
  size?: string | number;

  /**
   * 输入框文字和加减按钮图标的颜色
   * @default #323233
   */
  color?: string;

  /**
   * 输入框宽度，单位rpx
   * @default 80
   */
  'input-width'?: string | number;

  /**
   * 输入框和按钮的高度，单位rpx
   * @default 50
   */
  'input-height'?: string | number;

  /**
   * 事件回调时用以区分当前发生变化的是哪个输入框
   */
  index?: string | number;

  /**
   * 是否禁止输入框手动输入值
   * @default false
   */
  'disabled-input'?: boolean;

  /**
   * 指定光标于键盘的距离，避免键盘遮挡输入框，单位rpx
   * @default 200
   */
  'cursor-spacing'?: string | number;

  /**
   * 是否开启长按连续递增或递减
   * @version 1.4.5
   * @default true
   */
  'long-press'?: boolean;

  /**
   * 开启长按触发后，每触发一次需要多久，单位ms
   * @version 1.4.5
   * @default 250
   */
  'press-time'?: string | number;

  /**
   * 是否只能输入正整数
   * @version 1.5.6
   * @default true
   */
  'positive-integer'?: boolean;

  /**
   * 输入框内容发生变化时触发，对象形式
   * @param options 输入框当前值
   */
  $emit(
    eventName: 'change',
    options: {
      /**
       * 输入框当前值
       */
      value: number;
      /**
       * 通过props传递的index值
       */
      index: number;
    },
  ): this;

  /**
   * 输入框失去焦点时触发，对象形式
   * @param options 输入框当前值
   */
  $emit(
    eventName: 'blur',
    options: {
      /**
       * 输入框当前值
       */
      value: number;
      /**
       * 通过props传递的index值
       */
      index: number;
    },
  ): this;

  /**
   * 点击减少按钮时触发(按钮可点击情况下)，对象形式
   * @param options 输入框当前值
   */
  $emit(
    eventName: 'minus',
    options: {
      /**
       * 输入框当前值
       */
      value: number;
      /**
       * 通过props传递的index值
       */
      index: number;
    },
  ): this;

  /**
   * 点击增加按钮时触发(按钮可点击情况下)，对象形式
   * @param options 输入框当前值
   */
  $emit(
    eventName: 'plus',
    options: {
      /**
       * 输入框当前值
       */
      value: number;
      /**
       * 通过props传递的index值
       */
      index: number;
    },
  ): this;

  /**
   * 输入框失去焦点时触发，对象形式
   * @param options 输入框当前值
   * @version 1.7.6
   */
  $emit(
    eventName: 'blur',
    options: {
      /**
       * 输入框当前值
       */
      value: number;
      /**
       * 通过props传递的index值
       */
      index: number;
    },
  ): this;
}
