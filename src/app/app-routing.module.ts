import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TrainingComponent } from './components/training/training.component';
import { AuthGuard } from './components/auth/service/auth.guard';


const routes: Routes = [
  { path:'',  component: WelcomeComponent},
  { path:'signup', component: SignupComponent},
  { path:'login', component: LoginComponent},
  { path:'training', component: TrainingComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
