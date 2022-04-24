// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UWaterfall extends Vue {
  /**
   * 单条数据添加到队列的时间间隔，单位ms，见文档注意事项说明
   * @default 200
   */
  'add-time'?: string | number;

  /**
   * 数据的唯一值的键名，见文档说明
   * @default id
   */
  idKey?: string;

  /**
   * 清空列表数据
   */
  clear(): void;

  /**
   * 移除列表中指定项
   * @param id id为唯一的"id"值，见文档说明
   */
  remove(id: string): void;
}
