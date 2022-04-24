// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UModal extends Vue {
  /**
   * 是否显示模态框，请赋值给"v-model"
   * @default false
   */
  show?: boolean;

  /**
   * 层级
   * @default 1075
   */
  'z-index'?: string | number;

  /**
   * 标题内容
   * @default 提示
   */
  title?: string;

  /**
   * 模态框宽度，数值时单位为rpx
   * @options 百分比 / auto
   * @default 600
   */
  width?: 'auto' | string | number;

  /**
   * 模态框内容，如传入"slot"内容，则此参数无效
   * @default 内容
   */
  content?: string;

  /**
   * 是否显示标题
   * @default true
   */
  'show-title'?: boolean;

  /**
   * 是否显示确认按钮
   * @default true
   */
  'show-confirm-button'?: boolean;

  /**
   * 是否显示取消按钮
   * @default false
   */
  'show-cancel-button'?: boolean;

  /**
   * 确认按钮的文字
   * @default 确认
   */
  'confirm-text'?: string;

  /**
   * 取消按钮的文字
   * @default 取消
   */
  'cancel-text'?: string;

  /**
   * 取消按钮的颜色
   * @default #606266
   */
  'cancel-color'?: string;

  /**
   * 确认按钮的颜色
   * @default #2979ff
   */
  'confirm-color'?: string;

  /**
   * 模态框圆角值，单位rpx
   * @default 16
   */
  'border-radius'?: string | number;

  /**
   * 自定义标题样式，对象形式
   */
  'title-style'?: Record<string, any>;

  /**
   * 自定义内容样式，对象形式
   */
  'content-style'?: Record<string, any>;

  /**
   * 自定义取消按钮样式，对象形式
   */
  'cancel-style'?: Record<string, any>;

  /**
   * 自定义确认按钮样式，对象形式
   */
  'confirm-style'?: Record<string, any>;

  /**
   * 是否开启缩放模式
   * @default true
   */
  zoom?: boolean;

  /**
   * 是否异步关闭，只对确定按钮有效，见文档说明
   * @default false
   */
  'async-close'?: boolean;

  /**
   * 是否允许点击遮罩关闭Modal
   * @default false
   */
  'mask-close-able'?: boolean;

  /**
   * 往上偏移的值，以避免可能弹出的键盘重合，单位任意，数值则默认为rpx单位 <span data-v-c922b936="" class="badge tip" style="vertical-align: top;">1.4.4</span>
   * @default 0
   */
  'negative-top'?: string | number;

  /**
   * 	异步控制时，通过调用此方法，可以不关闭Modal，而单是清除loading状态
   */
  clearLoading(): void;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 传入自定义内容，一般为富文本，见文档说明
     */
    default: VNode[];
    /**
     * 传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景
     * @version 1.6.0
     */
    'confirm-button': VNode[];
  };

  /**
   * 点击确认按钮时触发
   */
  $emit(eventName: 'confirm'): this;

  /**
   * 点击取消按钮时触发
   */
  $emit(eventName: 'cancel'): this;
}
