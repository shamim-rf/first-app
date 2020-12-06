import { UserService } from './../../../shared/services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user = { id: 0, name: '', query: {} };
  userSubscription: Subscription;
  querySubscription: Subscription;
  openDialog = false;
  constructor(private activeRoute: ActivatedRoute,
              private userService: UserService,
              private _adapter: DateAdapter<any>) {
                this._adapter.setLocale('fa');
              }

  ngOnInit(): void {
    // this.user.id = this.activeRoute.snapshot.params['id'];
    // this.user.name = this.activeRoute.snapshot.params['name']
    // this.userSubscription = this.activeRoute.params.subscribe((params: Params) => {

    //   this.user.id = params['id'];
    //   this.user.name = params['name'];
    // });
    // this.querySubscription = this.activeRoute.queryParams.subscribe(data => {
    //   this.user.query = JSON.stringify(data['key']);
    // })

    // debugger
    // this.userService.openSubject.subscribe((data: boolean) => {
    //   this.openDialog = data;
    // });
  }

  // persian(date) {
  //   debugger
  //   date
  // }

  ngOnDestroy(): void {

    // this.userSubscription.unsubscribe();
    // this.querySubscription.unsubscribe();
  }
}
