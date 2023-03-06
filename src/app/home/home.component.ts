import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @HostBinding('@fadeOutAnimation') fadeOutAnimation = true;
  constructor(private router: Router, private route: ActivatedRoute) {}
}
