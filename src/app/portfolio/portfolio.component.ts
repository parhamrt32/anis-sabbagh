import { Component, OnInit } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { fade } from 'src/animation/fade';
import { MatDividerModule } from '@angular/material/divider';
import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';

import { UnsplashService } from 'src/Services/unsplash.service';
import { FormControl, FormGroup } from '@angular/forms';

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
    this.unsplash.getUserPhotos().subscribe((x) => {
      x.forEach((item) => this.images.push(...item));
      console.log(this.images);

      this.images$ = of(this.images);
    });

    this.unsplash.getCollectionPhotos('3vNAS9yaC3I').subscribe((x) => {
      this.ArchitectureImages$ = of(x);
    });

    this.unsplash.getCollectionPhotos('jFJrNU0ls2Y').subscribe((x) => {
      this.PortraitImages$ = of(x);
    });
    this.unsplash.getCollectionPhotos('sKCL-oqqSJo').subscribe((x) => {
      this.UrbanImages$ = of(x);
    });

    this.unsplash.getCollectionPhotos('KWRoqHzCwx8').subscribe((x) => {
      this.ProductImages$ = of(x);
    });

    this.myForm.valueChanges.subscribe((x) => console.log(x));
  }

  loadFunc(last: boolean) {
    last && (this.shownLoading = false);
  }
}
