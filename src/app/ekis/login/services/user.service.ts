import {UserModel} from '../model/user.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class UserService {
  private urlApi = 'http://localhost:40903/api/'
  constructor(private http: Http) {

debugger

  if (localStorage.getItem('APIURL')) {

      this.urlApi = localStorage.getItem('APIURL')

  }


   }

  // getAll() {
  //     return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  // }
  //
  // getById(id: number) {
  //     return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }
  //
  // create(user: User) {
  //     return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  // }
  //
  // update(user: User) {
  //     return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  // }
  //
  // delete(id: number) {
  //     return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  // private helper methods

  // private jwt() {
  //     // create authorization header with jwt token
  //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //     if (currentUser && currentUser.token) {
  //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
  //         return new RequestOptions({ headers: headers });
  //     }
  // }


  InitInfo(): Observable<string>{
    debugger
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    return this.http.post(this.urlApi+'LimitRules/InitInfo?version=1', options)
    .map(res =>  {console.log(res.json()); return res.json() as string }).catch(this.handleError);

  }

  Login(user:UserModel): Observable<string>{
    debugger
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    return this.http.post(this.urlApi+'LimitRules/Login?version=1',user, options)
    .map(res =>  {
      debugger
      console.log(res.json());
      return res.json() as UserModel
    }).catch(this.handleError);

  }

  GetUsers(): Observable<UserModel[]>{
    debugger
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    return this.http.post(this.urlApi+'LimitRules/GetUsers?version=1', options)
    .map(res =>  {
      debugger
      console.log(res.json());
      return res.json() as UserModel[]
    }).catch(this.handleError);

  }

  AddUser(user:UserModel): Observable<string>{
    debugger
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    return this.http.post(this.urlApi+'LimitRules/SendUser?version=1',user, options)
    .map(res =>  {
      debugger
      console.log(res.json());
      return res.json() as string
    }).catch(this.handleError);

  }

  DeleteUser(user:UserModel): Observable<string>{
    debugger
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    return this.http.post(this.urlApi+'LimitRules/DeleteUser?version=1',user, options)
    .map(res =>  {
      debugger
      console.log(res.json());
      return res.json() as string
    }).catch(this.handleError);

  }


  private handleError(error: any): Promise<any> {
    debugger
    alert('Ok: '+error.ok+', ErrorBody: '+error._body+', tipo: '+error.type+', status: '+error.status+', statusText:'+error.statusText); // for demo purposes only
    if(error.status == 401)
    return Promise.reject(error || error);
  }








}
