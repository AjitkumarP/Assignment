import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// users=[];
user={};
users:FirebaseListObservable<any>;;
    constructor(public db: AngularFireDatabase) {
    this.users = db.list('items');
          }

  // constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    console.log(this.db.list('/items'))
    console.log(sessionStorage)
    if(sessionStorage.length == 0){
      this.users=[{title:"Bernard shaw",post:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam amet suscipit voluptates explicabo iste adipisci? Eveniet, minus! Commodi amet, nobis minima, rerum consequatur sequi quas enim cupiditate doloribus eos laudantium."}];
    }else{
      if(sessionStorage.getItem('userAr')== undefined){
        this.users=[{title:"Bernard shaw",post:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam amet suscipit voluptates explicabo iste adipisci? Eveniet, minus! Commodi amet, nobis minima, rerum consequatur sequi quas enim cupiditate doloribus eos laudantium."}];
      }else{
        this.users=JSON.parse(sessionStorage.getItem('userAr'))
      }
      
      this.user=JSON.parse(sessionStorage.getItem('userobj'))
      this.users.push(this.user)
      sessionStorage.setItem('userAr',JSON.stringify(this.users))
      console.log(this.users)
      this.user={}
    }
   
  }

}
