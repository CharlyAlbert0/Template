import {Component, ViewChild,OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {UserModel} from '../model/user.model';
import {UserService} from '../../login/services/user.service';

import {NG_TABLE_DIRECTIVES} from 'ng2-table/ng2-table';
import {NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective} from 'ng2-table/ng2-table';

import {DialogsService} from '../../../infraestructure/dialogs/service/dialogs.service';
import {EnumCategoryD,EnumIconD,EnumSizeD,EnumTypeD,EnumTypeLoading} from '../../../infraestructure/enums/enumdialog';

declare var swal:any;

@Component({
  selector: 'app-user',
  templateUrl: '../view/user.component.html',
})
export class UserComponent implements OnInit {

  ListUser:UserModel[];
  NewUser:UserModel = new UserModel();






  constructor(private userService:UserService,
    private dialogsService:DialogsService) {
      this.GetUsers();

    }

    ngOnInit() {


      this.GetUsers();

    }

    GetUsers(){
      //llamar metod servicio
      this.userService.GetUsers().subscribe(dataUsers =>
        {
          //to doo
          debugger
          this.ListUser=dataUsers;


        });


      }

      AddUser(){
        // swal.setDefaults({
        //   input: 'text',
        //   confirmButtonText: 'Next &rarr;',
        //   showCancelButton: true,
        //   progressSteps: ['1', '2'],
        //   showLoaderOnConfirm: true,
        //   preConfirm: function (text) {
        //     return new Promise(function (resolve, reject) {
        //       setTimeout(function() {
        //         resolve()
        //       }, 2000)
        //     })
        //   },
        // })
        //
        // var steps = [
        //   {
        //     title: 'Por favor ingresa tus datos',
        //     text: 'Nombre'
        //   },
        //   {
        //     title: 'Por favor ingresa tus datos',
        //     text: 'Contraseña'
        //   }
        // ]
        // swal.queue(steps).then(function (result) {
        //   swal.resetDefaults();
        //   var nuevoUsuario: UserModel;
        //   nuevoUsuario = new UserModel();
        //   debugger
        //   nuevoUsuario.nombre=result[0];
        //   nuevoUsuario.password=result[1];
        //   swal({
        //     title: 'Finalizado!',
        //     html:
        //     'Your answers: <pre>' +
        //     JSON.stringify(result) +
        //     '</pre>',
        //     confirmButtonText: 'Terminar!'
        //   })
        // }, function () {
        //   swal.resetDefaults();
        // });



      this.dialogsService.inputSimple().subscribe(response => {
        debugger
        if(response.Result){
          this.NewUser.IdUser=null;
          this.NewUser.nombre=response.Nombre;
          this.NewUser.user=response.User;
          this.NewUser.password=response.Password;

          this.userService.AddUser(this.NewUser).subscribe(response => {
            debugger
             if(response =="OK"){
               this.GetUsers();
             }
          });

          //this.ListUser= new Array<UserModel>();
        }
        });
      }

      DeleteUser(userSelected:UserModel){
        debugger
        this.dialogsService.confirm('Confirmacion','Estas seguro de borrar este usuario?',
                                    EnumTypeD.info,EnumCategoryD.question,EnumSizeD.medium
                                    ,EnumIconD.questionred).subscribe(xcosa =>{
                                      if(xcosa){
                                        this.userService.DeleteUser(this.NewUser).subscribe(response => {
                                          debugger
                                           if(response =="OK"){
                                             this.dialogsService.confirm('Exito','Se ha eliminado el usuario:'+this.NewUser.nombre +'Corre',
                                                                         EnumTypeD.success,EnumCategoryD.notification,EnumSizeD.small
                                                                         ,EnumIconD.greenCheck)
                                             this.GetUsers();
                                           }
                                        });
                                      }
                                    })


      }

      public AddUserWizard()
      {
        var ctx = this;
        var nuevoUsuario: UserModel;

        swal.setDefaults({
          input: 'text',
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          progressSteps: ['1', '2']
        })

        var steps = [
          {
            title: 'Por favor ingresa tus datos',
            text: 'Nombre'
          },
          {
            title: 'Por favor ingresa tus datos',
            text: 'Contraseña'
          }
        ]
        swal.queue(steps).then(function (result) {
          swal.resetDefaults();

          nuevoUsuario = new UserModel();
          nuevoUsuario.IdUser = null;
          nuevoUsuario.nombre=result[0];
          nuevoUsuario.user=result[0];
          nuevoUsuario.password=result[1];

          var res = ctx.sendUser(nuevoUsuario);
        }, function () {
          swal.resetDefaults();
        });

      }

public sendUser(user:UserModel){
  this.userService.AddUser(user).subscribe(data =>
    {
      debugger;
      if(data=="OK")
      {
        swal(
          'Agregado!',
          'Your User has been deleted.',
          'success'
        )}
        else{
          swal(
            'Error!',
            'Ocurrió un error.',
            'error'
          )}

        this.GetUsers();
    });
 }


 DeleteUserWizard(userSelected:UserModel){
  var ctx = this;
  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(function () {
    ctx.DeleteUserService(userSelected);
  })
 }

 public DeleteUserService(userSelected:UserModel){
   debugger;
  this.userService.DeleteUser(userSelected).subscribe(data =>
    {
      debugger;
      if(data=="OK")
      {
        swal(
          'Eliminado!',
          'Proceso completado satisfactoriamente!',
          'success'
        )
      }
        else{
          swal(
            'Error!',
            'Ocurrió un error.',
            'error'
          )}

        this.GetUsers();
    });
 }












      public loadScript(url) {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
      }




    }
