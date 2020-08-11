import { Injectable } from '@angular/core';

//import httpclient and httperrorresponse
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GotHttpService {
  
  public baseUrl = 'https://www.anapioficeandfire.com/api/';
  constructor(public _http:HttpClient) {


   }

   private handleError(err:HttpErrorResponse){

    console.log("handle error");
    return Observable.throw(err.message);

   }

   //method to get data of all books 
   public getAllBooks():any{

    let response = this._http.get(this.baseUrl + 'books');
    console.log(response);
    return response;          

   }

   //method to get data of all characters
   public getAllCharacters():any{

    let response = this._http.get(this.baseUrl + 'characters');
    console.log(response);
    return response;

   }

   //method to get data of all houses
   public getAllHouses():any{

    let response = this._http.get(this.baseUrl + 'houses');
    console.log(response);
    return response;

   }

   //method to get data of single book
   public getSingleBook(bookId):any{ 

    let response = this._http.get(bookId);
    console.log(response);
    return response;

   }

   //method to get the data of single character
   public getSingleCharacter(characterId):any{

    let response = this._http.get(characterId);
    console.log(response);
    return response;

   }

   //method to get the data of single house
   public getSingleHouse(houseId):any{
     
    let response = this._http.get(houseId);
    console.log(response);
    return response;

   }
  
   
  
}
