import Code from './code';
export default class Codes {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2MvU0MvbmctY29kZS12ZXJpZmljYXRpb24vcHJvamVjdHMvbmctY29kZS12ZXJpZmljYXRpb24vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUUxQixNQUFNLENBQUMsT0FBTyxPQUFPLEtBQUs7SUFLdEIsWUFBWSxJQUFZO1FBRmpCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFJYixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFJLENBQUMsR0FBRztRQUVKLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUQsZUFBZTtRQUNmLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUUzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNuRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQXFCLENBQUM7UUFDMUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRVgsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUM7WUFDeEIsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRUQsYUFBYTtRQUVULE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsT0FBTztRQUVILE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsVUFBVTtRQUVOLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEVBQ1Y7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvQixLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ2pCO2lCQUNJO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNuQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSztRQUVsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2RlIGZyb20gJy4vY29kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVzIHtcblxuICAgIHB1YmxpYyBlbDogQ29kZVtdO1xuICAgIHB1YmxpYyBpbmRleCA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihxdGRlOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmVsID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiBxdGRlfSwgKCkgPT4gbmV3IENvZGUoKSk7XG4gICAgfVxuXG4gICAgbmV4dChldnQpOiB2b2lkXG4gICAge1xuICAgICAgICBjb25zdCBpZEVsID0gcGFyc2VJbnQoZXZ0LnNyY0VsZW1lbnQuaWQuc3BsaXQoJ18nKVsxXSwgMCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHZhbHVlXG4gICAgICAgIHRoaXMuZWxbaWRFbCAtIDFdLnZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBjb25zdCBuZXh0RWwgPSBpZEVsIDwgdGhpcy5lbC5sZW5ndGggPyAoaWRFbCArIDEpIDogdGhpcy5lbC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkXycgKyBuZXh0RWwpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGVsLmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKG5leHRFbCA8IHRoaXMuZWwubGVuZ3RoKXtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBcnJheUNvZGVzKCk6IHN0cmluZ1tdXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5tYXAoZWxUZW1wID0+IGVsVGVtcC52YWx1ZSA/IGVsVGVtcC52YWx1ZS50b1N0cmluZygpIDogJycpO1xuICAgIH1cblxuICAgIGdldENvZGUoKTogc3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcnJheUNvZGVzKCkuam9pbignJyk7XG4gICAgfVxuXG4gICAgdmFsaWRDb2RlcygpOiBib29sZWFuXG4gICAge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmVsLm1hcChlbFRlbXAgPT4gIWVsVGVtcC52YWx1ZSA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgIGVycm9ycy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvcihpbmRleCArIDEsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yKGluZGV4ICsgMSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuXG4gICAgc2V0RXJyb3IoaWRUZW1wLCB2YWx1ZSk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZWxbaWRUZW1wIC0gMV0uZXJyb3IgPSB2YWx1ZTtcbiAgICB9XG5cbn1cbiJdfQ==