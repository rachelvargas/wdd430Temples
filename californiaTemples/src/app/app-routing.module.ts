import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentsComponent } from './documents/documents.component';
import { TemplesComponent } from './temples/temples.component';

import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';

import { TempleEditComponent } from './temples/temple-edit/temple-edit.component';
import { TempleDetailComponent } from './temples/temple-detail/temple-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full'},
  { path: 'documents', component: DocumentsComponent, children:
  [
      { path: 'new', component: DocumentEditComponent },
      { path: ':id', component: DocumentDetailComponent },
      { path: ':id/edit', component: DocumentEditComponent }
  ] 
},
  { path: 'temples', component: TemplesComponent, children:
  [
      { path: 'new', component: TempleEditComponent },
      { path: ':id', component: TempleDetailComponent },
      { path: ':id/edit', component: TempleEditComponent }
  ]
}    

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
