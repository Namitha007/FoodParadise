import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  model:any = {}
  successMsg: boolean = false;
  formattedStartDate: string;
  constructor() { }

  ngOnInit(): void {
    // console.log(new Date())
    var startDate = new Date();
    // var startDate = new Date();
    this.formattedStartDate =
    //  startDate.getUTCFullYear() +
    //         '-0' + (startDate.getUTCMonth() + 1) +
    //         '-0' + (startDate.getUTCDate());
         ' ' + (startDate.getUTCHours()) +
        ':' + (startDate.getUTCMinutes()) +
        ':' + (startDate.getUTCSeconds()); 
        console.log(startDate)
        // console.log(this.formattedStartDate)

        // '-0' + (startDate.getUTCMonth() + 1) +
        //     '-0' + (startDate.getUTCDate());
        //  ' ' + (startDate.getUTCHours()) +
        // ':' + (startDate.getUTCMinutes()) +
        // ':' + (startDate.getUTCSeconds()); 
  }
  startDate(startDate: any) {
    throw new Error('Method not implemented.');
  }

  

  onSubmit(form: NgForm) {
    const value= form.value;
    // alert(JSON.stringify(this.model))
    // console.log(JSON.stringify(this.model))
    console.log(value)
    console.log(value.Date)
    console.log(this.formattedStartDate)
    // console.log(new Date())
    if(value.Date >= this.formattedStartDate) {
      console.log(true)
    } else {
      console.log(false)
    }
    form.reset();
    this.successMsg = true;

    location.href='/thankyou';

  }

}
