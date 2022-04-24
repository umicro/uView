// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface URate extends Vue {
  /**
   * 双向绑定选择星星的数量
   * @version 1.4.5
   * @default 0
   */
  'v-model'?: string | number;

  /**
   * 最多可选的星星数量
   * @default 5
   */
  count?: string | number;

  /**
   * 默认选中的星星数量，1.4.5起建议使用"v-model"方式
   * @default 0
   */
  current?: string | number;

  /**
   * 是否禁止用户操作
   * @default false
   */
  disabled?: boolean;

  /**
   * 星星的大小，单位rpx
   * @default 32
   */
  size?: string | number;

  /**
   * 未选中星星的颜色
   * @default #b2b2b2
   */
  'inactive-color'?: string;

  /**
   * 选中的星星颜色
   * @default #FA3534
   */
  'active-color'?: string;

  /**
   * 星星之间的距离
   * @default 10
   */
  gutter?: string | number;

  /**
   * 最少选中星星的个数
   * @default 0
   */
  'min-count'?: string | number;

  /**
   * 选中时的图标名，只能为uView的内置图标
   * @default star-fill
   */
  'active-icon'?: string;

  /**
   * 未选中时的图标名，只能为uView的内置图标
   * @default star
   */
  'inactive-icon'?: string;

  /**
   * 自定义字体图标库时，需要写上此值，详见：扩展自定义图标库 https://www.uviewui.com/guide/customIcon.html
   * @version 1.7.2
   * @default uicon
   */
  'custom-prefix'?: string;

  /**
   * 颜色分级显示，可以用不同颜色区分评分层级
   * @version 1.7.2
   */
  colors?: string[];

  /**
   * 图标分级显示，可以用不同类型的icon区分评分层级
   * @version 1.7.2
   */
  icons?: string[];

  /**
   * 选中的星星发生变化时触发
   * @param activeIndex 当前选中的星星的数量，如果使用v-model双向绑定方式，无需监听此事件
   */
  $emit(eventName: 'change', activeIndex: number): this;
}
