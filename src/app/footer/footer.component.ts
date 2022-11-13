import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  successPopup = false;
  submitForm = new FormGroup({
    fio: new FormControl('', [
      Validators.required,
    ]),
    tel: new FormControl('', [
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(protected http: HttpClient) {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('fio', this.submitForm.value.fio);
    formData.append('tel', this.submitForm.value.tel);
    formData.append('address', this.submitForm.value.address);
    if (this.submitForm.valid) {
      this.http.post(
        "send.php",
        formData,
        {observe: 'body'}
      ).subscribe(result => {
      })
      //
      this.submitForm.reset();
      this.successPopup = true;

      setTimeout(() => {
        this.successPopup = false;
      }, 2000);
    } else {
      if (this.submitForm.value.fio === '' || this.submitForm.value.fio === null) {
        this.submitForm.controls['fio'].markAsTouched();
      }
      if (this.submitForm.value.tel === '' || this.submitForm.value.tel === null) {
        this.submitForm.controls['tel'].markAsTouched();
      }
      if (this.submitForm.value.address === '' || this.submitForm.value.address === null) {
        this.submitForm.controls['address'].markAsTouched();
      }
    }
  }

  ngOnInit(): void {
  }

}
