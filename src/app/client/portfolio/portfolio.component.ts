import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fade } from '../../../animation/fade';
import { FormGroup, FormControl } from '@angular/forms';
import { ImagesService } from 'Services/images.service';
import { Observable, from } from 'rxjs';
import { LoadingComponent } from 'app/loading/loading.component';




@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fade ],
})
export class PortfolioComponent implements OnInit  {
  @ViewChild('loading') loadingComponent: LoadingComponent | undefined;




  myForm: FormGroup = new FormGroup({
    option: new FormControl('portraits'),
  });
  loadedImages = 0;
  imageLoaded = true

   portrait$ : Observable<string[]> | null | undefined;
    portraitsimages : string[] = []



  constructor( private imageService :ImagesService , private renderer: Renderer2 ){

  }
  ngOnInit(): void {
     this.portrait$ = this.imageService.getImage('portrait')

     this.imageService.getImage('portrait').subscribe( item =>
      this.portraitsimages = item
      )





  }


  onImageLoad(): void {

    this.loadedImages++;
    if (this.loadedImages === this.portraitsimages.length) {
      this.imageLoaded = false

      setTimeout(() => {
        console.log('All images have finished loading!');
        this.imageLoaded = false
        this.loadedImages++;



      } , 2000 )

    }
  }





}
