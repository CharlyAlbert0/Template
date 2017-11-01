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
        this.dialogsService.inputSimple().subscribe(response => {
          debugger
          if(response.Result){
            //xcosa
            // this.NewUser.IdUser=null;
            // this.NewUser.nombre=response.Nombre;
            // this.NewUser.user=response.User;
            // this.NewUser.password=response.Password;
//            this.ListUser= new Array<UserModel>();
          }
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
