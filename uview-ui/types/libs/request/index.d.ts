/// <reference path="../../../../../node_modules/@dcloudio/types/index.d.ts" />

export interface RequestConfig {
  /**
   * 请求的根域名
   * @default ''
   */
  baseUrl?: string;
  /**
   * 默认的请求头
   * @default {}
   */
  header?: undefined | Record<string, any>;
  /**
   * 可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
   * @default POST
   */
  method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
  /**
   * 设置为json，返回后uni.request会对数据进行一次JSON.parse
   * @default json
   */
  dataType?: string;
  /**
   * 设置响应的数据类型。合法值：text、arraybuffer
   * @default text
   */
  responseType?: string;
  /**
   * 显示 loading 提示框
   * @default true
   */
  showLoading: boolean;
  /**
   * 加载中时显示的文字
   * @default 请求中...
   */
  loadingText?: string;
  /**
   * 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
   * @default 800
   */
  loadingTime?: number;
  /**
   * 定时器
   * @default null
   */
  timer?: null | ReturnType<typeof global.setTimeout>;
  /**
   * 是否在拦截器中返回服务端的原始数据，见文档说明
   * @default false
   */
  originalData?: boolean;
  /**
   * 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
   * @default true
   */
  loadingMask?: boolean;
}

/**
 * 拦截器类型
 */
export interface RequestInterceptor {
  /**
   * 请求前的拦截
   */
  request: null | ((options: UniApp.RequestOptions) => boolean);
  /**
   * 请求后的拦截
   */
  response: null | ((options: any) => boolean);
}

interface Request {
  /**
   * 配置参数
   */
  config: RequestConfig;

  /**
   * 请求参数
   */
  options: UniApp.RequestOptions;

  /**
   * 拦截器
   */
  interceptor: RequestInterceptor;

  /**
   * 设置全局默认配置
   * @param customConfig
   */
  setConfig(customConfig: RequestConfig): void;

  /**
   * 主要请求部分
   * @param options 请求参数，默认值 {}
   */
  request<T = unknown>(options: UniApp.RequestOptions): Promise<T>;

  /**
   * get请求
   * @param url 请求地址
   * @param data 携带的请求参数，默认值 {}
   * @param header 请求头参数，默认值 {}
   */
  get<T = unknown>(
    url: string,
    data?: UniApp.RequestOptions['data'],
    header?: UniApp.RequestOptions['header'],
  ): Promise<T>;

  /**
   * post请求
   * @param url 请求地址
   * @param data 携带的请求参数，默认值 {}
   * @param header 请求头参数，默认值 {}
   */
  post<T = unknown>(
    url: string,
    data: UniApp.RequestOptions['data'],
    header: UniApp.RequestOptions['header'],
  ): Promise<T>;

  /**
   * put请求，不支持支付宝小程序(HX2.6.15)
   * @param url 请求地址
   * @param data 携带的请求参数，默认值 {}
   * @param header 请求头参数，默认值 {}
   */
  put<T = unknown>(
    url: string,
    data: UniApp.RequestOptions['data'],
    header: UniApp.RequestOptions['header'],
  ): Promise<T>;

  /**
   * delete请求，不支持支付宝和头条小程序(HX2.6.15)
   * @param url 请求地址
   * @param data 携带的请求参数，默认值 {}
   * @param header 请求头参数，默认值 {}
   */
  delete<T = unknown>(
    url: string,
    data: UniApp.RequestOptions['data'],
    header: UniApp.RequestOptions['header'],
  ): Promise<T>;
}

declare const request: Request;
export default request;
