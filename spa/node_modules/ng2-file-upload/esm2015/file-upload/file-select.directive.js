/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, ElementRef, Input, HostListener, Output } from '@angular/core';
import { FileUploader } from './file-uploader.class';
import * as ɵngcc0 from '@angular/core';
export class FileSelectDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onFileSelected = new EventEmitter();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @return {?}
     */
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */
    onChange() {
        /** @type {?} */
        let files = this.element.nativeElement.files;
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) { return new (t || FileSelectDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FileSelectDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FileSelectDirective, selectors: [["", "ng2FileSelect", ""]], hostBindings: function FileSelectDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("change", function FileSelectDirective_change_HostBindingHandler() { return ctx.onChange(); });
    } }, inputs: { uploader: "uploader" }, outputs: { onFileSelected: "onFileSelected" } });
/** @nocollapse */
FileSelectDirective.ctorParameters = () => [
    { type: ElementRef }
];
FileSelectDirective.propDecorators = {
    uploader: [{ type: Input }],
    onFileSelected: [{ type: Output }],
    onChange: [{ type: HostListener, args: ['change',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FileSelectDirective, [{
        type: Directive,
        args: [{ selector: '[ng2FileSelect]' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onFileSelected: [{
            type: Output
        }], onChange: [{
            type: HostListener,
            args: ['change']
        }], uploader: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    FileSelectDirective.prototype.uploader;
    /** @type {?} */
    FileSelectDirective.prototype.onFileSelected;
    /**
     * @type {?}
     * @protected
     */
    FileSelectDirective.prototype.element;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmcyLWZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkL2ZpbGUtc2VsZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHckQsTUFBTSxPQUFPLG1CQUFtQjtBQUNoQztBQUFRO0FBQTBCO0FBQ2xDLElBSUUsWUFBbUIsT0FBbUI7QUFDeEMsUUFMbUIsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztBQUNyRixRQUlJLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNIO0FBQ087QUFBbUI7QUFDckIsSUFESSxVQUFVO0FBQUssUUFDcEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSDtBQUNPO0FBQW1CO0FBQ3JCLElBREksVUFBVTtBQUFLLFFBQ3BCLE9BQU8sRUFBRSxDQUFDO0FBQ2QsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUFtQjtBQUFRLElBQXpCLHFCQUFxQjtBQUFLLFFBQy9CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDNUQsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNQO0FBQVEsSUFBQyxRQUFRO0FBQUs7QUFDRixZQUFaLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLO0FBQ2hEO0FBQXlCLFlBQWpCLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ25DO0FBQXlCLFlBQWpCLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ25DLFFBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxRQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLFFBQ0ksSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRTtBQUN0QyxZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDNUMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOytDQXBDQyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Ozs0RkFDckM7QUFBQztBQUFtQjtBQUNVLFlBTkQsVUFBVTtBQUFHO0FBQUc7QUFBdUMsdUJBTXRGLEtBQUs7QUFBSyw2QkFDVixNQUFNO0FBQUssdUJBb0JYLFlBQVksU0FBQyxRQUFRO0FBQ3BCOzs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQWE7QUFDTixJQXZCWix1Q0FBdUM7QUFDekM7QUFBcUIsSUFBbkIsNkNBQW1GO0FBQ3JGO0FBQ087QUFBaUI7QUFFaEI7QUFBUSxJQUZkLHNDQUE4QjtBQUNoQztBQUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIgfSBmcm9tICcuL2ZpbGUtdXBsb2FkZXIuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmcyRmlsZVNlbGVjdF0nIH0pXG5leHBvcnQgY2xhc3MgRmlsZVNlbGVjdERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHB1YmxpYyB1cGxvYWRlcjogRmlsZVVwbG9hZGVyO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRmlsZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xuXG4gIHByb3RlY3RlZCBlbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRPcHRpb25zKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkZXIub3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzKCk6IGFueSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcHVibGljIGlzRW1wdHlBZnRlclNlbGVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLm11bHRpcGxlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJylcbiAgcHVibGljIG9uQ2hhbmdlKCk6IGFueSB7XG4gICAgbGV0IGZpbGVzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZmlsZXM7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICBsZXQgZmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVycygpO1xuXG4gICAgdGhpcy51cGxvYWRlci5hZGRUb1F1ZXVlKGZpbGVzLCBvcHRpb25zLCBmaWx0ZXJzKTtcbiAgICB0aGlzLm9uRmlsZVNlbGVjdGVkLmVtaXQoZmlsZXMpO1xuXG4gICAgaWYgKHRoaXMuaXNFbXB0eUFmdGVyU2VsZWN0aW9uKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG59XG4iXX0=