import RideBaseModel from "./RideBaseModel";

export  default class Ride extends RideBaseModel {


constructor( RideId:number,CustomerName:string,BikeName:string){
    super();
    this.RideId=RideId;
    this.CustomerName=CustomerName;
    this.BikeName=BikeName;

   
}


    RideId: number;
    CustomerName: string;
    BikeName: string;

}
