import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Tkt_status } from './ticket-dashboard/tkt_status.model';


@Injectable({
  providedIn: 'root'
})
export class StatusService {
  allStatus:Tkt_status[];
  gen_attributes:string[]=['tid','title','description','category','subCategory','empName','escalation','feedback'];
  sts_attributes:string[]=['status','entryTime','notes'];

  constructor(public httpClientObj:HttpClient) { }

  getAllSatusbyTid(tid:string)
  {
    return this.httpClientObj.get<any>('http://localhost:51640/api/ticket/status/'+tid);
  }
  getAllGeneralAttributes():string[]
  {
    return this.gen_attributes;
  }
  getAllStatusAttriutes():string[]
  {
    return this.sts_attributes;
  }
  StatusNote(stsId:string,notes:string,tid:string){
    var obj = {'resId':'JCI2','tId':tid,'statusId':stsId,'notes':notes}
    return this.httpClientObj.post('http://localhost:51640/api/ticket/status/update',obj);
  }
}
