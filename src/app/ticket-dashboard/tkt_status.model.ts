export class Statuslog{
    constructor(public tid?:string,public status?:string,public entryTime?:string,public notes?:string){}
}
export class Tkt_status{
    constructor(public tid ?: string,public title ?: string,public description?:string,public empName ?: string,public category?:string,public subCategory?:string,public feedback?:string,public rating?:number,public priority?:string,public escalation?:boolean,public logs?:Statuslog[]){

    }
}


