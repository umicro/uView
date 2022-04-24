// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UCard extends Vue {
  /**
   * 卡片与屏幕两侧是否留空隙
   * @default fasle
   */
  full?: boolean;

  /**
   * 头部左边的标题
   */
  title?: string;

  /**
   * 标题颜色
   * @default #303133
   */
  'title-color'?: string;

  /**
   * 标题字体大小，单位rpx
   * @default 30
   */
  'title-size'?: string | number;

  /**
   * 头部右边的副标题
   */
  'sub-title'?: string;

  /**
   * 副标题颜色
   * @default #909399
   */
  'sub-title-color'?: string;

  /**
   * 副标题字体大小
   * @default 26
   */
  'sub-title-size'?: string | number;

  /**
   * 是否显示边框
   * @default true
   */
  border?: boolean;

  /**
   * 用于标识点击了第几个卡片
   */
  index?: string | number;

  /**
   * 卡片与屏幕两边和上下元素的间距，需带单位，如"30rpx 20rpx"，见文档说明
   * @default 30rpx
   */
  margin?: string;

  /**
   * 卡片整体的圆角值，单位rpx
   * @default 16
   */
  'border-radius'?: string | number;

  /**
   * 头部自定义样式，对象形式
   */
  'head-style'?: Record<string, any>;

  /**
   * 主体自定义样式，对象形式
   */
  'body-style'?: Record<string, any>;

  /**
   * 底部自定义样式，对象形式
   */
  'foot-style'?: Record<string, any>;

  /**
   * 是否显示头部的下边框
   * @default true
   */
  'head-border-bottom'?: boolean;

  /**
   * 是否显示底部的上边框
   * @default true
   */
  'foot-border-top'?: boolean;

  /**
   * 缩略图路径，如设置将显示在标题的左边，不建议使用相对路径
   */
  thumb?: string;

  /**
   * 缩略图的宽度，高等于宽，单位rpx
   * @default 60
   */
  'thumb-width'?: string | number;

  /**
   * 缩略图是否为圆形
   * @default false
   */
  'thumb-circle'?: boolean;

  /**
   * 给head，body，foot部的内边距，见文档说明，单位rpx
   * @default 30
   */
  padding?: string | number;

  /**
   * 是否显示头部
   * @version 1.3.5
   * @default true
   */
  'show-head'?: boolean;

  /**
   * 是否显示尾部
   * @version 1.3.5
   * @default true
   */
  'show-foot'?: boolean;

  /**
   * 卡片外围阴影，字符串形式
   * @version 1.6.2
   * @default none
   */
  'box-shadow'?: string;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义卡片头部内容
     */
    head: VNode[];
    /**
     * 自定义卡片主体部分内容
     */
    body: VNode[];
    /**
     * 自定义卡片底部部分内容
     */
    foot: VNode[];
  };

  /**
   * 整个卡片任意位置被点击时触发
   * @param index 用户传递的标识符
   */
  $emit(eventName: 'click', index: number | string | Record<string, any>): this;

  /**
   * 卡片头部被点击时触发
   * @param index 用户传递的标识符
   */
  $emit(eventName: 'head-click', index: number | string | Record<string, any>): this;

  /**
   * 卡片主体部分被点击时触发
   * @param index 用户传递的标识符
   */
  $emit(eventName: 'body-click', index: number | string | Record<string, any>): this;

  /**
   * 卡片底部部分被点击时触发
   * @param index 用户传递的标识符
   */
  $emit(eventName: 'foot-click', index: number | string | Record<string, any>): this;
}
