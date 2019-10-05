import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoListPage } from '../todo-list/todo-list';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  returnInp = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  postTask(itask, istatus, icreated_at) {
    let postTask = { task: itask, status: istatus, created_at: icreated_at };
    
    console.log(postTask);
    let url = "http://localhost/todoslim3/public/todo";

    this.http.post(url, postTask).subscribe((data: any) => {
      this.returnInp = data.input;
      console.log(data.input);
      this.navCtrl.push(TodoListPage);
    });

   
  
  }

  

}//end class
