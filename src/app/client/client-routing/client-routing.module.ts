import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from '../client-list/client-list.component'
import { ClientDetailComponent } from '../client-detail/client-detail.component'

const clientRoutes:Routes = [
  {
    path:'client',
    component:ClientListComponent
  },
  {
    path:'client/save',
    component: ClientDetailComponent
  },
  {
    path:'client/save/:id',
    component:ClientDetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(clientRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ClientRoutingModule { }
