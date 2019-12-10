import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ticket } from './ticket-dashboard/ticket.model';



@Injectable({
  providedIn: 'root'
})
export class ResolverService {
  allAttributes:string[] = ['title','priority','empName', 'currentStatus', 'date', 'escalation'];
  allTickets:Ticket[] //= [new Ticket('TKT1','2019-09-12','CAMERA IS NOT WORKING','CAMERA','JCI3','SCAT5','JCI2','STS1',"Higher",true),
                       // new Ticket('TKT2','CAMERA IS NOT WORKING','CAMERA','JCI11','SCAT5','JCI5','STS1',"Higher")];
  constructor(public httpClientObj:HttpClient) { }
  getTicketByResId(res_id:string){
    console.log(res_id);
    return this.httpClientObj.get<any>('http://localhost:51640/api/ticket/get/res/'+res_id);
  }
  getAttributes() : string[]{
    return this.allAttributes;
  }
}
