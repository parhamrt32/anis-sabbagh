import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


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

  emailParam = {
    name : '',
    email : '',
    message : ''

  }



  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e.target);
    console.log(this.emailParam);



    emailjs.send('service_czjf2jp', 'template_423x0pk',this.emailParam, '_th979TOxxwVi5po-')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
