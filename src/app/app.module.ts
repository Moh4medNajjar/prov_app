import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyServersComponent } from './my-servers/my-servers.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminsListComponent } from './admins-list/admins-list.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MyRequestsComponent,
    MyServersComponent,
    NewRequestComponent,
    ServerDetailsComponent,
    RequestDetailsComponent,
    UsersListComponent,
    AdminsListComponent,
    AdminDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
