import { Injectable } from '@angular/core';
import { User } from 'src/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Function to signup user
   *
   * @param user User Data to be send.
   *
   * @return { Observable <any> } function returning an observable of object or un known type.
   */
  signupUser(user: User): Observable<any> {
    return this.httpClient.post('https://demo-api.vercel.app/users', user);
  }
}
