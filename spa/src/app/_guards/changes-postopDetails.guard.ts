import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PostOpComponent } from '../procedures/postoperative/post-op.component';


@Injectable()

// tslint:disable-next-line:class-name
export class changesPOSTOPDetails implements CanDeactivate<PostOpComponent>{
    canDeactivate(component: PostOpComponent) {
        if (component.postopForm.dirty) {
            const can = component.canDeactivate();
            return can;
        }
        return true;
    }
}