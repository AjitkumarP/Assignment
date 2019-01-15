import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddblogComponent } from './addblog/addblog.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children:[{
      path:"home",
      component:HomeComponent
    },
    
  ]
  },
  {
    path:"addblog",
    component:AddblogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
