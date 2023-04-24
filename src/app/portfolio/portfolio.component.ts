import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { fade } from 'src/animation/fade';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { UnsplashService } from 'src/Services/unsplash.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fade],
})
export class PortfolioComponent implements OnInit,AfterViewInit , AfterViewChecked {
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

  constructor(private unsplash: UnsplashService , private store : AngularFireStorage  ) {}

  async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
      const storage = this.store.storage
      const path = `yt/${file.name}`
      const uploadTask = this.store.upload(path,file)
      const url = (await uploadTask).ref.getDownloadURL()
      console.log(url);

    }
  }


  ngOnInit(): void {
    this.unsplash.getUserPhotos().subscribe((x) => {
      x.forEach((item) => this.images.push(...item));




      //this.images$ = of(this.images);
      this.images$ = timer(500).pipe(
        switchMap(() => of(this.images)  )
      );

    });

    this.unsplash.getCollectionPhotos('3vNAS9yaC3I').subscribe((x) => {

      this.ArchitectureImages$ = timer(300).pipe(
        switchMap(() => of(x)  )
      );
    });

    this.unsplash.getCollectionPhotos('jFJrNU0ls2Y').subscribe((x) => {

      this.PortraitImages$ = timer(300).pipe(
        switchMap(() => of(x)  )
      );
    });
    this.unsplash.getCollectionPhotos('sKCL-oqqSJo').subscribe((x) => {

      this.UrbanImages$ = timer(300).pipe(
        switchMap(() => of(x)  )
      );
    });

    this.unsplash.getCollectionPhotos('KWRoqHzCwx8').subscribe((x) => {
      this.ProductImages$ = timer(300).pipe(
        switchMap(() => of(x)  )
      );
    });

    this.myForm.valueChanges.subscribe((x) => console.log(x));
  }

  loadFunc(event: any) {






  }

  @ViewChildren ('image')slides : QueryList<ElementRef> | undefined;

  ngAfterViewInit(): void {



  }

  ngAfterViewChecked(): void {
   this.slides?.forEach( (el) => this.observer.observe(el.nativeElement) )
  }



  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The element is in the viewport
        entry.target.classList.add('show')
        console.log('show');

      } else {
        // The element is not in the viewport
        entry.target.classList.remove('show')
      }
    });
  })

}
