import { FormControl } from '@angular/forms';
export default class Code {
    static numberSeq: number;
    private pError;
    private pFormControl;
    private pValue;
    private pId;
    constructor();
    /**
     * Get Error
     */
    get error(): boolean;
    /**
     * Set Error
     */
    set error(value: boolean);
    /**
     * Get FormControl
     */
    get formControl(): FormControl;
    /**
     * Get Value
     */
    get value(): number;
    /**
     * Set Value
     */
    set value(valueTemp: number);
    /**
     * Get ID
     */
    get id(): string;
}
