import { Component, OnInit, ViewChild } from '@angular/core';
import { fade } from '../../../animation/fade';
import { FormGroup, FormControl } from '@angular/forms';
import { ImagesService } from '../../../Services/images.service';
import { LoadingComponent } from '../../libs/loading/loading.component';
import { NgOptimizedImage } from '@angular/common'



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


    portraitsimages : {url: string , width : number , height : number}[] = []
    architecturalImages : string[] = []
    urbanImages : string[] = []

    rawSrcset = '  1024w , 2048w'



  constructor( private imageService :ImagesService  ){

  }
  ngOnInit(): void {

    this.myForm.controls['option'].valueChanges.subscribe( () => {
      this.imageLoaded = true
    } )


     this.imageService.getImage('portrait').subscribe( (item: any) =>{

     console.log(item);

     item.map( (url: any) => {

     const path = url.replace('https://ik.imagekit.io/9nftpp6fp/o/' , '');
     const img = new Image()
     img.src = url
     img.onload = () => {

      this.portraitsimages.push({
        url : path,
        width : img.width,
        height : img.height
       })

     }


     }
      )






      // item.map( pic => {

      //   const image = new Image()
      //   image.src = pic
      //   image.onload = () => {
      //     console.log( image.width , image.height );

      //   }
      // } )

     }

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
