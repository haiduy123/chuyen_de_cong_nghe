import { Component } from '@angular/core';
import { AnotherService } from '../services/another.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
      // else {
      //   this.toastr.error("Hello world!", "Sai tài khoản", {
      //     titleClass: "center",
      //     messageClass: "center"
      //   });
      // }
      console.log(res)
    })
    // console.log(data);
  }
}
