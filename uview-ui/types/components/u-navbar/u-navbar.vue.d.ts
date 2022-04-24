// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UNavbar extends Vue {
  /**
   * 导航栏高度(不包括状态栏高度在内，内部自动加上)，注意这里的单位是<span data-v-2001e00a="" style="color: red;"><strong data-v-2001e00a="">px</strong></span>
   * @default 44
   */
  height?: string | number;

  /**
   * 左边返回图标的颜色
   * @default #606266
   */
  'back-icon-color'?: string;

  /**
   * 左边返回图标的名称，只能为uView自带的图标，"1.5.5"起由arrow-left调整为nav-back
   * @default nav-back
   */
  'back-icon-name'?: string;

  /**
   * 左边返回图标的大小，单位rpx
   * @default 30
   */
  'back-icon-size'?: string | number;

  /**
   * 返回图标右边的辅助提示文字
   */
  'back-text'?: string;

  /**
   * 返回图标右边的辅助提示文字的样式，对象形式
   * @default { color: '#606266' }
   */
  'back-text-style'?: Record<string, any>;

  /**
   * 导航栏标题，如设置为空字符，将会隐藏标题占位区域
   */
  title?: string;

  /**
   * 导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx
   * @default 250
   */
  'title-width'?: string | number;

  /**
   * 标题的颜色
   * @default #606266
   */
  'title-color'?: string;

  /**
   * 导航栏标题字体大小，单位rpx，"1.5.5"起由32调整为44
   * @default 44
   */
  'title-size'?: string | number;

  /**
   * 固定在顶部时的"z-index"值
   * @default 980
   */
  'z-index'?: string | number;

  /**
   * 是否显示导航栏左边返回图标和辅助文字
   * @default true
   */
  'is-back'?: boolean;

  /**
   * 导航栏背景设置(APP和小程序上包括状态栏的颜色)，见文档说明
   * @default { background: '#ffffff' }
   */
  background?: Record<string, any>;

  /**
   * 导航栏是否固定在顶部
   * @default true
   */
  'is-fixed'?: boolean;

  /**
   * 导航栏底部是否显示下边框，如定义了较深的背景颜色，可取消此值
   * @default true
   */
  'border-bottom'?: boolean;

  /**
   * 自定义返回逻辑方法，如传入，点击返回按钮执行函数，否则正常返回上一页，注意模板中不需要写方法参数的括号
   * @version 1.3.4
   */
  'custom-back'?: (...args: any[]) => void;

  /**
   * 沉浸式，允许fixed定位后导航栏塌陷，仅fixed定位下生效
   * @version 1.5.6
   * @default false
   */
  immersive?: boolean;

  /**
   * 导航栏标题字体是否加粗 <span data-v-c922b936="" class="badge tip" style="vertical-align: top;">1.7.8</span>
   * @default false
   */
  'title-bold'?: boolean;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义中间部分的内容
     */
    default: VNode[];
    /**
     * 自定义右侧部分内容
     */
    right: VNode[];
  };
}
