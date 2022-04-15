import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})

export class LoginComponent   {

  miFormulario: FormGroup = this.fb.group({
    email: ['davidhastt@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  Login(){
    //console.log(this.miFormulario.value);
    //console.log(this.miFormulario.valid);
    const {email, password} = this.miFormulario.value;

    this.authService.login(email, password)
      .subscribe( ok =>{
        console.log(ok);
        if (ok == 200){
          this.router.navigateByUrl('/dashboard')
        }else{


          swal({
            title: "Error!",
            text: ok,
            icon: "error",
          });
        }
      });


    //this.router.navigateByUrl('/dashboard');
  }

}
