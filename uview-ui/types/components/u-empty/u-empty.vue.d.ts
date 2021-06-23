// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UEmpty extends Vue {
  /**
   * 文字颜色
   * @default #c0c4cc
   */
  color?: string;

  /**
   * 文字提示
   * @default 无内容
   */
  text?: string;

  /**
   * icon的颜色，字体图标时有效
   * @version 1.4.2
   * @default #c0c4cc
   */
  'icon-color'?: string;

  /**
   * icon的大小，单位rpx，如果"src"为图片路径，此参数可以设置图片的尺寸
   * @version 1.4.2
   * @default 120
   */
  'icon-size'?: string | number;

  /**
   * 图标名称或者图片路径(绝对路径)，如定义，"mode"参数会失效
   */
  src?: string;

  /**
   * 提示文字的大小，单位rpx
   * @default 28
   */
  'font-size'?: string | number;

  /**
   * 内置的图标，见文档说明
   * @default data
   */
  mode?: UEmptyModeEnum;

  /**
   * 图标的宽度，单位rpx
   * @default 240
   * @deprecated 1.4.2起废弃
   */
  'img-width'?: string | number;

  /**
   * 图标的高度，单位rpx
   * @default auto
   * @deprecated 1.4.2起废弃
   */
  'img-height'?: string;

  /**
   * 是否显示组件
   * @default true
   */
  show?: boolean;

  /**
   * 组件到上一个元素的间距,单位rpx
   * @default 0
   */
  'margin-top'?: string | number;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 给组件底部传入slot内容
     */
    bottom: VNode[];
  };
}

/**
 * mode值可选枚举
 */
export enum UEmptyModeEnum {
  /**
   * 购物车为空
   */
  'car' = 'car',
  /**
   * 页面不存在
   */
  'page' = 'page',
  /**
   * 没有搜索结果
   */
  'search' = 'search',
  /**
   * 没有收货地址
   */
  'address' = 'address',
  /**
   * 没有WiFi
   */
  'wifi' = 'wifi',
  /**
   * 订单为空
   */
  'order' = 'order',
  /**
   * 没有优惠券
   */
  'coupon' = 'coupon',
  /**
   * 无收藏
   */
  'favor' = 'favor',
  /**
   * 无权限
   */
  'permission' = 'permission',
  /**
   * 无历史记录
   */
  'history' = 'history',
  /**
   * 无新闻列表
   */
  'news' = 'news',
  /**
   * 消息列表为空
   */
  'message' = 'message',
  /**
   * 列表为空(通用)
   */
  'list' = 'list',
  /**
   * 数据为空(默认，通用)
   */
  'data' = 'data',
}
