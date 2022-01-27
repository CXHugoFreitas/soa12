import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Hospital } from '../_models/Hospital';

@Component({
    selector: 'app-photo-editor',
    templateUrl: './PhotoEditor.component.html',
    styleUrls: ['./PhotoEditor.component.css']
})
export class PhotoEditorComponent implements OnInit {
    @Input() userId: number;
    @Input() refId: number;
    @Input() hospitalId: number;
    @Output() getMemberPhotoChange = new EventEmitter<string>();
    uploader: FileUploader;
    hasBaseDropZoneOver = false;
    baseUrl = environment.apiUrl;

    constructor(
        private alertify: AlertifyService
    ) { }

    ngOnInit() {
        this.initializeUploader();
    }

    initializeUploader() {
        let test = '';

        // if (this.employeeId !== 0) {
        //    test = this.baseUrl + 'addEmployeePhoto/' + this.employeeId
        // }
        // else {
        if (this.userId !== 0) {
            test = this.baseUrl + 'users/addUserPhoto/' + this.userId
        }
        else {
            if (this.hospitalId !== 0) {
                test = this.baseUrl + 'hospital/addHospitalPhoto/' + this.hospitalId
            }
            else {
                if (this.refId !== 0) {
                    test = this.baseUrl + 'addPhoto/' + this.refId
                }
            }

        }

        this.uploader = new FileUploader({
            url: test,
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: true,
            maxFileSize: 10 * 1024 * 1024
        });

        this.uploader.onAfterAddingFile = file => {
            file.withCredentials = false;
            console.log(file);
            this.alertify.success('Photo uploaded ...');
        };

        this.uploader.onSuccessItem = (item, response, status, headers) => {
            if (response) {
                const res: any = JSON.parse(response);

                if (this.hospitalId !== 0) { this.getMemberPhotoChange.emit(res.ImageUrl); }
                if (this.userId !== 0) { this.getMemberPhotoChange.emit(res.photoUrl); }
                if (this.refId !== 0) { this.getMemberPhotoChange.emit(res.image); }
            }
        };
    }
}
