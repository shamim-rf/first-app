import { ColumnMode } from '@swimlane/ngx-datatable';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ProductMngService } from 'src/app/shared/services/product.service';
import { ProductDto } from '../../shared/types/dataTypes';

@Component({
  selector: 'app-product-mng',
  templateUrl: './product-mng.component.html',
  styleUrls: ['./product-mng.component.scss']
})
export class ProductMngComponent implements OnInit, AfterViewInit {
  // tableData: any;
  // dataLoaded: boolean;
  // yourMessage = [];
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // getDataFlag = false;

  gridData: ProductDto[] = [];
  editing = {};
  ColumnMode = ColumnMode;
  columnName = ['ردیف', 'نام محصول', 'قیمت محصول', 'تصویر ', 'موجودی به تعداد', 'تخفیف']

  constructor(
    private productService: ProductMngService,
    private service: DataService
  ) {

  }
  ngOnInit(): void {
    this.gridData = this.productService.getProducts();

  }

  ngAfterViewInit(): void {
  }



  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.gridData[rowIndex][cell] = event.target.value;
    this.gridData = [...this.gridData];
    console.log('UPDATED!', this.gridData[rowIndex][cell]);
  }

}
