import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email=''
pass=''
  constructor(private router:Router
    ,private api:ApiServiceService
     ) {
console.log ('pagina iniciada')
}

ngOnInit() {
}
navegar(){
console.log(this.email+"correo")
console.log(this.pass+"contraseña")
this.passValidator(this.email,this.pass)
if(this.email == 'cristian'){
console.log('Funca')
}


}

async passValidator(email:string,pass:string){
const that=this;
try {
let login:any =await  that.api.ValidateApiService(email, pass);
if(login['message'] === 'Authentication successful') {
console.log(login,'Funncionoooooooo');
}
else {
console.log(login,"no se encontro el usuario");
}
}catch (error) {
//TODO INDICAR QUE OCURRIÓ UN ERROR CON LA API
console.log('error api')
}


}

}
