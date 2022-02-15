import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';


@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  quote: Quote | undefined;
  
  constructor(private_http:HttpClient) {
    this.quote = new Quote("","");
   }

   quoteRequest(){
     interface ApiResponse{
       quote:string;
       author:string;
     }
     let promise = new Promise<void>((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
         this.quote.quote = response.quote
         this.quote.author = response.author

         resolve()
       },
       error=>{
         this.quote.quote = "Never, never, never give up"
         this.quote.author = "Winston Churchill"

         reject(error)
       })
     })
     return promise
   }
}
function quoteRequest() {
  throw new Error('Function not implemented.');
}

