import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from 'src/app/shared/types/dataTypes';
import { IEnum } from './../../../../shared/types/generalTypes';
import { UserService } from './../../../../shared/services/user.service';
@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styles:[`
  .btn-submit{ margin-left: 8px}
  `]
})
export class UserPersonalInfoComponent implements OnInit {
  @Input() regForm: FormGroup;
  @Input() userDto: UserDto = new UserDto();
  EducationItems: IEnum[] = [
    { text: 'general.defualt-text', value: '' },
    { text: 'user.cycle', value: 'C' },
    { text: 'user.diploma', value: 'D' },
    { text: 'user.associate', value: 'A' },
    { text: 'user.bachelor', value: 'B' },
    { text: 'user.MA', value: 'M' },
    { text: 'user.doctorate', value: 'DO' }
  ];
  genderItems: IEnum[] = [
    { text: 'general.defualt-text', value: '' },
    { text: 'user.male', value: 'Male' },
    { text: 'user.female', value: 'Female' },
    { text: 'user.nothing', value: 'Nothing' },
  ];
  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    if(this.userDto){
      this.regForm.patchValue(this.userDto);
    }
  }

  onSubmit() {
    this.userDto = this.regForm.value;
    this.userService.add(this.userDto);
    // this.userService.saveUser({title: 1243}).subscribe();
  }

}
