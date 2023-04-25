import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent {

  myForm: FormGroup = new FormGroup({
    option: new FormControl('English'),
  });

  selectedOption : string = this.myForm.get('option')?.value ;

}
