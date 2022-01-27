import {Injectable} from '@angular/core';
import { Procedure } from '../_models/Procedure';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProcedureService } from '../_services/procedure.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class ProcedureListResolver implements Resolve<Procedure[]> {
    pageNumber = 1;
    pageSize = 10;
    constructor(private procedureservice: ProcedureService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Procedure[]> {
        return this.procedureservice.getProcedures(this.pageNumber, this.pageSize)
        .pipe(catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return of(null);
        }));
    }


}
