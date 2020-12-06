import { Injectable } from '@angular/core';
import { ProductDto } from '../types/dataTypes';

@Injectable(
    { providedIn: 'root' }
)
export class ProductMngService {
    product: ProductDto[] = [
        { id: 1, name: 'تلویزیون', price: 12000000, pictureUrl: '../../../assets/template/img/tv.png', percent: 20 },
        { id: 2, name: 'یخچال فریزر', price: 32000000, pictureUrl: '../../../assets/template/img/frig.png', percent: 10 },
        { id: 3, name: 'فرش', price: 2000000, pictureUrl: '../../../assets/template/img/carpet.png', percent: 30 },
        { id: 4, name: 'آینه', price: 1000000, pictureUrl: '../../../assets/template/img/mirror.png', percent: 50 },
        { id: 5, name: 'مبل', price: 12000000, pictureUrl: '../../../assets/template/img/sofa.png', percent: 10 },
        { id: 6, name: 'تلویزیون', price: 12000000, pictureUrl: '../../../assets/template/img/tv.png', percent: 20 },
        { id: 7, name: 'یخچال فریزر', price: 32000000, pictureUrl: '../../../assets/template/img/frig.png', percent: 10 },
    ];
    constructor() { }
    getProducts(): ProductDto[] {
        return this.product;
    }
}
