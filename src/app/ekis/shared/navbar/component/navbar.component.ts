import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: '../view/navbar.component.html',
  styleUrls: ['../view/navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
  }

  LogOut(){
    debugger
    localStorage.removeItem('currentUser');
   this.router.navigate(['/login']);
  }
  goUsers(){
    debugger
    this.router.navigate(['/user']);
  }

  goHome(){
    debugger
    this.router.navigate(['/home']);
  }

}
