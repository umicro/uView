// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UTh extends Vue {
  /**
   * 标题单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分"tr"的长度
   */
  width?: string | number;
}
