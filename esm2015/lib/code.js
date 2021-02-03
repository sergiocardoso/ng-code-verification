import { FormControl, Validators } from '@angular/forms';
export default class Code {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zYy9TQy9uZy1jb2RlLXZlcmlmaWNhdGlvbi9wcm9qZWN0cy9uZy1jb2RlLXZlcmlmaWNhdGlvbi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE1BQU0sQ0FBQyxPQUFPLE9BQU8sSUFBSTtJQVFyQjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEVBQUcsQ0FBQztRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUs7UUFFWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxLQUFLLENBQUMsS0FBYztRQUUzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLFdBQVc7UUFFbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsS0FBSztRQUVaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUssQ0FBQyxTQUFpQjtRQUU5QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEVBQUU7UUFFVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7QUE3RE0sY0FBUyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlIHtcblxuICAgIHN0YXRpYyBudW1iZXJTZXEgPSAxO1xuICAgIHByaXZhdGUgcEVycm9yOiBib29sZWFuO1xuICAgIHByaXZhdGUgcEZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgICBwcml2YXRlIHBWYWx1ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgcElkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLnBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgIHRoaXMucElkID0gJ2ZpZWxkXycgICsgQ29kZS5udW1iZXJTZXE7XG4gICAgICAgIENvZGUubnVtYmVyU2VxICsrO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGF0aWMgdmFyaWJhbGUnLCBDb2RlLm51bWJlclNlcSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEVycm9yXG4gICAgICovXG4gICAgcHVibGljIGdldCBlcnJvcigpOiBib29sZWFuXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5wRXJyb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEVycm9yXG4gICAgICovXG4gICAgcHVibGljIHNldCBlcnJvcih2YWx1ZTogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIHRoaXMucEVycm9yID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEZvcm1Db250cm9sXG4gICAgICovXG4gICAgcHVibGljIGdldCBmb3JtQ29udHJvbCgpOiBGb3JtQ29udHJvbFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucEZvcm1Db250cm9sO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBWYWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5wVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZVRlbXA6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMucFZhbHVlID0gdmFsdWVUZW1wO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5wSWQ7XG4gICAgfVxuXG4gICAgXG59XG4iXX0=