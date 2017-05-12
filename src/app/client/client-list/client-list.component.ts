import { Component, OnInit } from '@angular/core';
import { CLIENTS } from './../client-mock'
import { Client } from './../client-model'
import {  } from '../../service/client.service'
import {ClientService} from "../../service/client.service";

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{

  clients:Client[];

  constructor(private clientService : ClientService){}

  ngOnInit():void{
    this.clientService.getClients()
      .then((clients: Client[])=> {
        this.clients = clients;
      }
      ).catch(
      err => console.log(err)
    );
  }
}
