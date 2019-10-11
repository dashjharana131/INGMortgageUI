import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  obj: any;
  firstApiurl: string = 'http://10.117.189.34:8080/loan/mortgage/register';
  secondApiurl: string = 'http://10.117.189.34:8080/loan/mortgage/login';

  constructor(private http: HttpClient) { }

  usersignup(firstName, lastName, password, emailId, dateOfBirth, phoneNumber) {
    this.obj = {
      "firstname": firstName,
      "lastname": lastName,
      "email": emailId,
      "dateofbirth": dateOfBirth,
      "phonenumber": phoneNumber,
      "password": password
    }
    return this.http.post(this.firstApiurl, this.obj);
  }

  userlogin(emailId, password) {
    this.obj = {
      "password": password,
      "email": emailId
    }
    return this.http.post(this.secondApiurl, this.obj);
  }


}