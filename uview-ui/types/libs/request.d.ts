
export declare type config={
  baseUrl?:string,// 请求的根域名
	method?:string,
	dataType?:string,// 设置为json，返回后uni.request会对数据进行一次JSON.parse
	showLoading?:boolean,// 是否显示loading
	loadingText?:string,// loading 文本
	loadingTime?: number,// 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
	originalData?: boolean,// 是否在拦截器中返回服务端的原始数据，见文档说明
  loadingMask?: boolean,// 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
  [x:string]:any
}

export declare type Request = {
  isHttp(url: string): boolean
  setConfig(customConfig: config): void
  request(options?: config): void
  config: any
  interceptor: any
  get(url: string, data?:any, header?: {[x:string]:any}): Promise<any>
  post(url: string, data?:any, header?:{[x:string]:any}): Promise<any>
  delete(url:string, data?:any, header?:{[x:string]:any}):Promise<any>
}