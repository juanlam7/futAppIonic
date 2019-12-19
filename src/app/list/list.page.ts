import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
matchData: any = [];
matchData1: any = [];
matchData2: any = [];
matchData3: any = [];
matchData4: any = [];
matchData5: any = [];
matchData6: any = [];
matchData7: any = [];
matchDatalive: any = [];
matchData8: any = [];
matchData9: any = [];
matchData10: any = [];
matchData11: any = [];
matchData12: any = [];
matchData13: any = [];
matchData14: any = [];
matchData15: any = [];

  
  constructor (
    private http: HTTP) {

  }
   

  ngOnInit() {
    this.getAllMatchlive();
    this.getAllMatch15();
    this.getAllMatch14();
    this.getAllMatch();
    this.getAllMatch1();
    this.getAllMatch2();
    this.getAllMatch3();
    this.getAllMatch4();
    this.getAllMatch5();
    this.getAllMatch6();
    this.getAllMatch7();
    this.getAllMatch8();
    this.getAllMatch9();
    this.getAllMatch10();
    this.getAllMatch11();
    this.getAllMatch12();
    this.getAllMatch13();
    
  }

  getAllMatch() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-11-22&to= 2019-11-24', {}, {})
    .then( res => this.matchData = JSON.parse(res.data))
    .catch(err => this.matchData = err );
  }
  getAllMatch1() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-11-08&to= 2019-11-10', {}, {})
    .then( res => this.matchData1 = JSON.parse(res.data))
    .catch(err => this.matchData1 = err );
  }
  getAllMatch2() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-11-02&to= 2019-11-03', {}, {})
    .then( res => this.matchData2 = JSON.parse(res.data))
    .catch(err => this.matchData2 = err );
  }
  getAllMatch3() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-10-29&to= 2019-10-31', {}, {})
    .then( res => this.matchData3 = JSON.parse(res.data))
    .catch(err => this.matchData3 = err );
  }
  getAllMatch4() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-10-25&to= 2019-10-27', {}, {})
    .then( res => this.matchData4 = JSON.parse(res.data))
    .catch(err => this.matchData4 = err );
  }
  getAllMatch5() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-10-18&to= 2019-10-20', {}, {})
    .then( res => this.matchData5 = JSON.parse(res.data))
    .catch(err => this.matchData5 = err );
  }
  getAllMatch6() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-10-04&to= 2019-10-06', {}, {})
    .then( res => this.matchData6 = JSON.parse(res.data))
    .catch(err => this.matchData6 = err );
  }
  getAllMatch7() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-09-27&to= 2019-09-29', {}, {})
    .then( res => this.matchData7 = JSON.parse(res.data))
    .catch(err => this.matchData7 = err );
  }

  getAllMatchlive() {
    //get saved list of products
    this.http.get('https://livescore-api.com/api-client/scores/live.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&competition_id=3', {}, {})
    .then( res => this.matchDatalive = JSON.parse(res.data))
    .catch(err => this.matchDatalive = err );
  }
  
  getAllMatch8() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-09-24&to= 2019-09-26', {}, {})
    .then( res => this.matchData8 = JSON.parse(res.data))
    .catch(err => this.matchData8 = err );
  }
  getAllMatch9() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-09-20&to= 2019-09-22', {}, {})
    .then( res => this.matchData9 = JSON.parse(res.data))
    .catch(err => this.matchData9 = err );
  }
  getAllMatch10() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-09-13&to= 2019-09-15', {}, {})
    .then( res => this.matchData10 = JSON.parse(res.data))
    .catch(err => this.matchData10 = err );
  }
  getAllMatch11() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-08-30&to= 2019-09-01', {}, {})
    .then( res => this.matchData11 = JSON.parse(res.data))
    .catch(err => this.matchData11 = err );
  }
  getAllMatch12() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-08-23&to= 2019-08-25', {}, {})
    .then( res => this.matchData12 = JSON.parse(res.data))
    .catch(err => this.matchData12 = err );
  }
  getAllMatch13() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-08-16&to= 2019-08-18', {}, {})
    .then( res => this.matchData13 = JSON.parse(res.data))
    .catch(err => this.matchData13 = err );
  }
  getAllMatch14() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-11-29&to= 2019-12-01', {}, {})
    .then( res => this.matchData14 = JSON.parse(res.data))
    .catch(err => this.matchData14 = err );
  }
  getAllMatch15() {
    //get saved list of products
    this.http.get('http://livescore-api.com/api-client/scores/history.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&league= 74&from= 2019-12-06&to= 2019-12-08', {}, {})
    .then( res => this.matchData15 = JSON.parse(res.data))
    .catch(err => this.matchData15 = err );
  }


/*   objectKeys (matchData: any) {
    const keys = Object.keys(matchData);
    console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return keys;
 }

  delete(item) {
    //delete item in match data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update this after delete is successfull
      this.getAllMatch();
    });
  }
 */

}
