import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  password: string;
  requestObject: any = {};


  constructor(private authService: AuthService,
    public router: Router,
    private http: HTTP ) {

  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigate(['/list']);
    }).catch(err => alert('No registrado'))
  }

  getRequest(){
    this.http.get('https://livescore-api.com/api-client/scores/live.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&competition_id=190', {}, {})
  .then( res => this.requestObject = JSON.parse(res.data))
  .catch(err => this.requestObject = err );
  console.log(this.getRequest())  
  }
  

}
