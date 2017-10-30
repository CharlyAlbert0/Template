import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import {UserService} from '../services/user.service';
import {UserModel} from '../model/user.model';

@Component({
    moduleId: module.id,
    templateUrl: '../view/login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    version:string;
    userlogin:UserModel = new UserModel();
    canloggin:boolean;
    ambiente:string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService:UserService) {debugger }

    ngOnInit() {

        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        //

        setTimeout(() => {

          this.checkThereIsConfig();

        }, 2000);





    }

    checkThereIsConfig(){
      if(localStorage.getItem('APIURL')){
        debugger
        this.canloggin=true;
        this.ambiente=localStorage.getItem('APIURL');
        setTimeout(() => {

          this.userService.InitInfo().subscribe(Response => {

            this.version = Response;
          }, error => {
            //alert(error);
          }, () => {

          });
        }, 2000);
      }
      else{
          this.version = "No se cargo el archivo de configuración";
      }
    }

    login() {

      if(this.canloggin){

        this.loading = true;
        // setTimeout(()=> this.loading=false,3000);

















        // setTimeout(() => {
          debugger
            this.loading=false;
            this.userlogin.user=this.model.username;
            this.userlogin.password=this.model.password;
            // localStorage.setItem('currentUser', 'data');
            // this.router.navigate(['/home']);
            this.userService.Login(this.userlogin)
            .subscribe(
                    data => {
                      debugger
                      if(data !=null){
                        localStorage.setItem('currentUser', data);
                        this.router.navigate(['/home']);
                      }
                      else{
                        alert('credenciales invalidas');
                      }


                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });


        // }, 3000);
        //   localStorage.setItem('currentUser', 'this.token.access_token');
        //  this.router.navigate(['/home']);

        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
      }
      else{
        alert('No hay App.Config, no puedes iniciar sesión');
      }


    }

    ejecutar(){
    this.loading =true;

    setTimeout(()=> this.loading=false,3000);

  }
}
