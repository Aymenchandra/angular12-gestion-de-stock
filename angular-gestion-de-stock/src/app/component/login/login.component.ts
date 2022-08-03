import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  Eye=faEyeSlash;
  hide:boolean=true;
  constructor() { }
  ngOnInit(): void {

  }
  showPassword()
  {
    if(this.hide)
    {
      this.hide=!this.hide;
      this.Eye=faEye;
    }
    else
    {
      this.hide=!this.hide;
      this.Eye=faEyeSlash;
    }
  }
}