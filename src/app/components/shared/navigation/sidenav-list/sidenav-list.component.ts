import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs'
import { AuthService } from 'src/app/components/auth/service/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  authStatus: boolean = false;
  private authSubscription = new Subscription;
  @Output() sidenavClose = new EventEmitter<void>()

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe((auth)=> {
      this.authStatus = auth;
    })
  }

  sidenavOnClose():void {
     this.sidenavClose.emit();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onLogout(): void {
    this.authService.logout();
    this.sidenavOnClose();
  }
}
