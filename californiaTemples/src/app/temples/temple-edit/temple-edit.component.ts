import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TempleService } from '../temple.service';
import { Temple } from '../temple.model';

@Component({
  selector: 'californiaTemples-temple-edit',
  templateUrl: './temple-edit.component.html',
  styleUrls: ['./temple-edit.component.css']
})
export class TempleEditComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  originalTemple: Temple;
  temple: Temple;
  id: string;
  groupTemples: Temple[] = [];
  editMode: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private templeService: TempleService,
    private router: Router
    ){}

    ngOnInit(){
      this.route.params.subscribe(
        (params: Params) => {     
        if (!this.id){
          this.editMode = false;
          return;
        }
        
        this.templeService.getTemple(this.id);        
        if(!this.originalTemple){
          return;
        }
        this.editMode = true;
        this.temple = JSON.parse(JSON.stringify(this.originalTemple));
      });  
    
    }

    onSubmit(form: NgForm) {
      const value = form.value;
      const newTemple = new Temple(
        '',
        '',
        value.name,
        value.address,
        value.phone,
        value.imageUrl,
        this.groupTemples
        );
        if (this.editMode){
          this.templeService.updateTemple(this.originalTemple, newTemple);
        } else {
          this.templeService.addTemple(newTemple);
        }
        this.router.navigateByUrl('temples');
      }
        onCancel() {
          this.router.navigateByUrl('/temples');
        }      

      isInvalidTemple(newTemple: Temple){
        if(!newTemple){
          return true;
        }
        if (this.temple && newTemple.id === this.temple.id){
          return true;
        }
        for (let i = 0; i < this.groupTemples.length; i++) {
          if (newTemple.id === this.groupTemples[i].id) {
            return true;
          }
        }
        return false;
      }

      addToGroup($event: any){
        const selectedTemple: Temple = $event.dragData;
        const invalidGroupTemple = this.isInvalidTemple(selectedTemple);
        if (invalidGroupTemple){
          return;
        }
        this.groupTemples.push(selectedTemple)
      }

      onRemoveItem(index: number) {
        if (index < 0 || index >= this.groupTemples.length) {
          return;
        }
        this.groupTemples.splice(index, 1);
      }

}
