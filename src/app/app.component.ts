import { splitClasses } from '@angular/compiler';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import Availabilty from './Model/availability';
import Ride from './Model/ride';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

  // example = 'One Way Data Binding'; 
  //title1 = 'RightStock Training';
  Title = 'Bikes Rentals';
  Titles = 'Bikes Rentals';

  mybikes: Availabilty[] = [];
  myrides: Ride[] = [];
  mybikeslist: any;

  displaySelectedDropDown(e:any)
  {
    this.mybikeslist = e.target.value;
  }

  //heading = 'Full Stack Development';
  public bullet1url: string = "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/bullet/bullet-350/features/desktop/new/bullet-350-iconic-design.jpg"
  public bullet2url: string = "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/bullet/bullet-350/features/desktop/new/bullet-350-dependability.jpg"
  public bullet3url: string = "https://news.maxabout.com/wp-content/uploads/2019/11/Royal-Enfield-Himalayan.jpg"
  public bullet4url: string = "https://bd.gaadicdn.com/upload/userfiles/images/5e6dcd3bace05.jpg"
  evenride: Ride[] = [];
  oddride: Ride[] = [];





  constructor() {

    setTimeout(() => {
      // this.javaurl =this.angularurl 
      this.Title = "RENT A BIKE..."
      this.Title2 = "Thank You For Your Comments"
      console.log("here")

    }, 8000);
    this.mybikes = [
      { Dayid: 1, DayName: "Monday", BikeName: "Bullet" },
      { Dayid: 2, DayName: "Tuesday", BikeName: "KTM" },
      { Dayid: 3, DayName: "Wednesday", BikeName: "Pulsar" },
      { Dayid: 4, DayName: "Thrusday", BikeName: "Ducati " },
      { Dayid: 5, DayName: "Friday", BikeName: "BMW" },
      { Dayid: 6, DayName: "Saturday", BikeName: "YAHAMA" },
      { Dayid: 7, DayName: "Sunday", BikeName: "Kawasaki " }

    ];
    this.myrides = [
      { RideId: 211, CustomerName: "Mota", BikeName: "Bullet" },
      { RideId: 236, CustomerName: "Lokesh", BikeName: "KTM" },
      { RideId: 389, CustomerName: "Piyush", BikeName: "Pulsar" },
      { RideId: 789, CustomerName: "Kishore", BikeName: "BMW" },
      { RideId: 528, CustomerName: "Jk", BikeName: "Ducati" }



    ];
  }
  selectedbike: Availabilty;
  public handlebikelist(Bikes: Availabilty) {
    this.selectedbike = Bikes;
    console.log(this.selectedbike);

  }
  public myname: string = '';
  public myno: number = 0;
  public mycity: string = "";
  //example2 = 'Two Way Data Binding'; 
  Title2 = 'Your Comments About Bull Renatals';
  public welcome: string = "Type here...";
  public txtName: string = "";
  public len: number = 0;
  public selectedride: string;
  public handlename(e: any) {
    this.myname = e.target.value;
    console.log('Welcome..' + this.myname);
  }
  public handleno(n: any) {
    this.myno = n.target.value;
    console.log('Welcome..' + this.myno);
  }
  public handlecity(c: any) {
    this.mycity = c.target.value;
    console.log('Rent A Bike In ' + this.mycity);
  }
  selectChangeHandler(event: any) {
    this.selectedride = event.target.value
  }
  public handleAddride(R: Ride) {
    console.log(JSON.stringify(R));
    this.myrides.push(R);


  }
  public handleremoveride(ids: any) {
    console.log(" Removed.." + ids);
    this.myrides.forEach((item, index) => {
      if (item.RideId == ids) {
        this.myrides.splice(index,1)

      }
    });






  }
   public handleFilter(a:any){
    this.evenride =[];
    this.oddride =[];
    this.len=0;
    this.txtName = a.target.value;
      this.myrides.forEach((item,index)=>
        {
          if(item.RideId % 2 == 0 && this.txtName=='even')
          {
            this.len = 1;
            this.evenride.push(new Ride(item.RideId,item.CustomerName,item.BikeName)) ;
          }
          else if(item.RideId %2 != 0 && this.txtName == "odd" ){
          this.len = 2;
          this.oddride.push(new Ride(item.RideId,item.CustomerName,item.BikeName)) ;
          console.log(this.oddride);
          }
        });

  }
}
