import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Storage,
  ref,
  uploadBytesResumable,
  listAll,
} from '@angular/fire/storage';
import { signOut, Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedFiles: FileList | null = null;
  categoryName = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  fileControl = new FormControl(null, Validators.required);
  CategoryselectControl = new FormControl(null, Validators.required);
  BrandselectControl = new FormControl(null, Validators.required);
  category = 'none';
  categories: string[] = [];
  brands: string[] = [];
  brand: string = 'none';
  brandName = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  addCategoryClicked: boolean = false;
  addBrandNameClicked: boolean = false;
  isUploading = false;

  constructor(
    private _snackBar: MatSnackBar,
    private storage: Storage,
    private auth: Auth,
    private router: Router
  ) {}
  ngOnInit(): void {
    listAll(ref(this.storage)).then((x) =>
      x.prefixes.forEach((reference) => {
        this.categories.push(reference.fullPath);
      })
    );
    listAll(ref(this.storage, 'commercial')).then((x) => {
      console.log(x);

      x.prefixes.forEach((reference) => {
        this.brands.push(reference.name);
      });
    });
  }

  addCategory() {
    this.addCategoryClicked = true;
  }
  addBrandName() {
    this.addBrandNameClicked = true;
  }

  addCategoryToCategories() {
    if (this.categoryName.value) {
      if (
        !this.categories.includes(this.categoryName.value.replace(/\s+/g, '-'))
      ) {
        this.categories.push(this.categoryName.value.replace(/\s+/g, '-'));
      } else {
        this._snackBar.open(
          'The Category that you added is already existing',
          'Cancle',
          {
            duration: 2000,
            panelClass: ['snackbar-font'],
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        );
      }
    }
    this.addCategoryClicked = false;
  }

  cancleAddingCategoryToCategories() {
    this.addCategoryClicked = false;
  }

  addbrandNameTobands() {
    if (this.brandName.value) {
      if (!this.brands.includes(this.brandName.value.replace(/\s+/g, '-'))) {
        this.brands.push(this.brandName.value.replace(/\s+/g, '-'));
        this.brandName.setValue('');
      } else {
        this._snackBar.open(
          'The brand name that you added is already existing',
          'Cancle',
          {
            duration: 2000,
            panelClass: ['snackbar-font'],
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        );
      }
    }
    this.addBrandNameClicked = false;
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target?.files;
  }

  onUpload() {
    if (this.selectedFiles && this.CategoryselectControl.valid) {

      for (let index = 0; index < this.selectedFiles.length; index++) {
        const file = this.selectedFiles.item(index);
        if (file) {
          this.isUploading = true;
          if (this.BrandselectControl.value) {
            const fileRef = ref(
              this.storage,
              `${this.CategoryselectControl.value}/${this.BrandselectControl.value}/${file?.name}`
            );
            uploadBytesResumable(fileRef, file)
              .then(() => {
                console.log('Uploaded');
                this.cancle();
              })
              .catch((err) => console.log(err));
          } else {
            const fileRef = ref(
              this.storage,
              `${this.CategoryselectControl.value}/${file?.name}`
            );
            uploadBytesResumable(fileRef, file)
              .then(() => {
                console.log('Uploaded');
                this.cancle();
              })
              .catch((err) => console.log(err)).finally( () => {
                this.isUploading = false;
              } )

          }
        }
      }

    } else {
      this._snackBar.open(
        'You have to select at least one file and choose a category',
        'Cancle',
        {
          duration: 2000,
          panelClass: ['snackbar-font'],
          horizontalPosition: 'right',
          verticalPosition: 'top',
        }
      );
    }
  }

  cancle() {
    this.fileControl.setValue(null);
    this.categoryName.setValue(null);
    this.CategoryselectControl.setValue(null);
    this.category = 'none';
    this.addCategoryClicked = false;
  }

  logOut() {
    signOut(this.auth).then(() => {
      this.router.navigate(['dashboard/login']);
    });
  }
  goToWebSite() {
    this.router.navigate(['']);
  }
}
