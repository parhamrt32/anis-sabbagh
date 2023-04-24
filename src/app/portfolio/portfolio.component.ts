import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { fade } from 'src/animation/fade';


import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fade],
})
export class PortfolioComponent implements OnInit {
  ArchitectureImages$: Observable<any[]> | undefined;
  PortraitImages$: Observable<any[]> | undefined;
  UrbanImages$: Observable<any[]> | undefined;
  ProductImages$: Observable<any[]> | undefined;
  checkNumber:number = 0



  images: any[] = [];
  images$: Observable<any[]> | undefined;
  showFooter: boolean = false;
  showTemplate = true;
  myForm: FormGroup = new FormGroup({
    option: new FormControl('all'),
  });
  shownLoading: boolean = true;

  constructor( private store : AngularFireStorage  ) {}
  ngOnInit(): void {

  }












}
