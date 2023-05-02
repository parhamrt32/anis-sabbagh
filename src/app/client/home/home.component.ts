import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DonateComponent } from '../../libs/donate/donate.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute,public dialog: MatDialog) {}

  openDialog():void{
    const dialogRef = this.dialog.open(DonateComponent )
  }
}
