import { Injectable } from '@angular/core';
import { User } from 'src/model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @description Function to signup user
   *
   * @param user User Data to be send.
   */
  signupUser(user: User) {
    return this.httpClient.post('https://demo-api.vercel.app/users', user);
  }
}
