import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fade } from '../../libs/animation/fade';
import { FormGroup, FormControl } from '@angular/forms';
import { ImagesService } from '../../libs/Services/images.service';
import { LoadingComponent } from '../../libs/loading/loading.component';




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


    portraitsimages : string[] = []
    architecturalImages : string[] = []
    urbanImages : string[] = []



  constructor( private imageService :ImagesService , private renderer: Renderer2 ){

  }
  ngOnInit(): void {

    this.myForm.controls['option'].valueChanges.subscribe( () => {
      this.imageLoaded = true
    } )


     this.imageService.getImage('portrait').subscribe( (item: string[]) =>
      this.portraitsimages = item
      )

      this.imageService.getImage('architectural').subscribe((item: string[]) =>
        this.architecturalImages = item
        )

        this.imageService.getImage('urban').subscribe((item: string[]) =>
          this.urbanImages = item
          )





  }


  onImageLoad(array : string[]): void {

    this.loadedImages++;
    if (this.loadedImages === array.length) {


      setTimeout(() => {
        console.log('All images have finished loading!');
        this.imageLoaded = false
        this.loadedImages = 0;



      } , 500 )

    }
  }





}
