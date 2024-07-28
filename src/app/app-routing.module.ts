import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyServersComponent } from './my-servers/my-servers.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { RequestDetailsComponent } from './request-details/request-details.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  { path: 'my-requests', component: MyRequestsComponent },
  { path: 'my-servers', component: MyServersComponent },
  { path: 'new-request', component: NewRequestComponent },
  { path: 'server-details', component: ServerDetailsComponent },
  { path: 'request-details', component: RequestDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
