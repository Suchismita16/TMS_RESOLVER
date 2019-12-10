import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';
import { Tkt_status, Statuslog } from './tkt_status.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-dashboard',
  templateUrl: './ticket-dashboard.component.html',
  styleUrls: ['./ticket-dashboard.component.css']
})
export class TicketDashboardComponent implements OnInit {
  ticket:Tkt_status=new Tkt_status();
  logs:Statuslog[];
  genAttributes:string[];
  statusAttributes:string[];
  selectedStatusvalue:string="";
  notes:string="";
  selectedStatusId:string="";
  //statusLength:number = this.ticket.logs.length;

  constructor(public route:ActivatedRoute,public statusServiceObj:StatusService) { 
  
  }

  ngOnInit() {
    this.logs = [];
    this.route.params.subscribe(
      s=>{var o = this.statusServiceObj.getAllSatusbyTid(s.tid);
        o.subscribe(response=>{
         console.log(response.value.data);  
          this.ticket = response.value.data;  
          console.log(this.ticket); 
          this.logs=this.ticket.logs;
          console.log("log"+this.ticket.logs[0].status); 
          console.log(this.logs);
        });
      })
    this.genAttributes = this.statusServiceObj.getAllGeneralAttributes();
    this.statusAttributes = this.statusServiceObj.getAllStatusAttriutes();
    }
  isShowDropdown:boolean = false;
  isShowNote:boolean = false;
  Dropdown(){
    this.isShowDropdown = true;
  }
  Notes(){
    this.isShowNote = true;
  }
  selectedStatus(event:any){
    this.selectedStatusvalue=event.target.value;
  }
  StsNoteUpdate(){
    if(this.selectedStatusvalue=="InProgress")
    this.selectedStatusId = 'STS3';
    else
    this.selectedStatusId = 'STS4';
    this.statusServiceObj.StatusNote(this.selectedStatusId,this.notes,this.ticket.tid);
    
  }
}
