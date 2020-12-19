import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
@ViewChild('form') form: NgForm;
hello;
model = {firstName: 'hhh'};
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form);
  }

}
