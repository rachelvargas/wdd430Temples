import { Component, OnInit } from '@angular/core';
import { Temple } from '../temple.model';

import { TempleService } from '../temple.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'californiaTemples-temple-detail',
  templateUrl: './temple-detail.component.html',
  styleUrls: ['./temple-detail.component.css']
})
export class TempleDetailComponent implements OnInit {
  temple: Temple;
  id: string;

  constructor(
    private templeService: TempleService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = params.id;
          this.templeService.getTemple(this.id)
          .subscribe(templeData => {
            this.temple = templeData.temple;
          });
          
        }
      );
  
    }
    onDelete(){
      this.templeService.deleteTemple(this.temple);
      this.router.navigateByUrl('/temples');
    }

}
