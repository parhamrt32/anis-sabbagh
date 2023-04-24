import { AfterViewInit, Component , ElementRef, QueryList, ViewChildren  } from '@angular/core';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
    this.slides?.forEach( (el) => this.observer.observe(el.nativeElement)
     )
     this.slides?.forEach( (el) => console.log(el)

     )

  }

  @ViewChildren ('slide')slides : QueryList<ElementRef> | undefined;
   observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The element is in the viewport
        entry.target.classList.add('show')
      } else {
        // The element is not in the viewport
        entry.target.classList.remove('show')
      }
    });
  });





}
