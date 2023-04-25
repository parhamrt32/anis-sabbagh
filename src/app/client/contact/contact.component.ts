import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { fade } from 'src/animation/fade';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fade],
})
export class ContactComponent {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  constructor() {}

  onSubmit() {
    const body = {
      name: this.name,
      email: this.email,
      message: this.message,
    };
  }

  emailParam = {
    name: '',
    email: '',
    message: '',
  };
  shownResult: Boolean = false;
  ResultText: String = '';
  resultSuccessful: boolean = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e.target);
    console.log(this.emailParam);

    if (
      this.emailParam.email.length == 0 &&
      this.emailParam.name.length == 0 &&
      this.emailParam.message.length == 0
    ) {
      this.resultSuccessful = false;
      this.ResultText =
        'The fields are Empty please put your information for contact and your message';
      this.shownResult = true;
      setTimeout(() => {
        this.shownResult = false;
      }, 4000);
    } else {
      emailjs
        .send(
          'service_czjf2jp',
          'template_423x0pk',
          this.emailParam,
          '_th979TOxxwVi5po-'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            this.shownResult = true;
            this.resultSuccessful = true;
            this.ResultText = 'Your Message Has Been Sent';
            setTimeout(() => {
              this.shownResult = false;
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
      this.emailParam.name = '';
      this.emailParam.email = '';
      this.emailParam.message = '';
    }
  }
}
