import { Component, Input, EventEmitter, Output, AfterViewChecked, OnInit } from '@angular/core';
import { Employee } from '../../../_models/Employee';
import { dropItem } from '../../../_models/dropItem';
import { DropdownService } from '../../../_services/dropdown.service';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-empeditdetaile',
    templateUrl: './empeditdetaile.component.html',
    styleUrls: ['./empeditdetaile.component.scss']
})

export class EmpeditdetaileComponent implements OnInit {

    @Input() emp: Employee;
    @Output() savePhoto = new EventEmitter<string>();

    

    baseUrl = environment.apiUrl;
    targetUrl = '';
    

    optionsYN: Array<dropItem> = [];


    constructor(private drops: DropdownService,) { }

    ngOnInit(): void {
        this.loadDrops();


        //this.targetUrl = this.baseUrl + 'addEmployeePhoto/' + this.emp.Id;
    }

     IsLoaded() {
        if (this.emp.id !== 0) {
            this.targetUrl = this.baseUrl + 'addEmployeePhoto/' + this.emp.id;
            return true;
        } else { return false; }
    }

    loadDrops() {
        const d = JSON.parse(localStorage.getItem('YN'));
        if (d == null || d.length === 0) {
            this.drops.getYNOptions().subscribe((response) => {
                this.optionsYN = response; localStorage.setItem('YN', JSON.stringify(response));
            });
        } else {
            this.optionsYN = JSON.parse(localStorage.getItem('YN'));
        }
    }

    updatePhoto(photoUrl: string) {
        this.savePhoto.emit(photoUrl);
    }


    cancel() { }
}
