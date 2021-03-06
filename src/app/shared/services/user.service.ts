import { Injectable } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserDto } from '../types/dataTypes';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  subject = new Subject();

  dataMock: UserDto[] = [
    {
      id: 1, firstName: 'شمیم', lastName: 'رئوف زاده', employeeDate: '1395/04/01', gender: 'F',
      picture: '', status: true
    },
    {
      id: 2, firstName: 'زهرا', lastName: 'لطفی', employeeDate: '1395/06/05', gender: 'F',
      picture: '', status: true
    },
    {
      id: 3, firstName: 'حسام', lastName: 'ضیایی', employeeDate: '1398/06/05', gender: 'M',
      picture: '', status: true
    },
    {
      id: 4, firstName: 'ملیکا', lastName: 'خدایاری', employeeDate: '1399/07/01', gender: 'F',
      picture: '', status: false
    },
    {
      id: 5, firstName: 'احمد', lastName: 'شریفی', employeeDate: '1397/06/05', gender: 'M',
      picture: '', status: true
    },
    {
      id: 6, firstName: 'حسین', lastName: 'ملک زاده', employeeDate: '1398/01/01', gender: 'M',
      picture: '', status: false
    },
    {
      id: 7, firstName: 'پدرام', lastName: 'حسینی', employeeDate: '1398/06/05', gender: 'M',
      picture: '', status: true
    },
    {
      id: 8, firstName: 'مریم', lastName: 'ملک زاده', employeeDate: '1399/03/01', gender: 'F',
      picture: '', status: false
    },
    {
      id: 9, firstName: 'حسین', lastName: 'شریفی', employeeDate: '1399/08/01', gender: 'M',
      picture: '', status: true
    }
  ];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserDto[]> {
    return of(this.dataMock);
  }

  getUser(id: number) {
    const obs = of(this.dataMock);
    return obs.pipe(map(x => x.filter(user => user.id === id)));
    // const userObj = this.dataMock.find(user => user.id === id);
    // return userObj;
  }

  add(newUser: UserDto) {
    // this.dataMock.push(newUser);
    this.subject.next(newUser);
  }

  update(user: UserDto) {
    let findUser = this.dataMock.find(item => { return item.id === user.id })
    findUser = user;
  }

  changeStatus(id: number, status: boolean , dataMock): Observable<boolean> {
    const findUser = dataMock.find(item => { return item.id === id })
    const obs = of(findUser);
    return obs.pipe(map(item => item.status = !status));
  }

  delete(id: number, dataMock): Observable<UserDto[]> {
    const obs = of(dataMock);
    return obs.pipe(map(x => x.filter(item => item.id !== id)));
  }

  saveUser(user: any): any{
    return this.http.post('/add', user);
  }
}
