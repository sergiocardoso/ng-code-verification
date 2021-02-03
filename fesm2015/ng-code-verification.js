import { EventEmitter, Component, ViewChildren, Output, Input, NgModule } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

class Code {
    constructor() {
        this.pFormControl = new FormControl('', Validators.required);
        this.pId = 'field_' + Code.numberSeq;
        Code.numberSeq++;
        console.log('static varibale', Code.numberSeq);
    }
    /**
     * Get Error
     */
    get error() {
        return this.pError;
    }
    /**
     * Set Error
     */
    set error(value) {
        this.pError = value;
    }
    /**
     * Get FormControl
     */
    get formControl() {
        return this.pFormControl;
    }
    /**
     * Get Value
     */
    get value() {
        return this.pValue;
    }
    /**
     * Set Value
     */
    set value(valueTemp) {
        this.pValue = valueTemp;
    }
    /**
     * Get ID
     */
    get id() {
        return this.pId;
    }
}
Code.numberSeq = 1;

class Codes {
    constructor(qtde) {
        this.index = 0;
        this.el = Array.from({ length: qtde }, () => new Code());
    }
    next(evt) {
        const idEl = parseInt(evt.srcElement.id.split('_')[1], 0);
        // update value
        this.el[idEl - 1].value = evt.target.value;
        const nextEl = idEl < this.el.length ? (idEl + 1) : this.el.length;
        const el = document.getElementById('field_' + nextEl);
        el.focus();
        if (nextEl < this.el.length) {
            el.value = '';
        }
    }
    getArrayCodes() {
        return this.el.map(elTemp => elTemp.value ? elTemp.value.toString() : '');
    }
    getCode() {
        return this.getArrayCodes().join('');
    }
    validCodes() {
        const errors = this.el.map(elTemp => !elTemp.value ? false : true);
        let valid = true;
        errors.forEach((value, index) => {
            if (!value) {
                this.setError(index + 1, true);
                valid = false;
            }
            else {
                this.setError(index + 1, false);
            }
        });
        return valid;
    }
    setError(idTemp, value) {
        this.el[idTemp - 1].error = value;
    }
}

class NgCodeVerificationComponent {
    constructor() {
        this.codeComplete = new EventEmitter();
        this.codeTotal = 0;
    }
    ngOnInit() {
        this.codes = new Codes(this.codeTotal);
    }
    onInput(evt) {
        this.codes.next(evt);
        this.onCodeCompleted();
        if (this.checkIfLast(evt)) {
            this.onCodeCompleted();
        }
    }
    checkIfLast(evt) {
        const id = parseInt(evt.srcElement.id.split('_')[1], 0);
        return id >= this.codes.el.length ? true : false;
    }
    onCodeCompleted() {
        this.codeComplete.emit({
            code: this.codes.getCode(),
            valid: this.codes.validCodes()
        });
    }
}
NgCodeVerificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-code-verification',
                template: `
    <div #formCode>
      <input
        type="text"
        maxlength="1"
        class="codeInput"
        *ngFor="let codeTemp of codes.el"
        [formControl]="codeTemp.formControl"
        [id]="codeTemp.id"
        (input)="onInput($event)"
        [class.is-invalid]="codeTemp.error"
        maxlength="1"
      />
    </div>
  `,
                styles: [".codeInput{border:1px solid rgba(0,0,0,.2);border-radius:5px;font-size:70px;height:60px;margin:5px;padding:15px;text-align:center;width:40px}.is-invalid{border:2px solid red}"]
            },] }
];
NgCodeVerificationComponent.ctorParameters = () => [];
NgCodeVerificationComponent.propDecorators = {
    formCode: [{ type: ViewChildren, args: ['formCode',] }],
    codeComplete: [{ type: Output }],
    codeTotal: [{ type: Input }]
};

class NgCodeVerificationModule {
}
NgCodeVerificationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgCodeVerificationComponent],
                imports: [
                    BrowserModule
                ],
                exports: [NgCodeVerificationComponent]
            },] }
];

/*
 * Public API Surface of ng-code-verification
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgCodeVerificationComponent, NgCodeVerificationModule };
//# sourceMappingURL=ng-code-verification.js.map
