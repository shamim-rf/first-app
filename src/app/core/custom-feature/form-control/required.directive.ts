import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';


@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[required]',
    exportAs: 'mcbRequired',
})
export class RequiredFieldDirective {
    // @Input('required') value: any;

    constructor() {
    }

    // @HostBinding('style.border') border: string

    // @HostListener('mouseover') onMouseOver(){
    //   debugger
    //   this.border = '1px solid red';
    //   this.value
    // }
}
