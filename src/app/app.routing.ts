import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './ekis/home/component/home.component';
import { NavbarComponent } from './ekis/shared/navbar/component/navbar.component';
import { FooterComponent } from './ekis/shared/footer/component/footer.component';
import { IntroComponent } from './ekis/home/sections/intro/component/intro.component';
import {MoreDevComponent} from './ekis/home/sections/intro/component/moredev.component';
import {LoginComponent} from './ekis/login/component/login.component';
import {UserComponent} from './ekis/users/component/user.component';
import {AuthGuard} from './guards/authguard';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
   { path: 'login', component: LoginComponent },
  { path: 'moredev', component: MoreDevComponent },
  { path: 'user', component: UserComponent },
{ path: '**', pathMatch: 'full', redirectTo: '/home' }
];

export const app_routing = RouterModule.forRoot(app_routes);

export const MODULE_COMPONENTS = [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    LoginComponent,
    UserComponent,

]
