// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UKeyboard extends Vue {
  /**
   * 键盘类型，见文档"基本使用"的说明
   * @default number
   */
  mode?: 'car' | 'card' | 'number';

  /**
   * 是否显示"."按键，只在mode=number时有效
   * @default true
   */
  'dot-enabled'?: boolean;

  /**
   * 是否显示键盘顶部工具条
   * @default true
   */
  tooltip?: boolean;

  /**
   * 工具条中间的提示文字，见文档"基本使用"的说明
   */
  tips?: string;

  /**
   * 是否显示工具条中间的文字
   * @default true
   */
  'show-tips'?: boolean;

  /**
   * 是否显示工具条左边的"取消"按钮
   * @default true
   */
  'cancel-btn'?: boolean;

  /**
   * 是否显示工具条右边的"完成"按钮
   * @default true
   */
  'confirm-btn'?: boolean;

  /**
   * 是否显示遮罩
   * @default true
   */
  mask?: boolean;

  /**
   * 弹出键盘的"z-index"值
   * @default 1075
   */
  'z-index'?: number | string;

  /**
   * 是否打乱键盘按键的顺序
   * @default false
   */
  random?: boolean;

  /**
   * 是否开启底部安全区适配 /components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明
   * @default false
   */
  'safe-area-inset-bottom'?: boolean;

  /**
   * 是否允许点击遮罩收起键盘
   * @default true
   */
  'mask-close-able'?: boolean;

  /**
   * 确认按钮的文字
   * @version 1.5.6
   * @default 取消
   */
  'confirm-text'?: string;

  /**
   * 取消按钮的文字
   * @version 1.5.6
   * @default 确认
   */
  'cancel-text'?: string;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 内容将会显示键盘的工具条上面，可以结合MessageInput
     * 验证码输入组件实现类似支付宝输入密码时，文档显示输入内容的功能
     */
    default: VNode[];
  };

  /**
   * 按键被点击(不包含退格键被点击)
   * @param value 按键的值，见文档说明和示例
   */
  $emit(eventName: 'change', value: number): this;

  /**
   * 键盘顶部工具条左边的"取消"按钮被点击
   */
  $emit(eventName: 'cancel'): this;

  /**
   * 键盘顶部工具条右边的"完成"按钮被点击
   */
  $emit(eventName: 'confirm'): this;

  /**
   * 键盘退格键被点击
   */
  $emit(eventName: 'backspace'): this;
}
