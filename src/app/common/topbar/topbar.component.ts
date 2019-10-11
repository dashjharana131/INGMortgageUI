import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  firstName: string;
  lastName: string;
  password: string;
  emailId: string;
  dateOfBirth: string;
  phoneNumber: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  usersignup() {
    this.userService.usersignup(this.firstName, this.lastName, this.emailId, this.dateOfBirth, this.phoneNumber, this.password).subscribe(data => {

    });
  }

  userlogin() {
    this.userService.userlogin(this.emailId, this.password).subscribe(data => {
    });


  }
}
