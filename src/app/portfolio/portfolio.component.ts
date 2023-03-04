import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { UnsplashService } from 'src/Services/unsplash.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  images: any[] = [];
  images$: Observable<any[]> = of(this.images);
  showFooter: boolean = false;

  constructor(private unsplash: UnsplashService) {}
  ngOnInit(): void {
    this.unsplash.getUserPhotos().subscribe((x: any) => {
      this.images = x;

      this.images$ = of(this.images).pipe(delay(2000));
      this.showFooter = true;
    });
  }
}
