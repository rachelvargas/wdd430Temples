import { Component, OnInit, Input } from '@angular/core';
import { Temple } from '../temple.model.js';
import { TempleService } from '../temple.service';

@Component({ 
  selector: 'californiaTemples-temple-item',
  templateUrl: './temple-item.component.html',
  styleUrls: ['./temple-item.component.css']
})
export class TempleItemComponent {
  @Input() temple: Temple;
  @Input() id: string;

    ngOnInit() {
  }

}
