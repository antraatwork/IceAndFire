import { Component, OnInit, OnDestroy } from '@angular/core';
//import httpservice
import { GotHttpService } from '../got-http.service';
//import ACtivatedRoute and Router
import { ActivatedRoute, Router } from "@angular/router";
import { Spinkit } from 'ng-http-loader';
//for toastr notications
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})

export class HousesComponent implements OnInit, OnDestroy {

  public spinkit = Spinkit;
  public allHouses;
  //currnet page is 1
  public p: number = 1;

  constructor(public gotHttpService: GotHttpService, public router: Router, public toastr: ToastrService) { }

  ngOnInit() {

    console.log("houses data displayed");
    //getAllHouses method in service is used to get the data fo all houses
    this.allHouses = this.gotHttpService.getAllHouses().subscribe(

      data => { //if request  is succcesful

        console.log("allHouses data");
        this.allHouses = data; //this.allHouses has the data of all houses 
        this.toastr.success("Houses data received");
        console.log(this.allHouses);

      },
      error => {

        this.toastr.error("Some error occurred");
        this.router.navigate(['/pagenotfound']); //if any error occurs then the page-not-found page opens
        console.log(error.errorMessage);

      }
    )
  }

  ngOnDestroy() {

    console.log("houses component destroyed");
  }

}
