import { Component, OnInit } from '@angular/core';
import { dropItem } from '../../_models/dropItem';
import { DropdownService } from '../../_services/dropdown.service';
import { RefPhysModel } from '../../_models/RefPhysModel';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RefPhysService } from '../../_services/ref-phys.service';
import { HospitalService } from '../../_services/hospital.service';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-edit-ref-phys',
  templateUrl: './edit-ref-phys.component.html',
  styleUrls: ['./edit-ref-phys.component.scss'],
})
export class EditRefPhysComponent implements OnInit {
  refphysicians: Array<dropItem> = [];
  states: Array<dropItem> = [];
  countries: Array<dropItem> = [];
  optionsYN: Array<dropItem> = [];
  currentUser: User;
  selectedRef = 0;
  edit = '0';
  mail = false;
  active = false;
  pd: RefPhysModel = {
    Id: 0,
    hospital_id: 0,
    name: '',
    image:
      'https://res.cloudinary.com/marcelcloud/image/upload/v1559818775/user.png.jpg',
    address: '',
    street: '',
    postcode: '',
    city: '',
    state: '',
    country: '31', // the default setting for now
    tel: '',
    fax: '',
    email: '',
    send_email: false,
    active: false,
  };

  constructor(
    private drops: DropdownService,
    private alertify: AlertifyService,
    private auth: AuthService,
    private router: Router,
    private userservice: UserService,
    private refService: RefPhysService
  ) {}

  ngOnInit(): void {
    this.loadDrops();
    this.userservice
      .getUser(this.auth.decodedToken.nameid)
      .subscribe((next) => {
        this.currentUser = next;
        this.refService
          .getRefPhys(this.currentUser.hospital_id)
          .subscribe((nex) => {
            this.refphysicians = nex;
            this.selectedRef = this.refphysicians[0].value;
          });
      });
  }
  loadDrops() {
    let d = JSON.parse(localStorage.getItem('YN'));
    if (d == null || d.length === 0) {
      this.drops.getYNOptions().subscribe((response) => {
        this.optionsYN = response;
        localStorage.setItem('YN', JSON.stringify(response));
      });
    } else {
      this.optionsYN = JSON.parse(localStorage.getItem('YN'));
    }
    this.states = [
      {
        value: 0,
        description: 'Choose',
      },
      { value: 0, description: 'CA' },
      { value: 0, description: 'NH' },
      { value: 0, description: 'OT' },
    ];

    d = JSON.parse(localStorage.getItem('countries'));
    if (d == null || d.length === 0) {
      this.drops.getAllCountries().subscribe((response) => {
        this.countries = response;
        localStorage.setItem('countries', JSON.stringify(response));
      });
    } else {
      this.countries = JSON.parse(localStorage.getItem('countries'));
    }
  }
  editCardiologist() {
    this.refService.getSpecificRefPhys(+this.selectedRef).subscribe((next) => {
      this.pd = next;
      this.edit = '1';
    });
  }
  addCardiologist() {
    // this.alertify.confirm("You want to add a refering physician", function (e) {
    //    if (e) {
    this.edit = '1';
    this.refService.addRefPhys().subscribe((next) => {
      this.pd = next;
    });
    //    } else {
    //    }
    // });
  }
  updatePhoto(photoUrl: string) {
    this.pd.image = photoUrl;
  }

  showEdit() {
    if (this.edit === '1') {
      return true;
    } else {
      return false;
    }
  }
  DeleteRefPhys() {
    this.alertify.confirm('Sure you want to delete ?', () => {
      this.refService.deleteRefPhys(this.pd.Id).subscribe((next) => {
        if (next === 1) {
          this.alertify.success('deleted');
        } else {
          this.alertify.error('ref phys could not be deleted');
        }
        this.edit = '0';
        this.router.navigate(['/configuration']);
      });
    });
  }
  cancelChanges() {
    this.edit = '0';
  }
  SaveRefPhys() {
    this.refService.updateRefPhys(this.pd).subscribe((next) => {
      this.alertify.success('saved');
      this.edit = '0';
    });
  }
  showState() {
    if (this.pd.country === '1') {
      return true;
    }
  }


}
