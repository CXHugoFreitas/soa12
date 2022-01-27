
import { Component, Input } from '@angular/core';
import { previewReport } from 'src/app/_models/previewReport';


@Component({
    selector: 'app-blok2',
    templateUrl: './blok2.component.html'
})

export class Blok2Component {
    @Input() pre: previewReport;

    constructor() {

    }
}
