import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Anis-Sabbagh';
  isItHome = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const path = this.route.snapshot.routeConfig?.path;
    console.log(path);
  }
}
