import { Component, OnInit, OnDestroy } from '@angular/core';
//import service
import { GotHttpService } from '../got-http.service';
//import ActivatedRoute and router
import { ActivatedRoute, Router } from "@angular/router";
//import location 
import { Location } from '@angular/common';
import { Spinkit } from 'ng-http-loader';
//for toastr
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css'],
  providers: [Location]
})

export class SingleCharacterComponent implements OnInit {

  public spinkit = Spinkit;

  public currentCharacter;
  constructor(public gotHttpService: GotHttpService, public _route: ActivatedRoute, public location: Location, public router: Router, public toastr: ToastrService) { }


  ngOnInit() {

    let myCharacterId = this._route.snapshot.paramMap.get('url');
    //myCharacterId is the url for data of single Character
    //getSingleCharcter method od service is used to get the data of single character being viewed by the user

    this.gotHttpService.getSingleCharacter(myCharacterId)
      .subscribe(

        data => {

          console.log("character data");
          this.currentCharacter = data;//this.currentCharacter has the data of currentCharacter
          this.toastr.success("character data received ");
          console.log(this.currentCharacter);

        },
        error => {

          this.toastr.error("Some error occurred");
          this.router.navigate(['/pagenotfound']);//if any error occurr while getting the data,then the page-not-found page opens
          console.log(error.errorMessage);
        }
      )


  }

  ngOnDestroy() {


    console.log("characterView component destroyed");
  }

  public goToBackPage(): any {

    this.location.back(); //to go back to he previous page
  }

  public goToHomePage(): any {

    this.router.navigate(['/home']); //to go back to home page
  }

}



