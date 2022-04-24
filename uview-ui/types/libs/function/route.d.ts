/**
 * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
 * 并且带有路由拦截功能
 */
export interface RouterConfig {
  /**
   *
   * @default navigateTo
   */
  type?:
    | 'navigateTo'
    | 'to'
    | 'redirectTo'
    | 'redirect'
    | 'switchTab'
    | 'tab'
    | 'reLaunch'
    | 'launch'
    | 'navigateBack'
    | 'back';
  url?: string;
  /**
   * navigateBack页面后退时,回退的层数
   */
  delta?: number;
  /**
   * 传递的参数
   */
  params?: Record<string, any>;
  /**
   * 窗口动画,只在APP有效
   * @default 'pop-in'
   */
  animationType?: string;
  /**
   * 窗口动画持续时间,单位毫秒,只在APP有效
   */
  animationDuration?: 300;
  /**
   * 是否需要拦截
   */
  intercept?: false;
}

export default interface Router {
  /**
   * 对外的方法名称
   * @param options 默认值 {}
   * @param params 默认值 {}
   */
  route(options?: RouterConfig, params?: Record<string, any>): void | Promise<any>;
}
