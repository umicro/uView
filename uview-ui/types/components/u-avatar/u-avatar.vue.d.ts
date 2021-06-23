// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UAvatar extends Vue {
  /**
   * 背景颜色，一般显示文字时用
   * @default #ffffff
   */
  'bg-color'?: string;

  /**
   * 头像路径，如加载失败，将会显示默认头像
   */
  src?: string;

  /**
   * 头像尺寸，可以为指定字符串(large, default, mini)，或者数值，单位rpx
   * @default default
   */
  size?: string | number;

  /**
   * 显示类型，见文档说明
   * @default circle
   */
  mode?: 'square' | 'circle';

  /**
   * 用文字替代图片，级别优先于"src"
   */
  text?: string;

  /**
   * 头像图片的裁剪类型，与uni的"image"组件的"mode"参数一致，如效果达不到需求，可尝试传"widthFix"值
   * @default aspectFill
   */
  'img-mode'?: string;

  /**
   * 是否显示右上角的性别图标
   * @version 1.5.6
   * @default false
   */
  'show-sex'?: boolean;

  /**
   * 右上角性别图标，可传入图片路径，或内置图标名
   * @version 1.5.6
   * @default man
   */
  'sex-icon'?: 'woman' | 'man' | string;

  /**
   * 性别图标的背景颜色
   * @version 1.5.6
   * @default man-primary主题，woman-error主题
   */
  'sex-bg-color'?: string;

  /**
   * 是否显示右下角的等级图标
   * @version 1.5.6
   * @default false
   */
  'show-level'?: boolean;

  /**
   * 右下角等级图标，可传入图片路径，或内置图标名
   * @version 1.5.6
   * @default level
   */
  'level-icon'?: string;

  /**
   * 等级图标的背景颜色
   * @version 1.5.6
   * @default warning主题
   */
  'level-bg-color'?: string;

  /**
   * 头像被点击
   * @param index 用户传递的标识符
   */
  $emit(eventName: 'click', index: number): this;
}
