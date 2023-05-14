import { Component } from '@angular/core';
import { AnotherService } from '../services/another.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticateComponent } from '../authenticate/authenticate.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private anotherService: AnotherService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) {}
  username = "";
  password = "";

  checkLogin() {
    const data = {
      password : this.password,
      userName : this.username
    }

    this.anotherService.checkLogin(data).subscribe(res => {
      if(res.ok == true) {
        this.router.navigate([ '/admin' ])
      } 
      else {
        this.dialog.open(AuthenticateComponent, {
          width: '500px',
          height: '350px'
        })
      }
      console.log(res)
    })
    // console.log(data);
  }
}
