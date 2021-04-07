import { CompileShallowModuleMetadata } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DburlServiceService } from '../dburl-service.service';
import { MatDialog} from '@angular/material/dialog';
import { ReservationDialogComponent } from '../reservation-dialog/reservation-dialog.component';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationSubscriber: any;
  success: boolean;

  model: any = {}
  successMsg: boolean = false;
  formattedStartDate: string;
  constructor(private _url: DburlServiceService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

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
    const value = form.value;
    // alert(JSON.stringify(this.model))
    // console.log(JSON.stringify(this.model))
    // console.log(value)
    // console.log(value.Date)
    // console.log(this.formattedStartDate)
    // console.log(new Date())
    if (value.Date >= this.formattedStartDate) {
      console.log(true)
    } else {
      console.log(false)
    }
    // form.reset();
    // this.successMsg = true;

    // location.href = '/reservation-dialog';


    // const value= form.value;
    const data = {
      name: value.Name,
      mbl: value.mobileNumber,
      email: value.email,
      guests: value.guests,
      date: value.Date,
      time: value.Time,
    };


    this.reservationSubscriber = this.http
      .post(this._url.url + 'food/reservation/', data)
      .subscribe(
        (responseData: any) => {
          this.success = true;
          form.reset();
          console.log(responseData);

            const dialogRef = this.dialog.open(ReservationDialogComponent, {
              width: '800px',
        
              data: {responseData: responseData}
            });
        },
        (error) => {
          console.log(error);
          this.success = false;
        }
      );
  }

  ngOnDestroy() {
    if (this.reservationSubscriber) {
      this.reservationSubscriber.unsubscribe();
    }
  }
}
