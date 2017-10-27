import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './ekis/home/component/home.component';
import { NavbarComponent } from './ekis/shared/navbar/component/navbar.component';
import { FooterComponent } from './ekis/shared/footer/component/footer.component';
import { IntroComponent } from './ekis/home/sections/intro/component/intro.component';
import {MoreDevComponent} from './ekis/home/sections/intro/component/moredev.component';
import {LoginComponent} from './ekis/login/component/login.component';
import 'hammerjs';
import { DialogsService } from './infraestructure/dialogs/service/dialogs.service';
import {MdDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogError} from './infraestructure/dialogs/component/dialogserror.component';
import { DialogDevelopComponent} from './infraestructure/dialogs/component/dialogsDevelop.component';
import {UserComponent} from './ekis/users/component/user.component';

import {MatStepperModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import {MODULE_COMPONENTS,app_routing} from './app.routing';

import {AlertService} from './ekis/login/services/alert.service';
import {AuthenticationService} from './ekis/login/services/authentication.service';
import {UserService} from './ekis/login/services/user.service';
import {AuthGuard} from './guards/authguard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    MoreDevComponent,
    DialogError,
    DialogDevelopComponent,
    MODULE_COMPONENTS,
    LoginComponent,
    UserComponent

  ],
  exports:[DialogError,DialogDevelopComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    app_routing,
  ],
  providers: [DialogsService,AuthGuard,AlertService,AuthenticationService,UserService],
  entryComponents:[DialogError,DialogDevelopComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
