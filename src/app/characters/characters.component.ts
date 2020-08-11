import { Component, OnInit, OnDestroy } from '@angular/core';
//import httpservice
import { GotHttpService } from '../got-http.service';
//import Router
import { ActivatedRoute, Router } from "@angular/router";
// loader 
import { Spinkit } from 'ng-http-loader';
//for toastr notications
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit, OnDestroy {

  public spinkit = Spinkit;
  public allCharacters;
  //current page is 1
  public p: number = 1;

  constructor(public gotHttpService: GotHttpService, public router: Router, public toastr: ToastrService) { }

  ngOnInit() {

    console.log("characters ngOnit is called");
    //getAllCharacters method in service is used to get the data of all characters 

    this.allCharacters = this.gotHttpService.getAllCharacters().subscribe(

      data => {

        console.log("allCharacters data");
        this.allCharacters = data; //if the request is successful,then this.allCharacters has data of all characters
        this.toastr.success("Characters data received"); //if request is successful ,then toastr will appear
        console.log(this.allCharacters);
      },
      error => {

        this.toastr.error("Some error occurred"); //if there is error ,toastr will appear.
        this.router.navigate(['/pagenotfound']);//if any error occurs then move to page-not-found page. 
        console.log(error.errorMessage);

      }
    )
  }

  ngOnDestroy() { //when the component is destroyed

    console.log("characters component destroyed");

  }

}


