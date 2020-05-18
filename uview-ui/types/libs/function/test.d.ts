

export declare type Test = {
    email(value: string): boolean;
    mobile(value: string): boolean;
    url(value: string): boolean;
    date(value: string): boolean;
    dateISO(value:Date | string): boolean;
    number(value: number | string): boolean;
    digits(value: number): boolean;
    idCard(value: string | number): boolean;
    carNo(value: string): boolean;
    amount(value: number | string): boolean;
    chinese(value: string): boolean;
    letter(value: string): boolean;
    enOrNum(value: string | number): boolean;
    contains(value: string): boolean;
    range(value: number, param: number[]): boolean;
    rangeLength(value: string, param: number[]): boolean;
    empty(value: any): boolean;
} 