import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../../../../../infraestructure/dialogs/service/dialogs.service';
import { EnumTypeD,EnumSizeD,EnumCategoryD,EnumIconD } from '../../../../../infraestructure/enums/enumdialog';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: '../view/intro.component.html',
  styleUrls: ['../view/intro.component.css']
})
export class IntroComponent implements OnInit {


  constructor(private _DialogsService: DialogsService,private router: Router) { }

  ngOnInit() {
       this.loadScript('assets/js/main.js');

  }

  public loadScript(url) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
 }

  openMoreDev(){
 debugger

 //this.router.navigate(['moredev']);
    this._DialogsService.ShowMoreDev().subscribe(data => {
          if(data){

          }
        });

  }

}
