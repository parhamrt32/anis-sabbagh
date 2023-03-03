import { Component, OnInit } from '@angular/core';
import { UnsplashService } from 'src/Services/unsplash.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  images: any[] = [];

  constructor(private unsplash: UnsplashService) {}
  ngOnInit(): void {
    this.unsplash.getImages().subscribe((x: any) => {
      this.images = x;
      console.log(this.images);
    });
  }
}
