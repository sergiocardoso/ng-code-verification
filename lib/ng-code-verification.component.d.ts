import { OnInit, QueryList, ElementRef, EventEmitter } from '@angular/core';
import Codes from './codes';
export declare class NgCodeVerificationComponent implements OnInit {
    formCode: QueryList<ElementRef>;
    codeComplete: EventEmitter<{
        code: string;
        valid: boolean;
    }>;
    codeTotal: number;
    codes: Codes;
    constructor();
    ngOnInit(): void;
    onInput(evt: any): void;
    checkIfLast(evt: any): boolean;
    onCodeCompleted(): void;
}
