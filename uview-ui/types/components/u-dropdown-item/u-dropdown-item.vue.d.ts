// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UDropdownItem extends Vue {
  /**
   * 双向绑定选项卡选择值
   */
  'v-model'?: string | number;

  /**
   * 菜单项标题
   */
  title?: string;

  /**
   * 选项数据，如果传入了默认slot，此参数无效，数据结构见文档说明
   */
  options?: Record<string, any>[];

  /**
   * 是否禁用此选项卡
   * @default false
   */
  disabled?: boolean;

  /**
   * 弹窗下拉内容的高度(内容超出将会滚动)，"slot"自定义内容时无效(自行使用"scroll-view"处理)，单位任意，默认rpx
   * @version 1.7.0
   * @default auto
   */
  height?: string | number;

  /**
   * 高亮指定项
   * @param index 需要设置高亮的菜单项的索引(从0开始)，不写表示清空内部的高亮
   */
  highlight(index: number): void;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义选项卡内容
     */
    default: VNode[];
  };

  /**
   * 每个u-dropdown均有此回调，点击某个options选项时触发
   * @param value 点击项绑定的value属性值
   */
  $emit(eventName: 'change', value: string): this;
}
