/**
 * Created by littlestone on 2016/12/2.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {UserCenterComponent} from "./pages/user-center/user-center.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {UsersComponent} from "./components/users/users.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'usercenter', component: UserCenterComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'detail/:id', component: UserDetailComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}