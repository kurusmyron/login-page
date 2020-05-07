import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  public login(user: {username: string, password: string}) {
    console.log(`Username - ${user.username}`);
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

}
