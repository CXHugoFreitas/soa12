/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileUploader } from './file-uploader.class';
import * as ɵngcc0 from '@angular/core';
var FileDropDirective = /** @class */ (function () {
    function FileDropDirective(element) {
        this.fileOver = new EventEmitter();
        this.onFileDrop = new EventEmitter();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._getTransfer = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._preventAndStop = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    FileDropDirective.prototype._haveFiles = /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    function (types) {
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
    };
    /** @nocollapse */
    FileDropDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FileDropDirective.propDecorators = {
        uploader: [{ type: Input }],
        fileOver: [{ type: Output }],
        onFileDrop: [{ type: Output }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
    };
FileDropDirective.ɵfac = function FileDropDirective_Factory(t) { return new (t || FileDropDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FileDropDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FileDropDirective, selectors: [["", "ng2FileDrop", ""]], hostBindings: function FileDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function FileDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); });
    } }, inputs: { uploader: "uploader" }, outputs: { fileOver: "fileOver", onFileDrop: "onFileDrop" } });
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
    return FileDropDirective;
}());
export { FileDropDirective };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L25nMi1maWxlLXVwbG9hZC9maWxlLXVwbG9hZC9maWxlLWRyb3AuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUU7QUFDVyxJQU9ULDJCQUFtQixPQUFtQjtBQUN4QyxRQU5tQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDcEUsUUFBbUIsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0FBQ2pGLFFBSUksSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUFtQjtBQUFRLElBQXpCLHNDQUFVO0FBQU87QUFDMUI7QUFBUSxJQUROO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBQ2pDLElBQUUsQ0FBQztBQUVIO0FBQVE7QUFBbUI7QUFDckIsSUFERyxzQ0FBVTtBQUFPO0FBRXpCO0FBRUcsSUFKRjtBQUFjLFFBQ1osT0FBTyxFQUFFLENBQUM7QUFDZCxJQUFFLENBQUM7QUFFSDtBQUFRO0FBQXdCO0FBQ25CO0FBQVEsSUFBWixrQ0FBTTtBQUFPO0FBQ1o7QUFBbUI7QUFBUSxJQUZuQyxVQUNjLEtBQVU7QUFBSTtBQUNYLFlBQVgsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO0FBQzNDLFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNuQixZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0w7QUFDd0IsWUFBaEIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDbkM7QUFB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LENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLFNBQUs7QUFDTCxJQUFFLENBQUMsQ0EvRU07QUFBQzs4QkFEVCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsNURBRXZCO2FBRnNDLEVBQUUsZkFHcEIsZ0JBUGMsVUFBVTtBQUFHO0FBQVU7QUFDekQsMkJBS0csS0FBSztBQUFLLDJCQUNWLE1BQU07QUFBSyw2QkFDWCxNQUFNO0FBQUsseUJBZ0JYLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBRSxRQUFRLENBQUU7QUFDL0IsNkJBY0YsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFFLFFBQVEsQ0FBRTtBQUNuQyw4QkFXRixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUUsUUFBUSxDQUFFO0FBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBTTtBQUFDLElBaUNYLHdCQUFDO0FBQ0EsQ0FEQSxBQWpGRCxJQWlGQztBQUNELFNBakZhLGlCQUFpQjtBQUM3QjtBQUFhO0FBQXFCLElBQWpDLHFDQUF1QztBQUN6QztBQUFxQixJQUFuQixxQ0FBa0U7QUFDcEU7QUFBcUIsSUFBbkIsdUNBQStFO0FBQ2pGO0FBQ087QUFBaUI7QUFFaEI7QUFBUSxJQUZkLG9DQUE4QjtBQUNoQztBQUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXIsIEZpbGVVcGxvYWRlck9wdGlvbnMgfSBmcm9tICcuL2ZpbGUtdXBsb2FkZXIuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmcyRmlsZURyb3BdJyB9KVxuZXhwb3J0IGNsYXNzIEZpbGVEcm9wRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XG4gIEBPdXRwdXQoKSBwdWJsaWMgZmlsZU92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRmlsZURyb3A6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG5cbiAgcHJvdGVjdGVkIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgcHVibGljIGdldE9wdGlvbnMoKTogRmlsZVVwbG9hZGVyT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkZXIub3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzKCk6IGFueSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsgJyRldmVudCcgXSlcbiAgcHVibGljIG9uRHJvcChldmVudDogYW55KTogdm9pZCB7XG4gICAgbGV0IHRyYW5zZmVyID0gdGhpcy5fZ2V0VHJhbnNmZXIoZXZlbnQpO1xuICAgIGlmICghdHJhbnNmZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgIGxldCBmaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzKCk7XG4gICAgdGhpcy5fcHJldmVudEFuZFN0b3AoZXZlbnQpO1xuICAgIHRoaXMudXBsb2FkZXIuYWRkVG9RdWV1ZSh0cmFuc2Zlci5maWxlcywgb3B0aW9ucywgZmlsdGVycyk7XG4gICAgdGhpcy5maWxlT3Zlci5lbWl0KGZhbHNlKTtcbiAgICB0aGlzLm9uRmlsZURyb3AuZW1pdCh0cmFuc2Zlci5maWxlcyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsgJyRldmVudCcgXSlcbiAgcHVibGljIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGxldCB0cmFuc2ZlciA9IHRoaXMuX2dldFRyYW5zZmVyKGV2ZW50KTtcbiAgICBpZiAoIXRoaXMuX2hhdmVGaWxlcyh0cmFuc2Zlci50eXBlcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICAgIHRoaXMuX3ByZXZlbnRBbmRTdG9wKGV2ZW50KTtcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbICckZXZlbnQnIF0pXG4gIHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudDogYW55KTogYW55IHtcbiAgICBpZiAoKHRoaXMgYXMgYW55KS5lbGVtZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldCA9PT0gKHRoaXMgYXMgYW55KS5lbGVtZW50WyAwIF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3ByZXZlbnRBbmRTdG9wKGV2ZW50KTtcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRUcmFuc2ZlcihldmVudDogYW55KTogYW55IHtcbiAgICByZXR1cm4gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyIDogZXZlbnQub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXI7IC8vIGpRdWVyeSBmaXg7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3ByZXZlbnRBbmRTdG9wKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2hhdmVGaWxlcyh0eXBlczogYW55KTogYW55IHtcbiAgICBpZiAoIXR5cGVzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVzLmluZGV4T2YpIHtcbiAgICAgIHJldHVybiB0eXBlcy5pbmRleE9mKCdGaWxlcycpICE9PSAtMTtcbiAgICB9IGVsc2UgaWYgKHR5cGVzLmNvbnRhaW5zKSB7XG4gICAgICByZXR1cm4gdHlwZXMuY29udGFpbnMoJ0ZpbGVzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==