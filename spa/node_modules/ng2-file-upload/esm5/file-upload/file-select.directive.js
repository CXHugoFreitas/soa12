/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, ElementRef, Input, HostListener, Output } from '@angular/core';
import { FileUploader } from './file-uploader.class';
import * as ɵngcc0 from '@angular/core';
var FileSelectDirective = /** @class */ (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new EventEmitter();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.isEmptyAfterSelection = /**
     * @return {?}
     */
    function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.onChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var files = this.element.nativeElement.files;
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    /** @nocollapse */
    FileSelectDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FileSelectDirective.propDecorators = {
        uploader: [{ type: Input }],
        onFileSelected: [{ type: Output }],
        onChange: [{ type: HostListener, args: ['change',] }]
    };
FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) { return new (t || FileSelectDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FileSelectDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FileSelectDirective, selectors: [["", "ng2FileSelect", ""]], hostBindings: function FileSelectDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("change", function FileSelectDirective_change_HostBindingHandler() { return ctx.onChange(); });
    } }, inputs: { uploader: "uploader" }, outputs: { onFileSelected: "onFileSelected" } });
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
    return FileSelectDirective;
}());
export { FileSelectDirective };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmcyLWZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkL2ZpbGUtc2VsZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFckQ7QUFDVyxJQU1ULDZCQUFtQixPQUFtQjtBQUN4QyxRQUxtQixtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0FBQ3JGLFFBSUksSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUFtQjtBQUNyQixJQURJLHdDQUFVO0FBQU87QUFDVjtBQUFRLElBRHRCO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBQ2pDLElBQUUsQ0FBQztBQUVIO0FBQVE7QUFBbUI7QUFDckIsSUFERyx3Q0FBVTtBQUFPO0FBRXpCO0FBRUcsSUFKRjtBQUFjLFFBQ1osT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFFLENBQUM7QUFFSDtBQUFRO0FBQW1CO0FBQVEsSUFBMUIsbURBQXFCO0FBQU87QUFDekI7QUFBUSxJQURsQjtBQUFjLFFBQ1osT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztBQUM1RCxJQUFFLENBQUM7QUFFSDtBQUFRO0FBQ1A7QUFBUSxJQUFBLHNDQUFRO0FBQU87QUFDUjtBQUFRLElBRnRCO0FBQWM7QUFDRCxZQUNQLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLO0FBQ2hEO0FBQXlCLFlBQWpCLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ25DO0FBQXlCLFlBQWpCLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ25DLFFBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxRQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLFFBQ0ksSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRTtBQUN0QyxZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDNUMsU0FBSztBQUNMLElBQUUsQ0FBQyxDQWxDTTtBQUFDO2dDQURULFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSw5REFDVTtlQURPLEVBQUUsakJBR3RCLGdCQVBjLFVBQVU7QUFBRztBQUFVO0FBRXhELDJCQUlFLEtBQUs7QUFBSyxpQ0FDVixNQUFNO0FBQUssMkJBb0JYLFlBQVksU0FBQyxRQUFRO0FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7b0JBQU07QUFBQyxJQVlYLDBCQUFDO0FBQ0EsQ0FEQSxBQXBDRCxJQW9DQztBQUNELFNBcENhLG1CQUFtQjtBQUMvQjtBQUFhO0FBQXFCLElBQWpDLHVDQUF1QztBQUN6QztBQUFxQixJQUFuQiw2Q0FBbUY7QUFDckY7QUFDTztBQUFpQjtBQUVoQjtBQUFRLElBRmQsc0NBQThCO0FBQ2hDO0FBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRlciB9IGZyb20gJy4vZmlsZS11cGxvYWRlci5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZzJGaWxlU2VsZWN0XScgfSlcbmV4cG9ydCBjbGFzcyBGaWxlU2VsZWN0RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25GaWxlU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG5cbiAgcHJvdGVjdGVkIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgcHVibGljIGdldE9wdGlvbnMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWRlci5vcHRpb25zO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnMoKTogYW55IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBwdWJsaWMgaXNFbXB0eUFmdGVyU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMubXVsdGlwbGU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnKVxuICBwdWJsaWMgb25DaGFuZ2UoKTogYW55IHtcbiAgICBsZXQgZmlsZXMgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5maWxlcztcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgIGxldCBmaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzKCk7XG5cbiAgICB0aGlzLnVwbG9hZGVyLmFkZFRvUXVldWUoZmlsZXMsIG9wdGlvbnMsIGZpbHRlcnMpO1xuICAgIHRoaXMub25GaWxlU2VsZWN0ZWQuZW1pdChmaWxlcyk7XG5cbiAgICBpZiAodGhpcy5pc0VtcHR5QWZ0ZXJTZWxlY3Rpb24oKSkge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==