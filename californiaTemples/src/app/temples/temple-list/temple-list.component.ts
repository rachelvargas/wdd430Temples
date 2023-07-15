import { Component, OnInit, OnDestroy } from '@angular/core';

import { Temple } from '../temple.model';

import { TempleService } from '../temple.service';

import { Subscription } from 'rxjs';
//import { Observable } from 'rxjs';

import { TemplesFilterPipe } from '../temples-filter.pipe';

@Component({
  selector: 'californiaTemples-temple-list',
  templateUrl: './temple-list.component.html',
  styleUrls: ['./temple-list.component.css']
})
export class TempleListComponent implements OnInit, OnDestroy {
  temples: Temple[] = [];
  subscription: Subscription;
  term: string;

  constructor(private templeService: TempleService) {
    
  }

  ngOnInit(){
    this.subscription = this.templeService.templeListChangedEvent
    .subscribe(
      (templeList: Temple[]) => {
        this.temples = templeList;
      }
    );

    this.templeService.getTemples();
  }

  search(value: string){
    this.term = value;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  
  }


}
