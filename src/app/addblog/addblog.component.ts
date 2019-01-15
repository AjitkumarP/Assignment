import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
user={};
description = 'Angular-Firebase Demo';
// user = '';
items: Observable<any[]>;

  constructor(private router:Router,public db: AngularFireDatabase) {
  
    this.items = db.list('items').valueChanges();
   }
   

  ngOnInit() {
  }
  onpublish(){
    console.log(this.user);
    this.db.list('/items').push({ content: this.user });
    this.user = {};
    console.log(this.items)
    // sessionStorage.setItem('userobj',JSON.stringify(this.user))
   // this.router.navigateByUrl('home')
  }
}
