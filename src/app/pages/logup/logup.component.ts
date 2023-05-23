import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class SignupComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.checkPasswords })
  }

  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  checkPasswords(group: FormGroup) {
     // here we have the 'passwords' group
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit() {
    if(this.form.valid) {
      // Người dùng đã nhập thông tin đăng ký hợp lệ, xử lý đăng ký tại đây
      console.log(this.form.value);
    }else{
      alert("Chua nhap thong tin chinh xac")
    }
  }
}
