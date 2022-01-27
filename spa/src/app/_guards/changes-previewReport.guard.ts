import { PreviewReportComponent } from './../procedures/operative-report/preview-report.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


@Injectable()

// tslint:disable-next-line:class-name
export class changesPreViewReport implements CanDeactivate<PreviewReportComponent>{
    canDeactivate(component: PreviewReportComponent) {
        if (component.preViewForm.dirty) {
            const can = component.canDeactivate();
            return can;
        }
        return true;
    }
}