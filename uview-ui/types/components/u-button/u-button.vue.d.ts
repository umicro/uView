// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UButton extends Vue {
  /**
   * 按钮的大小
   * @default default
   */
  size?: 'medium' | 'mini' | 'default';

  /**
   * 是否开启点击水波纹效果
   * @default false
   */
  ripple?: boolean;

  /**
   * 水波纹的背景色，ripple为true时有效
   * @default rgba(0, 0, 0, 0.15)
   */
  'ripple-bg-color'?: string;

  /**
   * 按钮的样式类型
   * @default default
   */
  type?: 'primary' | 'success' | 'info' | 'warning' | 'error' | 'default';

  /**
   * 按钮是否镂空，背景色透明
   * @default false
   */
  plain?: boolean;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否显示按钮的细边框
   * @default true
   */
  'hair-line'?: boolean;

  /**
   * 按钮外观形状，见文档说明
   * @default square
   */
  shape?: 'circle' | 'square';

  /**
   * 按钮名称前是否带 loading 图标
   * @default false
   */
  loading?: boolean;

  /**
   * 用于 "form" 组件，点击分别会触发 "form" 组件的 submit/reset 事件
   */
  'form-type'?: 'submit' | 'reset';

  /**
   * 开放能力
   * @default 请参考uni-app方文档
   */
  'open-type'?: string;

  /**
   * 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果
   * @default button-hover
   */
  'hover-class'?: string;

  /**
   * 按住后多久出现点击态，单位毫秒
   * @default 20
   */
  'hover-start-time'?: string | number;

  /**
   * 手指松开后点击态保留时间，单位毫秒
   * @default 150
   */
  'hover-stay-time'?: string | number;

  /**
   * 对按钮的自定义样式，对象形式，见文档说明
   */
  'custom-style'?: Record<string, any>;

  /**
   * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
   * @default false
   */
  'app-parameter'?: boolean;

  /**
   * 指定是否阻止本节点的祖先节点出现点击态
   * @default false
   */
  'hover-stop-propagation'?: boolean;

  /**
   * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
   * @default en
   */
  lang?: 'zh_CN' | 'zh_TW' | 'en' | string;

  /**
   * 会话来源，open-type="contact"时有效
   */
  'session-from'?: string;

  /**
   * 会话内消息卡片标题，open-type="contact"时有效
   * @default 当前标题
   */
  'send-message-title'?: string;

  /**
   * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
   * @default 当前分享路径
   */
  'send-message-path'?: string;

  /**
   * 会话内消息卡片图片，open-type="contact"时有效
   * @default 当前页面截图
   */
  'send-message-img'?: string;

  /**
   * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
   */
  'show-message-card'?: string;

  /**
   * 节流的时间间隔(一定时间内无论点击多少次，只会触发一次"click"事件)，单位ms，详见节流防抖 /js/debounce.html
   * @version 1.5.8
   * @default 500
   */
  'throttle-time'?: string | number;

  /**
   * 按钮点击，请勿使用@tap点击事件，微信小程序无效，返回值为点击事件及参数
   */
  $emit(eventName: 'click'): this;

  /**
   * open-type="getPhoneNumber"时有效
   * @default 微信小程序
   */
  $emit(eventName: 'getphonenumber'): this;

  /**
   * 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
   * @default 微信小程序
   */
  $emit(eventName: 'getuserinfo'): this;

  /**
   * 当使用开放能力时，发生错误的回调
   * @default 微信小程序
   */
  $emit(eventName: 'error'): this;

  /**
   * 在打开授权设置页并关闭后回调
   * @default 微信小程序
   */
  $emit(eventName: 'opensetting'): this;

  /**
   * 打开 APP 成功的回调
   * @default 微信小程序
   */
  $emit(eventName: 'launchapp'): this;
}
