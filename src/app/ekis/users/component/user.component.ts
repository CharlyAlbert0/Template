import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: '../view/user.component.html',
})
export class UserComponent implements OnInit {
  constructor() {  }

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
}
