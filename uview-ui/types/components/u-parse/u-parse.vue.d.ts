// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UParse extends Vue {
  /**
   * 要显示的 html 字符串
   */
  html?: string;

  /**
   * 是否允许播放视频时自动暂停其他视频
   * @default true
   */
  autopause?: boolean;

  /**
   * 是否自动给 table 加一个滚动层（使表格可以单独滚动）
   * @default false
   */
  autoscroll?: boolean;

  /**
   * 是否自动将 title 标签的内容设置到页面标题
   * @default true
   */
  autosetTitle?: boolean;

  /**
   * 压缩等级，可以选择是否移除 id 和 class(不建议修改)
   * @default 0
   */
  compress?: 0 | 1 | 2 | 3;

  /**
   * 主域名，设置后将给链接自动拼接上主域名或协议名
   */
  domain?: string;

  /**
   * 是否开启图片懒加载
   * @default false
   */
  'lazy-load'?: boolean;

  /**
   * 图片加载完成前的占位图，详见 占位图
   */
  'loading-img'?: string;

  /**
   * 是否允许长按复制内容
   * @default false
   */
  selectable?: boolean;

  /**
   * 是否使用渐显动画
   * @default false
   */
  'show-with-animation'?: boolean;

  /**
   * 设置标签的默认样式
   */
  'tag-style'?: Record<string, any>;

  /**
   * 是否使用页面内锚点
   * @default false
   */
  'use-anchor'?: boolean;

  /**
   * 是否使用缓存，设置后多次打开不用重复解析
   * @default false
   */
  'use-cache'?: boolean;

  /**
   * 组解析完成时触发	返回解析结果，可以对该结果进行自定义修改，将在渲染时生效
   * @param nodes
   */
  $emit(eventName: 'parse', nodes: any[]): void;

  /**
   * dom 加载完成时触发	所有节点被添加到节点树中时触发，无返回值，可以调用 api
   */
  $emit(eventName: 'load'): void;

  /**
   * 渲染完成时触发	返回 boundingClientRect 的查询结果（包含宽高、位置等信息），所有图片（除懒加载）加载完成时才会触发，图片较大时可能 延时较长
   * @param rect
   */
  $emit(eventName: 'ready', rect: any): void;

  /**
   * 出错时触发	返回一个 object，其中 source 是错误来源，errMsg 为错误信息，target 包含出错标签的具体信息
   * @param value
   */
  $emit(
    eventName: 'error',
    value: {
      source: string;
      target: VNode;
    },
  ): void;

  /**
   * 图片被点击时触发	返回一个 object，其中 src 是图片链接，ignore 是一个函数，在事件中调用将不进行预览；可用于阻挡 onShow 的调用
   * @param img
   */
  $emit(eventName: 'imgtap', img: { src: string; ignore: () => void }): this;

  /**
   * 在链接被点击时触发	返回一个 object，其中包含了被点击的 a 标签的所有属性，ignore 是一个函数，在事件中调用后将不自动跳转/复制；可在该事件中进行下载文档等进一步操作
   * @param value
   */
  $emit(
    eventName: 'linkpress',
    value: {
      href: string;
      ignore: () => void;
    },
  ): this;
}
