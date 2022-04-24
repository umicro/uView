// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UCalendar extends Vue {
  /**
   * 选择日期的模式，date-为单个日期，range-为选择日期范围
   * @default date
   */
  mode?: 'range' | 'date';

  /**
   * 布尔值变量，用于控制日历的弹出与收起
   * @default false
   */
  'v-model'?: boolean;

  /**
   * 是否开启底部安全区适配 /components/safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明
   * @default false
   */
  'safe-area-inset-bottom'?: boolean;

  /**
   * 是否显示顶部的切换年份方向的按钮
   * @default true
   */
  'change-year'?: boolean;

  /**
   * 是否显示顶部的切换月份方向的按钮
   * @default true
   */
  'change-month'?: boolean;

  /**
   * 可切换的最大年份
   * @default 2050
   */
  'max-year'?: number | string;

  /**
   * 可切换的最小年份
   * @default 1950
   */
  'min-year'?: number | string;

  /**
   * 最小可选日期
   * @default 1950-01-01
   */
  'min-date'?: number | string;

  /**
   * 最大可选日期
   * @default 当前日期
   */
  'max-date'?: number | string;

  /**
   * 弹窗顶部左右两边的圆角值，单位rpx
   * @default 20
   */
  'border-radius'?: number | string;

  /**
   * 是否允许通过点击遮罩关闭日历
   * @default true
   */
  'mask-close-able'?: boolean;

  /**
   * 月份切换按钮箭头颜色
   * @default #606266
   */
  'month-arrow-color'?: string;

  /**
   * 年份切换按钮箭头颜色
   * @default #909399
   */
  'year-arrow-color'?: string;

  /**
   * 日期字体的默认颜色
   * @default #303133
   */
  color?: string;

  /**
   * 起始/结束日期按钮的背景色
   * @default #2979ff
   */
  'active-bg-color'?: string;

  /**
   * 弹出时的"z-index"值
   * @default 10075
   */
  'z-index'?: string | number;

  /**
   * 起始/结束日期按钮的字体颜色
   * @default #ffffff
   */
  'active-color'?: string;

  /**
   * 起始/结束日期之间的区域的背景颜色
   * @default rgba(41,121,255,0.13)
   */
  'range-bg-color'?: string;

  /**
   * 选择范围内字体颜色
   * @default #2979ff
   */
  'range-color'?: string;

  /**
   * 起始日期底部的提示文字
   * @default 开始
   */
  'start-text'?: string;

  /**
   * 结束日期底部的提示文字
   * @default 结束
   */
  'end-text'?: string;

  /**
   * 底部确定按钮的主题
   * @default primary
   */
  'btn-type'?: 'default' | 'success' | 'primary' | 'info' | 'warning' | 'error';

  /**
   * 顶部提示文字，如设置名为"tooltip"的"slot"，此参数将失效
   * @default 选择日期
   */
  toolTip: string;

  /**
   * 是否显示右上角的关闭图标
   * @default true
   */
  closeable?: boolean;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义日历顶部的内容
     */
    tooltip: VNode[];
  };

  /**
   * 点击右上角确定按钮时触发
   * @param value 选择日期相关的返回参数
   */
  $emit(
    eventName: 'change',
    value:
      | {
          year: number;
          month: number;
          day: number;
          days: number;
          result: string;
          week: string;
          isToday: boolean;
          // switch: show //是否是切换年月操作
        }
      | {
          startYear: number;
          startMonth: number;
          startDay: number;
          startDate: string;
          startWeek: string;
          endYear: number;
          endMonth: number;
          endDay: number;
          endDate: string;
          endWeek: string;
        },
  ): this;
}
