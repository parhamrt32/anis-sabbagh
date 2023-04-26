import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Storage , ref , uploadBytesResumable } from '@angular/fire/storage';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  selectedFile: FileList[] | null = null;
  categoryName = new FormControl('', [Validators.required, Validators.minLength(5)]);
  category = 'none'
  categories : string[] = ['Portrait' , 'Architectural' , 'Urban' , 'Landscape' , 'Product' , 'Commercial']
  addCategoryClicked : boolean = false

  constructor(private _snackBar: MatSnackBar , private storage : Storage){

  }

  addCategory(){
    this.addCategoryClicked = true
  }


  addCategoryToCategories(){
    if(this.categoryName.value){

      if( !this.categories.includes( this.categoryName.value )  ){
        this.categories.push(this.categoryName.value)
      }
      else{
          this._snackBar.open('The Category that you added is already existing' , 'Cancle' , {
            duration: 2000,
            panelClass : ['snackbar-font'],
            horizontalPosition: 'right',
            verticalPosition: 'top',
          })
      }

    }
    this.addCategoryClicked = false



  }

  cancleAddingCategoryToCategories(){
    this.addCategoryClicked = false
  }

  onFileSelected(event: any) {
    const files = event.target?.files;
    console.log(files);
    if (files?.length) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(file);
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result as string;
          console.log(dataUrl);
          this.convertToAvif(dataUrl);
        };
        reader.readAsDataURL(file);
      }
    }
  }


    convertToAvif(dataUrl: string){

    }

    onUpload(){

    }

}
