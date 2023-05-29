import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pass-word',
  templateUrl: './pass-word.page.html',
  styleUrls: ['./pass-word.page.scss'],
})
export class PassWordPage implements OnInit {

  constructor(private router:Router) {
    console.log ('pagina iniciada')
  }

  ngOnInit() {
  }
  navegar(){
  this.router.navigate(['login'])

  }
  }
