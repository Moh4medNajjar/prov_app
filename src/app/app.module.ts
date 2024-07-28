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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MyRequestsComponent,
    MyServersComponent,
    NewRequestComponent,
    ServerDetailsComponent
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
