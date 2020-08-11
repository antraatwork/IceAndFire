import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule ,Routes} from '@angular/router';
import{CommonModule} from '@angular/common';

//for components
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { CharactersComponent } from './characters/characters.component';
import { BookViewComponent } from './book-view/book-view.component';
import { SingleHouseComponent } from './single-house/single-house.component';
import { SingleCharacterComponent } from './single-character/single-character.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import http service
import { GotHttpService } from './got-http.service';
//httpclient
import { HttpClientModule} from '@angular/common/http';
//module for orderBy
import { OrderModule } from 'ngx-order-pipe';
//module for pagination
import { NgxPaginationModule } from 'ngx-pagination';
//material icons
import { MatIconModule } from "@angular/material/icon";
//loader
import { NgHttpLoaderModule } from 'ng-http-loader';
//toastr notications
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousesComponent,
    CharactersComponent,
    BookViewComponent,
    SingleCharacterComponent,
    PageNotFoundComponent,
    SingleHouseComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 3000, //toastr notication will appear for 3 seconds.
      positionClass: 'toast-bottom-right', //toastr appears at right-bottom on screen
      preventDuplicates: true, //prevent duplicates
    }),
    NgHttpLoaderModule.forRoot(),
    RouterModule.forRoot([

      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'/home',pathMatch:'full'},//by default,redirect to home component initially when there is no path 
      {path:'characters',component:CharactersComponent},
      {path:'houses',component:HousesComponent},
      {path:'bookview/:url' ,component:BookViewComponent},
      {path:'characterview/:url',component:SingleCharacterComponent},
      {path:'houseview/:url',component:SingleHouseComponent},
      {path:'pagenotfound',component:PageNotFoundComponent},
      {path:'**',component:HomeComponent} //wildcard route for home component,used if the path is not found 

    ])
    
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
