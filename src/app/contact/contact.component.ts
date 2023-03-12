import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const body = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

   
  }
}
