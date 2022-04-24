// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue, { VNode } from 'vue';

export interface UUpload extends Vue {
  /**
   * 服务器上传地址
   */
  action?: string;

  /**
   * 最大选择图片的数量
   * @default 99
   */
  'max-count'?: string | number;

  /**
   * 图片预览区域和添加图片按钮的宽度，单位rpx，不能是百分比，或者"auto"
   * @default 200
   */
  width?: string | number;

  /**
   * 图片预览区域和添加图片按钮的高度，单位rpx，不能是百分比，或者"auto"
   * @version 1.6.4
   * @default 200
   */
  height?: string | number;

  /**
   * 如果需要自定义选择图片的按钮，设置为"true"
   * @default false
   */
  'custom-btn'?: boolean;

  /**
   * 是否显示进度条
   * @default true
   */
  'show-progress'?: boolean;

  /**
   * 是否启用(显示/隐藏)组件
   * @default false
   */
  disabled?: boolean;

  /**
   * 预览图片等显示模式，可选值为uni的image的"mode"属性值
   * @default aspectFill
   */
  'image-mode'?: string;

  /**
   * 上传携带的头信息，对象形式
   * @default {}
   */
  header?: Record<string, any>;

  /**
   * 上传额外携带的参数
   * @default {}
   */
  'form-data'?: Record<string, any>;

  /**
   * 上传文件的字段名，供后端获取使用
   * @default file
   */
  name?: string;

  /**
   * original 原图，compressed 压缩图，默认二者都有，H5无效
   * @default ['original', 'compressed']
   */
  'size-type'?: string[];

  /**
   * 选择图片的来源，album-从相册选图，camera-使用相机，默认二者都有
   * @default ['album', 'camera']
   */
  'source-type'?: string[];

  /**
   * 是否可以通过"uni.previewImage"预览已选择的图片
   * @default true
   */
  'preview-full-image'?: boolean;

  /**
   * 是否开启图片多选，部分安卓机型不支持
   * @default true
   */
  multiple?: boolean;

  /**
   * 是否显示删除图片的按钮
   * @default true
   */
  deletable?: boolean;

  /**
   * 选择单个文件的最大大小，单位B(byte)，默认不限制
   * @default Number.MAX_VALUE
   */
  'max-size'?: string | number;

  /**
   * 默认显示的图片列表，数组元素为对象，必须提供"url"属性
   */
  'file-list'?: Record<string, any>[];

  /**
   * 选择图片按钮的提示文字
   * @default 选择图片
   */
  'upload-text'?: string;

  /**
   * 选择完图片是否自动上传，见文档说明
   * @default true
   */
  'auto-upload'?: boolean;

  /**
   * 特殊情况下是否自动提示toast，见文档说明
   * @default true
   */
  'show-tips'?: boolean;

  /**
   * 是否显示组件内部的图片预览
   * @default true
   */
  'show-upload-list'?: boolean;

  /**
   * 右上角删除图标名称，只能为uView内置图标
   * @default close
   */
  'del-icon'?: string;

  /**
   * 右上角关闭按钮的背景颜色
   * @default #fa3534
   */
  'del-bg-color'?: string;

  /**
   * 右上角关闭按钮图标的颜色
   * @default #ffffff
   */
  'del-color'?: string;

  /**
   * 如果上传后服务端返回的值为"json"字符串的话，是否自动转为"json"
   * @version 1.3.7
   * @default true
   */
  'to-json'?: boolean;

  /**
   * 每个文件上传前触发的钩子回调函数，见文档说明，注意不要加括号
   * @version 1.3.7
   */
  'before-upload'?: (...args: any[]) => void;

  /**
   * 允许的图片后缀
   * @version 1.5.5
   * @default ['png', 'jpg', 'jpeg', 'webp', 'gif']
   */
  limitType: string[];

  /**
   * 在各个回调事件中的最后一个参数返回，用于区别是哪一个组件的事件
   * @version 1.6.1
   */
  index?: string | number;

  /**
   * 调用此方法，手动上传图片
   */
  upload(): void;

  /**
   * 调用此方法，清空内部文件列表
   */
  clear(): void;

  /**
   * 调用此方法，重新上传内部上传失败或者尚未上传的图片
   */
  reUpload(): void;

  /**
   * 手动移除列表的某一个图片，index为lists数组的索引
   */
  remove(index: number): void;

  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义的选择图片按钮
     */
    addBtn: VNode[];
  };

  /**
   * 图片大小超出最大允许大小
   * @param file
   * @param lists 内部当前的文件列表
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-oversize', file: File, lists: Record<string, any>[], name: number | string): this;

  /**
   * 全屏预览图片时触发
   * @param url 当前选中的图片地址
   * @param lists 内部当前的文件列表
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-preview', url: string, lists: Record<string, any>[], name: number | string): this;

  /**
   * 移除图片时触发
   * @param index
   * @param lists 内部当前的文件列表
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-remove', index: number, lists: Record<string, any>[], name: number | string): this;

  /**
   * 图片上传成功时触发
   * @param data 服务器返回的数据
   * @param index
   * @param lists 内部当前的文件列表
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-success', data: any, index: number, lists: Record<string, any>[], name: number | string): this;

  /**
   * 图片上传后，无论成功或者失败都会触发
   * @param res 服务器返回的信息
   * @param index
   * @param lists 内部当前的文件列表
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-change', res: any, index: number, lists: Record<string, any>[], name: number | string): this;

  /**
   * 图片上传失败时触发
   * @param res 服务器返回的信息
   * @param index
   * @param lists 内部当前的文件列表
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-error', res: any, index: number, lists: Record<string, any>[], name: number | string): this;

  /**
   * 图片上传过程中的进度变化过程触发
   * @param res 服务器返回的信息，具体参数请打印查看
   * @param index
   * @param lists 内部当前的文件列表
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-progress', res: any, index: number, lists: Record<string, any>[], name: number | string): this;

  /**
   * 所有图片上传完毕触发
   * @param lists 可以通过此事件，将lists参数获取，提交给后端使用
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-uploaded', lists: Record<string, any>[], name: number | string): this;

  /**
   * 每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表
   * @param lists 内部当前的文件列表
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-choose-complete', lists: Record<string, any>[], name: number | string): this;

  /**
   * 当内部文件列表被加入文件、移除文件，或手动调用clear方法时触发
   * @param lists 内部文件变化之后的列表
   * @param name 通过props传递的index参数
   */
  $emit(eventName: 'on-list-change', lists: Record<string, any>[], name: number | string): this;

  /**
   * 选择文件出错时触发，比如选择文件时取消了操作，只在微信和APP有效
   * @param error 错误信息
   * @version 1.7.0
   */
  $emit(eventName: 'on-choose-fail', error: string): this;
}
