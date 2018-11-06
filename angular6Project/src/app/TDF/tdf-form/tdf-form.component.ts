import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent implements OnInit {

  title = 'angular6Project';
  topics = ['Angular', 'Reactjs', 'Vue'];
  topicHasError = true;
  errorMsg = '';
  userModel = new User('roja', 'ro@gmm.com', 1234567898, 'default', 'morning', true);
  constructor(private enrollService: EnrollmentService) {}

  ngOnInit() {
  }

  dropdownValidate(value) {
    console.log(value);
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit (userForm) {
    console.log(userForm);
    this.enrollService.enroll(userForm).subscribe(
      data => console.log('success' + data),
      error => this.errorMsg = error.statusText
    );
  }

}
