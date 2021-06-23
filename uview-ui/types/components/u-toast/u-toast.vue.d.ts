// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UToast extends Vue {
  /**
   * toast展示时的"z-index"值
   * @default 10090
   */
  'z-index'?: string | number;

  /**
   * 显示toast，如需一进入页面就显示toast，请在onReady生命周期调用
   */
  show(params: UToastParams): void;
}

export interface UToastParams {
  /**
   * 显示的文本
   */
  title?: string;

  /**
   * 主题类型，不填默认为"default"
   * @default default
   */
  type?: 'primary' | 'success' | 'error' | 'warning' | 'info' | 'default';

  /**
   * toast的持续时间，单位ms
   * @default 2000
   */
  duration?: number;

  /**
   * toast结束跳转的url，不填不跳转，优先级高于"back"参数
   */
  url?: string;

  /**
   * 是否显示显示"type"对应的图标，为"false"不显示图标
   * @default true
   */
  icon?: boolean;

  /**
   * toast出现的位置
   * @default center
   */
  position?: 'top' | 'bottom' | 'center';

  /**
   * toast结束后执行的回调方法
   * @version 1.3.6
   */
  callback?: (...args: any[]) => void;

  /**
   * toast结束后，跳转tab页面时需要配置为"true"
   * @default false
   */
  isTab?: boolean;

  /**
   * toast结束后，是否返回上一页，优先级低于"url"参数
   * @version 1.4.0
   * @default false
   */
  back?: boolean;
}
