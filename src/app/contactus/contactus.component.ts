import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DburlServiceService } from '../dburl-service.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactSubscriber: any;
  success: boolean;

  constructor(private _url: DburlServiceService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const value= form.value;
    const data = {
      name: value.name,
      msg: value.msg,  
    };

    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Token ' + localStorage.getItem('token')
    // });
    this.contactSubscriber = this.http
      .post(this._url.url + 'food/contact/', data)
      .subscribe(
        (responseData: any) => {
          this.success= true;
          form.reset();
          console.log(responseData);
        },
        (error) => {
          console.log(error);
          this.success = false;
        }
      );
    
  }


  ngOnDestroy() {
    if(this.contactSubscriber){
      this.contactSubscriber.unsubscribe();
    }
  }

}
