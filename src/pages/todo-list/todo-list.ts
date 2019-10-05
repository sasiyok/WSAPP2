import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the TodoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {
  
  todosArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadTodosData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoListPage');
  }

  loadTodosData() {
    let url = "http://localhost/todoslim3/public/index.php/todos";

    this.http.get(url).subscribe((data: any) => {
      this.todosArray = data;
      console.log(this.todosArray);
    }, (error) => { console.log(error) });

    
  }

  newtask(){
    this.navCtrl.push("TaskPage");
  }
}
