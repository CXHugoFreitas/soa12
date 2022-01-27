/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileUploader } from './file-uploader.class';
import * as ɵngcc0 from '@angular/core';
export class FileDropDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.fileOver = new EventEmitter();
        this.onFileDrop = new EventEmitter();
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
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    _haveFiles(types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    }
}
FileDropDirective.ɵfac = function FileDropDirective_Factory(t) { return new (t || FileDropDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FileDropDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FileDropDirective, selectors: [["", "ng2FileDrop", ""]], hostBindings: function FileDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function FileDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); });
    } }, inputs: { uploader: "uploader" }, outputs: { fileOver: "fileOver", onFileDrop: "onFileDrop" } });
/** @nocollapse */
FileDropDirective.ctorParameters = () => [
    { type: ElementRef }
];
FileDropDirective.propDecorators = {
    uploader: [{ type: Input }],
    fileOver: [{ type: Output }],
    onFileDrop: [{ type: Output }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FileDropDirective, [{
        type: Directive,
        args: [{ selector: '[ng2FileDrop]' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { fileOver: [{
            type: Output
        }], onFileDrop: [{
            type: Output
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }], onDragOver: [{
            type: HostListener,
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: HostListener,
            args: ['dragleave', ['$event']]
        }], uploader: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    FileDropDirective.prototype.uploader;
    /** @type {?} */
    FileDropDirective.prototype.fileOver;
    /** @type {?} */
    FileDropDirective.prototype.onFileDrop;
    /**
     * @type {?}
     * @protected
     */
    FileDropDirective.prototype.element;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L25nMi1maWxlLXVwbG9hZC9maWxlLXVwbG9hZC9maWxlLWRyb3AuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHMUUsTUFBTSxPQUFPLGlCQUFpQjtBQUM5QjtBQUFRO0FBQTBCO0FBQ2xDLElBS0UsWUFBbUIsT0FBbUI7QUFDeEMsUUFObUIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3BFLFFBQW1CLGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztBQUNqRixRQUlJLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNIO0FBQ087QUFBbUI7QUFBUSxJQUF6QixVQUFVO0FBQUssUUFDcEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSDtBQUNPO0FBQW1CO0FBQ3JCLElBREksVUFBVTtBQUFLLFFBQ3BCLE9BQU8sRUFBRSxDQUFDO0FBQ2QsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUF3QjtBQUNuQjtBQUFRLElBQVgsTUFBTSxDQUFDLEtBQVU7QUFBSTtBQUNYLFlBQVgsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO0FBQzNDLFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNuQixZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0w7QUFDd0IsWUFBaEIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDbkM7QUFBeUIsWUFBakIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVB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QUs7QUFBSyx1QkFDVixNQUFNO0FBQUsseUJBQ1gsTUFBTTtBQUFLLHFCQWdCWCxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUUsUUFBUSxDQUFFO0FBQy9CLHlCQWNGLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBRSxRQUFRLENBQUU7QUFDbkMsMEJBV0YsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFFLFFBQVEsQ0FBRTtBQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQWE7QUFDbkIsSUEvQ0MscUNBQXVDO0FBQ3pDO0FBQXFCLElBQW5CLHFDQUFrRTtBQUNwRTtBQUFxQixJQUFuQix1Q0FBK0U7QUFDakY7QUFDTztBQUFpQjtBQUVoQjtBQUFRLElBRmQsb0NBQThCO0FBQ2hDO0FBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRlciwgRmlsZVVwbG9hZGVyT3B0aW9ucyB9IGZyb20gJy4vZmlsZS11cGxvYWRlci5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZzJGaWxlRHJvcF0nIH0pXG5leHBvcnQgY2xhc3MgRmlsZURyb3BEaXJlY3RpdmUge1xuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkZXI6IEZpbGVVcGxvYWRlcjtcbiAgQE91dHB1dCgpIHB1YmxpYyBmaWxlT3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25GaWxlRHJvcDogRXZlbnRFbWl0dGVyPEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVbXT4oKTtcblxuICBwcm90ZWN0ZWQgZWxlbWVudDogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0T3B0aW9ucygpOiBGaWxlVXBsb2FkZXJPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWRlci5vcHRpb25zO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnMoKTogYW55IHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyAnJGV2ZW50JyBdKVxuICBwdWJsaWMgb25Ecm9wKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgdHJhbnNmZXIgPSB0aGlzLl9nZXRUcmFuc2ZlcihldmVudCk7XG4gICAgaWYgKCF0cmFuc2Zlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgbGV0IGZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnMoKTtcbiAgICB0aGlzLl9wcmV2ZW50QW5kU3RvcChldmVudCk7XG4gICAgdGhpcy51cGxvYWRlci5hZGRUb1F1ZXVlKHRyYW5zZmVyLmZpbGVzLCBvcHRpb25zLCBmaWx0ZXJzKTtcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQoZmFsc2UpO1xuICAgIHRoaXMub25GaWxlRHJvcC5lbWl0KHRyYW5zZmVyLmZpbGVzKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyAnJGV2ZW50JyBdKVxuICBwdWJsaWMgb25EcmFnT3ZlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgbGV0IHRyYW5zZmVyID0gdGhpcy5fZ2V0VHJhbnNmZXIoZXZlbnQpO1xuICAgIGlmICghdGhpcy5faGF2ZUZpbGVzKHRyYW5zZmVyLnR5cGVzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgdGhpcy5fcHJldmVudEFuZFN0b3AoZXZlbnQpO1xuICAgIHRoaXMuZmlsZU92ZXIuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsgJyRldmVudCcgXSlcbiAgcHVibGljIG9uRHJhZ0xlYXZlKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGlmICgodGhpcyBhcyBhbnkpLmVsZW1lbnQpIHtcbiAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0ID09PSAodGhpcyBhcyBhbnkpLmVsZW1lbnRbIDAgXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcHJldmVudEFuZFN0b3AoZXZlbnQpO1xuICAgIHRoaXMuZmlsZU92ZXIuZW1pdChmYWxzZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFRyYW5zZmVyKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIgOiBldmVudC5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2ZlcjsgLy8galF1ZXJ5IGZpeDtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcHJldmVudEFuZFN0b3AoZXZlbnQ6IGFueSk6IGFueSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaGF2ZUZpbGVzKHR5cGVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghdHlwZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZXMuaW5kZXhPZikge1xuICAgICAgcmV0dXJuIHR5cGVzLmluZGV4T2YoJ0ZpbGVzJykgIT09IC0xO1xuICAgIH0gZWxzZSBpZiAodHlwZXMuY29udGFpbnMpIHtcbiAgICAgIHJldHVybiB0eXBlcy5jb250YWlucygnRmlsZXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19