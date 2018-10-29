import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-saftey-form',
  templateUrl: './saftey-form.component.html',
  styleUrls: ['./saftey-form.component.css']
})
export class SafteyFormComponent implements OnInit {
  user: Object = {};
  constructor() { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
    // ...
  }


}
