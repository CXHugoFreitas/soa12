import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DetailsMainComponent } from '../procedures/details-main/details-main.component';

@Injectable()

export class ChangesProcedureDetails implements CanDeactivate<DetailsMainComponent>{
    canDeactivate(component: DetailsMainComponent) {
         if (component.editForm.dirty) {
            const can = component.canDeactivate();
            return can;
        }
        // if (component.editForm.dirty){ return confirm('Áre you sure you want to continue? Any unsaved changes will be lost ...'); }
        return true;
    }
}
