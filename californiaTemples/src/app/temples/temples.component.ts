import { Component, OnInit  } from '@angular/core';
import { Temple } from './temple.model';
import { TempleService } from './temple.service';

@Component({
  selector: 'californiaTemples-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.css']
})
export class TemplesComponent implements OnInit {
  selectedTemple: Temple;

  constructor(private templeService: TempleService){

  }

  ngOnInit() {
    // this.templeService.templeListChangedEvent
    // .subscribe(
    //   (temple: Temple) => {
    //     this.selectedTemple = temple;
    //   }
    // );

  }

  

}
