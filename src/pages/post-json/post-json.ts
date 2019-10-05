import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-json',
  templateUrl: 'post-json.html',
})
export class PostJsonPage {
  returnMsg = ""; //ประกาศ properties เพื่อไปแสดง

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostJsonPage');
  }

  postJson(iname, isurname, iemail) {
    let jsonData = { name: iname, surname: isurname, email: iemail }; //สร้าง obj
    console.log(jsonData);
    let url = "http://localhost/shop/ion-post-json-object.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      this.returnMsg = data.message;
    });                                               
    //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj 
    //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
  }

}//end class
