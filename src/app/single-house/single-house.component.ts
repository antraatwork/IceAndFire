import { Component, OnInit, OnDestroy } from '@angular/core';
//import service
import { GotHttpService } from '../got-http.service';
//imprt Activated Route and Router
import { ActivatedRoute, Router } from "@angular/router";
//import Location
import { Location } from '@angular/common';
//for loader
import { Spinkit } from 'ng-http-loader';
//for toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-house',
  templateUrl: './single-house.component.html',
  styleUrls: ['./single-house.component.css'],
  providers: [Location]
})

export class SingleHouseComponent implements OnInit {

  public spinkit = Spinkit;

  public currentHouse;

  constructor(public gotHttpService: GotHttpService, public location: Location, public _route: ActivatedRoute, public router: Router, public toastr: ToastrService) { }


  ngOnInit() {
    //myHouseId has the url of the current house 
    let myHouseId = this._route.snapshot.paramMap.get('url');
    //getSingleHouse method in service is used to get the data of single house viewed by the user  
    this.gotHttpService.getSingleHouse(myHouseId).subscribe(

      data => {

        console.log("houseView data");
        this.currentHouse = data;//this.currentHouse has the data of currnet House viewed by the user
        this.toastr.success("House data received");//if request is successful,toastr will appear
        console.log(this.currentHouse);

      },
      error => {

        this.toastr.error("Some error occurred");// if any error occurs then toastr will apppear
        this.router.navigate(['/pagenotfound']);//if any error occurs then the page-not-found page opens

        console.log(error.errorMessage);

      }
    )
  }

  ngOnDestroy() {

    console.log("houseView component destroyed");
  }

  public goToBackPage(): any {

    this.location.back();//to go abck to previous page
  }

  public goToHomePage(): any {

    this.router.navigate(['/home']);//to go back to home page
  }

}


