import { Component, OnInit, OnDestroy } from '@angular/core';
//import httpservice 
import { GotHttpService } from '../got-http.service';
//import route
import { ActivatedRoute, Router } from "@angular/router";
//import loader 
import { Spinkit } from 'ng-http-loader';
//for toastr notifications 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  public spinkit = Spinkit
  public allBooks; //data of all the books
  public p: number = 1; //current page is 1
  constructor(public gotHttpService: GotHttpService, public router: Router, public toastr: ToastrService) {
  }

  ngOnInit() {

    console.log("home ngOnit is called");
    this.gotHttpService.getAllBooks().subscribe(
      //getAllBooks method in service is subscribed for updates
      //it will upadate whenever there is some change is data and moreover if there is any error then the page not found page appears
      data => {

        console.log("allBooks data");
        this.allBooks = data; // all the data of all books is saved in this.allBooks
        this.toastr.success("Books data received");// if request is successful ,then toastr will appear
        console.log(this.allBooks);

      },
      error => {

        this.toastr.error("Some error occurred");  //if there is error,toastr will appear
        this.router.navigate(['/pagenotfound']);//if there is any error while getting the data ,then page not found page opens.
        console.log(error.errorMessage);

      }
    )
  }

  ngOnDestroy() {

    console.log("home component destroyed");

  }


}
