import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})
export class ReservationDialogComponent implements OnInit {
  value: any = {};

  constructor(
    public dialogRef: MatDialogRef<ReservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.data['responseData']);
    this.value = this.data['responseData'];
  }

  close(): void {
    this.dialogRef.close();
    this.router.navigate(['/'])
  }

  onDelete() {
    
  }
}
export interface DialogData {
  wantToDelete: boolean
  }
