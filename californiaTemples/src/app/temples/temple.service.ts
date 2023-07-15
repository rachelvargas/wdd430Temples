import { Injectable } from '@angular/core';
import { Temple } from './temple.model';
import { Subject, Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TempleService {
  templeListChangedEvent = new Subject<Temple[]>();
  temples: Temple[] = [];
  maxTempleId: number;
  id: string;

  constructor(private httpClient: HttpClient) {

  }

   getTemple(id: string) {
    return this.httpClient.get<{ message: string, temple: Temple }>('http://localhost:3000/temples/' + id);
    //return this.temples.find((temple) => temple.id === id);
    /*for (let temple of this.temples){
      if(temple.id === id){
        return temple;
      }
    }    
    return null;*/
     
  }

   getTemples() {
    this.httpClient
      .get<{ message : string, temples: Temple[] }>('http://localhost:3000/temples/')
      .subscribe(
        (responseData) => {
          this.temples = responseData.temples;
          this.sortAndSend();
        },
        // error handler
        (error: any) => {
          console.log(error);
        }
      );
  }

   getMaxId(): number{
    let maxld = 0;
    for (let temple of this.temples){
      const currentId = parseInt(temple.id, 20);
      if (currentId > maxld){
        maxld = currentId;
      }

    }
    return maxld;
  }

   sortAndSend(){
    this.temples.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
    this.templeListChangedEvent.next(this.temples.slice());
  }

  addTemple(temple: Temple){
    if(!temple){
      return;
    }
    temple.id = '';

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.httpClient
    .post<{ message: string, temple: Temple }>('http://localhost:3000/temples',
    temple, { headers: headers })
    .subscribe(
      (responseData) => {
        this.temples.push(responseData.temple);
        this.sortAndSend();
      }
    );
     
  }

  updateTemple(originalTemple: Temple, newTemple: Temple){
    if (!originalTemple || !newTemple){
      return;
    }
    const pos = this.temples.findIndex(e => e.id === originalTemple.id);
    if (pos < 0){
      return;
    }
    newTemple.id = originalTemple.id;
    newTemple.id = originalTemple._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.httpClient.put('http://localhost:3000/temples/' + originalTemple.id,
    newTemple, { headers: headers })
    .subscribe(
      (response: Response) => {
        this.temples[pos] = newTemple;
        this.sortAndSend();
      }
    );
    }

    deleteTemple(temple: Temple){
      if(!temple) {
        return;
      }
      const pos = this.temples.findIndex(e => e.id === temple.id);
      if (pos < 0){
        return;
      }
      
      this.httpClient.delete('http://localhost:3000/temples/' + temple.id)
      .subscribe(
        (response: Response) => {
          this.temples.splice(pos, 1);
          this.sortAndSend();
        }
      );
  }

}
