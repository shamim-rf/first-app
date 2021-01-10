import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
  <app-user-area-layout></app-user-area-layout>
  `,

})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
