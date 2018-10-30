import { Component, OnInit } from '@angular/core';
import { User } from '../objects/User.model';
import {FormControl, Validators} from '@angular/forms';
import {  Router, ActivatedRoute}   from '@angular/router';
import { ReportPageComponent } from '../report-page/report-page.component';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user : User = new User("exagate","exagate");

  username: string = "";
  password: string = "";
  hasValidation: boolean;

  constructor(private router: Router, private route: ActivatedRoute) 
  { 

  }

  ngOnInit() 
  {

  }

  validate()
  {
    if((this.user.username == this.username) && (this.user.password == this.password))
    {
      this.hasValidation = true;
      this.router.navigate(['/report']);
    }
    else
    {
      this.hasValidation = false;
    }
  }

}
