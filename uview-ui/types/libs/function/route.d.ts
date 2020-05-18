interface RouterType { 
    type?: string
    url?: string
    delta?: number
    params?: { [x: string]: any }
    animationType?: string
    animationDuration?:number
}

export declare type Route = (options?: RouterType | string, params?: boolean | {[x:string]:any}) => void