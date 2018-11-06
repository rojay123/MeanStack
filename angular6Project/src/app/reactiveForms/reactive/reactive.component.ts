import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../../shared/user.name-validator';
import { passwordValidator } from '../../shared/password.validator';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  // registrationForm =  new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
  constructor(private fb: FormBuilder, private _registerService: RegisterService) { }
  registrationForm: FormGroup;
  errorMsg = '';
  get userName() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  alternateEmail () {
    console.log('');
this.alternateEmails.push(this.fb.control(''));
  }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([]),
    },  {validator: passwordValidator});

    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if (checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  }

  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Roja',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '12345677'
      }
    });
  }

  onSubmit () {
     console.log(this.registrationForm.value);
    // this._registerService.register(this.registrationForm.value).subscribe(res => console.log('success' + res));
  }

}
