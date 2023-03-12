import { Component, OnInit } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { fade } from 'src/animation/fade';
import { MatDividerModule } from '@angular/material/divider';

import { UnsplashService } from 'src/Services/unsplash.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fade],
})
export class PortfolioComponent implements OnInit {
  images: any[] = [];
  images$: Observable<any[]> | undefined;
  showFooter: boolean = false;

  constructor(private unsplash: UnsplashService) {}
  ngOnInit(): void {
    this.images$ = this.unsplash.getUserPhotos();
    this.unsplash.getUserPhotos().subscribe((x) => {
      x.forEach((item) => this.images.push(...item));
      this.images$ = of(this.images);
    });

    // this.unsplash.getUserPhotos().subscribe((x: any) => {
    //   this.images = x;

    //   this.images$ = of(this.images).pipe(delay(200));
    //   this.showFooter = true;
    // });

    this.images$.subscribe({ complete: () => (this.showFooter = true) });
  }
}
