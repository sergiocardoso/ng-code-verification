import { Component, Input, ViewChildren, Output, EventEmitter } from '@angular/core';
import Codes from './codes';
export class NgCodeVerificationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY29kZS12ZXJpZmljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NjL1NDL25nLWNvZGUtdmVyaWZpY2F0aW9uL3Byb2plY3RzL25nLWNvZGUtdmVyaWZpY2F0aW9uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZy1jb2RlLXZlcmlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUF5QixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQztBQXFCNUIsTUFBTSxPQUFPLDJCQUEyQjtJQU90QztRQUpVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW1DLENBQUM7UUFDcEUsY0FBUyxHQUFHLENBQUMsQ0FBQztJQUdSLENBQUM7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBRztRQUVULElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQ3pCO1lBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVNLFdBQVcsQ0FBQyxHQUFHO1FBRXBCLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEQsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRCxDQUFDO0lBRU0sZUFBZTtRQUVwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEI7WUFDRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDMUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO1NBQy9CLENBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUOzthQUVGOzs7O3VCQUdFLFlBQVksU0FBQyxVQUFVOzJCQUN2QixNQUFNO3dCQUNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IENvZGVzIGZyb20gJy4vY29kZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1jb2RlLXZlcmlmaWNhdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjZm9ybUNvZGU+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBtYXhsZW5ndGg9XCIxXCJcbiAgICAgICAgY2xhc3M9XCJjb2RlSW5wdXRcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgY29kZVRlbXAgb2YgY29kZXMuZWxcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29kZVRlbXAuZm9ybUNvbnRyb2xcIlxuICAgICAgICBbaWRdPVwiY29kZVRlbXAuaWRcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiY29kZVRlbXAuZXJyb3JcIlxuICAgICAgICBtYXhsZW5ndGg9XCIxXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL25nLWNvZGUtdmVyaWZpY2F0aW9uLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nQ29kZVZlcmlmaWNhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZHJlbignZm9ybUNvZGUnKSBmb3JtQ29kZTogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBAT3V0cHV0KCkgY29kZUNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGNvZGU6IHN0cmluZywgdmFsaWQ6IGJvb2xlYW59PigpO1xuICBASW5wdXQoKSBjb2RlVG90YWwgPSAwO1xuICBjb2RlczogQ29kZXM7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29kZXMgPSBuZXcgQ29kZXModGhpcy5jb2RlVG90YWwpO1xuICB9XG5cbiAgb25JbnB1dChldnQpOiB2b2lkXG4gIHtcbiAgICB0aGlzLmNvZGVzLm5leHQoZXZ0KTtcbiAgICB0aGlzLm9uQ29kZUNvbXBsZXRlZCgpO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tJZkxhc3QoZXZ0KSlcbiAgICB7XG4gICAgICB0aGlzLm9uQ29kZUNvbXBsZXRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGVja0lmTGFzdChldnQpOiBib29sZWFuXG4gIHtcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KGV2dC5zcmNFbGVtZW50LmlkLnNwbGl0KCdfJylbMV0sIDApO1xuICAgIHJldHVybiBpZCA+PSB0aGlzLmNvZGVzLmVsLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNvZGVDb21wbGV0ZWQoKTogdm9pZFxuICB7XG4gICAgdGhpcy5jb2RlQ29tcGxldGUuZW1pdChcbiAgICAgIHtcbiAgICAgICAgY29kZTogdGhpcy5jb2Rlcy5nZXRDb2RlKCksIFxuICAgICAgICB2YWxpZDogdGhpcy5jb2Rlcy52YWxpZENvZGVzKClcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cbiJdfQ==