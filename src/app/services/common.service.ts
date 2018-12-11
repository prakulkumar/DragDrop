import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(public http: HttpClient) { }

  public getUsers() {
    return this.http.get('http://localhost:3000/customers');
  }

  public getNewsFeed() {
    let date = new Date();
    const currentDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    return this.http.get(`https://newsapi.org/v2/everything?q=bitcoin&from=${currentDate}&sortBy=publishedAt&apiKey=b793d65e2ce84eb2b6dfc6b73d4d3d3f`);
  }
}
