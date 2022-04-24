// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UTopTips extends Vue {
  /**
   * 导航栏高度(包含状态栏高度在内)，单位<span style="color: red;">PX</span>
   */
  'navbar-height'?: string | number;

  /**
   * "z-index"值
   * @default 975
   */
  'z-index'?: string | number;
  /**
   * 显示toast，如需一进入页面就显示toast，请在onReady生命周期调用
   */
  show(params: UTopTipParams): void;
}

export interface UTopTipParams {
  /**
   * 要显示的内容
   */
  title?: string;

  /**
   * 主题选择
   * @default primary
   */
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary';

  /**
   * 显示的时间，单位ms
   */
  duration?: string | number;
}
