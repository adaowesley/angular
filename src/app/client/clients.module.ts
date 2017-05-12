import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientListComponent} from './client-list/client-list.component'
import { ClientDetailComponent } from './client-detail/client-detail.component'
import { ClientRoutingModule } from './client-routing/client-routing.module'
import { ClientService } from '../service/client.service'

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ],
  declarations: [
    ClientListComponent,
    ClientDetailComponent
  ],
  exports:[
    ClientListComponent
  ],
  providers:[
    ClientService
  ]
})
export class ClientsModule { }
