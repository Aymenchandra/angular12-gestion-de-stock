import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  siteKey:string='6LcDP7AZAAAAAEiwWaDC0IkoGJjWuMhcuPhGvkzA';
  Eye1=faEyeSlash;
  hide1:boolean=true;
  Eye2=faEyeSlash;
  hide2:boolean=true;
  constructor() {
   }
   

  ngOnInit(): void {
    this.siteKey;
  }

  showPassword1()
  {
    if(this.hide1)
    {
      this.hide1=!this.hide1;
      this.Eye1=faEye;
    }
    else
    {
      this.hide1=!this.hide1;
      this.Eye1=faEyeSlash;
    }
  }
  showPassword2()
  {
    if(this.hide2)
    {
      this.hide2=!this.hide2;
      this.Eye2=faEye;
    }
    else
    {
      this.hide2=!this.hide2;
      this.Eye2=faEyeSlash;
    }
  }
  
}
