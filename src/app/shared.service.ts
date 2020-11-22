import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:5001/api";

  constructor(private http:HttpClient) { }

  getCommandsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/commands');
  }

  addCommand(val:any){
    return this.http.post(this.APIUrl+'/Commands',val)
  }

  updateCommand(val:any){
    return this.http.put(this.APIUrl+'/Commands',val)
  }

  deleteCommand(val:any){
    return this.http.delete(this.APIUrl+'/Commands/'+val)
  }

}
