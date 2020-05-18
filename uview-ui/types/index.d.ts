import Vue from "vue";

import { QueryParams } from "./libs/function/queryParams";
import { Route } from './libs/function/route'
import { TimeForm } from './libs/function/timeFrom'
import { ColorGradient, HexToRgb, RgbToHex } from "./libs/function/colorGradient";
import { Guid } from "./libs/function/guid";
import { Color } from './libs/function/color';
import { Type2icon } from "./libs/function/type2icon";
import { RandomArray } from "./libs/function/randomArray";
import { Request } from "./libs/request";
import { Test } from "./libs/function/test";
import { Random } from "./libs/function/random";
import { Trim } from "./libs/function/trim";
import { Toast } from "./libs/function/toast";
import { ZIndex } from "./libs/zIndex";
import { mpShare } from "./libs/mpShare";

type Wranning=(params: string)=>void;

type Res={
  left:number
	right:number
	top: number
	height:number
	bottom:number
	width:number
}

export interface $u {
  [x: string]: any
  queryParams: QueryParams
  route: Route
  timeForm: TimeForm
  date: TimeForm
  colorGradient: ColorGradient
  guid: Guid
  color: Color
  type2icon: Type2icon
  randomArray: RandomArray
  wranning: Wranning
  get:Request['get']
  post: Request['post']
  delete: Request['delete']
  hexToRgb: HexToRgb
  rgbToHex: RgbToHex
  test: Test
  random: Random
  trim: Trim
  type: string[]
  http: Request
  toast: Toast
  version: string
  v:string
  zIndex: ZIndex
  mpShare: mpShare
  getRect(selector:string,all?:boolean):Promise<Res> | Promise<any> | Error
}

export declare const $u:$u;

export function install(vue: typeof Vue): void;

declare module 'vue/types/vue' {
  interface Vue {
    $u: $u
  }
}