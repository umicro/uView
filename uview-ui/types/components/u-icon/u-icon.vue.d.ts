// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UIcon extends Vue {
  /**
   * 图标名称，见示例图标集，如名称带有"/"，会被认为是图片图标
   */
  name?: string;

  /**
   * 图标颜色
   * @default inherit
   */
  color?: string;

  /**
   * 图标字体大小，单位rpx
   * @default inherit
   */
  size?: string | number;

  /**
   * 一个用于区分多个图标的值，点击图标时通过"click"事件传出
   */
  index?: string;

  /**
   * 图标按下去的样式类，用法同uni的"view"组件的"hover-class"参数，详见：hover-class https://uniapp.dcloud.io/component/view
   */
  'hover-class'?: string;

  /**
   * 图标右侧/下方的label文字
   */
  label?: string;

  /**
   * "label"字体大小，单位rpx
   * @default 28
   */
  'label-size'?: string | number;

  /**
   * "label"字体颜色
   * @default #606266
   */
  'label-color'?: string;

  /**
   * 自定义字体图标库时，需要写上此值，详见：扩展自定义图标库 https://www.uviewui.com/guide/customIcon.html
   * @default uicon
   */
  'custom-prefix'?: string;

  /**
   * "label"在右方时与图标的距离，单位rpx
   * @default 6
   */
  'margin-left'?: string | number;

  /**
   * "label"在下方时与图标的距离，单位rpx
   * @default 6
   */
  'margin-top'?: string | number;

  /**
   * "label"在文档时与图标的距离，单位rpx
   * @version 1.4.1
   * @default 6
   */
  'margin-bottom'?: string | number;

  /**
   * "label"在左侧时与图标的距离，单位rpx
   * @version 1.4.1
   * @default 6
   */
  'margin-right'?: string | number;

  /**
   * "label"相对于图标的位置(left和top为1.4.1新增)
   * @default right
   */
  'label-pos'?: 'bottom' | 'top' | 'left' | 'right';

  /**
   * 图标的样式，可以设置字体大小，颜色等，对象形式，"size"和"color"优先级高于此参数
   * @version 1.3.0
   */
  'custom-style'?: Record<string, any>;

  /**
   * "name"为图片路径时图片的宽度，单位任意，数值默认为rpx单位
   * @version 1.5.6
   */
  width?: string | number;

  /**
   * "name"为图片路径时图片的高度，单位任意，数值默认为rpx单位
   * @version 1.5.6
   */
  height?: string | number;

  /**
   * 如果某些场景，如果图标没有垂直居中，可以调整此参数，单位任意，数值默认为rpx单位
   * @version 1.5.6
   * @default 0
   */
  top?: string | number;

  /**
   * 是否为DecimalIcon
   * @version 1.7.2
   * @default false
   */
  'show-decimal-icon'?: boolean;

  /**
   * 背景颜色，可接受主题色，仅Decimal时有效
   * @version 1.7.2
   * @default #ececec
   */
  'inactive-color'?: string;

  /**
   * 显示的百分比，仅Decimal时有效
   * @version 1.7.2
   * @default 50
   */
  percent?: string | number;

  /**
   * 点击图标时触发
   * @param index 通过props传递的index值
   */
  $emit(eventName: 'click', index: number): this;
}
