export class Ticket{
    constructor(public tid : string,public title : string,public priority:string,public empName : string,public currentStatus: string,public date : string,public escalation:boolean){

    }
}