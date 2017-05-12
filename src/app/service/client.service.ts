import { Injectable } from '@angular/core';

import { Client } from '../client/client-model';
import { CLIENTS } from '../client/client-mock';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientService {

  private clientURL : string = 'app/client';
  constructor(
    private http: Http
  ) {}

  getClients():Promise<Client[]>{
    return Promise.resolve(CLIENTS);
  }

  getClient(id:number):Promise<Client>{
    return this.getClients()
      .then((clients:Client[]) =>
        clients.find(client => client.id === id)
      );
  }

}
