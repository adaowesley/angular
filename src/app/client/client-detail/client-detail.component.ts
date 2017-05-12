import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {ClientService} from "../../service/client.service";
import { Client } from '../client-model';

@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit{

  client : Client;

  private isNew : boolean =true;
  constructor(
    private clientService : ClientService,
    private route : ActivatedRoute,
    private location : Location
  ){}

  ngOnInit():void{
    this.client = new Client(0,'','','');
    this.route.params.forEach((params: Params) => {
      let id:number = +params['id'];
      if(id){
        this.isNew = false;
        this.clientService.getClient(id)
          .then((client : Client) => {
            console.log(client);
            this.client = client;
          }
          )
      }
    });
  }

  getFormGroupClass(isValid:boolean, isPristine:boolean):{}{
    return {
      'form-group':true,
      'has-danger':!isValid && !isPristine,
      'has-success':isValid && !isPristine
    }
  }

  getFormControlClass(isValid:boolean, isPristine:boolean):{}{
    return {
      'form-control':true,
      'has-danger':!isValid && !isPristine,
      'has-success':isValid && !isPristine
    }
  }

  onSubmit() : void {
    if (this.isNew) {
      console.log('Register');
    } else {
      console.log('Update');
    }
  }

}
