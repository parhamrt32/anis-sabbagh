import { Component, OnInit } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

import { UnsplashService } from 'src/Services/unsplash.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],

})
export class PortfolioComponent implements OnInit {
  images: any[] = [];
  images$: Observable<any[]> | undefined;
  showFooter: boolean = false;

  constructor(private unsplash: UnsplashService) {}
  ngOnInit(): void {
    this.images$ = this.unsplash.getUserPhotos();

    // this.unsplash.getUserPhotos().subscribe((x: any) => {
    //   this.images = x;

    //   this.images$ = of(this.images).pipe(delay(200));
    //   this.showFooter = true;
    // });

    this.images$.subscribe({ complete: () => (this.showFooter = true) });
  }
}
