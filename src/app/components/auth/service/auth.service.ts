import { Injectable } from '@angular/core';
import{Subject} from 'rxjs'
import { User } from '../models/user';
import { AuthData } from '../models/auth-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router ) { }

  registerUser(authData: AuthData): void{
    this.user = {
      email:authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: AuthData): void{
    this.user = {
      email:authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
   this.authSuccessfully();
  }

  logout(): void {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login'])
  }

  isAuth(): boolean{
    return  this.user !== null && this.user !== undefined;
  }
  getUser() {
    return {... this.user};
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/training'])

  }
}
