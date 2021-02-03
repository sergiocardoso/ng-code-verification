import Code from './code';
export default class Codes {
    el: Code[];
    index: number;
    constructor(qtde: number);
    next(evt: any): void;
    getArrayCodes(): string[];
    getCode(): string;
    validCodes(): boolean;
    setError(idTemp: any, value: any): void;
}
