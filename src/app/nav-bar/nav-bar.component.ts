import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('navbarSmallScreenShowElement', { static: true }) myDiv:
    | ElementRef
    | undefined;

  ngAfterViewInit(): void {}

  navbarSmallScreenShow: boolean = false;
  iconNames = ['menu', 'keyboard_arrow_down'];
  currentIconIndex = 0;
  onClickIcon() {
    this.currentIconIndex = (this.currentIconIndex + 1) % this.iconNames.length;
    //this.myDiv?.nativeElement.classList.add('fade-out-top');
    this.navbarSmallScreenShow
      ? this.myDiv?.nativeElement.classList.add('fade-out-top')
      : this.myDiv?.nativeElement.classList.remove('fade-out-top');
    console.log(this.myDiv);

    this.navbarSmallScreenShow = !this.navbarSmallScreenShow;
  }
}
