import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddblogComponent } from './addblog/addblog.component';
import { MainComponent } from './main/main.component';

// var config = {
//   apiKey: "AIzaSyC0PTvdDTigbjxXBlrBQi0esQifCSz30wQ",
//   authDomain: "assignment-chennai.firebaseapp.com",
//   databaseURL: "https://assignment-chennai.firebaseio.com",
//   projectId: "assignment-chennai",
//   storageBucket: "assignment-chennai.appspot.com",
//   messagingSenderId: "13608205274"
// };
// firebase.initializeApp(config);

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyC0PTvdDTigbjxXBlrBQi0esQifCSz30wQ",
    authDomain: "assignment-chennai.firebaseapp.com",
    databaseURL: "https://assignment-chennai.firebaseio.com",
    projectId: "assignment-chennai",
    storageBucket: "assignment-chennai.appspot.com",
    messagingSenderId: "13608205274"
  }
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddblogComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'database'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
