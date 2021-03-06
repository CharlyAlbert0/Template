import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule,PaginationConfig } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';


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
import {DialogInput} from './infraestructure/dialogs/component/dialogsinput.component';
import {Dialog} from './infraestructure/dialogs/component/dialogs.component';

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
    UserComponent,
    DialogInput,
    Dialog

  ],
  exports:[DialogError,DialogDevelopComponent,DialogInput,Dialog],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    app_routing,
    PaginationModule,
    Ng2TableModule,
    TabsModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [DialogsService,AuthGuard,AlertService,AuthenticationService,UserService,PaginationConfig],
  entryComponents:[DialogError,DialogDevelopComponent,DialogInput,Dialog],

  bootstrap: [AppComponent]
})
export class AppModule { }
