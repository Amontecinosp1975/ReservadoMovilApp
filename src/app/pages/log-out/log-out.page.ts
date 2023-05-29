import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.page.html',
  styleUrls: ['./log-out.page.scss'],
})
export class LogOutPage implements OnInit {

  constructor(private router:Router) {
    console.log ('pagina iniciada')
  }

  ngOnInit() {
  }
navegar(){
  this.router.navigate(['login'])

}
}
