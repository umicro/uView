interface AnyObject {
	[key: string]: any
}

type Type = 'primary' | 'success' | 'error' | 'warning' | 'info'

type QueryParams = (
	data: AnyObject,
	isPrefix?: boolean,
	arrayFormat?: 'indices' | 'brackets' | 'repeat' | 'comma'
) => string

type RouterType =
	| 'navigateTo'
	| 'to'
	| 'redirect'
	| 'redirectTo'
	| 'switchTab'
	| 'tab'
	| 'reLaunch'
	| 'navigateBack'
	| 'back'

type RouterAnimationType =
	| 'auto'
	| 'none'
	| 'slide-in-right'
	| 'slide-in-left'
	| 'slide-in-top'
	| 'slide-in-bottom'
	| 'fade-in'
	| 'zoom-out'
	| 'zoom-fade-out'
	| 'pop-in'
	| 'slide-out-right'
	| 'slide-out-left'
	| 'slide-out-top'
	| 'slide-out-bottom'
	| 'fade-out'
	| 'zoom-in'
	| 'zoom-fade-in'
	| 'pop-out'

interface RouterOptions {
	type?: RouterType
	url?: string
	delta?: number
	params?: any
	animationType?: RouterAnimationType
	animationDuration?: number
}

interface Router {
	(url?: string, params?: any): void
	(options?: RouterOptions, params?: any): void
}

type TimeFormat = (dateTime: string | number, fmt?: string) => string

interface Color {
	colorGradient(startColor?: string, endColor?: string, step?: number): string[]
	hexToRgb(hex: string): string
	rgbToHex(rgb: string): string
	colorToRgba(color: string, opacity?: number): string
}

type Guid = (length?: number | null, firstU?: boolean, radix?: number) => string

type Sys = () => UniApp.GetSystemInfoResult

type Os = () => string

type Type2icon = (type?: Type, fill?: boolean) => string

type RandomArray = (array: any[]) => any[]

type Wranning = (...data: any[]) => void

type HTTPRequest<T = any> = (
	url?: string,
	params?: string | AnyObject | ArrayBuffer,
	header?: any
) => Promise<T>

interface HTTPConfig {
	baseURL?: string
	url?: string
	data?: string | AnyObject | ArrayBuffer
	header?: any
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'HEAD' | 'OPTIONS' | 'TRACE'
	timeout?: number
	dataType?: 'json' | 'text' | 'html'
	responseType?: 'text' | 'arraybuffer'
	sslVerify?: boolean
	withCredentials?: boolean
	firstIpv4?: boolean
	showLoading?: boolean
	loadingText?: string
	loadingTime?: number
	originalData?: boolean
	loadingMask?: boolean
}

interface HTTP {
	request<T = any>(config?: HTTPConfig): Promise<T>
	get: HTTPRequest
	post: HTTPRequest
	put: HTTPRequest
	delete: HTTPRequest
	setConfig(config?: HTTPConfig): void
	interceptors: {
		request(config: HTTPConfig): HTTPConfig
		response<T = any>(result: T): T | false
	}
}

interface Test {
	email(value: string): boolean
	mobile(value: string): boolean
	url(value: string): boolean
	date(value: string | number): boolean
	dateISO(value: string): boolean
	number(value: string): boolean
	digits(value: string): boolean
	idCard(value: string): boolean
	carNo(value: string): boolean
	amount(value: string): boolean
	chinese(value: string): boolean
	letter(value: string): boolean
	enOrNum(value: string): boolean
	contains(value: string, param: string): boolean
	range(value: number, range?: [number, number]): boolean
	rangeLength(value: string, range?: [number, number]): boolean
	landline(value: string): boolean
	empty(value: any): boolean
	jsonString(value: any): boolean
	array(value: any): boolean
	object(value: any): boolean
	code(value: string, length?: number): boolean
}

type Random = (min: number, max: number) => number

type DeepClone = <T>(obj: T) => T

type DeepMerge = <T extends AnyObject, R extends AnyObject>(target: T, source: R) => (T & R) | false

type AddUnit = (value?: string | number, unit?: string) => string

type Trim = (str: string, pos?: 'both' | 'left' | 'right' | 'all') => string

type Toast = (title: string, duration?: number) => void

type DebounceAndThrottle = (fun: Function, wait?: number, immediate?: boolean) => void

type GetRect = (selector: string, all?: boolean) => Promise<UniApp.NodeInfo>

export interface UView {
	queryParams: QueryParams
	route: Router
	timeFormat: TimeFormat
	date: TimeFormat
	timeFrom: TimeFormat
	colorGradient: Color['colorGradient']
	colorToRgba: Color['colorToRgba']
	guid: Guid
	sys: Sys
	os: Os
	type2icon: Type2icon
	randomArray: RandomArray
	wranning: Wranning
	get: HTTP['get']
	post: HTTP['post']
	put: HTTP['put']
	delete: HTTP['delete']
	hexToRgb: Color['hexToRgb']
	rgbToHex: Color['rgbToHex']
	test: Test
	random: Random
	deepClone: DeepClone
	deepMerge: DeepMerge
	addUnit: AddUnit
	trim: Trim
	type: Type[]
	http: HTTP
	toast: Toast
	debounce: DebounceAndThrottle
	throttle: DebounceAndThrottle
	getRect: GetRect
}

// @ts-ignore
declare module 'vue/types/vue' {
	interface Vue {
		$u: UView
	}
}

interface UViewPlugin {
	install(vue: any): void
}

declare const uView: UViewPlugin

export default uView
