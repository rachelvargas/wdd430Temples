import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { DndModule } from 'ng2-dnd';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { TemplesComponent } from './temples/temples.component';
import { TempleDetailComponent } from './temples/temple-detail/temple-detail.component';
import { TempleEditComponent } from './temples/temple-edit/temple-edit.component';
import { DocumentsComponent } from './documents/documents.component';
import { TempleItemComponent } from './temples/temple-item/temple-item.component';
import { TempleListComponent } from './temples/temple-list/temple-list.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
/*import { StatussComponent } from './statuss/statuss.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { StatusItemComponent } from './status-item/status-item.component';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusEditComponent } from './status-edit/status-edit.component';*/
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { TemplesFilterPipe } from './temples/temples-filter.pipe';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplesFilterPipe,
    TemplesComponent,
    TempleDetailComponent,
    TempleEditComponent,
    DocumentsComponent,
    TempleItemComponent,
    TempleListComponent,
    DocumentDetailComponent,
    DocumentListComponent,
    DocumentItemComponent,
    HeaderComponent,
    DropdownDirective,
    DocumentEditComponent
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule, 
    CommonModule,    
    AppRoutingModule,
    HttpClientModule,
    RouterModule,    
    FormsModule,     
    DndModule.forRoot()   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }