import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  

  gameArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadGameData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  loadGameData() {
    let url = "http://localhost/shop/getAllGames_7.php";

    this.http.get(url).subscribe((data: any) => {
      this.gameArray = data.games;
      console.log(this.gameArray);
    }, (error) => { console.log(error) });


  }

}//end class
