import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestAddComponent } from './request-add/request-add.component';
import { RequestEditComponent } from './request-edit/request-edit.component';
import { RequestGetComponent } from './request-get/request-get.component';

const routes: Routes = [
  {
    path: 'request/create',
    component: RequestAddComponent
  },
  {
    path: 'edit/:id',
    component: RequestEditComponent
  },
  {
    path: 'requests',
    component: RequestGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
