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

  onSubmit() {
    console.log('Name: ' + this.name);
    console.log('Email: ' + this.email);
    console.log('Message: ' + this.message);
  }
}
