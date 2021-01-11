import { Component, forwardRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ProductImageDto } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FileUploadComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => FileUploadComponent), multi: true }
  ]
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {
  private changeCallback: any = () => { };
  private touchedCallback: any = () => { };
  private file: any;
  @ViewChild('realFileInput') realFileInput;
  constructor() { }
  writeValue(obj: any): void {
    this.file = obj;
    this.realFileInput = null;
  }
  registerOnChange(fn: any): void {
    this.changeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.touchedCallback = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  onFileChanges(event) {
    debugger
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener('load', e => {
      debugger
      const fileName = file.name;
      const base64 = fileReader.result as string;
      const parts = base64.split(',');
      const base64Content = parts[1];
      this.changeCallback({
        fileName,
        base64Content
      })
    });
    fileReader.readAsDataURL(file);

  }
  onInputClick(realFileInput) {
    this.touchedCallback();
    realFileInput.click();
    realFileInput

  }
  openDialog(realFileInput) {
    realFileInput.value;
    realFileInput.click();
  }

}
