// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UAvatarCropper extends Vue {
  /**
   * 裁剪结束后的事件，通过uni.$on监听	path: 裁剪的图片数据
   */
  $emit(eventName: 'uAvatarCropper'): this;
}

export interface UAvatarCropperRouteParams {
  /**
   * 输出图片宽度，高等于宽，单位<strong>px</strong>
   * @default 200
   */
  'dest-width'?: string | number;

  /**
   * 裁剪框宽度，高等于宽，单位<strong>px</strong>
   * @default 200
   */
  'rect-width'?: string | number;

  /**
   * 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
   * @default jpg
   */
  'file-type'?: 'png' | 'jpg' | string;
}
