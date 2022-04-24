/// <reference path="../../../../../node_modules/@dcloudio/types/index.d.ts" />

/**
 * 获取客户端平台
 * @returns
 */
export type os = () => string;

/**
 * 获取系统信息
 * @returns
 */
export type sys = () => UniApp.GetSystemInfoResult;
