import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { dropItem } from '../../_models/dropItem';
import { DropdownService } from '../../_services/dropdown.service';

@Component({
  selector: 'app-selectProcedureType',
  templateUrl: './selectProcedureType.component.html'
})
export class SelectProcedureTypeComponent implements OnInit {
@Output() sendProcedureId = new EventEmitter();


  oneEntries: dropItem[];
  twoEntries: dropItem[];
  threeEntries: dropItem[];
  fourEntries: dropItem[];
  fiveEntries: dropItem[];
  sixEntries: dropItem[];
  sevenEntries: dropItem[];
  eightEntries: dropItem[];
  nineEntries: dropItem[];

  selectedEntry: dropItem =  { value: 0, description: ''};
  constructor(private drops: DropdownService) { }

    ngOnInit() {


    this.drops.getCategory_1_Options().subscribe(response => { this.oneEntries = response; });
    this.drops.getCategory_2_Options().subscribe(response => { this.twoEntries = response; });
    this.drops.getCategory_3_Options().subscribe(response => { this.threeEntries = response; });
    this.drops.getCategory_4_Options().subscribe(response => { this.fourEntries = response; });
    this.drops.getCategory_5_Options().subscribe(response => { this.fiveEntries = response; });
    this.drops.getCategory_6_Options().subscribe(response => { this.sixEntries = response; });
    this.drops.getCategory_7_Options().subscribe(response => { this.sevenEntries = response; });
    this.drops.getCategory_8_Options().subscribe(response => { this.eightEntries = response; });
    this.drops.getCategory_9_Options().subscribe(response => { this.nineEntries = response; });


    }


    onSelectionChange(entry) {

        this.selectedEntry.value = entry.value;
        this.selectedEntry.description = entry.description;
        this.sendProcedureId.emit(entry.value);
    }
}
