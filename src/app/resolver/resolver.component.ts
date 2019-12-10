import { Component, OnInit } from '@angular/core';
import { ResolverService } from '../resolver.service';
import { Ticket } from '../ticket-dashboard/ticket.model';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.css']
})
export class ResolverComponent implements OnInit {
  tickets:Ticket[];
  attributes:string[];
  constructor(public resolverServiceObj:ResolverService) {
    
   }

  ngOnInit() {
    var o = this.resolverServiceObj.getTicketByResId('JCI2');
     o.subscribe(response=>{
      console.log(response.value.data);  
       this.tickets = response.value.data;    
     });
    this.attributes = this.resolverServiceObj.getAttributes();
    // attr.subscribe(response =>
    //   this.attributes = response
    // );
  }

}
