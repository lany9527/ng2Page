import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {User} from "../../interface/signup.interface";
// import {}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    /*this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });*/

    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    })
  }

  onSubmit() {
    console.log(this.user.valid, this.user.value);
  }

}
