import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ValveRepairComponent } from '../procedures/ValveRepair/valve-repair.component';


@Injectable()


export class changesValveRepairDetails implements CanDeactivate<ValveRepairComponent>{
    canDeactivate(component: ValveRepairComponent) {
        if (component.saveAlways) {
            const can = component.canDeactivate();
            return can;
        }
        return true;
    }
}