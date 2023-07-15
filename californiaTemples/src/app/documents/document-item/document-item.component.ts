import { Component, OnInit, Input  } from '@angular/core';

import { Document } from 'src/app/documents/document.model';


@Component({
  selector: 'californiaTemples-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent {
  @Input() document: Document;
  @Input() id:string;

  ngOnInit(){

  }

}
