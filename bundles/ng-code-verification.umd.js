(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng-code-verification', ['exports', '@angular/core', '@angular/forms', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['ng-code-verification'] = {}, global.ng.core, global.ng.forms, global.ng.platformBrowser));
}(this, (function (exports, core, forms, platformBrowser) { 'use strict';

    var Code = /** @class */ (function () {
        function Code() {
            this.pFormControl = new forms.FormControl('', forms.Validators.required);
            this.pId = 'field_' + Code.numberSeq;
            Code.numberSeq++;
            console.log('static varibale', Code.numberSeq);
        }
        Object.defineProperty(Code.prototype, "error", {
            /**
             * Get Error
             */
            get: function () {
                return this.pError;
            },
            /**
             * Set Error
             */
            set: function (value) {
                this.pError = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Code.prototype, "formControl", {
            /**
             * Get FormControl
             */
            get: function () {
                return this.pFormControl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Code.prototype, "value", {
            /**
             * Get Value
             */
            get: function () {
                return this.pValue;
            },
            /**
             * Set Value
             */
            set: function (valueTemp) {
                this.pValue = valueTemp;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Code.prototype, "id", {
            /**
             * Get ID
             */
            get: function () {
                return this.pId;
            },
            enumerable: false,
            configurable: true
        });
        return Code;
    }());
    Code.numberSeq = 1;

    var Codes = /** @class */ (function () {
        function Codes(qtde) {
            this.index = 0;
            this.el = Array.from({ length: qtde }, function () { return new Code(); });
        }
        Codes.prototype.next = function (evt) {
            var idEl = parseInt(evt.srcElement.id.split('_')[1], 0);
            // update value
            this.el[idEl - 1].value = evt.target.value;
            var nextEl = idEl < this.el.length ? (idEl + 1) : this.el.length;
            var el = document.getElementById('field_' + nextEl);
            el.focus();
            if (nextEl < this.el.length) {
                el.value = '';
            }
        };
        Codes.prototype.getArrayCodes = function () {
            return this.el.map(function (elTemp) { return elTemp.value ? elTemp.value.toString() : ''; });
        };
        Codes.prototype.getCode = function () {
            return this.getArrayCodes().join('');
        };
        Codes.prototype.validCodes = function () {
            var _this = this;
            var errors = this.el.map(function (elTemp) { return !elTemp.value ? false : true; });
            var valid = true;
            errors.forEach(function (value, index) {
                if (!value) {
                    _this.setError(index + 1, true);
                    valid = false;
                }
                else {
                    _this.setError(index + 1, false);
                }
            });
            return valid;
        };
        Codes.prototype.setError = function (idTemp, value) {
            this.el[idTemp - 1].error = value;
        };
        return Codes;
    }());

    var NgCodeVerificationComponent = /** @class */ (function () {
        function NgCodeVerificationComponent() {
            this.codeComplete = new core.EventEmitter();
            this.codeTotal = 0;
        }
        NgCodeVerificationComponent.prototype.ngOnInit = function () {
            this.codes = new Codes(this.codeTotal);
        };
        NgCodeVerificationComponent.prototype.onInput = function (evt) {
            this.codes.next(evt);
            this.onCodeCompleted();
            if (this.checkIfLast(evt)) {
                this.onCodeCompleted();
            }
        };
        NgCodeVerificationComponent.prototype.checkIfLast = function (evt) {
            var id = parseInt(evt.srcElement.id.split('_')[1], 0);
            return id >= this.codes.el.length ? true : false;
        };
        NgCodeVerificationComponent.prototype.onCodeCompleted = function () {
            this.codeComplete.emit({
                code: this.codes.getCode(),
                valid: this.codes.validCodes()
            });
        };
        return NgCodeVerificationComponent;
    }());
    NgCodeVerificationComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng-code-verification',
                    template: "\n    <div #formCode>\n      <input\n        type=\"text\"\n        maxlength=\"1\"\n        class=\"codeInput\"\n        *ngFor=\"let codeTemp of codes.el\"\n        [formControl]=\"codeTemp.formControl\"\n        [id]=\"codeTemp.id\"\n        (input)=\"onInput($event)\"\n        [class.is-invalid]=\"codeTemp.error\"\n        maxlength=\"1\"\n      />\n    </div>\n  ",
                    styles: [".codeInput{border:1px solid rgba(0,0,0,.2);border-radius:5px;font-size:70px;height:60px;margin:5px;padding:15px;text-align:center;width:40px}.is-invalid{border:2px solid red}"]
                },] }
    ];
    NgCodeVerificationComponent.ctorParameters = function () { return []; };
    NgCodeVerificationComponent.propDecorators = {
        formCode: [{ type: core.ViewChildren, args: ['formCode',] }],
        codeComplete: [{ type: core.Output }],
        codeTotal: [{ type: core.Input }]
    };

    var NgCodeVerificationModule = /** @class */ (function () {
        function NgCodeVerificationModule() {
        }
        return NgCodeVerificationModule;
    }());
    NgCodeVerificationModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NgCodeVerificationComponent],
                    imports: [
                        platformBrowser.BrowserModule
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

    exports.NgCodeVerificationComponent = NgCodeVerificationComponent;
    exports.NgCodeVerificationModule = NgCodeVerificationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-code-verification.umd.js.map
