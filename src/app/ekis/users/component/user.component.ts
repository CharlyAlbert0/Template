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


@Component({
  selector: 'app-user',
  templateUrl: '../view/user.component.html',
})
export class UserComponent implements OnInit {

  ListUser:UserModel[];

 public rows:Array<any> = [];
 public columns:Array<any> = [
   {title: 'x titulo', name: 'nombre', filtering: {filterString: '', placeholder: 'Filter by nombre'}},
   {title: 'x titulo', name: 'user', sort: false, filtering: {filterString: '', placeholder: 'Filter by user'}
   },
   // {title: 'Proyect', className: ['office-header', 'text-success'], name: 'Proyect', sort: 'asc'},

 ];


  public page:number = 1;
  public itemsPerPage:number = 5;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-responsive', 'table-bordered']
  };

  private data:Array<any> = this.ListUser;


  constructor(private userService:UserService) {
     this.GetUsers();

  }

  ngOnInit() {

     this.loadScript('assets/js/main.js');
     //this.GetUsers();
     this.onChangeTable(this.config);
  }

  GetUsers(){
    //llamar metod servicio
    this.userService.GetUsers().subscribe(dataUsers =>
          {
          //to doo
          debugger
            //this.ListUser=data;
            this.data = dataUsers;
             this.length = this.data.length;

          });
  }


  public changePage(page:any, data:Array<any> = this.data):Array<any> {
     let start = (page.page - 1) * page.itemsPerPage;
     let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
     return data.slice(start, end);
   }

   public changeSort(data:any, config:any):any {
     if (!config.sorting) {
       return data;
     }

     let columns = this.config.sorting.columns || [];
     let columnName:string = void 0;
     let sort:string = void 0;

     for (let i = 0; i < columns.length; i++) {
       if (columns[i].sort !== '' && columns[i].sort !== false) {
         columnName = columns[i].name;
         sort = columns[i].sort;
       }
     }

     if (!columnName) {
       return data;
     }

     // simple sorting
     return data.sort((previous:any, current:any) => {
       if (previous[columnName] > current[columnName]) {
         return sort === 'desc' ? -1 : 1;
       } else if (previous[columnName] < current[columnName]) {
         return sort === 'asc' ? -1 : 1;
       }
       return 0;
     });
   }

   public changeFilter(data:any, config:any):any {
     let filteredData:Array<any> = data;
     this.columns.forEach((column:any) => {
       if (column.filtering) {
         filteredData = filteredData.filter((item:any) => {
           return item[column.name].match(column.filtering.filterString);
         });
       }
     });

     if (!config.filtering) {
       return filteredData;
     }

     if (config.filtering.columnName) {
       return filteredData.filter((item:any) =>
         item[config.filtering.columnName].match(this.config.filtering.filterString));
     }

     let tempArray:Array<any> = [];
     filteredData.forEach((item:any) => {
       let flag = false;
       this.columns.forEach((column:any) => {
         if (item[column.name].toString().match(this.config.filtering.filterString)) {
           flag = true;
         }
       });
       if (flag) {
         tempArray.push(item);
       }
     });
     filteredData = tempArray;

     return filteredData;
   }

   public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
     if (config.filtering) {
       Object.assign(this.config.filtering, config.filtering);
     }

     if (config.sorting) {
       Object.assign(this.config.sorting, config.sorting);
     }

     let filteredData = this.changeFilter(this.data, this.config);
     let sortedData = this.changeSort(filteredData, this.config);
     this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
     this.length = sortedData.length;
   }

   public onCellClick(data: any): any {
     console.log(data);
   }







  public loadScript(url) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
 }




}
