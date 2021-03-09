import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import ride from 'src/app/Model/ride';
import Ride from 'src/app/Model/ride';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public id:number=0;
@Input("ipcl")
  Rides: Ride[]=[];
  public ride:Ride= new Ride(0 ,'' , '');

  handleAddride(ids:any,Cname:string,Bname:string){
    this.ride =new Ride(ids,Cname,Bname);
    console.log(JSON.stringify(this.ride));
    this.eAddride.emit(this.ride);
    
  }
  constructor() { }
@Output("addride")
public eAddride:EventEmitter<Ride>= new EventEmitter<Ride>();
@Output()
public eRemoveride:EventEmitter<number>= new EventEmitter<number>();

handleremoveride(ids:number)
{
  console.log(ids);
  this.eRemoveride.emit(ids);
}

  ngOnInit(): void {
  }

}
