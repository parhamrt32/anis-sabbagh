import { Component, OnInit } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { fade } from '../../../animation/fade';



import { FormControl, FormGroup } from '@angular/forms';
import { UnsplashService } from 'Services/unsplash.service';

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



  images: any[] = [];
  images$: Observable<any[]> | undefined;
  showFooter: boolean = false;
  showTemplate = true;
  myForm: FormGroup = new FormGroup({
    option: new FormControl('all'),
  });
  shownLoading: boolean = true;

  constructor(private unsplash: UnsplashService) {}
  ngOnInit(): void {
    this.unsplash.getUserPhotos().subscribe((x: any[]) => {
      x.forEach((item: any) => this.images.push(...item));
      console.log(this.images);

      this.images$ = of(this.images);
    });

    this.unsplash.getCollectionPhotos('3vNAS9yaC3I').subscribe((x: any) => {
      this.ArchitectureImages$ = of(x);
    });

    this.unsplash.getCollectionPhotos('jFJrNU0ls2Y').subscribe((x: any) => {
      this.PortraitImages$ = of(x);
    });
    this.unsplash.getCollectionPhotos('sKCL-oqqSJo').subscribe((x: any) => {
      this.UrbanImages$ = of(x);
    });

    this.unsplash.getCollectionPhotos('KWRoqHzCwx8').subscribe((x: any) => {
      this.ProductImages$ = of(x);
    });

    this.myForm.valueChanges.subscribe((x) => console.log(x));
  }

  loadFunc(last: boolean) {
    last && (this.shownLoading = false);
  }
}
