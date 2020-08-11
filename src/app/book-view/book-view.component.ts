import { Component, OnInit, OnDestroy } from '@angular/core';
//import service
import { GotHttpService } from '../got-http.service';
//import router and activated route
import { ActivatedRoute, Router } from "@angular/router";
//import location
import { Location } from '@angular/common';
//for loader
import { Spinkit } from 'ng-http-loader';
//toastr notifications
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  providers: [Location]
})

export class BookViewComponent implements OnInit, OnDestroy {

  public spinkit = Spinkit;
  public currentBook;

  constructor(public gotHttpService: GotHttpService, public _route: ActivatedRoute, public location: Location, public router: Router, public toastr: ToastrService) {

  }

  ngOnInit() {

    let myBookId = this._route.snapshot.paramMap.get('url');
    //myBookId gets the url for the current book
    this.gotHttpService.getSingleBook(myBookId).subscribe(
      //getSingleBook method in service is used to get data of single book being viewed by the user

      data => {

        console.log("current book data");
        this.currentBook = data; //this.currentBook has the data of the current book viewed
        this.toastr.success("Book data received");
        console.log(this.currentBook);

      },

      error => {

        this.toastr.error("Some error occurred");//if any error error ,toastr notification appears
        this.router.navigate(['/pagenotfound']);//if any error error ,the page not found page opens
        console.log(error.errorMessage);

      }
    )


  }

  ngOnDestroy() {

    console.log("book-view destroyed");
  }

  public goToBackPage(): any {

    this.location.back();    //this is going back to previous page
  }

  public goToHomePage(): any {

    this.router.navigate(['/home']); //to go back to home page
  }

}
