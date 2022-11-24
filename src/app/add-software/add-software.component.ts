import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SoftwareService } from '../services/software.service';

@Component({
  selector: 'app-add-software',
  templateUrl: './add-software.component.html',
  styleUrls: ['./add-software.component.css'],
})
export class AddSoftwareComponent implements OnInit {
  formData!: FormGroup;

  constructor(
    private softwareService: SoftwareService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.formData = new FormGroup({
      assetNumber: new FormControl('', Validators.required),
      assetType: new FormControl('', Validators.required),
      manufacturingCompany: new FormControl('', Validators.required),
      softwareCategory: new FormControl('', Validators.required),
      version: new FormControl('', Validators.required),
      subVersion: new FormControl('', Validators.required),
      licenseYear: new FormControl('', Validators.required),
      softwareName: new FormControl('', Validators.required),
      purchased: new FormControl('', Validators.required),
      licenseExpiryDate: new FormControl('', Validators.required),
      licenseType: new FormControl('', Validators.required),
      licenseCost: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.formData.invalid) {
      for (const control of Object.keys(this.formData.controls)) {
        this.formData.controls[control].markAsTouched();
      }
      return;
    } else {
      
      this.softwareService
        .postData(this.formData.value)
        .subscribe((response) => {
          if (response.status == 'added') {
            this.router.navigate([
              '/dashboard',
              { outlets: { child1: ['software'] } },
            ]);
          } else if (response.status == 'false') {
            this.openNotification();
          }
        });
    }
  }

  openNotification() {
    this.toast.error({
      detail: 'Existing Asset Number',
      duration: 2000,
    });
  }

  navigate() {
    this.router.navigate(['/dashboard', { outlets: { child1: ['software'] } }]);
  }

  reset(){
    this.formData.reset();
  }
}
