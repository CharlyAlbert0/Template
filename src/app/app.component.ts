import { Component } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import {  HttpModule,Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     title = 'app works!';
     location: Location;
     configs:Array<any>;
  constructor(location:Location,
              private http:Http){
    try{
      debugger;
            this.location = location;
            // this.WebConfiguration();


    }
    catch(error){

    }
  }

//   WebConfiguration(): Promise<any> {
//     return this.http.request('assets/config/webconfig.json').toPromise()
//            .then(response =>{
//                debugger
//              this.configs = response.json();
//              localStorage.setItem('APIURL', this.configs["APIURL"]);
//              localStorage.setItem('SSOURL', this.configs["SSOURL"]);
//              localStorage.setItem('ISDEVQA', this.configs["ISDEVQA"]);
//             //  APIURL=this.configs["APIURL"];
//             //  SSOURL=this.configs["SSOURL"];
//             //  IsDevQa=this.configs["ISDEVQA"];
//             //  Idle=this.configs["IDLE"];
//             //  TimeToInactivity=this.configs["TIMETOINACTIVITY"];
//             //  ShowErrorDiag=this.configs["SHOWERRORDIAG"];
//           });
// }

}
