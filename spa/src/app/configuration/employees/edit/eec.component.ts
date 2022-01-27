import { Component, Input, Output, OnInit } from '@angular/core';
import { dropItem } from '../../../_models/dropItem';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-eec',
    templateUrl: './eec.component.html',
    styleUrls: ['./eec.component.scss']
})

export class EecComponent implements OnInit {
    selectedPerson = '';
    @Input() profession: string;
    @Input() list: Array<dropItem>;
    @Output() edit = new EventEmitter<string>();
    @Output() add = new EventEmitter<string>();

    constructor() {

    }
    ngOnInit(): void {
      //  this.selectedPerson = this.list[0].description;
     }

    editEmployee(id: number) { this.edit.emit(id.toString()); }
    addEmployee() { this.add.emit(this.profession); }
}
