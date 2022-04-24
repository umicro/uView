// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UInput extends Vue {
  /**
   * 模式选择，见文档说明
   * @default text
   */
  type?: 'select' | 'password' | 'textarea' | 'number' | 'text';

  /**
   * 是否显示右侧的清除图标，type = select时无效
   * @default true
   */
  clearable?: boolean;

  /**
   * 用于双向绑定输入框的值
   */
  'v-model'?: string | number;

  /**
   * 输入框文字的对齐方式
   * @default left
   */
  'input-align'?: 'center' | 'left' | 'right';

  /**
   * placeholder显示值
   * @default 请输入内容
   */
  placeholder?: string;

  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: boolean;

  /**
   * 输入框的最大可输入长度
   * @default 140
   */
  maxlength?: number | string;

  /**
   * placeholder的样式，字符串形式，如"color: red;"
   * @default "color: #c0c4cc;"
   */
  'placeholder-style'?: string;

  /**
   * 设置键盘右下角按钮的文字，仅在"type"为"text"时生效
   * @default done
   */
  'confirm-type'?: string;

  /**
   * 自定义输入框的样式，对象形式
   */
  'custom-style'?: Record<string, any>;

  /**
   * 是否自动获得焦点
   * @default false
   */
  focus?: boolean;

  /**
   * 如果"type"为"textarea"，且在一个"position:fixed"的区域，需要指明为"true"
   * @default false
   */
  fixed?: boolean;

  /**
   * "type"为"password"时，是否显示右侧的密码查看图标
   * @default true
   */
  'password-icon'?: boolean;

  /**
   * 是否显示边框
   * @default false
   */
  border?: boolean;

  /**
   * 输入框的边框颜色
   * @default #dcdfe6
   */
  'border-color'?: string;

  /**
   * 是否自动增高输入区域，"type"为"textarea"时有效
   * @default true
   */
  'auto-height'?: boolean;

  /**
   * 高度，单位rpx
   * @default text类型时为70，textarea时为100
   */
  height?: number | string;

  /**
   * 指定光标与键盘的距离，单位<strong data-v-f3b24784="">px</strong>
   * @version 1.4.4
   * @default 0
   */
  'cursor-spacing'?: number | string;

  /**
   * 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
   * @version 1.5.6
   * @default -1
   */
  'selection-start'?: number | string;

  /**
   * 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
   * @version 1.5.6
   * @default -1
   */
  'selection-end'?: number | string;

  /**
   * 是否自动去除两端的空格
   * @version 1.5.8
   * @default true
   */
  trim?: boolean;
}
