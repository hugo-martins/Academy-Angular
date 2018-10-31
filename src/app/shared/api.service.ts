import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {

  private readonly API: string = 'http://localhost:4200/api/';

  constructor(private httpClient: HttpClient) { 
  }

  get() {
    return this.httpClient.get(this.API + this.getEndpoint());
  }
  getOne(id: any) {
    return this.httpClient.get(this.API + this.getEndpoint() + '/' + id);
  }
  post(body: any) {
    return this.httpClient.post(this.API + this.getEndpoint(), body);
  }
  put(body: any, id: any) {
    return this.httpClient.put(this.API + this.getEndpoint() + '/' + id, body);
  }
  delete(id: any) {
    return this.httpClient.delete(this.API + this.getEndpoint() + '/' + id);
  }

  protected getEndpoint(): string {
    if( string == equipamentos ){
      return 'equipamentos';
    } elif if ( string == academias ){
      return 'academias';
    }
  }
}
