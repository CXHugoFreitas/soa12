import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {


constructor() { }

confirmExtended(header: string, message: string,
    okCallback: () => any, cancelCallback: () => any) {
    // tslint:disable-next-line:only-arrow-functions
    alertify.confirm(header, message, function () {  okCallback(); }, function (e) { cancelCallback(); });
}

confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e: any) => {
        if (e) {
            okCallback();
        } else {}
    });
}



success(message: string) {
    alertify.success(message);
}
error(message: string) {
    alertify.error(message);
}
warning(message: string) {
    alertify.warning(message);
}
message(message: string) {
    alertify.message(message);
}

}
