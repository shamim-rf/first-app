import { ProductImageDto } from 'src/app/shared/model/product.model';
import { Component, OnChanges, OnInit, Input, DoCheck } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {
  form: FormGroup;
  productImageObject: ProductImageDto = new ProductImageDto();
  @Input() test;
  constructor() {
    this.test = 'hello'
  }
  ngOnInit(): void {
    console.log('oninit')
    this.form = new FormGroup({
      'name': new FormControl(null),
      'price': new FormControl(null),
      'pic': new FormControl(''),
      'inventory': new FormControl(null),
      'discount': new FormControl(null)
    });
  }
  submit() {

  }

}
