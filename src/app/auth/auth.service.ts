import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { user } from "./user.module";



 export interface AuthResponseData {
    kind : string;
    idToken : string;
    email : string;
    refreshToken : string;
    expiresIn: string;
    localId : string;
    registered?: boolean;


}

@Injectable({ providedIn:'root'})

export class Authservice {
    user =new Subject<user>();
    constructor(private http: HttpClient){}

    signUp(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCU47S7t1M6-73mX3JxKU_Uq0UtyqU8Fu0',
          {
            email : email,
            password : password,
            returnSecureToken : true

          }
        ).pipe(
            catchError(this.handleError),
        tap(resData =>{
            this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn
                );
        }
            ));
       

   
         
       }
       login(email:string,password:string){
          return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCU47S7t1M6-73mX3JxKU_Uq0UtyqU8Fu0',{
           
                email: email,
                password : password,
                returnSecureToken : true
   
              }
           ).pipe(catchError(this.handleError));}

           private handleAuthentication(
               email:string,
               userId:string,
               token:string, 
               expiresIn:number
               ){
            const ExpirationDate = 
            new Date(new Date().getTime() + +expiresIn * 1000
            );
             const User = new user(
                email,
                userId,
                token,
                ExpirationDate);
                this.user.next(User);
               
           }

           private handleError(errorRes:HttpErrorResponse){
            let errorMessage = 'An unkonown error occured';

            if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage = 'this  email exists already';
                    break;
                    case 'EMAIL_NOT_FOUND':
                    errorMessage = 'This email does not exist.';
                    break;
                    case 'INVALID_PASSWORD':
                    errorMessage = 'This password is not correct';
                    break;

            }
            return throwError(errorMessage);
       

           }

        }
