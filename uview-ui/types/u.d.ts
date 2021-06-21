// 全局挂载引入http相关请求拦截插件
import http from 'uview-ui/types/libs/request';
// post类型对象参数转为get类型url参数
import queryParams from 'uview-ui/types/libs/function/queryParams';
// 路由封装
import route from 'uview-ui/types/libs/function/route';
// 时间格式化
import timeFormat from 'uview-ui/types/libs/function/timeFormat';
// 时间戳格式化,返回多久之前
import timeFrom from 'uview-ui/types/libs/function/timeFrom';
// 颜色渐变相关,colorGradient-颜色渐变,hexToRgb-十六进制颜色转rgb颜色,rgbToHex-rgb转十六进制
import {
  /**
   * colorGradient-颜色渐变
   */
  colorGradient,
  /**
   * 颜色值转为rgb格式件
   */
  colorToRgba,
  /**
   * hexToRgb-十六进制颜色转rgb颜色
   */
  hexToRgb,
  /**
   * rgbToHex-rgb转十六进制
   */
  rgbToHex,
} from 'uview-ui/types/libs/function/colorGradient';
// 生成全局唯一guid字符串
import guid from 'uview-ui/types/libs/function/guid';
// 主题相关颜色,info|success|warning|primary|default|error,此颜色已在uview.scss中定义,但是为js中也能使用,故也定义一份
import color from 'uview-ui/types/libs/function/color';
// 根据type获取图标名称
import type2icon from 'uview-ui/types/libs/function/type2icon';
// 打乱数组的顺序
import randomArray from 'uview-ui/types/libs/function/randomArray';
// 对象和数组的深度克隆
import deepClone from 'uview-ui/types/libs/function/deepClone';
// 对象深度拷贝
import deepMerge from 'uview-ui/types/libs/function/deepMerge';
// 添加单位
import addUnit from 'uview-ui/types/libs/function/addUnit';
// 规则检验
import test from 'uview-ui/types/libs/function/test';
// 随机数
import random from 'uview-ui/types/libs/function/random';
// 去除空格
import trim from 'uview-ui/types/libs/function/trim';
// toast提示，对uni.showToast的封装
import toast from 'uview-ui/types/libs/function/toast';
// 获取父组件参数
import getParent from 'uview-ui/types/libs/function/getParent';
// 获取整个父组件
import $parent from 'uview-ui/types/libs/function/$parent';
// 获取sys()和os()工具方法
// 获取设备信息，挂载到$u的sys()(system的缩写)属性中，
// 同时把安卓和ios平台的名称"ios"和"android"挂到$u.os()中，方便取用
import { sys, os } from 'uview-ui/types/libs/function/sys';
// 防抖方法
import debounce from 'uview-ui/types/libs/function/debounce';
// 节流方法
import throttle from 'uview-ui/types/libs/function/throttle';
// 配置信息
import config from 'uview-ui/types/libs/config/config';
// 各个需要fixed的地方的z-index配置文件
import zIndex from 'uview-ui/types/libs/config/zIndex';

/**
 * 开发环境进行信息输出,主要是一些报错信息
 * 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
 * https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
 * @param str
 */
type wranning = (str: string) => void;

export default interface U {
  /**
   * post类型对象参数转为get类型url参数
   */
  queryParams: queryParams;
  /**
   * 路由封装
   */
  route: route;
  /**
   * 时间格式化
   */
  timeFormat: timeFormat;
  /**
   * 时间格式化，别名date
   */
  date: timeFormat;
  /**
   * 时间戳格式化,返回多久之前
   */
  timeFrom: timeFrom;
  /**
   * colorGradient-颜色渐变
   */
  colorGradient: colorGradient;
  /**
   * 颜色值转为rgb格式件
   */
  colorToRgba: colorToRgba;
  /**
   * hexToRgb-十六进制颜色转rgb颜色
   */
  hexToRgb: hexToRgb;
  /**
   * rgbToHex-rgb转十六进制
   */
  rgbToHex: rgbToHex;
  /**
   * 生成全局唯一guid字符串
   */
  guid: guid;
  /**
   * 主题相关颜色,info|success|warning|primary|default|error,此颜色已在uview.scss中定义,但是为js中也能使用,故也定义一份
   */
  color: color;
  /**
   * 获取sys()和os()工具方法
   * 获取设备信息，挂载到$u的sys()(system的缩写)属性中，
   * 同时把安卓和ios平台的名称"ios"和"android"挂到$u.os()中，方便取用
   */
  sys: sys;
  /**
   * 获取os()工具方法
   */
  os: os;
  /**
   * 根据type获取图标名称
   */
  type2icon: type2icon;
  /**
   * 打乱数组的顺序
   */
  randomArray: randomArray;
  /**
   * 开发环境进行信息输出,主要是一些报错信息
   */
  wranning: wranning;
  /**
   * http get请求
   */
  get: typeof http.get;
  /**
   * http post请求
   */
  post: typeof http.post;
  /**
   * http put请求
   */
  put: typeof http.put;
  /**
   * http delete请求
   */
  delete: typeof http.delete;
  /**
   * 验证相关的函数
   */
  test: test;
  /**
   * 随机数
   */
  random: random;
  /**
   * 深拷贝
   */
  deepClone: deepClone;
  /**
   * 深度合并
   */
  deepMerge: deepMerge;
  /**
   * 获取父组件参数
   */
  getParent: getParent;
  /**
   * 获取整个父组件
   */
  $parent: $parent;
  /**
   * 添加单位
   */
  addUnit: addUnit;
  /**
   * 去除空格
   */
  trim: trim;
  /**
   * 类型列表
   */
  type: ['primary', 'success', 'error', 'warning', 'info'];
  /**
   * 全局挂载引入http相关请求拦截插件
   */
  http: typeof http;
  /**
   * toast提示，对uni.showToast的封装
   */
  toast: toast;
  /**
   * uView配置信息相关，比如版本号
   */
  config: config;
  /**
   * 各个需要fixed的地方的z-index配置文件
   */
  zIndex: zIndex;
  /**
   * 防抖方法
   */
  debounce: debounce;
  /**
   * 节流方法
   */
  throttle: throttle;
}
